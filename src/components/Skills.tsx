import { motion } from "framer-motion";
import { usePortfolioData } from "../hooks/usePortfolioData";
import { usePortfolioTranslations } from "../hooks/usePortfolioTranslations";
import { useTheme } from "../hooks/useTheme";
import {
  SiReact,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiVite,
  SiTailwindcss,
  SiNestjs,
  SiNextdotjs,
  SiRedux,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Skill3DCard from "./Skill3DCard";
import {
  getLevelNameForTechStack,
  getDescriptionForTech,
  getSkillLevelText,
} from "./SkillsHelper";

const SkillBar = ({
  skill,
  index,
}: {
  skill: { name: string; level: number };
  index: number;
}) => {
  const { theme } = useTheme();

  const getSkillColor = (level: number) => {
    // Colores para el tema vintage
    if (theme === "vintage") {
      if (level >= 85)
        return { gradient: "from-amber-600 to-amber-800", bg: "bg-amber-700" };
      if (level >= 65)
        return { gradient: "from-teal-600 to-teal-800", bg: "bg-teal-700" };
      if (level >= 40)
        return { gradient: "from-rose-600 to-rose-800", bg: "bg-rose-700" };
      if (level === 75)
        return {
          gradient: "from-violet-600 to-violet-800",
          bg: "bg-violet-700",
        };
      return {
        gradient: "from-emerald-600 to-emerald-800",
        bg: "bg-emerald-700",
      };
    }

    // Colores para el tema retro-pastel
    if (theme === "retro-pastel") {
      if (level >= 85)
        return { gradient: "from-amber-300 to-amber-500", bg: "bg-amber-400" };
      if (level >= 65)
        return { gradient: "from-cyan-300 to-cyan-500", bg: "bg-cyan-400" };
      if (level >= 40)
        return { gradient: "from-pink-300 to-pink-500", bg: "bg-pink-400" };
      if (level === 75)
        return {
          gradient: "from-purple-300 to-purple-500",
          bg: "bg-purple-400",
        };
      return { gradient: "from-green-300 to-green-500", bg: "bg-green-400" };
    }

    // Colores para el tema brutalism
    if (theme === "brutalism") {
      if (level >= 85)
        return {
          gradient: "from-yellow-400 to-yellow-600",
          bg: "bg-yellow-500",
        };
      if (level >= 65)
        return { gradient: "from-cyan-400 to-cyan-600", bg: "bg-cyan-500" };
      if (level >= 40)
        return { gradient: "from-pink-400 to-pink-600", bg: "bg-pink-500" };
      if (level === 75)
        return {
          gradient: "from-purple-400 to-purple-600",
          bg: "bg-purple-500",
        };
      return { gradient: "from-green-400 to-green-600", bg: "bg-green-500" };
    }

    // Colores para los temas claro/oscuro por defecto
    if (theme === "light") {
      if (level >= 85)
        return { gradient: "from-blue-500 to-blue-700", bg: "bg-blue-600" };
      if (level >= 65)
        return {
          gradient: "from-emerald-500 to-emerald-700",
          bg: "bg-emerald-600",
        };
      if (level >= 40)
        return { gradient: "from-amber-500 to-amber-700", bg: "bg-amber-600" };
      if (level === 75)
        return {
          gradient: "from-indigo-500 to-indigo-700",
          bg: "bg-indigo-600",
        };
      return { gradient: "from-green-500 to-green-700", bg: "bg-green-600" };
    }

    // Tema oscuro por defecto
    if (level >= 85)
      return { gradient: "from-blue-400 to-blue-600", bg: "bg-blue-500" };
    if (level >= 65)
      return {
        gradient: "from-emerald-400 to-emerald-600",
        bg: "bg-emerald-500",
      };
    if (level >= 40)
      return { gradient: "from-amber-400 to-amber-600", bg: "bg-amber-500" };
    if (level === 75)
      return { gradient: "from-indigo-400 to-indigo-600", bg: "bg-indigo-500" };
    return { gradient: "from-green-400 to-green-600", bg: "bg-green-500" };
  };

  const progress = skill.level; // Level is already a number

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="mb-6 group"
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {skill.name}
        </h3>
        <motion.span
          className={`text-xs font-bold uppercase tracking-wider px-3 py-1 ${
            getSkillColor(skill.level).bg
          } ${
            theme === "brutalism"
              ? "text-black border-2 border-black"
              : theme === "retro-pastel"
              ? "text-gray-900 border border-white/30"
              : theme === "vintage"
              ? "text-white border border-amber-900/30"
              : theme === "light"
              ? "text-white border border-white/30"
              : "text-white border border-white/30"
          }`}
          style={{
            fontFamily:
              theme === "brutalism" ? "'Courier New', monospace" : "inherit",
            letterSpacing: theme === "brutalism" ? "1px" : "0.5px",
            boxShadow:
              theme === "brutalism" ? "2px 2px 0 rgba(0,0,0,0.2)" : "none",
            transform: theme === "brutalism" ? "skew(-10deg)" : "none",
            display: "inline-block",
            borderRadius: theme === "brutalism" ? "0" : "0.375rem",
          }}
          whileHover={{
            scale: theme === "brutalism" ? 1.05 : 1.02,
            boxShadow:
              theme === "brutalism"
                ? "3px 3px 0 rgba(0,0,0,0.3)"
                : theme === "retro-pastel" || theme === "vintage"
                ? "0 4px 12px -2px rgba(0,0,0,0.1)"
                : "0 4px 12px -2px rgba(255,255,255,0.1)",
            transition: { duration: 0.2 },
          }}
        >
          {getSkillLevelText(skill.level)}
        </motion.span>
      </div>
      <div className="w-full bg-gray-200/80 dark:bg-gray-700/80 h-4 overflow-hidden border-2 border-gray-400 dark:border-gray-600 relative">
        <div
          className="absolute inset-0 bg-gray-300/30 dark:bg-gray-800/30"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgba(0,0,0,0.1) 25%, transparent 25%, transparent 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1) 75%, transparent 75%, transparent)",
            backgroundSize: "10px 10px",
          }}
        />
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${progress}%` }}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full bg-gradient-to-r ${
            getSkillColor(skill.level).gradient
          } relative`}
          style={{
            boxShadow: "none",
            borderRight: "2px solid rgba(255,255,255,0.5)",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
              borderTop: "1px solid rgba(255,255,255,0.4)",
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills: skillsDataFromHook } = usePortfolioData();
  const { skills: skillsTranslations } = usePortfolioTranslations();

  const techStack = [
    { icon: SiReact, name: "React", color: "from-blue-500 to-blue-700" },
    {
      icon: SiJavascript,
      name: "JavaScript",
      color: "from-amber-400 to-amber-600",
    },
    {
      icon: SiTypescript,
      name: "TypeScript",
      color: "from-blue-600 to-blue-800",
    },
    { icon: SiSass, name: "CSS/SASS", color: "from-pink-500 to-pink-700" },
    { icon: SiVite, name: "Vite", color: "from-purple-500 to-purple-700" },
    {
      icon: SiTailwindcss,
      name: "TailwindCSS",
      color: "from-teal-500 to-teal-700",
    },
    { icon: TbSql, name: "SQL", color: "from-orange-500 to-orange-700" },
    { icon: SiNestjs, name: "NestJS", color: "from-red-500 to-red-700" },
    { icon: SiNextdotjs, name: "Next.js", color: "from-gray-600 to-gray-800" },
    { icon: SiRedux, name: "Redux", color: "from-purple-500 to-indigo-700" },
  ];

  if (!skillsDataFromHook || !skillsTranslations) {
    return <div>Loading skills data...</div>;
  }

  return (
    <section id="skills" className="section-padding section-bg-gradient">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {skillsTranslations.title}
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-200 max-w-2xl mx-auto font-medium leading-relaxed">
            {skillsTranslations.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Skills Progress */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-6 rounded-xl border-t-4 border-t-primary-500/50 dark:border-t-primary-400/50"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 border-b pb-2 border-primary-500/30 dark:border-primary-400/30">
              {skillsTranslations.competenceLevel}{" "}
            </h3>
            <div className="space-y-4">
              {skillsDataFromHook.map((skill, index) => (
                <SkillBar
                  key={skill.id || index}
                  skill={{ name: skill.name, level: skill.level }}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Tech Stack with 3D Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass-effect p-6 rounded-xl border-t-4 border-t-purple-500/50 dark:border-t-purple-400/50"
          >
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 border-b pb-2 border-purple-500/30 dark:border-purple-400/30">
              {skillsTranslations.techStack}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={tech.name === "Redux" ? "sm:col-start-2" : ""}
                >
                  <Skill3DCard
                    icon={tech.icon}
                    name={tech.name}
                    level={getLevelNameForTechStack(tech.name)}
                    color={tech.color}
                    description={getDescriptionForTech(tech.name)}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Methodologies & Tools - ahora como una sección independiente */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="glass-effect p-6 rounded-xl border-t-4 border-t-primary-500/50 dark:border-t-primary-400/50 max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 border-b pb-2 border-primary-500/30 dark:border-primary-400/30">
            {skillsTranslations.methodologies}{" "}
          </h3>
          <div className="bg-gradient-to-br from-primary-600/30 to-purple-600/30 dark:from-primary-700/40 dark:to-purple-800/40 backdrop-blur-sm p-6 rounded-xl border border-primary-500/30 dark:border-primary-400/20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Agile/SCRUM",
                "Git/GitHub",
                "Testing (Jest/Vitest)",
                "CI/CD",
              ].map((method) => (
                <motion.div
                  key={method}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center group p-3 rounded-lg hover:bg-white/10 transition-colors"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-primary-500/30 dark:bg-primary-400/30 rounded-full group-hover:bg-primary-500/50 dark:group-hover:bg-primary-300/40 transition-colors border border-primary-500/20 dark:border-primary-400/20 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-primary-700 dark:text-primary-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12h6m-3-3v6m6.364-9.364a9 9 0 10-12.728 12.728A9 9 0 0018.364 2.636z"
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 dark:text-gray-100 font-medium group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors text-center">
                    {method}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
