"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I began <span className="underline">learning programming</span> at the
        age of 16 at a student research center. Together with my friends, I
        participated in several projects for "Jugend forscht", a student and
        youth competition in the field of natural sciences and technology in
        Germany. With one particular project, we won the national prize for the{" "}
        <span className="font-medium">best interdisciplinary work</span>. In
        this project I was responsible for writing the software for a prototype
        of a process engineering plant. had my first company when I was 19 with
        which I helped other people with their{" "}
        <span className="italic">computer problems</span> and created{" "}
        <span className="italic">websites</span> for them.
      </p>
      <p className="mb-3">
        After completing school, I pursued a Bachelor of Science in{" "}
        <span className="font-medium">Security and Safety Engineering</span> at
        the Furtwangen University. Following that, I worked at the Paul Scherrer
        Institute, the largest research institute in Switzerland, as a{" "}
        <span className="font-medium">radiation protection engineer</span> for
        over two years. I had many exciting tasks and responsibilities and was
        learning a lot about{" "}
        <span className="italic">radiation protection</span>, but finally
        slipped into a routine where I felt that I was not able to fully develop
        my potential and use all of my{" "}
        <span className="italic">technical and analytical skills</span>, so I
        eventually decided to shift my career towards the tech industry and turn
        my hobby and <span className="underline">passion of programming</span>{" "}
        into my profession. I enrolled in the{" "}
        <span className="font-medium">Full-Stack Web Development</span> course
        at CareerFoundry, and have discovered that this is{" "}
        <span className="italic">exactly what I want to do</span>.
      </p>
      <p>
        My core stack is{" "}
        <span className="font-medium">React, Next.js, Node.js and MongoDB</span>
        . I offer Backend, Frontend, Full-Stack and Serverless Development. I am
        currently looking for <span className="italic">freelance jobs</span>{" "}
        where I can create beautiful frontends, efficient backends or functional
        full-stack projects..
      </p>
    </motion.section>
  );
}
