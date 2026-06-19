"use client";

import { useState, useCallback } from "react";
import { Copy, Check, RefreshCw } from "lucide-react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [uppercase, setUppercase] = useState(true);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(true);
  const [symbols, setSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const num = "0123456789";
    const sym = "!@#$%^&*()_+-=[]{}|;':\",./<>?";
    let chars = "";
    if (uppercase) chars += upper;
    if (lowercase) chars += lower;
    if (numbers) chars += num;
    if (symbols) chars += sym;

    if (!chars) {
      setPassword("Select at least one option");
      return;
    }

    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  }, [length, uppercase, lowercase, numbers, symbols]);

  const copyPassword = async () => {
    if (password) {
      await navigator.clipboard.writeText(password);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const getStrength = () => {
    let score = 0;
    if (length >= 12) score++;
    if (length >= 16) score++;
    if (uppercase) score++;
    if (lowercase) score++;
    if (numbers) score++;
    if (symbols) score++;
    if (score <= 2) return { label: "Weak", color: "bg-red-500" };
    if (score <= 4) return { label: "Medium", color: "bg-yellow-500" };
    return { label: "Strong", color: "bg-green-500" };
  };

  const strength = getStrength();

  return (
    <div className="card p-6 space-y-6">
      <div className="relative">
        <input
          type="text"
          readOnly
          value={password}
          placeholder="Click generate to create a password"
          className="w-full px-4 py-3 pr-20 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg text-lg font-mono focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          <button
            onClick={copyPassword}
            className="p-2 rounded hover:bg-bg-primary dark:hover:bg-dark-bg-primary transition-colors text-text-secondary dark:text-dark-text-secondary hover:text-primary"
            aria-label="Copy password"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>

      {password && (
        <div className="flex items-center gap-3">
          <div className="flex-1 h-2 bg-bg-tertiary dark:bg-dark-bg-tertiary rounded-full">
            <div
              className={`h-full rounded-full transition-all ${strength.color}`}
              style={{ width: `${(strength.label === "Weak" ? 33 : strength.label === "Medium" ? 66 : 100)}%` }}
            />
          </div>
          <span className={`text-xs font-medium ${
            strength.label === "Weak" ? "text-red-500" : strength.label === "Medium" ? "text-yellow-500" : "text-green-500"
          }`}>
            {strength.label}
          </span>
        </div>
      )}

      <button onClick={generatePassword} className="btn-primary w-full justify-center">
        <RefreshCw size={16} /> Generate Password
      </button>

      <div className="space-y-4">
        <div>
          <label className="flex items-center justify-between text-sm">
            <span>Length: {length}</span>
          </label>
          <input
            type="range"
            min={4}
            max={64}
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full mt-2 accent-primary"
          />
          <div className="flex justify-between text-xs text-text-muted dark:text-dark-text-muted">
            <span>4</span>
            <span>64</span>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Uppercase (A-Z)", value: uppercase, set: setUppercase },
            { label: "Lowercase (a-z)", value: lowercase, set: setLowercase },
            { label: "Numbers (0-9)", value: numbers, set: setNumbers },
            { label: "Symbols (!@#$%)", value: symbols, set: setSymbols },
          ].map((item) => (
            <label key={item.label} className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={item.value}
                onChange={() => item.set(!item.value)}
                className="w-4 h-4 rounded border-border dark:border-dark-border text-primary focus:ring-primary"
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
