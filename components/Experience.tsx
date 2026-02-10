"use client";

import { experiences } from "@/lib/data";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="experience"
      className="section-padding bg-secondary/30 overflow-hidden"
    >
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
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
            <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-2xl mx-auto px-4">
              My professional journey and the companies I&apos;ve had the
              privilege to work with
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line - Only visible on desktop */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-blue-600 via-purple-600 to-pink-600" />

            {/* Experience Items */}
            <div className="space-y-8 sm:space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Timeline Dot - Only visible on desktop */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background z-10 shadow-lg" />

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-[calc(50%-2rem)] ${
                      index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                    }`}
                  >
                    <motion.div
                      className="bg-background rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg border border-border hover:shadow-xl transition-all"
                      whileHover={{ scale: 1.02 }}
                    >
                      {/* Company and Position */}
                      <div className="flex items-start gap-3 sm:gap-4 mb-4">
                        <div className="p-2 sm:p-3 bg-primary/10 rounded-lg shrink-0">
                          <Briefcase className="text-primary" size={20} />
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-foreground">
                            {exp.position}
                          </h3>
                          <p className="text-base sm:text-lg text-primary font-semibold mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {/* Duration and Location */}
                      <div className="flex flex-wrap gap-3 sm:gap-4 mb-4 text-left">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar size={14} className="sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin size={14} className="sm:w-4 sm:h-4" />
                          <span className="text-xs sm:text-sm">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 text-left">
                        {exp.description.map((desc, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-sm sm:text-base text-muted-foreground"
                          >
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout - Only on desktop */}
                  <div className="hidden lg:block w-[calc(50%-2rem)]" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
