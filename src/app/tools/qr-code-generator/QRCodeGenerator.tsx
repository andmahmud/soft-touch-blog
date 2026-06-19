"use client";

import { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Download } from "lucide-react";

export default function QRCodeGenerator() {
  const [text, setText] = useState("https://example.com");
  const [size, setSize] = useState(256);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [fgColor, setFgColor] = useState("#2563eb");

  const downloadQR = () => {
    const svg = document.getElementById("qr-code");
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.onload = () => {
      canvas.width = size;
      canvas.height = size;
      ctx?.drawImage(img, 0, 0);
      const png = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "qrcode.png";
      link.href = png;
      link.click();
    };
    img.src = "data:image/svg+xml;base64," + btoa(svgData);
  };

  return (
    <div className="card p-6">
      <div className="flex flex-col items-center gap-6">
        <div
          className="p-4 bg-white rounded-xl shadow-sm"
          style={{ backgroundColor: bgColor }}
        >
          <QRCodeSVG
            id="qr-code"
            value={text || " "}
            size={size}
            bgColor={bgColor}
            fgColor={fgColor}
            level="L"
            includeMargin
          />
        </div>
        <div className="w-full space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1.5">Text or URL</label>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter text or URL"
              className="w-full px-4 py-2.5 bg-bg-tertiary dark:bg-dark-bg-tertiary border border-border dark:border-dark-border rounded-lg text-sm focus:outline-hidden focus:ring-2 focus:ring-primary text-text-primary dark:text-dark-text-primary"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1.5">Size</label>
              <input
                type="range"
                min={128}
                max={512}
                value={size}
                onChange={(e) => setSize(parseInt(e.target.value))}
                className="w-full accent-primary"
              />
              <span className="text-xs text-text-muted dark:text-dark-text-muted">{size}x{size}</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-sm font-medium mb-1.5">Foreground</label>
                <input
                  type="color"
                  value={fgColor}
                  onChange={(e) => setFgColor(e.target.value)}
                  className="w-full h-9 rounded cursor-pointer"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Background</label>
                <input
                  type="color"
                  value={bgColor}
                  onChange={(e) => setBgColor(e.target.value)}
                  className="w-full h-9 rounded cursor-pointer"
                />
              </div>
            </div>
          </div>
          <button onClick={downloadQR} className="btn-primary w-full justify-center">
            <Download size={16} /> Download PNG
          </button>
        </div>
      </div>
    </div>
  );
}
