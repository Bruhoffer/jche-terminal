"use client";

import { useEffect } from "react";

interface UseCommandPaletteHotkeyOptions {
  onOpen: () => void;
}

// Basic hook for Cmd/Ctrl+K; can be wired into CommandPalette later.
export const useCommandPaletteHotkey = ({ onOpen }: UseCommandPaletteHotkeyOptions) => {
  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      const isMac = navigator.platform.toLowerCase().includes("mac");
      const isCommand = isMac ? event.metaKey : event.ctrlKey;

      if (isCommand && event.key.toLowerCase() === "k") {
        event.preventDefault();
        onOpen();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onOpen]);
};
