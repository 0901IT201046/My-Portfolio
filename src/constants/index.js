import {
    mobile,
    backend,
    frontend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    twowaits,
    shopify,
    project1,
    project2,
    project3,
    threejs,
    python,
    cpp,
    adhayayanam,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "cpp",
      icon: cpp,
    },
  ];
  
  const experiences = [
    {
      title: "DSA Scholar Intern",
      company_name: "TwoWaits",
      icon: twowaits,
      iconBg: "#E6DEDD",
      date: "Nov 2021 - Jan 2022",
      points: [
        "Designed and implemented optimized data structures using C++ for large-scale data processing, resulting in a 30% improvement in program performance.",
        "Conducted a thorough analysis of algorithms and their runtime complexities, and applied this knowledge to optimize existing codebase to handle large datasets",
        "Worked closely with the team to design and implement a new algorithm for graph traversal using C++, which resulted in a 40% reduction in memory usage and improved overall system performance.",
        "Collaborated with senior engineers to develop and implement a scalable system architecture for data storage and retrieval, ensuring efficient and secure data handling.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "College Project",
      icon: adhayayanam,
      iconBg: "#383E56",
      date: "Sept 2022 - Nov 2023",
      points: [
        "Developed the Adhyayanam app using React Native, AWS Amplify which allows college students to create custom study schedules, track their progress, and receive personalized recommendations for study materials, resulting in a more efficient and effective learning experience.",
        "Designed and implemented a seamless user interface using React Native components, resulting in a visually appealing and user-friendly app that has received positive feedback from users.",
        "Collaborated with backend team to integrate the app with various APIs and services, including AWS Amplify, to ensure seamless and reliable functionality.",
        "Conducted extensive testing and debugging to ensure that the Adhyayanam app was stable, scalable, and met the high standards for quality, resulting in a highly-rated app on app stores.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Adhyayanam",
      description:
        "React Native based E-learning platform that provides all the college material including leatures at one place and saves users time and increases efficiency.",
      tags: [
        {
          name: "react-native",
          color: "blue-text-gradient",
        },
        {
          name: "aws-amplify",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/0901IT201046/Adhyayanam",
    },
    {
      name: "Google Keep Clone",
      description:
        "Developed a web app replicating Google Keep with note creation, organization, different note types, tagging, categorization, and collaboration.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/0901IT201046/Google-Keep-Clone",
    },
    {
      name: "Tic Tac Toe",
      description:
        "The Tic Tac Toe game in ReactJS project involves creating a web application that allows users to play the classic game against a computer opponent with responsive design.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/0901IT201046/ReactJS-Projects/tree/main/Tic-tac-toe",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };