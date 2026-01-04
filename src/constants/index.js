const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 550, suffix: "+", label: "DSA Problems Solved" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 20, suffix: "+", label: "Hackathons Participated" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/analysis.png",
    title: "Analytical Thinking",
    desc: "Analyzing system behavior, edge cases, and performance to improve outcomes.",
  },
  {
    imgPath: "/images/problem-solving.png",
    title: "Problem Solving",
    desc: "Breaking down complex problems and solving them using structured and logical approaches.",
  },
  {
    imgPath: "/images/collaboration.png",
    title: "Collaboration & Communication",
    desc: "Effectively communicating ideas and collaborating in teams during projects and hackathons.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "AI Agent Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
  review:
    "Contributed to building scalable and responsive web applications using the MERN stack, focusing on clean UI, performance, and real-world usability.",
  imgPath: "/images/exp1.png",
  logoPath: "/images/logo1.png",
  title: "MERN Stack Intern",
  date: "Sep 2025 – Dec 2025",
  responsibilities: [
    "Built responsive web applications using React, JavaScript, HTML, CSS, and Material UI.",
    "Integrated REST APIs and connected frontend components with an Express.js backend.",
    "Ensured cross-browser compatibility and accessibility across multiple devices.",
    "Collaborated with team members to deliver user-focused features and improve overall UI performance.",
  ],
  },
  {
  review:
    "Played a key role in ensuring the quality and reliability of AI agents by creating high-quality datasets and validating model outputs across diverse scenarios.",
  imgPath: "/images/exp2.png",
  logoPath: "/images/logo2.png",
  title: "AI Agent QA",
  date: "Jan 2026 – Present",
  responsibilities: [
    "Created and curated high-quality datasets to support AI agent training and evaluation.",
    "Performed data labeling and annotation to improve model accuracy and consistency.",
    "Tested AI agent responses across edge cases to identify errors, bias, and inconsistencies.",
    "Collaborated with development teams to provide feedback and improve AI agent behavior.",
  ],
},
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
];

const testimonials = [
  {
    name: "Piyush Dharpure",
    mentions: "@techiepiyush",
    review:
      "During the interview process at Autonex.AI, Pruthviraj demonstrated strong problem-solving skills and a clear understanding of real-world technical challenges. His approach to reasoning and clarity of thought stood out positively.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Khushi",
    mentions: "@khushi-07",
    review:
      "I initially connected with Pruthviraj from the HR side, and his professionalism, communication skills, and eagerness to learn made the interaction very smooth. He showed genuine interest in the role and aligned well with our expectations.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Nikhil Gawade",
    mentions: "@code360",
    review:
      "Pruthviraj’s automation project caught our attention due to its practical value and clean implementation. His work demonstrated how automation could directly support our internal workflows, and his technical mindset was impressive.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Atharv Joundal",
    mentions: "@AJ007",
    review:
      "Working with Pruthviraj on college projects was a great experience. He consistently contributed thoughtful ideas, handled his responsibilities well, and helped the team move forward during challenging phases of the project.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Pratik Nikam",
    mentions: "@nikampratik",
    review:
      "As a peer, I found Pruthviraj to be reliable and technically sound. He actively participated in discussions, took ownership of tasks, and ensured that project deliverables were completed on time.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Chinmay Kamlaskar",
    mentions: "@coder-chinmay",
    review:
      "Collaborating with Pruthviraj on academic projects was productive and motivating. His ability to understand requirements, debug issues, and support teammates made him a valuable contributor to the team.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
  {
    name: "github",
    imgPath: "/images/github.jpeg",
  },
  {
    name: "leetcode",
    imgPath: "/images/leetcode.jpeg",
  },
  {
    name: "codechef",
    imgPath: "/images/codechef.jpeg",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
