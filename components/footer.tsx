import initTranslations from "@/app/i18n";
import React from "react";

export default async function Footer({ locale }: { locale: string }) {
  const { t } = await initTranslations(locale, ["footer"]);

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {new Date().getFullYear()} {t("rights")}
      </small>
      <p className="text-xs mb-2">
        <span className="font-semibold">{t("about")}</span> {t("built")}
      </p>
      <p className="text-xs">
        <span className="font-semibold">{t("imprint")}</span> {t("details")}
      </p>
    </footer>
  );
}
