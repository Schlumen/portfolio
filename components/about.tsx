"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslation } from "react-i18next";

export default function About() {
  const { ref } = useSectionInView("About");
  const { t } = useTranslation("about");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t("about")}</SectionHeading>
      <p className="mb-3">
        {t("start")} <span className="underline">{t("learn")}</span> {t("jufo")}{" "}
        <span className="font-medium">{t("best")}</span> {t("company")}{" "}
        <span className="italic">{t("pc")}</span> {t("created")}{" "}
        <span className="italic">{t("websites")} </span>
        {t("them")}.
      </p>
      <p className="mb-3">
        {t("bachelor")}{" "}
        <span className="font-medium">Security & Safety Engineering</span>{" "}
        {t("hfu_psi")} <span className="font-medium">{t("rpe")}</span>{" "}
        {t("tasks")} <span className="italic">{t("rp")}</span>
        {t("routine")} <span className="italic">{t("skills")}</span>
        {t("tech")} <span className="underline">{t("passion")}</span>{" "}
        {t("enroll")}{" "}
        <span className="font-medium">Full-Stack Web Development</span>{" "}
        {t("cf")} <span className="italic">{t("do")}</span>.
      </p>
      <p>
        {t("stack")} <span className="font-medium">{t("react")}</span>.{" "}
        {t("offer")} <span className="italic">{t("jobs")}</span> {t("projects")}
        .
      </p>
    </motion.section>
  );
}
