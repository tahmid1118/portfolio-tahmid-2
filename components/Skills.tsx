"use client";

import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [iconsLoaded, setIconsLoaded] = useState(false);

  useEffect(() => {
    // Load Devicon CSS
    if (!document.querySelector('link[href*="devicon"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href =
        "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css";
      document.head.appendChild(link);
      link.onload = () => {
        setIconsLoaded(true);
      };
    } else {
      // Defer state update to avoid synchronous setState in effect
      Promise.resolve().then(() => setIconsLoaded(true));
    }
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Skills
            </h2>
          </motion.div>

          {/* Skills Grid - All categories */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((category, categoryIndex) => (
              <motion.div
                key={category.category}
                variants={itemVariants}
                className="bg-background rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all border border-border"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-6 sm:mb-8 text-center text-foreground">
                  {category.category}
                </h3>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                  {category.items.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex flex-col items-center group relative"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={
                        inView && iconsLoaded
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.5 }
                      }
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        duration: 0.5,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill.icon.startsWith("/") ||
                      skill.icon.startsWith("http") ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform group-hover:scale-110"
                        />
                      ) : (
                        <i
                          className={`${skill.icon} text-4xl sm:text-6xl transition-transform group-hover:scale-110`}
                        />
                      )}
                      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs sm:text-sm font-medium text-foreground bg-background border border-border px-3 py-1 rounded-md shadow-lg z-10">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
