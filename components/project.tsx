"use client";

import { FaGithubSquare, FaExternalLinkAlt } from "react-icons/fa";
import { projectsDataEn, projectsDataDe } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

type ProjectProps =
  | (typeof projectsDataEn)[number]
  | (typeof projectsDataDe)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  liveUrl,
  githubUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] sm:group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl flex justify-between">
            {title}
            <div>
              {liveUrl && (
                <a href={liveUrl} target="_blank">
                  <FaExternalLinkAlt className="inline opacity-70 scale-90 hover:scale-105 transition-all -translate-y-0.5" />{" "}
                </a>
              )}
              {githubUrl && (
                <a href={githubUrl} target="_blank">
                  <FaGithubSquare className="inline opacity-70 scale-90 hover:scale-105 transition-all -translate-y-0.5" />
                </a>
              )}
            </div>
          </h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag: string, index: number) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase trecking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={100}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2
        group-even:group-hover:translate-x-3
        group-even:group-hover:rotate-2
        group-even:right-[initial]
        group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
