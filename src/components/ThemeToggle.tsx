import { motion } from "framer-motion";
import { Sun, Moon, Coffee, Heart, Zap } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <motion.button
      onClick={toggleTheme}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="theme-toggle-button"
      style={{
        display: "flex",
        visibility: "visible",
        opacity: 1,
      }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          scale: theme === "dark" ? 1 : 0,
          opacity: theme === "dark" ? 1 : 0,
          rotate: theme === "dark" ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Moon className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "light" ? 1 : 0,
          opacity: theme === "light" ? 1 : 0,
          rotate: theme === "light" ? 0 : -180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Sun className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "vintage" ? 1 : 0,
          opacity: theme === "vintage" ? 1 : 0,
          rotate: theme === "vintage" ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Coffee className="w-5 h-5" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          scale: theme === "retro-pastel" ? 1 : 0,
          opacity: theme === "retro-pastel" ? 1 : 0,
          rotate: theme === "retro-pastel" ? 0 : -180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Heart className="w-5 h-5 text-[#e56b81]" />
      </motion.div>{" "}
      <motion.div
        initial={false}
        animate={{
          scale: theme === "brutalism" ? 1 : 0,
          opacity: theme === "brutalism" ? 1 : 0,
          rotate: theme === "brutalism" ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 flex items-center justify-center"
        style={{ zIndex: theme === "brutalism" ? 50 : "auto" }}
      >
        <Zap
          className="w-7 h-7 font-black"
          style={{
            strokeWidth: 3,
            filter:
              theme === "brutalism"
                ? "drop-shadow(1px 1px 0px #000) drop-shadow(-1px -1px 0px #000)"
                : undefined,
          }}
        />
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;
