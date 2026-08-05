import { EVENT } from '@/config/event';

export default function Format() {
  return (
    <section className="py-24 border-b-[0.5px] border-outline-variant" id="formato">
      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-4">
        Formato
      </p>
      <h2 className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.02em] text-black leading-[1.1] mb-2">
        Modalidad de juego
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant border border-outline-variant rounded-lg overflow-hidden mt-14">
        {EVENT.format.map((item, i) => {
          const hl = item.highlight;
          return (
            <div
              key={i}
              className={`${hl ? 'bg-accent' : 'bg-surface'} py-9 px-8 flex flex-col justify-between gap-5`}
            >
              <div className="flex flex-col gap-3">
                <span
                  className={`text-[10px] font-bold tracking-[0.16em] uppercase ${
                    hl ? 'text-white/80' : 'text-black/60'
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`text-[15px] font-medium leading-[1.55] ${
                    hl ? 'text-white' : 'text-black'
                  }`}
                >
                  {item.value}
                </span>
              </div>

              {'note' in item && item.note && (
                <div
                  className={`mt-2 p-4 rounded-md border ${
                    hl
                      ? 'bg-black/20 border-white/25 text-white'
                      : 'bg-accent/10 border-accent/20 text-black'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold uppercase tracking-[0.14em] text-[10px] mb-1.5 text-white/90">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse shrink-0" />
                    Aviso importante
                  </div>
                  <p className="text-[13px] font-normal leading-[1.55] text-white/95">
                    {item.note}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
