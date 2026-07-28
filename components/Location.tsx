import { EVENT } from '@/config/event';
import ClockIcon from '@/components/icons/ClockIcon';
import StarIcon  from '@/components/icons/StarIcon';

const NOTE_ICONS = [ClockIcon, StarIcon];

export default function Location() {
  return (
    <section className="py-24 border-b-[0.5px] border-outline-variant" id="como-llegar">
      <p className="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-4">
        Venue
      </p>
      <h2 className="text-[clamp(32px,4vw,48px)] font-semibold tracking-[-0.02em] text-black leading-[1.1] mb-2">
        Cómo llegar
      </h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 items-start">
        {/* Info lateral */}
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-[22px] font-semibold text-black mb-2">
              {EVENT.venue.name}
            </p>
            <p className="text-[15px] text-black/80 leading-[1.6]">
              {EVENT.venue.address}
            </p>
          </div>

          {EVENT.venue.notes.map((note, i) => {
            const Icon = NOTE_ICONS[i] ?? ClockIcon;
            return (
              <div
                key={i}
                className="inline-flex items-center gap-2 bg-accent/10 rounded px-3.5 py-2.5 text-xs font-semibold text-accent tracking-[0.04em]"
              >
                <Icon />
                {note}
              </div>
            );
          })}
        </div>

        {/* Mapa */}
        <div className="rounded-lg overflow-hidden border border-outline-variant h-[380px]">
          <iframe
            className="w-full h-full border-0 block"
            src={EVENT.venue.mapEmbed}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa ${EVENT.venue.name}`}
          />
        </div>
      </div>
    </section>
  );
}
