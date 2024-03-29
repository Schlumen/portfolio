import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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

export const experiencesDataEn = [
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
      "I graduated as the best of my semester after 3.5 years of studying Security & Safety Engineering.",
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
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Full-Stack Web Developer",
    location: "Waldshut-Tiengen, Germany",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind and MongoDB. I'm open to freelance opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - today",
  },
] as const;

export const experiencesDataDe = [
  {
    title: "Mitgründer & Gesellschafter",
    location: "Überlingen, Deutschland",
    description:
      "Ich hatte meine erste Firma mit 19 Jahren, mit der ich anderen Menschen bei ihren Computerproblemen half und Webseiten für sie erstellte.",
    icon: React.createElement(RiComputerLine),
    date: "2016 - 2017",
  },
  {
    title: "Praktikum Informationssicherheit",
    location: "Meersburg, Deutschland",
    description:
      "Aufbau eines Informationssicherheitsmanagementsystems (ISMS) gemäß ISO 27001 zusammen mit den IT- und QM-Abteilungen bei Konzept Informationssysteme GmbH.",
    icon: React.createElement(MdOutlineSecurity),
    date: "2019",
  },
  {
    title: "Bachelor of Science",
    location: "Furtwangen, Deutschland",
    description:
      "Ich schloss mein Studium in Security & Safety Engineering nach 3,5 Jahren als Bester meines Semesters ab.",
    icon: React.createElement(LuGraduationCap),
    date: "2017 - 2020",
  },
  {
    title: "Strahlenschutzingenieur und stellvertretender Gruppenleiter",
    location: "Villigen, Schweiz",
    description:
      "Verantwortlicher Strahlenschutzexperte gemäß den Richtlinien der Aufsichtsbehörden und internen Vorschriften in allen kontrollierten und überwachten Bereichen des Paul Scherrer Instituts.",
    icon: React.createElement(GiRadioactive),
    date: "2021 - 2023",
  },
  {
    title: "Full-Stack Web Development Bootcamp",
    location: "Waldshut-Tiengen, Deutschland",
    description:
      "Ich arbeitete an mehreren Full-Stack-Projekten mit dem MERN-Stack und anderen Frameworks und Technologien während des CareerFoundry Kurses und schloss diesen nach 9 Monaten ab.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Freelance Full-Stack Webentwickler",
    location: "Waldshut-Tiengen, Deutschland",
    description:
      "Ich bin Full-Stack-Entwickler, der als Freelancer arbeitet. Mein Stack umfasst React, Next.js, TypeScript, Tailwind und MongoDB. Ich bin offen für freelance Jobangebote.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - heute",
  },
] as const;

export const projectsDataEn = [
  {
    title: "MyFlix",
    description:
      "This is a full-stack project with backend and a React application as frontend. User can search and add movies to their list of favorites.",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap", "Angular"],
    imageUrl: myflixImg,
    liveUrl: "https://myflix.haendler.dev/",
    githubUrl: "https://github.com/Schlumen/movie-api",
  },
  {
    title: "ToDo List",
    description:
      "This is a To-do list app based on the Eisenhower Matrix, designed to help you prioritize your tasks and maximize your productivity.",
    tags: ["React", "Node.js", "MongoDB", "CSS"],
    imageUrl: todoImg,
    liveUrl: "https://todoapp-afqp.onrender.com/",
    githubUrl: "https://github.com/Schlumen/todo-crud-app",
  },
  {
    title: "X Intelligence",
    description:
      "A beatuiful, simple and fully responsive website made for a client.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: xintelligenceImg,
    liveUrl: "https://x-intelligence.de/",
    githubUrl: "",
  },
  {
    title: "Rickbase",
    description:
      "This app shows a list of all characters from the Rick and Morty series loaded from an external API. If you click on a character the character details will open. ",
    tags: ["HTML", "CSS", "TypeScript"],
    imageUrl: rickbaseImg,
    liveUrl: "https://schlumen.github.io/rickbase/",
    githubUrl: "https://github.com/Schlumen/rickbase",
  },
  {
    title: "Akan Name",
    description:
      "This project is a simple two page website that features the Akan names and culture. You can input your gender and date of birth and the app will show your Akan name.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: akanImg,
    liveUrl: "https://schlumen.github.io/akan-name-generator/",
    githubUrl: "https://github.com/Schlumen/akan-name-generator",
  },
  {
    title: "Chat App",
    description:
      "This React Native Chat App allows users to enter the chat room and start chatting with their friends. Users can also share their location and send photos.",
    tags: ["JavaScript", "React Native", "Firebase"],
    imageUrl: chatImg,
    liveUrl: "",
    githubUrl: "https://github.com/Schlumen/chat-app",
  },
  {
    title: "Cloud Storage",
    description:
      "This is a Google Drive Clone where users can create an account, create folders and upload files. Users can also update their profile and use the forgot password method.",
    tags: ["React", "Firebase", "JavaScript"],
    imageUrl: cloudstorageImg,
    liveUrl: "https://cloud-storage-a3aab.web.app/",
    githubUrl: "https://github.com/Schlumen/cloud-storage",
  },
  {
    title: "Recipe App",
    description:
      "This is a recipe web app where users can log in, view and search recipes as well as see statistics about the recipes that came up during the search.",
    tags: ["Python", "Django", "JavaScript"],
    imageUrl: djangoImg,
    liveUrl: "https://django-recipe-app-d9f628d5ba3f.herokuapp.com/",
    githubUrl: "https://github.com/Schlumen/django-app",
  },

  {
    title: "Meet",
    description:
      "This app will allow users to search for a city and get a list of events hosted in that city. This app was developed to build a serverless, progressive web application with React.",
    tags: ["React", "Testing", "JavaScript"],
    imageUrl: meetImg,
    liveUrl: "https://schlumen.github.io/meet/",
    githubUrl: "https://github.com/Schlumen/meet",
  },
  {
    title: "Pokedex",
    description:
      "This app shows a list of all pokemons loaded from the RESTful Pokémon API. If you click on a pokemons name a modal with the pokemons picture and details will open.",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
    imageUrl: pokedexImg,
    liveUrl: "https://schlumen.github.io/simple-js-app/",
    githubUrl: "https://github.com/Schlumen/simple-js-app",
  },
] as const;

