"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsDataEn, projectsDataDe } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.1);
  const { t, i18n } = useTranslation("headings");

  const projectsData = i18n.language === "de" ? projectsDataDe : projectsDataEn;

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("projects")}</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
