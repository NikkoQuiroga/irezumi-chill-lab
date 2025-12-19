export default function VHSBackground() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      <video
        className="h-full w-full object-cover scale-[1.06] opacity-90"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video/vhs-loop.mp4" type="video/mp4" />
      </video>

      {/* Neon wash */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-60
        bg-[radial-gradient(circle_at_22%_20%,rgba(255,0,200,0.62),transparent_45%),
            radial-gradient(circle_at_75%_60%,rgba(0,255,220,0.48),transparent_52%),
            radial-gradient(circle_at_50%_105%,rgba(190,255,0,0.26),transparent_55%)]"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.10),rgba(0,0,0,0.82))]" />
    </div>
  );
}
