import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import VHSBackground from "@/components/VHSBackground";
import NoiseOverlay from "@/components/NoiseOverlay";
import { releases } from "@/data/releases";

const fadeUp = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

export default function App() {
  const [lang, setLang] = useState("ja");
  const featured = useMemo(() => releases[0], []);

  return (
    <div className="min-h-screen text-white relative">
      <VHSBackground />
      <NoiseOverlay />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-md bg-black/45 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-5 py-4 flex items-center justify-between">
          <div className="font-extrabold tracking-[0.35em] text-white">
            IREZUMI CHILL LAB
          </div>

          <nav className="hidden md:flex gap-7 text-white/80 text-sm tracking-wide">
            <a href="#releases" className="hover:text-white transition">Releases</a>
            <a href="#stages" className="hover:text-white transition">Stages</a>
            <a href="#stories" className="hover:text-white transition">Stories</a>
          </nav>

          <div className="flex items-center gap-2 text-sm">
            {["ja", "en", "es"].map((k) => (
              <button
                key={k}
                onClick={() => setLang(k)}
                className={`px-3 py-2 rounded-xl border border-white/15 transition ${
                  lang === k ? "bg-white/15" : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {k.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* HERO FULLSCREEN */}
        <section className="min-h-screen flex items-center">
          <div className="mx-auto max-w-6xl px-5 w-full">
            <div className="grid md:grid-cols-12 gap-8 items-end">
              {/* Left */}
              <motion.div
                className="md:col-span-7"
                variants={fadeUp}
                initial="hidden"
                animate="show"
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="px-4 py-2 rounded-full bg-fuchsia-500/20 border border-fuchsia-300/40 text-xs tracking-[0.35em] text-fuchsia-100">
                    NEW DROP
                  </span>
                  <span className="px-4 py-2 rounded-full bg-cyan-400/15 border border-cyan-200/30 text-xs tracking-[0.35em] text-cyan-100">
                    VHS EDIT
                  </span>
                </div>

                <div className="text-xs tracking-[0.35em] text-white/70">
                  BROADCASTING FROM A PARALLEL JAPAN (1978–1996)
                </div>

                <h1 className="mt-4 text-6xl md:text-8xl font-extrabold leading-[0.9] drop-shadow-[0_0_40px_rgba(255,0,200,0.35)]">
                  {lang === "ja" ? "入れ墨チルラボ" : "IREZUMI CHILL LAB"}
                </h1>

                <p className="mt-5 text-white/80 text-lg md:text-xl max-w-xl">
                  {lang === "ja"
                    ? "ネオンのローファイ、シティポップ、深夜の余韻。刺青のある“もう一つの日本”から。"
                    : lang === "es"
                    ? "Lo-fi neón, city pop y madrugada. Desde un Japón paralelo tatuado."
                    : "Neon lo-fi, city pop & afterhours calm — built like a label, not a playlist."}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={featured.youtubeUrl}
                    className="px-7 py-4 rounded-2xl bg-white/15 hover:bg-white/20 border border-white/20 shadow-xl transition"
                  >
                    ▶ {lang === "ja" ? "最新リリース" : lang === "es" ? "Último lanzamiento" : "Latest release"}
                  </a>

                  <a
                    href="#releases"
                    className="px-7 py-4 rounded-2xl bg-black/25 hover:bg-black/35 border border-white/15 transition"
                  >
                    {lang === "ja" ? "アーカイブ" : lang === "es" ? "Archivo" : "Explore archive"}
                  </a>
                </div>

                <div className="mt-8 flex gap-2 flex-wrap text-xs tracking-[0.25em]">
                  {featured.mood.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-2 rounded-full bg-white/10 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Right / Featured card */}
              <motion.div
                className="md:col-span-5"
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 0.08 }}
              >
                <div className="rounded-3xl border border-white/15 bg-black/45 backdrop-blur-md p-6 shadow-2xl">
                  <div className="text-white/70 text-sm tracking-widest">
                    {lang === "ja" ? "最新リリース" : lang === "es" ? "ÚLTIMO LANZAMIENTO" : "LATEST RELEASE"}
                  </div>

                  <div className="mt-2 text-3xl font-extrabold tracking-tight">
                    {featured.title[lang] || featured.title.en}
                  </div>

                  <p className="mt-3 text-white/75">
                    {featured.story[lang] || featured.story.en}
                  </p>

                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <a
                      href={featured.youtubeUrl}
                      className="text-center rounded-2xl py-3 bg-white/15 hover:bg-white/20 border border-white/20 transition"
                    >
                      YouTube
                    </a>
                    <a
                      href="#stories"
                      className="text-center rounded-2xl py-3 bg-black/25 hover:bg-black/35 border border-white/15 transition"
                    >
                      {lang === "ja" ? "ストーリー" : lang === "es" ? "Historia" : "Story"}
                    </a>
                  </div>

                  <div className="mt-5 text-xs text-white/55 tracking-widest">
                    BPM RANGE: 78–92 • MOOD: NEON MELANCHOLY
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* RELEASES */}
        <section id="releases" className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {lang === "ja" ? "リリース" : lang === "es" ? "Lanzamientos" : "Releases"}
            </h2>

            <div className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {releases.map((r) => (
                <a
                  key={r.id}
                  href={r.youtubeUrl}
                  className="group rounded-3xl border border-white/12 bg-black/35 backdrop-blur-md overflow-hidden hover:border-white/30 transition"
                >
                  <div className="aspect-square bg-black/30 relative">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_40%_30%,rgba(255,0,200,0.25),transparent_60%),radial-gradient(circle_at_70%_70%,rgba(0,255,220,0.18),transparent_55%)]" />
                    <img
                      src={r.cover}
                      alt={r.title.en}
                      className="h-full w-full object-cover opacity-90 group-hover:opacity-100 transition"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="p-5">
                    <div className="text-white/70 text-xs tracking-widest">{r.year}</div>
                    <div className="mt-1 font-extrabold text-xl">
                      {r.title[lang] || r.title.en}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {r.mood.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-1 rounded-full bg-white/10 border border-white/10"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 text-sm text-white/70">
                      {r.story[lang] || r.story.en}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* STAGES (Lolla vibe) */}
        <section id="stages" className="py-16">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {lang === "ja" ? "ステージ" : lang === "es" ? "Escenarios" : "Stages"}
            </h2>

            <div className="mt-7 grid md:grid-cols-3 gap-6">
              {[
                {
                  title: lang === "ja" ? "夜の作業場" : lang === "es" ? "Mesa de Tatuaje" : "Tattoo Desk Stage",
                  desc: lang === "ja" ? "描く、編集する、夜の集中。" : lang === "es" ? "Enfoque nocturno: crear y editar." : "Late-night focus for drawing and editing.",
                  tag: "STAGE 01",
                },
                {
                  title: lang === "ja" ? "ネオン高速" : lang === "es" ? "Autopista Neón" : "Neon Highway Stage",
                  desc: lang === "ja" ? "シティの光、ドライブの鼓動。" : lang === "es" ? "Ciudad + ruta: pulso retro." : "City lights, retro drive pulse.",
                  tag: "STAGE 02",
                },
                {
                  title: lang === "ja" ? "入眠後" : lang === "es" ? "Después del Sueño" : "Aftercare Stage",
                  desc: lang === "ja" ? "静かに落ちる、眠りの余韻。" : lang === "es" ? "Bajar revoluciones y dormir." : "Soft descent into calm and sleep.",
                  tag: "STAGE 03",
                },
              ].map((s) => (
                <div
                  key={s.tag}
                  className="rounded-3xl border border-white/12 bg-black/35 backdrop-blur-md p-6 hover:border-white/25 transition"
                >
                  <div className="text-xs tracking-[0.35em] text-white/60">{s.tag}</div>
                  <div className="mt-3 text-2xl font-extrabold">{s.title}</div>
                  <p className="mt-3 text-white/75">{s.desc}</p>

                  <button className="mt-6 w-full py-3 rounded-2xl bg-white/12 hover:bg-white/18 border border-white/15 transition">
                    Open Playlist
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STORIES */}
        <section id="stories" className="pb-24">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              {lang === "ja" ? "ストーリー" : lang === "es" ? "Historias" : "Stories"}
            </h2>

            <p className="mt-4 text-white/75 max-w-2xl">
              {lang === "ja"
                ? "各リリースの背景、音の意図、視覚の思想。ここに“ラボノート”を追加していく。"
                : lang === "es"
                ? "Detrás de cada lanzamiento: intención sonora, estética y notas del laboratorio."
                : "Behind each release: sound intent, visuals, and lab notes. This will grow over time."}
            </p>
          </div>
        </section>

        <footer className="border-t border-white/10 bg-black/35 backdrop-blur-md">
          <div className="mx-auto max-w-6xl px-5 py-10 text-white/70">
            <div className="font-extrabold tracking-[0.35em] text-white">
              IREZUMI CHILL LAB
            </div>
            <div className="mt-2 text-sm">
              Broadcasting from a parallel Japan. Neon memory, ink ritual, late-night calm.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
