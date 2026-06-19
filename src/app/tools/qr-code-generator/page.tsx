import type { Metadata } from "next";
import QRCodeGenerator from "./QRCodeGenerator";

export const metadata: Metadata = {
  title: "QR Code Generator",
  description: "Generate QR codes online for free. Create QR codes for URLs, text, and more.",
};

export default function QRCodeGeneratorPage() {
  return (
    <div className="container py-12 max-w-2xl">
      <div className="mb-8">
        <h1 className="section-title">QR Code Generator</h1>
        <p className="section-subtitle">Generate QR codes for URLs, text, and more</p>
      </div>
      <QRCodeGenerator />
    </div>
  );
}
