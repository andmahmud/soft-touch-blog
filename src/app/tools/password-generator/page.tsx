import type { Metadata } from "next";
import PasswordGenerator from "./PasswordGenerator";

export const metadata: Metadata = {
  title: "Password Generator",
  description: "Generate strong, secure passwords online. Customizable length, characters, and complexity.",
};

export default function PasswordGeneratorPage() {
  return (
    <div className="container py-12 max-w-2xl">
      <div className="mb-8">
        <h1 className="section-title">Password Generator</h1>
        <p className="section-subtitle">Generate strong, secure passwords instantly</p>
      </div>
      <PasswordGenerator />
    </div>
  );
}
