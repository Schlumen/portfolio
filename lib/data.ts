import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineSecurity } from "react-icons/md";
import { GiRadioactive } from "react-icons/gi";
import akanImg from "@/public/akan.png";
import chatImg from "@/public/chat.png";
import djangoImg from "@/public/django.png";
import myflixImg from "@/public/myflix.png";
import rickbaseImg from "@/public/rickbase.png";
import todoImg from "@/public/todo.png";
import xintelligenceImg from "@/public/x-intelligence.png";
import cloudstorageImg from "@/public/cloud-storage.png";
import meetImg from "@/public/meet.png";
import pokedexImg from "@/public/pokedex.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Co-Founder & Partner",
    location: "Überlingen, Germany",
    description:
      "I had my first company when I was 19 with which I helped other people with their computer problems and created websites for them.",
    icon: React.createElement(RiComputerLine),
    date: "2016 - 2017",
  },
  {
    title: "Information Security Internship",
    location: "Meersburg, Germany",
    description:
      "Establishment of an information security management system (ISMS) according to ISO 27001 together with the IT and QA Departments at Konzept Informationssysteme GmbH",
    icon: React.createElement(MdOutlineSecurity),
    date: "2019",
  },
  {
    title: "Bachelor of Science",
    location: "Furtwangen, Germany",
    description:
      "I graduated as the best of my semester after 3.5 years of studying Security and Safety Engineering.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Radiation Protection Engineer and Deputy Head of Group",
    location: "Villigen, Switzerland",
    description:
      "Responsible Radiation Protection Expert according to the guidelines of the supervisory authorities and internal regulations in all controlled and supervised areas of the Paul Scherrer Institute.",
    icon: React.createElement(GiRadioactive),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    location: "Waldshut-Tiengen, Germany",
    description:
      "I worked on several full-stack projects with the MERN stack and other frameworks and technologies throughout the CareerFoundry course and graduated after 9 months.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Full-Stack Web Developer",
    location: "Waldshut-Tiengen, Germany",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2019 - 2021",
  },
] as const;

export const projectsData = [
  {
    title: "MyFlix",
    description:
      "This is a full-stack project with backend and a React application as frontend. User can search and add movies to their list of favorites.",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap", "Angular"],
    imageUrl: myflixImg,
  },
  {
    title: "ToDo List",
    description:
      "This is a To-do list app based on the Eisenhower Matrix, designed to help you prioritize your tasks and maximize your productivity.",
    tags: ["React", "Node.js", "MongoDB", "CSS"],
    imageUrl: todoImg,
  },
  {
    title: "X Intelligence",
    description:
      "A beatuiful, simple and fully responsive website made for a client.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: xintelligenceImg,
  },
  {
    title: "Rickbase",
    description:
      "This app shows a list of all characters from the Rick and Morty series loaded from an external API. If you click on a character the character details will open. ",
    tags: ["HTML", "CSS", "TypeScript"],
    imageUrl: rickbaseImg,
  },
  {
    title: "Akan Name",
    description:
      "This project is a simple two page website that features the Akan names and culture. You can input your gender and date of birth and the app will show your Akan name.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: akanImg,
  },
  {
    title: "Chat App",
    description:
      "This React Native Chat App allows users to enter the chat room and start chatting with their friends. Users can also share their location and send photos.",
    tags: ["JavaScript", "React Native", "Firebase"],
    imageUrl: chatImg,
  },
  {
    title: "Cloud Storage",
    description:
      "This is a Google Drive Clone where users can create an account, create folders and upload files. Users can also update their profile and use the forgot password method.",
    tags: ["React", "Firebase", "JavaScript"],
    imageUrl: cloudstorageImg,
  },
  {
    title: "Recipe App",
    description:
      "This is a recipe web app where users can log in, view and search recipes as well as see statistics about the recipes that came up during the search.",
    tags: ["Python", "Django", "JavaScript"],
    imageUrl: djangoImg,
  },

  {
    title: "Meet",
    description:
      "This app will allow users to search for a city and get a list of events hosted in that city. This app was developed to build a serverless, progressive web application with React.",
    tags: ["React", "Testing", "JavaScript"],
    imageUrl: meetImg,
  },
  {
    title: "Pokedex",
    description:
      "This app shows a list of all pokemons loaded from the RESTful Pokémon API. If you click on a pokemons name a modal with the pokemons picture and details will open.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    imageUrl: pokedexImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "jQuery",
  "React",
  "React Native",
  "Angular",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Django",
  "Framer Motion",
  "Firebase",
  "AWS Lambda",
  "C++",
] as const;
