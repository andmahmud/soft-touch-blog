"use client";

import { useState } from "react";
import { Copy, Check, Trash2, Upload } from "lucide-react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, 2));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError((e as Error).message);
      setOutput("");
    }
  };

  const copyOutput = async () => {
    if (output) {
      await navigator.clipboard.writeText(output);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const clearAll = () => {
    setInput("");
    setOutput("");
    setError("");
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-2">Input JSON</label>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Paste your JSON here...'
          rows={8}
          className="w-full px-4 py-3 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg text-sm font-mono focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary resize-y"
        />
      </div>
      <div className="flex flex-wrap gap-3">
        <button onClick={formatJson} className="btn-primary text-sm">
          Format JSON
        </button>
        <button onClick={minifyJson} className="btn-outline text-sm">
          Minify
        </button>
        <button onClick={clearAll} className="btn-outline text-sm border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
          <Trash2 size={16} /> Clear
        </button>
      </div>
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-sm text-red-600 dark:text-red-400 font-mono">{error}</p>
        </div>
      )}
      {output && (
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">Formatted Output</label>
            <button
              onClick={copyOutput}
              className="flex items-center gap-1 text-sm text-text-secondary dark:text-dark-text-secondary hover:text-primary transition-colors"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <pre className="w-full p-4 bg-[#1e293b] text-[#e2e8f0] rounded-lg text-sm font-mono overflow-x-auto whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
