import Image from "next/image";

export default function SisuSection() {
  return (
    <section
      id="sisu"
      className="relative flex min-h-[630px] flex-col items-center justify-between overflow-hidden px-5 pb-16 text-center md:min-h-[1300px] md:pb-24"
    >
      <Image
        src="https://www.helsinkiagency.com/wp-content/uploads/2024/04/SISU_SauceBottle_HR_min-scaled.jpg"
        alt="Helsinki secret sauce"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/25" />

      <div className="relative z-10 mx-auto max-w-[750px]">
        <h2 className="inline-block bg-hel-purple px-4 py-1 font-body text-[20px] leading-[27px] font-bold tracking-[4px] text-white md:px-6 md:text-[29px] md:leading-[55px]">
          and then there&rsquo;s our secret sauce&hellip;
        </h2>
      </div>

      <div className="relative z-10 mx-auto max-w-[700px]">
        <h3 className="font-body text-[18px] leading-[30px] font-bold tracking-[4px] text-white uppercase md:text-[21px] md:leading-[42px]">
          SISU. IMAGINE NO LIMITS
        </h3>
        <p className="mt-2 font-body text-[16px] leading-[28px] font-semibold text-white md:mt-0 md:text-[21px] md:leading-[42px]">
          The uniquely Finnish concept of going above and beyond.
          <br />
          Solving every problem with courage, tenacity, creativity and
          integrity - no matter what.
        </p>
      </div>
    </section>
  );
}
