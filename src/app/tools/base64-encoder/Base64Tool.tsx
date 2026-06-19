"use client";

import { useState } from "react";
import { Copy, Check, ArrowDownUp } from "lucide-react";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [copied, setCopied] = useState(false);

  const process = () => {
    try {
      if (mode === "encode") {
        setOutput(btoa(input));
      } else {
        setOutput(atob(input));
      }
    } catch {
      setOutput("Invalid input for decoding");
    }
  };

  const copyOutput = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const toggleMode = () => {
    setMode(mode === "encode" ? "decode" : "encode");
    setInput(output);
    setOutput("");
  };

  return (
    <div className="card p-6 space-y-4">
      <div className="flex items-center justify-between">
        <span className={`text-sm font-medium px-3 py-1 rounded-full ${
          mode === "encode" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
        }`}>
          {mode === "encode" ? "Encode" : "Decode"}
        </span>
        <button
          onClick={toggleMode}
          className="flex items-center gap-1 text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors"
        >
          <ArrowDownUp size={16} /> Switch Mode
        </button>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1.5">
          {mode === "encode" ? "Text to Encode" : "Base64 to Decode"}
        </label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={mode === "encode" ? "Enter text to encode..." : "Enter Base64 string to decode..."}
          rows={5}
          className="w-full px-4 py-3 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary resize-y"
        />
      </div>
      <button onClick={process} className="btn-primary">
        {mode === "encode" ? "Encode" : "Decode"}
      </button>
      {output && (
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="block text-sm font-medium">Result</label>
            <button
              onClick={copyOutput}
              className="flex items-center gap-1 text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="w-full p-4 bg-[#1e293b] text-[#e2e8f0] rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap break-all">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
