import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import initTranslations from "../i18n";
import TransaltionsProvider from "@/context/translations";
import LanguageChanger from "@/components/language-switch";
import Settings from "@/components/settings";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Lumen Haendler | Portfolio",
  description: "Lumen is a full-stack web developer from Germany",
};

const i18nNamespaces = ["data", "intro", "about"];

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <html lang={locale} className="!scroll-smooth">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
        <TransaltionsProvider
          resources={resources}
          locale={locale}
          namespaces={i18nNamespaces}
        >
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <Header />
              {children}
              <Footer />
              <Toaster position="top-right" />
              <Settings>
                <ThemeSwitch />
                <LanguageChanger />
              </Settings>
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </TransaltionsProvider>
      </body>
    </html>
  );
}
