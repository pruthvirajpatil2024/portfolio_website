import { siAngular, siExpress, siSpringboot, siTypescript } from "simple-icons";

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
    name: "Achievements",
    link: "#achievements",
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
  { name: "expressjs", label: "Express.js", color: "#FFFFFF" },
  { name: "html5", label: "HTML5", color: "#E34F26" },
  { name: "css3", label: "CSS3", color: "#1572B6" },
  { name: "cplusplus", label: "C++", color: "#00599C" },
  { name: "java", label: "Java", color: "#F89820" },
  { name: "typescript", label: "TypeScript", color: "#3178C6" },
  { name: "javascript", label: "JavaScript", color: "#F7DF1E" },
  { name: "selenium", label: "Selenium", color: "#43B02A" },
  { name: "sql", label: "SQL", color: "#4479A1" },
  { name: "aws", label: "AWS", color: "#FF9900" },
  { name: "react", label: "React", color: "#61DAFB" },
];

const abilities = [
  {
    icon: "adaptability",
    title: "Adaptability",
    desc: "Quickly adjusting to new tools, technologies, and changing requirements without losing momentum.",
  },
  {
    icon: "resilience",
    title: "Resilience",
    desc: "Staying focused and consistent under pressure, learning from setbacks, and pushing through challenges.",
  },
  {
    icon: "problem-solving",
    title: "Problem Solving",
    desc: "Breaking down complex problems and solving them using structured and logical approaches.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.webp",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.webp",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.webp",
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
    name: "Angular Developer",
    iconPath: siAngular.path,
    // Angular's current brand mark is near-black; use the classic Angular
    // red instead so the logo is actually visible on the dark card.
    iconColor: "#DD0031",
    scale: 0.09,
    rotation: [0, 0, 0],
  },
  {
    name: "TypeScript Developer",
    iconPath: siTypescript.path,
    iconColor: `#${siTypescript.hex}`,
    scale: 0.09,
    rotation: [0, 0, 0],
  },
  {
    name: "Express Developer",
    iconPath: siExpress.path,
    // Express's mark is a black wordmark; use white so it reads on the card.
    iconColor: "#FFFFFF",
    scale: 0.09,
    rotation: [0, 0, 0],
  },
  {
    name: "Spring Boot Developer",
    iconPath: siSpringboot.path,
    iconColor: `#${siSpringboot.hex}`,
    scale: 0.09,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
  review:
    "Contributed to building scalable and responsive web applications using the Full stack, focusing on clean UI, performance, and real-world usability.",
  imgPath: "/images/exp1.webp",
  logoPath: "/images/logo1.webp",
  title: "Full Stack Intern",
  date: "Oct 2025 – Dec 2025",
  responsibilities: [
    "Built responsive web applications using React, JavaScript, HTML, CSS, and Material UI.",
    "Integrated REST APIs and connected frontend components with an Express.js and Spring Boot backend.",
    "Ensured cross-browser compatibility and accessibility across multiple devices.",
    "Collaborated with team members to deliver user-focused features and improve overall UI performance.",
  ],
  },
  {
  review:
    "Contributed to the development and maintenance of scalable web applications by building responsive user interfaces, developing robust backend APIs, and collaborating with cross-functional teams to deliver reliable, high-quality software solutions.",
  imgPath: "/images/exp2.webp",
  logoPath: "/images/logo2.webp",
  title: "Full Stack Intern",
  date: "Jan 2026 – July 2026",
  responsibilities: [
    "Developed responsive and user-friendly web interfaces using modern frontend technologies.",
  "Built and maintained RESTful APIs and backend services to support application functionality.",
  "Integrated databases, authentication systems, and third-party APIs into web applications.",
  "Collaborated with designers and developers to implement new features, optimize performance, and resolve bugs.",
  ],
},
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.webp",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.webp",
  },
];

const testimonials = [
  {
    name: "Piyush Dharpure",
    mentions: "@techiepiyush",
    review:
      "During the interview process at Autonex.AI, Pruthviraj demonstrated strong problem-solving skills and a clear understanding of real-world technical challenges. His approach to reasoning and clarity of thought stood out positively.",
    imgPath: "/images/client1.webp",
    rating: 5,
  },
  {
    name: "Khushi",
    mentions: "@khushi-07",
    review:
      "I initially connected with Pruthviraj from the HR side, and his professionalism, communication skills, and eagerness to learn made the interaction very smooth. He showed genuine interest in the role and aligned well with our expectations.",
    imgPath: "/images/client3.webp",
    rating: 4.5,
  },
  {
    name: "Nikhil Gawade",
    mentions: "@code360",
    review:
      "Pruthviraj’s automation project caught our attention due to its practical value and clean implementation. His work demonstrated how automation could directly support our internal workflows, and his technical mindset was impressive.",
    imgPath: "/images/client2.webp",
    rating: 4,
  },
  {
    name: "Atharv Joundal",
    mentions: "@AJ007",
    review:
      "Working with Pruthviraj on college projects was a great experience. He consistently contributed thoughtful ideas, handled his responsibilities well, and helped the team move forward during challenging phases of the project.",
    imgPath: "/images/client5.webp",
    rating: 5,
  },
  {
    name: "Pratik Nikam",
    mentions: "@nikampratik",
    review:
      "As a peer, I found Pruthviraj to be reliable and technically sound. He actively participated in discussions, took ownership of tasks, and ensured that project deliverables were completed on time.",
    imgPath: "/images/client4.webp",
    rating: 4.5,
  },
  {
    name: "Chinmay Kamlaskar",
    mentions: "@coder-chinmay",
    review:
      "Collaborating with Pruthviraj on academic projects was productive and motivating. His ability to understand requirements, debug issues, and support teammates made him a valuable contributor to the team.",
    imgPath: "/images/client6.webp",
    rating: 4,
  },
];


const achievements = [
  {
    icon: "trophy",
    title: "Myntra Ramp-Up",
    highlight: "Finalist",
    detail:
      "Selected as a finalist in Myntra's Ramp-Up program, standing out among a highly competitive nationwide applicant pool.",
  },
  {
    icon: "branch",
    title: "Open Source",
    highlight: "3-4 PRs Merged",
    detail:
      "Contributed pull requests to CARE_Fe and Rocket.Chat, collaborating with maintainers on real, large-scale production codebases.",
  },
  {
    icon: "paper",
    title: "Research",
    highlight: "2 Papers Published",
    detail:
      "Authored and published 2 research papers, contributing original work to the academic community.",
  },
];

const socialLinks = [
  {
    name: "linkedin",
    url: "https://www.linkedin.com/in/pruthviraj-patil-developer/",
  },
  {
    name: "github",
    url: "https://github.com/pruthvirajpatil2024/",
  },
  {
    name: "leetcode",
    url: "https://leetcode.com/u/pruthvirajpatil7686/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  achievements,
  testimonials,
  socialLinks,
  techStackIcons,
  techStackImgs,
  navLinks,
};
