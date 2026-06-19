"use client";

import { useState, useEffect } from "react";
import { Copy, Check } from "lucide-react";

interface RgbColor {
  r: number;
  g: number;
  b: number;
}

function hexToRgb(hex: string): RgbColor | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

function rgbToHex(r: number, g: number, b: number): string {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

function rgbToHsl(r: number, g: number, b: number): { h: number; s: number; l: number } {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
}

export default function ColorConverter() {
  const [hex, setHex] = useState("#2563eb");
  const [rgb, setRgb] = useState({ r: 37, g: 99, b: 235 });
  const [hsl, setHsl] = useState({ h: 221, s: 83, l: 53 });
  const [copied, setCopied] = useState("");

  useEffect(() => {
    const rgbColor = hexToRgb(hex);
    if (rgbColor) {
      setRgb(rgbColor);
      setHsl(rgbToHsl(rgbColor.r, rgbColor.g, rgbColor.b));
    }
  }, [hex]);

  const handleRgbChange = (channel: "r" | "g" | "b", value: number) => {
    const newRgb = { ...rgb, [channel]: Math.min(255, Math.max(0, value)) };
    setRgb(newRgb);
    setHex(rgbToHex(newRgb.r, newRgb.g, newRgb.b));
  };

  const copyValue = async (label: string, value: string) => {
    await navigator.clipboard.writeText(value);
    setCopied(label);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="card p-6 space-y-6">
      <div
        className="w-full h-32 rounded-xl border border-border dark:border-dark-border"
        style={{ backgroundColor: hex }}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-medium mb-1">HEX</label>
          <div className="flex">
            <input
              type="text"
              value={hex}
              onChange={(e) => setHex(e.target.value)}
              className="flex-1 px-3 py-2 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-l-lg text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary"
            />
            <button
              onClick={() => copyValue("hex", hex)}
              className="px-3 py-2 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-l-0 border-border dark:border-dark-border rounded-r-lg hover:text-primary transition-colors"
            >
              {copied === "hex" ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">RGB</label>
          <div className="flex gap-1">
            {(["r", "g", "b"] as const).map((ch) => (
              <input
                key={ch}
                type="number"
                value={rgb[ch]}
                onChange={(e) => handleRgbChange(ch, parseInt(e.target.value) || 0)}
                min={0}
                max={255}
                className="w-full px-2 py-2 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg text-sm font-mono text-center focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary"
              />
            ))}
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium mb-1">HSL</label>
          <div className="flex">
            <input
              type="text"
              readOnly
              value={`${hsl.h}° ${hsl.s}% ${hsl.l}%`}
              className="flex-1 px-3 py-2 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-l-lg text-sm font-mono focus:outline-hidden text-text-primary dark:text-dark-text-primary"
            />
            <button
              onClick={() => copyValue("hsl", `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)`)}
              className="px-3 py-2 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-l-0 border-border dark:border-dark-border rounded-r-lg hover:text-primary transition-colors"
            >
              {copied === "hsl" ? <Check size={14} /> : <Copy size={14} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
