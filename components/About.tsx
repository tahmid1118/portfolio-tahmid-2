"use client";

import { aboutMe, personalInfo } from "@/lib/data";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { useInView } from "react-intersection-observer";

export default function About() {
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
    <section id="about" className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  Who I Am
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutMe.introduction}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  What I Do
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutMe.description}
                </p>
              </div>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 pt-6"
                variants={itemVariants}
              >
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg shadow-sm">
                  <div className="text-3xl font-bold gradient-text">30+</div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Happy Clients
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Contact Info & Details */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-background p-8 rounded-2xl shadow-lg border border-border">
                <h3 className="text-2xl font-semibold mb-6 text-foreground">
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="text-foreground">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Facts */}
              <div className="bg-linear-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-2xl border border-border">
                <h3 className="text-xl font-semibold mb-4 text-foreground">
                  Quick Facts
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Available for freelance projects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Open to remote opportunities
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Fast learner and team player
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    Passionate about clean code
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
