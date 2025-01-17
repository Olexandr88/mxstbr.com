// TODO: Add more pre-selected colors
export const colors = {
  blue: "#3b82f6",
  yellow: "#eab308",
  pink: "#ec4899",
  green: "#22c55e",
  red: "#ef4444",
  gray: "#e5e7eb",
  black: "#6b7280",
};

type Color = keyof typeof colors;

// Allowlist of patterns that work well at small size from heropatterns.com
type BackgroundPattern =
  | "architect"
  | "texture"
  | "charlieBrown"
  | "hexagons"
  | "bamboo"
  | "corkScrew"
  | "tinyCheckers"
  | "heavyRain"
  | "flippedDiamonds"
  | "morphingDiamonds"
  | "boxes"
  | "zigZag"
  | "diagonalLines"
  | "eyes"
  | "polkaDots";

export type Event = {
  start: Date;
  end: Date;
  color: string;
  background?: BackgroundPattern;
  border?: "solid";
  label?: string;
  labelSize?: "small";
};
