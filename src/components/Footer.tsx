import { motion } from "framer-motion";
import { Github, Linkedin, Heart, Code, Coffee } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import { usePortfolioTranslations } from "../hooks/usePortfolioTranslations";

const Footer = () => {
  const { theme } = useTheme();
  const { footer } = usePortfolioTranslations();
  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/JordiNodeJS",
      color: theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-600",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/jorge-frontend/",
      color: "hover:text-blue-400",
    },
  ];

  const techStack = [
    "React",
    "TypeScript",
    "Framer Motion",
    "TailwindCSS",
    "Vite",
    "Bun",
  ];

  return (
    <footer
      className={`relative overflow-hidden border-t transition-all duration-300 ${
        theme === "dark"
          ? "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-slate-700/50"
          : theme === "light"
          ? "bg-gradient-to-br from-gray-50 via-white to-gray-100 border-gray-200/50"
          : "bg-gradient-to-br from-[#6e4c30] via-[#8b5e3c] to-[#4a5240] border-[#a78a21]/50"
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-blue-500/5" : 
            theme === "light" ? "bg-blue-500/10" :
            "bg-[#e3b505]/10"
          }`}
        ></div>
        <div
          className={`absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl ${
            theme === "dark" ? "bg-purple-500/5" : 
            theme === "light" ? "bg-purple-500/10" :
            "bg-[#d27c54]/10"
          }`}
        ></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold gradient-text mb-3">JORGe</h3>{" "}
            <p
              className={`text-sm leading-relaxed ${
                theme === "dark" ? "text-slate-400" : 
                theme === "light" ? "text-gray-600" :
                "text-[#f3ebd3]"
              }`}
            >
              {footer.description}
            </p>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center"
          >
            {" "}
            <h4
              className={`font-semibold mb-4 flex items-center justify-center md:justify-start gap-2 ${
                theme === "dark" ? "text-white" : 
                theme === "light" ? "text-gray-900" :
                "text-[#f3ebd3]"
              }`}
            >
              <Code className="w-4 h-4" />
              {footer.techStack}
            </h4>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {techStack.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`px-3 py-1 text-xs rounded-full border transition-all duration-300 hover:border-primary-500/50 ${
                    theme === "dark"
                      ? "bg-slate-700/50 text-slate-300 border-slate-600/50"
                      : theme === "light"
                      ? "bg-gray-100 text-gray-700 border-gray-300/50 hover:bg-gray-200"
                      : "bg-[#8b5e3c]/50 text-[#f3ebd3] border-[#a78a21]/50 hover:bg-[#6e4c30]/50"
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            {" "}
            <h4
              className={`font-semibold mb-4 ${
                theme === "dark" ? "text-white" : 
                theme === "light" ? "text-gray-900" :
                "text-[#f3ebd3]"
              }`}
            >
              {footer.connectWithMe}
            </h4>
            <div className="flex gap-4 justify-center md:justify-end">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 hover:border-primary-500/50 ${
                    theme === "dark"
                      ? `bg-slate-800/50 border-slate-700/50 text-slate-400 hover:bg-slate-700/50 ${social.color}`
                      : theme === "light"
                      ? `bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200 ${social.color}`
                      : `bg-[#8b5e3c]/50 border-[#a78a21]/50 text-[#f3ebd3] hover:bg-[#6e4c30]/50 ${social.color}`
                  }`}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`h-px mb-6 ${
            theme === "dark"
              ? "bg-gradient-to-r from-transparent via-slate-700 to-transparent"
              : theme === "light"
              ? "bg-gradient-to-r from-transparent via-gray-300 to-transparent"
              : "bg-gradient-to-r from-transparent via-[#a78a21]/80 to-transparent"
          }`}
        />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className={`flex flex-col md:flex-row items-center justify-between gap-4 text-sm ${
            theme === "dark" ? "text-slate-400" : 
            theme === "light" ? "text-gray-600" :
            "text-[#f3ebd3]/80"
          }`}
        >
          {" "}
          <div className="flex items-center gap-2">
            <span>
              © {new Date().getFullYear()} Jorge Portfolio. {footer.rights}
            </span>
            <span className="flex items-center gap-1">
              {footer.madeWith}{" "}
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />{" "}
              {footer.and}
              <Coffee
                className={`w-4 h-4 ${
                  theme === "dark" ? "text-amber-400" : 
                  theme === "light" ? "text-amber-600" :
                  "text-[#e3b505]"
                }`}
              />
            </span>
          </div>{" "}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className={`text-xs transition-colors duration-300 ${
              theme === "dark"
                ? "text-slate-500 hover:text-slate-300"
                : theme === "light"
                ? "text-gray-500 hover:text-gray-700"
                : "text-[#f3ebd3]/60 hover:text-[#f3ebd3]"
            }`}
          >
            {footer.designedWith}
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
