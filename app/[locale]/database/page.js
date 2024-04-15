import React from "react";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider.js";
import HeroDatabase from "@/components/database/HeroDatabase";
import Navbar from "@/components/NavBar";
import DatabaseInfo from "@/components/database/DatabaseDesc";
import Footer from "@/components/Footer";

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
        <HeroDatabase />
        <DatabaseInfo />
        <Footer locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
