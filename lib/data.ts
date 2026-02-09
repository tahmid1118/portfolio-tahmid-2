export const personalInfo = {
  name: "Tahmid Shahriar Bhuiyan",
  title: "Team Leader (Full-stack)",
  tagline:
    "Building scalable web applications with modern frameworks and best practices",
  email: "tahmidshahriar.bd@gmail.com",
  phone: "+8801515652762",
  location: "Banasree, Rampura, Dhaka, Bangladesh",
  github: "https://github.com/tahmid1118",
  linkedin: "https://www.linkedin.com/in/tahmid630/",
  twitter: "https://x.com/TonyStark6300",
};

export const aboutMe = {
  introduction:
    "I'm a passionate Full Stack Developer and Team Leader with expertise in React.js, Next.js, and Node.js. ",
  description:
    "I specialize in building scalable full-stack web applications using React.js on the frontend and Node.js with Express.js on the backend. My backend experience includes REST API architecture, secure authentication, database design & integration, middleware implementation, and robust error handling, complemented by responsive UI development with HTML5, CSS3, and modern UI/UX practices.",
};

export const skills = [
  {
    category: "Languages",
    items: [
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "Dart", icon: "devicon-dart-plain colored" },
      { name: "C++", icon: "devicon-cplusplus-plain colored" },
    ],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      { name: "React.js", icon: "devicon-react-original colored" },
      { name: "Next.js", icon: "devicon-nextjs-plain" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Flutter", icon: "devicon-flutter-plain colored" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "Firebase", icon: "devicon-firebase-plain colored" },
    ],
  },
  {
    category: "Tools & Platforms",
    items: [
      { name: "GitHub", icon: "devicon-github-original" },
      { name: "MySQL Workbench", icon: "devicon-mysql-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" },
      { name: "Apidog", icon: "/Apidog.png" },
    ],
  },
];

export const experiences = [
  {
    company: "ULTRA-X BD LTD",
    position: "Team Leader (Full-stack Engineer)",
    duration: "3+ years",
    location: "Dhaka, Bangladesh",
    description: [
      "Led and mentored a cross-functional engineering team, driving sprint planning, task distribution, code reviews, and technical decision-making",
      "Architected and scaled production-grade applications using Next.js (App Router), selecting optimal rendering strategies (SSR, SSG, ISR, CSR) for performance and SEO",
      "Owned end-to-end system design for full-stack applications using React.js, Node.js, and Express.js with a strong focus on scalability and maintainability",
      "Designed and maintained robust backend services, including RESTful API architecture, authentication & authorization flows, and centralized error handling",
      "Planned and optimized MySQL database schemas, implementing indexing, query optimization, and data integrity strategies for high-traffic systems",
      "Established component-driven development and internal design systems to ensure reusable, consistent, and maintainable UI across products",
      "Enforced TypeScript-first development practices to improve code quality, reduce runtime errors, and support large-scale codebases",
      "Applied clean architecture, OOP, and SOLID principles across frontend and backend systems to enable modular and extensible designs",
      "Defined and maintained Git-based workflows (branching strategies, PR reviews, CI-friendly practices) to ensure high code quality and team collaboration",
      "Acted as the primary technical owner, collaborating with product, design, and business stakeholders to translate requirements into scalable technical solutions",
    ],
  },
];

export const projects = [
  {
    title: "UXBD APP",
    description:
      "A web application which is the ERP app for Ultra-X BD which maintains official formalities such as recording attendance, leave management, leave approval, hierarchy and leave management, hierarchy and leave management and many more.",
    technologies: ["Next.js", "Node.js", "MySQL", "Express.js", "TypeScript"],
    image: "/projects/uxbd.jpg",
    github: "",
    demo: "https://uxerp.ultra-x.jp/",
    featured: true,
  },
  {
    title: "VRT - Event Management System",
    description:
      "VRT is an event management app for Japan - Bangladesh collaborating event 'Code Samurai'. Records interested participant's data for the hackathon contest from all over Bangladesh. Generates an attendance record of the event. Shows necessary information and statistics about the event.",
    technologies: ["Next.js", "Node.js", "MySQL", "Express.js"],
    image: "/projects/vrt.jpg",
    github: "",
    demo: "",
    featured: true,
  },
  {
    title: "EMS - Exhibition Management System",
    description:
      "An exhibition management tool that helps organizing exhibitions in Japan. Records visitor and exhibitor's attendance. Generates ID card for every visitor. Manages project data transferring among visitors and exhibitors. Generates necessary reports.",
    technologies: ["Next.js", "Node.js", "MySQL", "Express.js"],
    image: "/projects/ems.jpg",
    github: "",
    demo: "https://bdtmp.ultra-x.jp/ems",
    featured: true,
  },
];

export const education = [
  {
    degree: "Bachelor of Science and Engineering",
    institution: "EAST WEST UNIVERSITY",
    duration: "Sep 2017 - May 2022",
    location: "Dhaka, Bangladesh",
    description:
      "Graduated with Best West University Merit Scholarship (full free studentship for 1 year). Scored 92/100 (A) in university admission test.",
  },
];

export const certifications = [
  {
    name: "Machine Learning based Recognition of Bangla Handwritten Characters",
    issuer:
      "International Conference on Inventive Research in Computing Applications (ICIRCA 2022)",
    date: "2022",
  },
  {
    name: "East West University Merit Scholarship",
    issuer: "East West University",
    date: "2017-2022",
  },
];
