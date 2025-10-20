"use client"

import Image, { StaticImageData } from "next/image"
import React from "react"

type ImageOption = {
  value: string
  label?: string
  src: StaticImageData
  alt?: string
}

export default function ImageChoiceGrid({
  options,
  value,
  onChange,
  multiple = false,
  getIsSelected,
}: {
  options: ReadonlyArray<ImageOption>
  value: string | string[] | undefined
  onChange: (next: string | string[]) => void
  multiple?: boolean
  getIsSelected?: (optVal: string) => boolean
}): React.JSX.Element {
  const isSelected = (optVal: string) => {
    if (getIsSelected) return getIsSelected(optVal)
    if (multiple) return Array.isArray(value) && value.includes(optVal)
    return value === optVal
  }

  const toggle = (optVal: string) => {
    if (multiple) {
      const arr = Array.isArray(value) ? [...value] : []
      const idx = arr.indexOf(optVal)
      if (idx >= 0) arr.splice(idx, 1)
      else arr.push(optVal)
      onChange(arr)
    } else {
      onChange(optVal)
    }
  }

  // 🔢 Define colunas fixas com base no número de opções
  const total = options.length
  let cols = 2
  if (total >= 6 && total < 8) cols = 3
  else if (total >= 8) cols = 4

  return (
    <div
      className="grid gap-3 w-full justify-items-center"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      }}
    >
      {options.map((opt) => {
        const active = isSelected(opt.value)
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => toggle(opt.value)}
            className={[
              "group relative overflow-hidden rounded-xl border text-left w-full",
              "transition-all duration-200 bg-white",
              active
                ? "border-emerald-500 ring-2 ring-emerald-500/20"
                : "border-gray-200 hover:border-gray-300",
            ].join(" ")}
          >
            {/* Imagem com proporção 4:3, bordas suaves e leve sombra */}
            <div className="w-full max-h-44 overflow-hidden rounded-lg">
              <Image
                priority
                src={opt.src}
                alt={opt.alt ?? opt.label ?? opt.value}
                className="h-full top-0 w-full object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>

            {/* Label fixa abaixo da imagem */}
            {(opt.label ?? opt.value) && (
              <div className="py-2 text-center text-sm text-gray-800">
                <span
                  className={`${
                    active ? "font-semibold text-emerald-700" : "text-gray-600"
                  }`}
                >
                  {opt.label ?? opt.value}
                </span>
              </div>
            )}
          </button>
        )
      })}
    </div>
  )
}
