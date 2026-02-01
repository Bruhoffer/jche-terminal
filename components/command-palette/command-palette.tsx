"use client";

import { useRouter } from "next/navigation";
import type { FC } from "react";
import { useEffect, useMemo, useState } from "react";
import { useCommandPaletteHotkey } from "@/lib/keyboard-shortcuts";

interface CommandItemConfig {
  id: string;
  label: string;
  hint?: string;
  href?: string;
  action?: () => void;
}

const COMMANDS: CommandItemConfig[] = [
  {
    id: "overview",
    label: "$JCHE · Overview",
    hint: "Go to dashboard overview",
    href: "/overview",
  },
  {
    id: "exp",
    label: "$EXP · Trade History",
    hint: "View experience ledger",
    href: "/trade-history",
  },
  {
    id: "edu",
    label: "$EDU · Disclosures",
    hint: "View academic disclosures",
    href: "/disclosures",
  },
  {
    id: "prj",
    label: "$PRJ · Asset Pipeline",
    hint: "View project assets",
    href: "/asset-pipeline",
  },
  {
    id: "cv",
    label: "Execute Trade (Email $JCHE)",
    hint: "Contact Justin via email",
    action: () => {
      window.location.href =
        "mailto:justin.cheong@u.nus.edu?subject=Execute%20Trade%20on%20%24JCHE";
    },
  },
];

export const CommandPalette: FC = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);

  useCommandPaletteHotkey({
    onOpen: () => {
      // Re-open palette preserving last query and selected item
      setOpen(true);
    },
  });

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return COMMANDS;
    return COMMANDS.filter((cmd) =>
      `${cmd.label} ${cmd.hint ?? ""}`.toLowerCase().includes(q),
    );
  }, [query]);

  // Close palette on global Escape key while open, regardless of focus
  useEffect(() => {
    if (!open) return;

    const handler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  useEffect(() => {
    // Reset selection when query changes
    setSelectedIndex(0);
  }, [query]);

  const execute = (cmd: CommandItemConfig) => {
    if (cmd.href) {
      router.push(cmd.href);
    } else if (cmd.action) {
      cmd.action();
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-40 flex items-start justify-center bg-black/60 pt-24"
      aria-label="Command Palette"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          setOpen(false);
        }
      }}
    >
      <div className="w-full max-w-lg overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950 shadow-xl">
        <div className="border-b border-zinc-800 px-3 py-2 text-[11px] font-mono uppercase tracking-wide text-zinc-500">
          <div className="flex items-center justify-between">
            <span>Command Palette</span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="rounded border border-zinc-700 px-1.5 py-0.5 text-[10px] text-zinc-400 hover:border-zinc-500 hover:text-zinc-200"
            >
              Esc
            </button>
          </div>
        </div>
        <div className="px-3 py-2">
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Escape") {
                e.preventDefault();
                setOpen(false);
                return;
              }
              if (e.key === "ArrowDown") {
                e.preventDefault();
                if (filtered.length === 0) return;
                setSelectedIndex((prev) => (prev + 1) % filtered.length);
                return;
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                if (filtered.length === 0) return;
                setSelectedIndex((prev) =>
                  prev === 0 ? filtered.length - 1 : prev - 1,
                );
                return;
              }
              if (e.key === "Enter" && filtered[selectedIndex]) {
                e.preventDefault();
                execute(filtered[selectedIndex]);
              }
            }}
            placeholder="Search commands or tickers..."
            className="w-full rounded-md border border-zinc-700 bg-zinc-950 px-2 py-1.5 text-xs text-zinc-100 outline-none placeholder:text-zinc-600 focus:border-zinc-400"
          />
        </div>
        <ul className="max-h-64 overflow-y-auto border-t border-zinc-800 text-xs">
          {filtered.length === 0 && (
            <li className="px-3 py-2 text-zinc-500">No commands found.</li>
          )}
          {filtered.map((cmd, index) => {
            const isSelected = index === selectedIndex;
            return (
              <li key={cmd.id}>
                <button
                  type="button"
                  className={`flex w-full items-center justify-between gap-3 px-3 py-2 text-left text-zinc-200 ${
                    isSelected ? "bg-zinc-900" : "hover:bg-zinc-900"
                  }`}
                  onClick={() => execute(cmd)}
                >
                  <span className="flex flex-col">
                    <span>{cmd.label}</span>
                    {cmd.hint && (
                      <span className="text-[10px] text-zinc-500">
                        {cmd.hint}
                      </span>
                    )}
                  </span>
                  <span className="text-[10px] text-zinc-600">
                    {cmd.id === "cv" ? "Enter" : "Go"}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