export const projectsDataDe = [
  {
    title: "MyFlix",
    description:
      "Dies ist ein Full-Stack-Projekt mit Backend und einer React-Anwendung als Frontend. Benutzer können nach Filmen suchen und diese zu ihrer Liste der Favoriten hinzufügen.",
    tags: ["React", "Node.js", "MongoDB", "Bootstrap", "Angular"],
    imageUrl: myflixImg,
    liveUrl: "https://myflix.haendler.dev/",
    githubUrl: "https://github.com/Schlumen/movie-api",
  },
  {
    title: "ToDo Liste",
    description:
      "Diese To-Do App basiert auf der Eisenhower-Matrix und hilft Ihnen bei der Priorisierung Ihrer Aufgaben.",
    tags: ["React", "Node.js", "MongoDB", "CSS"],
    imageUrl: todoImg,
    liveUrl: "https://todoapp-afqp.onrender.com/",
    githubUrl: "https://github.com/Schlumen/todo-crud-app",
  },
  {
    title: "X Intelligence",
    description:
      "Eine schöne, einfache und vollständig responsive Website, die für einen Kunden erstellt wurde.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: xintelligenceImg,
    liveUrl: "https://x-intelligence.de/",
    githubUrl: "",
  },
  {
    title: "Rickbase",
    description:
      "Diese App zeigt alle Charaktere aus der Rick and Morty Serie. Wenn Sie auf einen Charakter klicken, werden die Details des Charakters geöffnet.",
    tags: ["HTML", "CSS", "TypeScript"],
    imageUrl: rickbaseImg,
    liveUrl: "https://schlumen.github.io/rickbase/",
    githubUrl: "https://github.com/Schlumen/rickbase",
  },
  {
    title: "Akan Name",
    description:
      "Diese Seite zeigt die Akan-Namen und die Kultur. Sie können Ihr Geschlecht und Ihr Geburtsdatum eingeben, und die App zeigt Ihnen Ihren Akan-Namen.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: akanImg,
    liveUrl: "https://schlumen.github.io/akan-name-generator/",
    githubUrl: "https://github.com/Schlumen/akan-name-generator",
  },
  {
    title: "Chat App",
    description:
      "Diese Chat-App ermöglicht es Benutzern, den Chatraum zu betreten und mit ihren Freunden zu chatten, sowie Standort und Fotos zu teilen.",
    tags: ["JavaScript", "React Native", "Firebase"],
    imageUrl: chatImg,
    liveUrl: "",
    githubUrl: "https://github.com/Schlumen/chat-app",
  },
  {
    title: "Cloud Storage",
    description:
      "Dies ist ein Google Drive-Klon, bei dem Benutzer ein Konto erstellen, Ordner erstellen und Dateien hochladen können. Benutzer können auch ihr Profil bearbeiten.",
    tags: ["React", "Firebase", "JavaScript"],
    imageUrl: cloudstorageImg,
    liveUrl: "https://cloud-storage-a3aab.web.app/",
    githubUrl: "https://github.com/Schlumen/cloud-storage",
  },
  {
    title: "Rezept App",
    description:
      "Dies ist eine Rezept-Web-App, bei der Benutzer Rezepte anzeigen und suchen sowie Statistiken zu den Rezepten sehen können.",
    tags: ["Python", "Django", "JavaScript"],
    imageUrl: djangoImg,
    liveUrl: "https://django-recipe-app-d9f628d5ba3f.herokuapp.com/",
    githubUrl: "https://github.com/Schlumen/django-app",
  },

  {
    title: "Meet",
    description:
      "Diese App ermöglicht es Benutzern, nach einer Stadt zu suchen und eine Liste der in dieser Stadt stattfindenden Veranstaltungen zu erhalten.",
    tags: ["React", "Testing", "JavaScript"],
    imageUrl: meetImg,
    liveUrl: "https://schlumen.github.io/meet/",
    githubUrl: "https://github.com/Schlumen/meet",
  },
  {
    title: "Pokedex",
    description:
      "Diese App zeigt alle Pokémon, von der RESTful Pokémon API. Bei Klick auf den Namen eines Pokémon, werden die Details geöffnet.",
    tags: ["HTML", "CSS", "jQuery", "JavaScript", "Bootstrap"],
    imageUrl: pokedexImg,
    liveUrl: "https://schlumen.github.io/simple-js-app/",
    githubUrl: "https://github.com/Schlumen/simple-js-app",
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
