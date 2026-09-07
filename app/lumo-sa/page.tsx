import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study | Lumo Energy South Australia | Helsinki",
  description:
    "Discover how we helped Lumo Energy South Australia establish a unique and positive brand presence in the competitive energy market of SA.",
  alternates: {
    canonical: "/lumo-sa/",
  },
  openGraph: {
    title: "Case Study | Lumo Energy South Australia | Helsinki",
    description:
      "Discover how we helped Lumo Energy South Australia establish a unique and positive brand presence in the competitive energy market of SA.",
    url: "/lumo-sa/",
    type: "article",
    images: ["/lumo-sa/Lumosa_brighter_ooh.png"],
  },
};

export default function LumoSaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-32 pb-10 text-center md:pt-44 md:pb-0">
          <h1 className="mx-auto inline-block bg-hel-orange px-4 py-1.5 font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-9 md:text-[28px] md:leading-[55px]">
            Lumo SA &ndash; Little World
          </h1>
        </div>

        <section className="relative flex min-h-[375px] items-start justify-center overflow-hidden px-4 pt-8 pb-14 md:min-h-[770px] md:pt-20 md:pb-16 lg:min-h-[1093px] lg:pt-28 lg:pb-24">
          <Image
            src="/lumo-sa/lumo-header-banner-image-min.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="relative z-10 mx-auto w-full max-w-[1160px]">
            <div className="mx-auto max-w-[824px]">
              <video
                className="aspect-video w-full bg-black shadow-2xl"
                autoPlay
                muted
                controls
                playsInline
                preload="metadata"
                controlsList="nodownload"
              >
                <source
                  src="/lumo-sa/Lumo-Energy-SA_Brighter-SA-TVC.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>

        <section className="px-5 pt-8 pb-0 md:pt-10">
          <div className="mx-auto grid max-w-[1160px] gap-0 md:grid-cols-[64%_1fr] md:gap-0">
            <div>
              <h3 className="font-body text-[28px] leading-[38px] font-medium text-black md:text-[38px] md:leading-[42px]">
                It&rsquo;s a brighter world after all.
              </h3>
              <p className="mt-4 font-heading text-[22px] leading-[40px] font-light text-black md:mt-4 md:text-[36px] md:leading-[60px]">
                Lumo Energy South Australia asked us to breathe new life into
                the brand with a positive and ownable position in SA&rsquo;s
                competitive energy market.
              </p>
            </div>
            <div className="pt-8 pl-0 md:pt-[50px] md:pl-[50px]">
              <p className="font-heading text-[18px] leading-[36px] font-light text-black italic md:pr-[27px]">
                The campaign was led by OLV and Broadcast using a &lsquo;Little
                World&rsquo; visual and a rejuvenated 1950&rsquo;s music
                track.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-14">
          <div className="mx-auto grid max-w-[1160px] gap-8 md:grid-cols-[35%_1fr] md:gap-5">
            <div className="order-2 md:order-1">
              <p className="text-[20px] leading-[37px] font-light text-black md:text-[24px] md:leading-[40px]">
                Taking an engaging angle of out-and-out positivity, we
                reworked the old classic &lsquo;Accentuate The Positive&rsquo;
                and created a bespoke version with new lyrics and a bright
                and breezy recording by Adelaide singer Chelsea McGuiness.
              </p>
              <h2 className="mt-5 text-[20px] leading-[37px] font-medium text-black md:mt-10 md:text-[24px] md:leading-[40px]">
                Brighter all over Adelaide
              </h2>
              <p className="mt-5 text-[20px] leading-[37px] font-light text-black md:mt-0 md:text-[24px] md:leading-[40px]">
                The catchy feel-good track paired perfectly with the little
                world visuals to create an uplifting and engaging new brand
                ad.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/lumo-sa/Lumosa_brighter_ooh.png"
                alt="Lumo Energy South Australia out-of-home billboard — Brighter SA campaign"
                width={749}
                height={536}
                className="h-[216px] w-full object-cover object-center md:h-[389px] lg:h-[536px]"
              />
            </div>
          </div>
        </section>

        <section className="px-2 pt-10 pb-10 md:px-5 md:pt-16 md:pb-16">
          <div className="mx-auto flex max-w-[1160px] flex-col gap-8 md:flex-row md:items-start md:gap-5">
            <div
              className="relative flex min-h-[280px] w-full flex-col items-center bg-cover bg-center bg-no-repeat py-4 md:min-h-[405px] md:w-[70%] lg:min-h-[823px]"
              style={{
                backgroundImage: "url(/lumo-sa/adv-bg.png)",
              }}
            >
              <iframe
                src="/lumo-sa/digital-ad.html"
                title="Lumo Energy digital banner ad"
                width={300}
                height={600}
                className="mt-0 h-[600px] w-[300px] max-w-full scale-[0.55] border-0 sm:scale-75 md:mt-[-60px] md:scale-90 lg:mt-[-140px] lg:scale-100"
                scrolling="no"
              />
            </div>
            <div className="w-full md:w-[30%]">
              <p className="text-[20px] leading-[37px] font-light text-black md:text-[24px] md:leading-[40px]">
                It launched across SA in the first week of April 2023 along
                with accompanying digital, radio, tram wrap and OOH
                activity.
              </p>
              <Image
                src="/lumo-sa/lumo-phone-image.png"
                alt="Lumo Energy campaign shown on mobile phone"
                width={351}
                height={348}
                className="mt-8 h-auto w-full max-w-[280px] md:mt-20 md:max-w-none"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pb-10 md:pb-16">
          <div className="mx-auto max-w-[1160px]">
            <Image
              src="/lumo-sa/lumosa-tram-wrap.png"
              alt="Lumo Energy South Australia tram wrap"
              width={1143}
              height={407}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="px-5 pb-24 text-center md:pb-32">
          <Link
            href="/#casestudy"
            className="inline-block bg-hel-orange px-9 py-4 font-body text-[18px] leading-[32px] font-bold text-black uppercase transition-colors hover:bg-hel-purple hover:text-white md:text-[28px]"
          >
            Back to
            <br />
            Work
          </Link>
        </section>
      </main>
      <Footer />
    </>
  );
}
