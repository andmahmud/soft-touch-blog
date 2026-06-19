import type { Metadata } from "next";
import JsonFormatter from "./JsonFormatter";

export const metadata: Metadata = {
  title: "JSON Formatter",
  description: "Format, validate, and beautify JSON data online. Free JSON formatter tool with syntax highlighting.",
};

export default function JsonFormatterPage() {
  return (
    <div className="container py-12 max-w-4xl">
      <div className="mb-8">
        <h1 className="section-title">JSON Formatter</h1>
        <p className="section-subtitle">Format, validate, and beautify your JSON data</p>
      </div>
      <JsonFormatter />
    </div>
  );
}
