import React, { useMemo, useState } from "react";
import VHSBackground from "@/components/VHSBackground";
import NoiseOverlay from "@/components/NoiseOverlay";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedRelease from "@/components/FeaturedRelease";
import ReleasesGrid from "@/components/ReleasesGrid";
import Stages from "@/components/Stages";
import Stories from "@/components/Stories";
import Horishi from "@/components/Horishi";
import Social from "@/components/Social";
import Footer from "@/components/Footer";
import LanguageGate from "@/components/LanguageGate";
import ListeningBar from "@/components/ListeningBar";
import { releases } from "@/data/releases";

export default function App() {
  const [lang, setLang] = useState("en");
  const featured = useMemo(() => releases[0], []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <VHSBackground />
      <NoiseOverlay />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_20%,rgba(255,0,160,0.12),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(0,255,220,0.12),transparent_40%)]" />
      <div className="poster-stripes" />
      <div className="orbit-dots" />

      <LanguageGate lang={lang} setLang={setLang} />
      <Header lang={lang} setLang={setLang} />

      <main className="relative z-10 space-y-4 pb-32 md:pb-40">
        <Hero lang={lang} featured={featured} />
        <FeaturedRelease lang={lang} featured={featured} />
        <ReleasesGrid lang={lang} releases={releases} />
        <Stages lang={lang} />
        <Stories lang={lang} />
        <Horishi lang={lang} />
        <Social lang={lang} />
      </main>

      <ListeningBar lang={lang} featured={featured} />
      <Footer />
    </div>
  );
}
