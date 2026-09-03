import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[650px] flex-col items-center justify-center overflow-hidden px-5 pt-[170px] pb-16 text-center md:min-h-[996px] md:pt-[260px] md:pb-[90px]"
    >
      <Image
        src="https://www.helsinkiagency.com/wp-content/uploads/2024/02/top-banner-helsinki.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/[.52]" />

      <div className="relative z-10 mx-auto max-w-[855px]">
        <h1 className="mb-8 font-heading text-[28px] leading-[45px] font-extrabold tracking-wide text-white uppercase md:mb-12 md:text-[57px] md:leading-[70px]">
          Helsinki.
          <br />
          A long way north
          <br />
          of ordinary
        </h1>

        <p className="mx-auto mb-0 inline-block bg-hel-pink px-[15px] py-[5px] font-body text-[18px] leading-[40px] font-bold tracking-[3px] text-white md:px-[25px] md:py-0 md:text-[30px] md:leading-[55px]">
          nimble &amp; dynamic
        </p>
        <p className="mx-auto mt-5 inline-block bg-hel-teal px-[15px] py-[5px] font-body text-[18px] leading-[27px] font-bold tracking-[3px] text-white md:mt-[30px] md:block md:px-[25px] md:py-0 md:text-[29px] md:leading-[55px]">
          forward thinking and progressive
        </p>
        <p className="mx-auto mt-5 inline-block bg-hel-orange px-[15px] py-[5px] font-body text-[18px] leading-[32px] font-bold tracking-[3px] text-white md:mt-[30px] md:px-[25px] md:py-0 md:text-[29px] md:leading-[55px]">
          culture of creativity
        </p>

        <div className="mx-auto mt-8 font-body text-[16px] leading-[38px] text-white/90 md:mt-12 [&_p]:mb-4">
          <p>
            Our culture is inspired by our namesake city – surprising,
            dynamic, challenging, intelligent. It&rsquo;s a culture that
            celebrates positive returns through creative over-achievement.
          </p>
          <p>
            Helsinki earned the titles of &lsquo;European Capital of
            Culture&rsquo; and the &lsquo;World Design Capital&rsquo; with
            its enviable reputation for excellence in design and creativity.
          </p>
          <p>Like us, it has consistently punched above its weight.</p>
        </div>
      </div>
    </section>
  );
}
