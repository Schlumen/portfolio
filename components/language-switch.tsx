"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/i18nConfig";
import clsx from "clsx";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const toggleLanguage = () => {
    const newLocale = currentLocale === "en" ? "de" : "en";

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path

    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname, { scroll: false });
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
        { scroll: false }
      );
    }

    router.refresh();
  };

  return (
    <>
      <button
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={toggleLanguage}
      >
        <span
          className={clsx("fi !w-5", {
            "fi-de": currentLocale === "de",
            "fi-gb": currentLocale === "en",
          })}
        ></span>
      </button>
    </>
  );
}
