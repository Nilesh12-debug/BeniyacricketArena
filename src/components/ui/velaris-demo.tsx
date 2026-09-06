"use client";

import React from "react";
import Velaris from "@/components/ui/velaris";

export default function VelarisDemo() {
  return (
    <Velaris height="500px" className="rounded-3xl border border-white/10">
      <div className="flex h-full w-full flex-col items-center justify-center gap-4 px-6 text-center">
        <span className="rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-mono font-medium text-[#C7FF00] backdrop-blur">
          BENIYA ARENA · LIVING WEBGL
        </span>
        <h2 className="max-w-2xl text-4xl sm:text-6xl font-extrabold uppercase font-headline tracking-tighter text-white">
          PLAY AFTER DARK.
        </h2>
        <p className="max-w-md text-sm sm:text-base text-[#8E8E93] font-light">
          Experience night cricket under floodlights at Beniya Bagh, Varanasi.
        </p>
      </div>
    </Velaris>
  );
}
