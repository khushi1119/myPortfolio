// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";

// experience section logo
import companyLogo from "./assets/experience_logo/company.jpg";
import msmeLogo from "./assets/experience_logo/msmeLogo.png";
// Education Section Logo's
import College from "./assets/education_logo/college.jpg";
import schoollogo from "./assets/education_logo/schoollogo.png";

//work
// HireAlytics

import hireanalyticsHome from "./assets/work/HireAIlytics/HireAIlyticsHome.png";
import hireanalytics2 from "./assets/work/HireAIlytics/HireAIlytics2.png";
import hireanalytics3 from "./assets/work/HireAIlytics/HireAIlytics3.png";
// Connectify

import connectifyHome from "./assets/work/connectify/connectifyHome.png";
import connectify2 from "./assets/work/connectify/connectify2.png";
import connectify3 from "./assets/work/connectify/connectify3.png";

// Portfolio

import portfolioHome from "./assets/work/portfolio/portfolioHome.png";
import portfolio2 from "./assets/work/portfolio/portfolio2.png";
import portfolio3 from "./assets/work/portfolio/portfolio3.png";
export const SkillsInfo = [
  {
    title: "User Interfaces",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "SASS", logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Angular", logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Material UI", logo: materialuiLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Server & Database",
    skills: [
      { name: "Springboot", logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "PostgreSQL", logo: postgreLogo },
    ],
  },
  {
    title: "Core Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: companyLogo,
    role: "Fullstack Developer",
    company: "QKS Group",
    date: "May 2026 - June 2026",
    desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
      "Redux",
      " Next Js",
    ],
  },
  {
    id: 1,
    img: msmeLogo,
    role: "Fullstack Developer",
    company: "MSME Technology Center ",
    date: "July 2026 - August 2026",
    desc: "Participated in an industry-oriented training program covering full stack web development concepts. Worked on application design, REST API integration, database management, and responsive user interface development using the MERN stack.",
    skills: [
      "JavaScript",
      "React JS",
      "TypeScript",
      "Node JS",
      "Tailwind CSS",
      "MongoDb",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: College,
    school: "Shri Shankaracharya Professional University, Bhilai",
    date: "Sept 2023 - Present",
    grade: "89.03%",
    desc: "Currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering. I am developing strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Computer Networks, and Web Development. I actively work on projects and continuously improve my problem-solving and software development skills.",
    degree:
      "Bachelor of Technology (B.Tech) - Computer Science and Engineering",
  },
  {
    id: 1,
    img: schoollogo,
    school: "St. Thomas Public School",
    date: "2022 - 2023",
    grade: "87.4%",
    desc: "Completed Higher Secondary Education with Physics, Chemistry, and Mathematics. Developed analytical and problem-solving skills while building a strong academic foundation.",
    degree: "Class XII (PCM)",
  },
  {
    id: 2,
    img: schoollogo,
    school: "St.Thomas Public School",
    date: "2020 - 2021",
    grade: "94%",
    desc: "Completed Secondary Education with distinction. Built a strong foundation in Science, Mathematics, and Computer Applications.",
    degree: "Class X",
  },
];

export const projects = [
  {
    id: 0,
    title: "HireAlytics - AI Resume Analyzer",
    description:
      "Built an AI-powered resume analysis platform that evaluates resumes against job descriptions and generates ATS-based feedback. Implemented keyword matching, resume scoring, PDF parsing, resume preview, and cloud storage integration using Puter APIs. Developed a modern and responsive interface with React.js, TypeScript, and Tailwind CSS to enhance user experience.",
    screenshots: [hireanalyticsHome, hireanalytics2, hireanalytics3],
    tags: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "AI",
      "ATS Scoring",
      "PDF Processing",
      "Puter API",
    ],
    github: "https://github.com/khushi1119/HireAIlytics",
    webapp: "https://hire-a-ilytics.vercel.app/",
  },

  {
    id: 1,
    title: "Connectify - Real-Time Video Conferencing Platform",
    description:
      "Developed a full-stack video conferencing application using the MERN stack and WebRTC. Enabled multi-user video calls, meeting room creation, and real-time communication through Socket.IO signaling. Built scalable backend APIs, integrated MongoDB for data management, and designed a responsive interface for seamless collaboration across devices.",
    screenshots: [connectifyHome, connectify2, connectify3],
    tags: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "WebRTC",
      "Socket.IO",
      "MERN Stack",
    ],
    github: "https://github.com/khushi1119/Connectify",
    webapp: "https://connectifyfrontend-3gra.onrender.com/",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a responsive portfolio website to showcase projects, technical skills, education, and achievements. Implemented modern UI/UX principles, smooth animations, and optimized performance for a seamless user experience.",

    screenshots: [portfolioHome, portfolio2, portfolio3],
    tags: ["React.js", "JavaScript", "CSS", "Responsive Design"],
    github: "YOUR_GITHUB_LINK",
    webapp: "YOUR_DEPLOYMENT_LINK",
  },
];
