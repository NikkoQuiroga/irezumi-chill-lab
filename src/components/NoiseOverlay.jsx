import "@/styles/vhs.css";

export default function NoiseOverlay() {
  return (
    <>
      <div className="noise pointer-events-none fixed inset-0 -z-40 opacity-[0.18]" />
      <div className="scanlines pointer-events-none fixed inset-0 -z-40 opacity-[0.16]" />
      <div className="vhs-jitter pointer-events-none fixed inset-0 -z-40" />
    </>
  );
}
