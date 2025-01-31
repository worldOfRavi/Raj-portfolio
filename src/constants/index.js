import project1 from "../assets/projects/rajEcommerce.png";
import project2 from "../assets/projects/rajRealState.png";
import project3 from "../assets/projects/rajChatApp.png";
import project4 from "../assets/projects/musicPlayer.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "July 2022 - March 2024",
    role: "Full Stack Software Developer",
    company: "SoftTech Park.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "June 2021 - March 2022",
    role: "Frontend Developer Intern",
    company: "SoftTech Park",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "Dec 2018 - Mar 2019",
    role: "Intern in Python and Machine Learning",
    company: "Karunadu Technology Pvt. Ltd",
    description: `Implemented creative ideas with club members and conducted interactive sessions. Actively participated in activities such as cleaning up public spaces, organizing events, assisting in community centers, etc. Worked for vulnerable people, for instance, the elderly, children, homeless individuals, and people with disabilities.`,
    technologies: ["Python", "Django", "HTML", "CSS"],
  },
  // {
  //   year: "2020 - 2021",
  //   role: "Software Engineer",
  //   company: "Paypal",
  //   description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
  //   technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  // },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Real Estate Management",
    image: project2,
    description:
      "Real Estate Connect is a user-friendly platform where users can register, log in, and manage property listings. Property owners can list properties for rent or sale, while seekers can browse and view detailed listings. The app also enables direct communication between users and property owners to discuss rental terms or property purchases, simplifying real estate transactions.",
    technologies: ["React","Express","MongoDB","NodeJs","TailWind CSS", "Firebase"],
  },
  {
    title: "Real Chat App",
    image: project3,
    description:
      "Chat Connect is a simple and secure messaging app designed for real-time text communication. Users can register, log in, and instantly connect with friends or groups through text messages. The app ensures an engaging experience with features like media sharing and keeps conversations safe with end-to-end encryption.",
    technologies: ["React","MongoDB","Express","NodeJs","Tailwind CSS","Socket.IO"],
  },
  {
    title: "Music Player",
    image: project4,
    description:
      "TunePlay is a simple, intuitive music player app for browsing, playing, and organizing your favorite songs. Enjoy seamless playback and high-quality audio, all in one place.",
    technologies: ["React","CSS","MongoDB","Node","Express"],
  },
];

export const CONTACT = {
  address: "16 Madrid St. M1P 4L8, Scarborough, ON. Canada ",
  phoneNo: "+1 6473250215",
  email: "rajendra20023@.com",
};
