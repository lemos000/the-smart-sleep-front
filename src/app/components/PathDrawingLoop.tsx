"use client";

import * as React from "react";
import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import Cloud1 from "@/app/assets/cloud.png";
import Cloud2 from "@/app/assets/cloud2.svg";
import Cloud3 from "@/app/assets/cloud3.png";
import Chocaio from "@/app/assets/chocaio.png";
import Mamadeira from "@/app/assets/bottle.png"

interface CloudData {
  id: number;
  size: number;
  top: number;
  speed: number;
  direction: "left" | "right";
  opacity: number;
  delay: number;
  src: StaticImageData;
  blur: number;
}

export default function CloudOverlay() {
  const [clouds, setClouds] = React.useState<CloudData[]>([]);

  React.useEffect(() => {
    const cloudImages = [Cloud1, Cloud2, Cloud3, Chocaio, Mamadeira];
    const totalClouds = 10;
    const verticalBands = Array.from({ length: totalClouds }, (_, i) => i * (100 / totalClouds));

    const arr: CloudData[] = Array.from({ length: totalClouds }).map((_, i) => {
      const direction = Math.random() > 0.5 ? "left" : "right";

      const top = verticalBands[i] + Math.random() * 3;

      return {
        id: i,
        size: 100 + Math.random() * 180,
        top,
        direction,
        opacity: 0.25 + Math.random() * 0.3,
        delay: i * 1.2 + Math.random() * 1.5,
        speed: 25 + Math.random() * 40,
        src: cloudImages[Math.floor(Math.random() * cloudImages.length)],
        blur: Math.random() * 2,
      };
    });

    setClouds(arr);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[5]">
      {clouds.map((c) => {
        const fromX = c.direction === "right" ? "-25vw" : "125vw";
        const toX = c.direction === "right" ? "125vw" : "-25vw";

        return (
          <motion.div
            key={c.id}
            className="absolute"
            style={{
              top: `${c.top}%`,
              left: fromX,
              opacity: 0,
              zIndex: 2,
            }}
            animate={{
              x: [0, toX],
              y: [0, -6, 4, -3, 0],
              opacity: [0, c.opacity, c.opacity, 0],
            }}
            transition={{
              duration: c.speed,
              ease: "linear",
              repeat: Infinity,
              delay: c.delay,
            }}
          >
            <Image
              src={c.src}
              alt="Cloud"
              width={c.size}
              height={c.size}
              className="select-none"
              style={{
                transform: c.direction === "left" ? "scaleX(-1)" : "scaleX(1)",
                filter: `blur(${c.blur}px)`,
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
