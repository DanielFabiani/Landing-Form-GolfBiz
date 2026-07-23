import Image from "next/image";

export default function Hero() {
  return (
    <header
      className="relative w-full h-svh min-h-[580px] sm:min-h-[600px] flex flex-col items-center justify-center py-6 sm:py-0 overflow-hidden"
      id="inicio"
    >
      <Image
        className="absolute inset-0 w-full h-full object-cover object-[center_50%]"
        src="/bg-golfbiz.jpeg"
        alt="Vista aérea del campo de golf"
        fill
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/10 bg-[linear-gradient(to_top,rgba(0,21,3,0.8)_0%,rgba(0,21,3,0.4)_10%,rgba(0,21,3,0.2)_30%)]" />

      <div className="relative z-[2] flex flex-col items-center text-center px-5 my-auto sm:my-10 py-2 sm:py-0">
        {/* Badge edición */}
        <p
          className="text-sm sm:text-xl font-semibold tracking-[0.18em] uppercase text-white mb-2 sm:mb-6 animate-fadeUp"
          style={{ animationDelay: "0.1s" }}
        >
          2026
        </p>
        <p
          className="text-[10px] sm:text-sm font-light tracking-[0.18em] uppercase text-white/80 mb-6 sm:mb-6 animate-fadeUp"
          style={{ animationDelay: "0.1s" }}
        >
          Invitación personal no transferible
        </p>

        {/* Logo Golf Biz */}
        <div
          className="w-[90%] sm:w-[70%] md:w-[55%] max-w-[800px] animate-fadeUp flex flex-col items-center justify-center gap-2 sm:gap-3"
          style={{ animationDelay: "0.25s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-golfbiz.svg"
            alt="Golf Biz"
            className="w-[800px] h-auto brightness-0 invert drop-shadow-md"
          />
          {/* Logo FourWinds con Powered By */}
          <div className="flex items-center justify-center gap-2.5 sm:gap-4 md:gap-5 mt-2 sm:mt-4">
            <span className="text-[11px] sm:text-base md:text-lg font-normal tracking-[0.16em] sm:tracking-[0.18em] uppercase text-white drop-shadow-md whitespace-nowrap">
              POWERED BY
            </span>
            <div className="w-[1.5px] sm:w-[2px] self-stretch my-0.5 sm:my-1 bg-white drop-shadow-md shrink-0" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/fourwinds.svg"
              alt="Fourwinds Sports & Entertainment"
              className="w-[130px] sm:w-[220px] md:w-[300px] h-auto brightness-0 invert drop-shadow-md"
            />
          </div>
        </div>

        {/* Presentado por */}
        <p
          className="text-[11px] sm:text-xl font-medium sm:font-semibold tracking-[0.2em] sm:tracking-[0.16em] mt-8 sm:mt-10 uppercase text-white/80 sm:text-white/80 animate-fadeUp drop-shadow"
          style={{ animationDelay: "0.4s" }}
        >
          Presentado por
        </p>

        {/* Logos sponsors */}
        <div
          className="flex items-center justify-center gap-6 sm:gap-10 animate-fadeUp w-[65%] sm:w-[70%] md:w-[55%] max-w-[400px]"
          style={{ animationDelay: "0.55s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-fasttrack.svg"
            alt="Fasttrack"
            className="w-[400px] pt-8 h-auto brightness-0 invert drop-shadow-md"
          />
        </div>
      </div>
    </header>
  );
}
