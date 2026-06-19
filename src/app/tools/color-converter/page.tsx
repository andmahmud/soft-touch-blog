import type { Metadata } from "next";
import ColorConverter from "./ColorConverter";

export const metadata: Metadata = {
  title: "Color Converter",
  description: "Convert colors between HEX, RGB, HSL, and other color formats online.",
};

export default function ColorConverterPage() {
  return (
    <div className="container py-12 max-w-2xl">
      <div className="mb-8">
        <h1 className="section-title">Color Converter</h1>
        <p className="section-subtitle">Convert between HEX, RGB, HSL, and more</p>
      </div>
      <ColorConverter />
    </div>
  );
}
