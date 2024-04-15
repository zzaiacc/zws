import React from "react";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider.js";
import Navbar from "@/components/NavBar";

import Footer from "@/components/Footer";
import HeroSoftwareDev from "@/components/software/HeroSoftwareDev";
import SoftwareDev from "@/components/software/SoftwareDev";

const i18nNamespaces = ["home"];

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }];
}

export default async function Database({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div>
        <Navbar locale={locale} />
        <HeroSoftwareDev />
        <SoftwareDev />
        <Footer locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
