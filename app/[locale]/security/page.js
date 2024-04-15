import React from "react";
import initTranslations from "../../i18n";
import TranslationsProvider from "@/components/TranslationsProvider.js";
import HeroSecurity from "@/components/security/HeroSecurity";
import Navbar from "@/components/NavBar";
import SecurityInfo from "@/components/security/SecurityDesc";
import Footer from "@/components/Footer";

const i18nNamespaces = ["security"];

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }];
}

export default async function Security({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <div>
        <Navbar locale={locale} />
        <HeroSecurity />
        <SecurityInfo />
        <Footer locale={locale} />
      </div>
    </TranslationsProvider>
  );
}
