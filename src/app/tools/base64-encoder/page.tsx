import type { Metadata } from "next";
import Base64Tool from "./Base64Tool";

export const metadata: Metadata = {
  title: "Base64 Encoder / Decoder",
  description: "Encode and decode Base64 strings online. Free Base64 encoder and decoder tool.",
};

export default function Base64EncoderPage() {
  return (
    <div className="container py-12 max-w-3xl">
      <div className="mb-8">
        <h1 className="section-title">Base64 Encoder / Decoder</h1>
        <p className="section-subtitle">Encode text to Base64 or decode Base64 to text</p>
      </div>
      <Base64Tool />
    </div>
  );
}
