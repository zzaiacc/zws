import initTranslations from "../i18n";
import TranslationsProvider from "@/components/TranslationsProvider.js";
import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import Solutions from "@/components/Solutions";
import ContactPage from "@/components/Contact";
import About from "@/components/About";
import Footer from "@/components/Footer";

const i18nNamespaces = ["home"];

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "pt" }, { locale: "es" }];
}

export default async function Home({ params: { locale } }) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <main>
        <NavBar locale={locale} />
        <Hero />
        <Services locale={locale} />
        <Solutions />
        <About locale={locale} />
        <ContactPage />
        <Footer locale={locale} />
      </main>
    </TranslationsProvider>
  );
}
