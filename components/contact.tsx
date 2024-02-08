"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { t } = useTranslation("contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t("contact")}</SectionHeading>
      <p className="text-gray-700 -mt-5 dark:text-white/80">
        {t("please")}{" "}
        <a className="underline" href="mailto:lumen@haendler.dev">
          lumen@haendler.dev
        </a>{" "}
        {t("form")}
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async formData => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully");
        }}
      >
        <input
          type="email"
          name="senderEmail"
          required
          maxLength={320}
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder={t("email")}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder={t("message")}
          name="message"
          required
          maxLength={3000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
