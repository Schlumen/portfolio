"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesDataEn, experiencesDataDe } from "@/lib/data";
import TimelineElement from "./timeline-element";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const { t, i18n } = useTranslation("headings");

  const experiencesData =
    i18n.language === "de" ? experiencesDataDe : experiencesDataEn;

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t("experience")}</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <TimelineElement key={index} item={item} />
        ))}
      </VerticalTimeline>
    </section>
  );
}
