"use client";

import { Slide } from "./article/Slide";
import { SkillBoxProps } from "./article/Slide";

export const Article: React.FC = () => {
  const experienceSkills: SkillBoxProps[] = [
    {
      txt: "TailwindCSS",
      msg: "HTML / CSS",
    },
    {
      txt: "TypeScript",
      msg: "JavaScript",
    },
    {
      txt: "NodeJS",
      msg: "jquery",
    },
    {
      txt: "SolidJS",
      msg: ":D",
    },
    {
      txt: "Next.js",
      msg: "React",
    },
    {
      txt: "Python",
      msg: "Webhook",
    },
  ];

  const experienceDate: string[] = ["03/2024", "01/2023", "12/2022", "08/2022"];

  const experienceDesc: string[] = [
    "- Contributed significantly to the development of a cross-platform CAD application utilizing SolidJS",
    "- Streamlined data extraction, processing, and seamless interface integration, catalyzing enhanced user insights",
    "- Innovatively redesigned software UI/UX, elevating aesthetic appeal and user engagement",
    "- Initiated a software logo redesign, conceptualizing and presenting 10+ compelling logo options to stakeholders",
    "- Integrated a webhook using JavaScript, enhancing real-time communication and data exchange capabilities",
    "- Executed a seamless migration of the project platform using Python, increasing efficiency and productivity",
    "- Collaborated on the frontend development of a cross-platform CAD application using TypeScript and SolidJS, driving innovative features and user experiences",
  ];

  const educationSkills: SkillBoxProps[] = [
    {
      txt: "PHP",
      msg: "Figma",
    },
    {
      txt: "MySQLi",
      msg: "Photoshop",
    },
    {
      txt: "Java",
      msg: "Illustrator",
    },
    {
      txt: "Python",
      msg: "Premiere",
    },
    {
      txt: "C#",
      msg: "GIMP",
    },
    {
      txt: "CPP",
      msg: "OpenToonz",
    },
  ];

  const educationDate: string[] = ["12/2022", "01/2020", "12/2019", "01/2014"];

  const educationDesc: string[] = [
    "- I studied Computer Science in INTI International University, majoring in Software Engineering",
    "- I studied Software Engineering because I love games and designing!",
    "- I'll show you how much I love designing later :D",
    "- Back in uni, I took Object-oriented Programming, Data Structure and Algorithms, Concurrent and Real-time System, and Mobile Application Development, I completed the projects of these courses using Java",
    "- I also took Web Programming with PHP, and Web Application Development where I learned PHP and C#, the projects were fun, this is also when I learned the beauty of frontend",
    "- I also took a CPP course, though to be honest I'm not good with it :P",
    "- I went to Pay Fong for my middle school, I joined Persatuan Bahasa Melayu and designed the club uniform :D",
    "- side note: I also took part in designing my class uniform both in middle school and primary school hehe~",
  ];

  return (
    <div id="article" className="article">
      <Slide
        id="experience"
        section="Experience"
        skillbox={experienceSkills}
        title="Software Engineer"
        subtitle="Oppstar Berhad"
        img="/assets/images/work.png"
        msg="I met some beautiful and wonderful people here"
        date={experienceDate}
        desc={experienceDesc}
        heading="Software Engineer Intern"
      />
      <Slide
        id="education"
        section="Education"
        skillbox={educationSkills}
        title="Computer Science major in Software Engineering"
        subtitle="INTI International University"
        img="/assets/images/uni.png"
        msg="Graduation day~! :D"
        date={educationDate}
        desc={educationDesc}
        heading="Pay Fong Middle School"
      />
    </div>
  );
};
