import { createContext } from "react";

export type Theme = "dark" | "light" | "vintage" | "retro-pastel" | "brutalism";

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
