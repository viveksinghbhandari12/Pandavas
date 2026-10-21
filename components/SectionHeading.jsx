import React from "react";

export default function SectionHeading({
  eyebrow = "",
  title = "",
  subtitle = "",
  align = "center", // 'center' | 'left'
  className = "",
}) {
  const isLeft = align === "left";

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isLeft ? "text-left" : "text-center max-w-3xl mx-auto"
      } ${className}`}
    >
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 mb-3.5 ${
            isLeft ? "justify-start" : "justify-center"
          }`}
        >
          <span className="w-6 h-[1px] bg-gold" />
          <span className="text-[11px] font-mono tracking-[0.3em] uppercase text-gold">
            {eyebrow}
          </span>
          <span className="w-6 h-[1px] bg-gold" />
        </div>
      )}

      {title && (
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-text-primary uppercase leading-tight">
          {title}
        </h2>
      )}

      {subtitle && (
        <p className="mt-3.5 text-xs sm:text-sm text-text-secondary leading-relaxed font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
}
