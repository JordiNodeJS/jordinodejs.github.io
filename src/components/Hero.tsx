import { motion } from "framer-motion";
import { useTheme } from "../hooks/useTheme";
import { useRef } from "react";
import { animated } from "@react-spring/web";
import useEnhanced3DEffect from "../hooks/useEnhanced3DEffect";

const Hero = () => {
  const { theme } = useTheme();
  const profileContainerRef = useRef<HTMLDivElement>(null);

  // Using our enhanced 3D effect hook for better physics-based animations
  const { springProps, isHovered, config } = useEnhanced3DEffect(
    profileContainerRef as React.RefObject<HTMLElement>,
    {
      strength: 25,
      rotateLimit: 15,
      scaleFactor: 1.08,
      zAxisMovement: 50,
      tiltReverse: false,
      resetOnLeave: true,
      dampingFactor: 15,
      stiffnessFactor: 130,
      breatheAnimation: true,
      breatheScale: 1.04,
      breatheDuration: 3000,
      glowOnHover: true,
      glowColor:
        theme === "dark"
          ? "rgba(56, 189, 248, 0.6)" // Cyan for dark mode
          : theme === "light"
          ? "rgba(79, 70, 229, 0.5)" // Indigo for light mode
          : theme === "vintage"
          ? "rgba(227, 181, 5, 0.6)" // Dorado para vintage
          : theme === "retro-pastel"
          ? "rgba(229, 107, 129, 0.5)" // Rosa para retro-pastel
          : theme === "brutalism"
          ? "rgba(255, 107, 107, 0.7)" // Rojo brillante para brutalism
          : "rgba(79, 70, 229, 0.5)",
      glowIntensity: theme === "brutalism" ? 1 : 0.8,
    }
  );
  return (
    <section id="hero" className="relative py-20 overflow-hidden">
      {" "}
      {/* Background gradient */}
      <div
        className={`absolute inset-0 z-0 ${
          theme === "dark"
            ? "bg-gradient-to-br from-slate-900 to-slate-800"
            : theme === "light"
            ? "bg-gradient-to-br from-gray-50 to-white"
            : theme === "vintage"
            ? "bg-gradient-to-br from-[#6e4c30] to-[#543825]"
            : theme === "retro-pastel"
            ? "bg-gradient-to-br from-[#f9f1f0] to-[#fadcd9]"
            : theme === "brutalism"
            ? "bg-[#ffeaa7]" // Color sólido para brutalism
            : "bg-gradient-to-br from-gray-50 to-white"
        }`}
      />
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Profile image with 3D effect */}
          <div
            className="perspective-1000 mb-12 mt-12 cursor-pointer"
            ref={profileContainerRef}
          >
            {" "}
            <animated.div
              className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-visible shadow-2xl transform-style-3d"
              style={{
                // Apply transform directly from spring props
                rotateX: springProps.rotateX,
                rotateY: springProps.rotateY,
                scale: springProps.scale,
                zIndex: springProps.zIndex,
                // Use CSS custom property for perspective
                transform: `perspective(1000px) rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg)) scale(var(--scale, 1)) translateZ(var(--z, 0px))`,
              }}
            >
              {" "}
              {/* Base circular with depth effect */}
              <animated.div
                className={`absolute inset-0 rounded-full ${
                  theme === "dark"
                    ? "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900"
                    : theme === "light"
                    ? "bg-gradient-to-br from-gray-100 via-white to-gray-200"
                    : theme === "vintage"
                    ? "bg-gradient-to-br from-[#a87e58] via-[#9b714c] to-[#8a6440]"
                    : theme === "retro-pastel"
                    ? "bg-gradient-to-br from-[#ffb5b5] via-[#ffaec0] to-[#f59cb0]"
                    : theme === "brutalism"
                    ? "bg-[#ff6b6b] border-4 border-black"
                    : "bg-gradient-to-br from-gray-100 via-white to-gray-200"
                } shadow-inner transform-gpu transform-style-3d`}
                style={{ transform: "translateZ(-20px)" }}
              />{" "}
              {/* Dynamic shadow effect */}
              <animated.div
                className="absolute -inset-4 rounded-full blur-md opacity-70"
                style={{
                  background:
                    theme === "dark"
                      ? "radial-gradient(circle, rgba(56,189,248,0.2) 0%, rgba(30,64,175,0.1) 70%, transparent 100%)"
                      : theme === "light"
                      ? "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.1) 70%, transparent 100%)"
                      : theme === "vintage"
                      ? "radial-gradient(circle, rgba(227,181,5,0.3) 0%, rgba(168,126,88,0.2) 70%, transparent 100%)"
                      : theme === "retro-pastel"
                      ? "radial-gradient(circle, rgba(229,107,129,0.25) 0%, rgba(248,177,149,0.15) 70%, transparent 100%)"
                      : theme === "brutalism"
                      ? "none" // Sin sombra para el tema brutalism
                      : "radial-gradient(circle, rgba(59,130,246,0.2) 0%, rgba(147,51,234,0.1) 70%, transparent 100%)",
                  transform:
                    theme === "brutalism"
                      ? "translateZ(-10px) translateX(0) translateY(0)"
                      : "translateZ(-10px)",
                  translateX:
                    theme === "brutalism"
                      ? 0
                      : springProps.rotateY.to((val) => -val * 0.5),
                  translateY:
                    theme === "brutalism"
                      ? 0
                      : springProps.rotateX.to((val) => val * 0.5),
                  boxShadow:
                    theme === "brutalism" ? "5px 5px 0px #000" : "none",
                }}
              />{" "}
              {/* Container for the image with clip-path for the "popping out of circle" effect */}
              <animated.div
                className="absolute inset-0 overflow-visible transform-style-3d"
                style={{
                  translateZ: springProps.zIndex,
                }}
              >
                {" "}
                {/* 3D Image that "pops out" of the circle */}
                <animated.img
                  src="/assets/developer.png"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full transform-gpu transform-style-3d"
                  style={{
                    scale: springProps.scale,
                    filter: isHovered
                      ? `drop-shadow(0 0 15px ${config.glowColor})`
                      : "none",
                    transition: "filter 0.3s ease",
                  }}
                />{" "}
              </animated.div>{" "}
              {/* Border glow effect */}
              <animated.div
                className={`absolute -inset-1 rounded-full pointer-events-none transform-style-3d ${
                  theme === "brutalism" ? "border-4 border-black" : ""
                }`}
                style={{
                  background:
                    theme === "dark"
                      ? `conic-gradient(from ${
                          Date.now() % 360
                        }deg at 50% 50%, #60a5fa, #3b82f6, #2563eb, #1d4ed8, #1e40af, #1e3a8a, #1e3a8a, #1e40af, #1d4ed8, #2563eb, #3b82f6, #60a5fa)`
                      : theme === "light"
                      ? `conic-gradient(from ${
                          Date.now() % 360
                        }deg at 50% 50%, #93c5fd, #60a5fa, #3b82f6, #2563eb, #1d4ed8, #1e40af, #1e40af, #1d4ed8, #2563eb, #3b82f6, #60a5fa, #93c5fd)`
                      : theme === "vintage"
                      ? `conic-gradient(from ${
                          Date.now() % 360
                        }deg at 50% 50%, #e3b505, #c89e31, #a87e58, #967043, #826036, #6e4c30, #6e4c30, #826036, #967043, #a87e58, #c89e31, #e3b505)`
                      : theme === "retro-pastel"
                      ? `conic-gradient(from ${
                          Date.now() % 360
                        }deg at 50% 50%, #ffb5b5, #ffaec0, #f59cb0, #e56b81, #cf6279, #b85671, #b85671, #cf6279, #e56b81, #f59cb0, #ffaec0, #ffb5b5)`
                      : theme === "brutalism"
                      ? `conic-gradient(from ${
                          Date.now() % 360
                        }deg at 50% 50%, #4ecdc4, #45b7d1, #3b82f6, #ff6b6b, #ffeaa7, #ffeaa7, #ff6b6b, #3b82f6, #45b7d1, #4ecdc4)`
                      : `conic-gradient(from ${
                          Date.now() % 360
                        }deg at 50% 50%, #93c5fd, #60a5fa, #3b82f6, #2563eb, #1d4ed8, #1e40af, #1e40af, #1d4ed8, #2563eb, #3b82f6, #60a5fa, #93c5fd)`,
                  filter:
                    theme === "brutalism"
                      ? "none"
                      : isHovered
                      ? "blur(10px)"
                      : "blur(8px)",
                  transform:
                    theme === "brutalism"
                      ? "translateZ(5px) skew(-3deg)"
                      : "translateZ(5px)",
                  zIndex: 5,
                  opacity: isHovered ? 0.85 : 0.6,
                  animation: "rotate 10s linear infinite",
                  transition: "filter 0.3s ease, opacity 0.3s ease",
                  boxShadow:
                    theme === "brutalism" ? "4px 4px 0px #000" : "none",
                }}
              />
            </animated.div>
          </div>

          {/* Text content with animations */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                theme === "brutalism"
                  ? "text-black"
                  : "bg-clip-text text-transparent"
              } ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                  : theme === "brutalism"
                  ? ""
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              }`}
              style={{
                fontSize: '4.5rem',
                lineHeight: '1.1',
                color: '#ef7574',
                textShadow: 
                  '2px 2px 0 #000, ' + 
                  '-1px -1px 0 #f8d7da, ' +
                  '-1px -2px 0 #f5b5b5, ' +
                  '1px -1px 0 #000, ' +
                  '-1px 1px 0 #000, ' +
                  '1px 1px 0 #000',
                WebkitTextStroke: '0.5px #000'
              }}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              JORGE
            </motion.h1>

            <motion.h2
              className={`text-xl md:text-2xl lg:text-3xl font-medium mb-6 ${
                theme === "dark"
                  ? "text-slate-200"
                  : theme === "brutalism"
                  ? "text-black font-bold"
                  : "text-gray-700"
              }`}
              style={{
                textShadow:
                  theme === "dark"
                    ? "0 2px 8px rgba(0,0,0,0.4)"
                    : theme === "brutalism"
                    ? "1px 1px 0 #000, -0.5px -0.5px 0 #fff, 0.5px -0.5px 0 #000, -0.5px 0.5px 0 #fff, 0.5px 0.5px 0 #000"
                    : "0 1px 4px rgba(0,0,0,0.1)",
                WebkitTextStroke: theme === "brutalism" ? "0.3px #000" : "none",
              }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span
                className={`${
                  theme === "dark" ? "text-emerald-400" : "text-emerald-600"
                } font-semibold`}
              >
                Frontend
              </span>{" "}
              <span
                className={`${
                  theme === "dark" ? "text-blue-400" : "text-blue-600"
                } font-semibold`}
              >
                React
              </span>{" "}
              <span
                className={`${
                  theme === "dark" ? "text-purple-400" : "text-purple-600"
                } font-semibold`}
              >
                Engineer
              </span>
            </motion.h2>

            <motion.div
              className={`w-24 h-1 mx-auto rounded-full ${
                theme === "dark"
                  ? "bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
                  : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
              }`}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.6 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
