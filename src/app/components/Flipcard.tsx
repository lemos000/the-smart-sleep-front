"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import * as React from "react";

type FancyCardProps = {
  frontImage?: { src: string };
  backText?: string;
  title?: string;
  subtitle?: string;
};

export function FlipCard({
  frontImage,
  backText,
  title,
  subtitle,
}: FancyCardProps) {
  const [showBack, setShowBack] = React.useState(false);
  const [hovered, setHovered] = React.useState(false);

  return (
    <div className="p-5 flex justify-center">
      <motion.div
        className="relative w-full max-w-sm h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer select-none shadow-md bg-white/80 backdrop-blur-sm "
        whileHover={{ rotateY: 6, rotateX: -3, scale: 1.03 }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setShowBack((p) => !p)}
        style={{
          perspective: 1000,
        }}
      >
        <AnimatePresence mode="wait">
          {!showBack ? (
            <motion.div
              key="front"
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
            >
              {frontImage && (
                <Image
                  src={frontImage.src}
                  alt="Front"
                  width={180}
                  height={180}
                  className="object-contain rounded-xl"
                />
              )}
              {title && (
                <h3 className="mt-3 text-lg font-semibold text-[var(--color-primary)]">
                  {title}
                </h3>
              )}
              {subtitle && (
                <p className="text-sm text-[var(--color-text)]/70 mt-1">
                  {subtitle}
                </p>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="back"
              initial={{ opacity: 0, scale: 0.96, rotateY: 10 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.96, rotateY: -10 }}
              transition={{ duration: 0.45, ease: "easeInOut" }}
              className="absolute inset-0 flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] text-white text-center"
            >
              <p className="text-base leading-relaxed">{backText}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 💫 Efeito de reflexo leve no hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl bg-white/10 pointer-events-none"
          animate={{ opacity: hovered ? 0.25 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </div>
  );
}
