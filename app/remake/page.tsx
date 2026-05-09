const promptText =
  "Create a 3D render of plain knee-length shorts viewed from the front, featuring a relaxed, oversized fit with a drop crotch construction as shown in the sketch. The shorts should have a loose, baggy silhouette with a straight waistband, basic front and back pockets, and a length that extends just past the knee. The garment should be completely plain with no graphics, embroidery, or decorative elements - just clean, minimalist construction. Use a neutral solid color like black, navy, or khaki. Position the shorts facing directly forward against a clean white backdrop with professional studio lighting that clearly showcases the garment's shape, proportions, and construction details.";

export default function RemakePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d1117] text-white">
      <div
        className="relative min-h-screen px-6 py-10 md:px-10"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.075) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-center gap-10 pt-8 lg:flex-row lg:gap-16">
          <section className="relative w-full max-w-[560px] rounded-[24px] border border-white/10 bg-black/55 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <header className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#f5a96f]/20 text-[#f8b37f]">
                  ✶
                </span>
                <span className="text-[26px] font-semibold tracking-tight">Claude Chat</span>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/15 px-2 py-1 text-xs text-white/70"
                aria-label="More options"
              >
                •••
              </button>
            </header>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-base leading-relaxed text-white/95">
                Generate a prompt to turn these two images into a render of shorts. The shorts go
                a bit past knee length. They should be set against a white backdrop. The pants
                should be plain and should only draw on the shape and construction not an exact
                copy. They should be forward facing.
              </p>

              <div className="mt-5 text-lg text-white/80">Attachment</div>
              <div className="mt-5 h-px w-full bg-white/10" />
              <div className="mt-4 inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-sm text-white/50">
                +11 hidden properties
              </div>

              <p className="mt-6 text-[34px] leading-[1.33] text-white/95">{promptText}</p>
            </div>
          </section>

          <section className="relative w-full max-w-[640px] rounded-[24px] border border-white/10 bg-black/55 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.5)] backdrop-blur-sm">
            <header className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] to-[#FBBC05] text-xs font-bold text-white">
                  G
                </span>
                <span className="text-[34px] font-semibold tracking-tight">Gemini Image</span>
              </div>
              <button
                type="button"
                className="rounded-full border border-white/15 px-2 py-1 text-xs text-white/70"
                aria-label="More options"
              >
                •••
              </button>
            </header>

            <div className="space-y-4 text-[26px]">
              <div className="flex items-center justify-between gap-6">
                <span className="text-white/80">Prompt</span>
                <div className="flex gap-2">
                  <span className="h-11 w-11 rounded-md border border-white/15 bg-white/[0.03]" />
                  <span className="h-11 w-11 rounded-md border border-white/15 bg-white/[0.03]" />
                </div>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span className="text-white/80">Image</span>
                <button
                  type="button"
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-[20px] text-white/85"
                >
                  Nano Banana 2 (Gem...)
                </button>
              </div>
              <div className="flex items-center justify-between gap-6">
                <span className="text-white/80">Model</span>
                <button
                  type="button"
                  className="rounded-xl border border-white/15 bg-white/[0.04] px-4 py-2 text-[20px] text-white/85"
                >
                  Auto
                </button>
              </div>
            </div>

            <div className="mt-6 inline-flex items-center rounded-full border border-white/15 px-3 py-1 text-sm text-white/50">
              +5 hidden properties
            </div>

            <div className="mt-6 rounded-3xl bg-white p-4">
              <div className="relative aspect-[4/3] rounded-2xl bg-gradient-to-b from-[#666] via-[#3a3a3a] to-[#1f1f1f]">
                <div className="absolute inset-x-8 top-7 h-7 rounded-lg bg-[#2f3338]" />
                <div className="absolute left-12 top-16 h-12 w-20 rounded-2xl bg-[#2f3338]" />
                <div className="absolute right-12 top-16 h-12 w-20 rounded-2xl bg-[#2f3338]" />
                <div className="absolute inset-x-10 bottom-10 h-28 rounded-[38px] bg-[#25282c]" />
              </div>
            </div>
          </section>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[34%] hidden h-0.5 w-24 -translate-x-1/2 bg-white/30 lg:block" />
      </div>
    </main>
  );
}
