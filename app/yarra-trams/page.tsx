import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study | Impact of RHINO Safety Messages | Helsinki",
  description:
    "Discover the impact of RHINO Safety Messages through our case study. Learn how we effectively communicate safety messages to avoid being ignored or rejected.",
  alternates: {
    canonical: "/yarra-trams/",
  },
  openGraph: {
    title: "Case Study | Impact of RHINO Safety Messages | Helsinki",
    description:
      "Discover the impact of RHINO Safety Messages through our case study. Learn how we effectively communicate safety messages to avoid being ignored or rejected.",
    url: "/yarra-trams/",
    type: "article",
    images: ["/yarra-trams/rhino_flinders-st-station.png"],
  },
};

export default function YarraTramsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-[152px] pb-10 text-center md:max-nav:pt-[162px] nav:pt-[270px] md:pb-0">
          <h1 className="mx-auto max-w-[1140px] bg-hel-orange px-4 py-1.5 font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-9 md:text-[28px] md:leading-[55px]">
            Yarra Trams &ndash; Beware the Rhino
          </h1>
        </div>

        <section className="relative aspect-[1920/783] w-full overflow-hidden">
          <Image
            src="/yarra-trams/yarra-trams-banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute top-[21.33%] left-[27.21%] w-[42.29%]">
            <video
              className="aspect-video w-full bg-black"
              controls
              preload="metadata"
              poster="/yarra-trams/video-thumnail-image.png"
              controlsList="nodownload"
            >
              <source
                src="/yarra-trams/YT-RHINO-30sec_2-1.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-16">
          <div className="mx-auto grid max-w-[1140px] gap-0 md:grid-cols-[66%_1fr] md:gap-5">
            <div className="pb-10 md:pr-5">
              <h2 className="mt-10 font-body text-[28px] leading-[45px] font-medium text-black md:mt-0 md:text-[38px] md:leading-[60px]">
                What weighs as much as 30 rhinos?
              </h2>
              <p className="mt-4 font-heading text-[22px] leading-[38px] font-light text-black md:text-[36px] md:leading-[60px]">
                21 - 30 y.o. pedestrians are most at risk of being hit by a
                tram due to the many electronic distractions in their lives.
              </p>
              <p className="mt-3 text-[22px] leading-[38px] font-light text-black md:mt-2.5 md:text-[24px] md:leading-[40px]">
                Our challenge was to convey a safety message without it
                disappearing into the white noise of all the other safety
                messages the consumer hears every day - messages that are too
                often ignored, missed or rejected as overly authoritarian.
              </p>
              <Image
                src="/yarra-trams/rhino_flinders-st-station.png"
                alt="Beware the Rhino safety message displayed at Flinders Street Station"
                width={749}
                height={434}
                className="mt-5 h-[205px] w-full object-cover object-center md:h-[205px] lg:h-[434px]"
              />
              <p className="mt-4 mb-4 text-[22px] leading-[38px] font-light text-black md:text-[24px] md:leading-[40px]">
                Our message, &lsquo;Beware! A tram weighs as much as 30
                rhinos!&rsquo; had the desired effect of getting attention and
                stopping people in their tracks - safely.
              </p>
              <Image
                src="/yarra-trams/rhino-tram.png"
                alt="Beware the Rhino tram wrap"
                width={749}
                height={275}
                className="h-auto w-full"
              />

              <div className="mt-5 flex flex-col gap-5 md:flex-row md:flex-nowrap">
                <p className="text-[20px] leading-[37px] font-light text-black md:pr-5 md:text-[24px] md:leading-[40px]">
                  This popular Melbourne campaign created a 93% message recall
                  with the travelling public in the first 2 years of its
                  inception.
                </p>
                <p className="text-[20px] leading-[38px] font-light text-black md:text-[24px] md:leading-[40px]">
                  It has since been adopted for use overseas in Belgium,
                  France and most recently, Brisbane.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-0 pb-10 md:gap-3 md:pt-[150px] md:pl-[15px] lg:pt-[158px] lg:pl-[35px]">
              <Image
                src="/yarra-trams/rhino-cinema-1.png"
                alt="Beware the Rhino cinema advertisement"
                width={352}
                height={191}
                className="h-[180px] w-full object-cover object-center md:h-[122px] lg:h-[191px]"
              />
              <Image
                src="/yarra-trams/rhino-cinema-2.png"
                alt="Beware the Rhino cinema advertisement"
                width={352}
                height={191}
                className="h-[180px] w-full object-cover object-center md:h-[122px] lg:h-[191px]"
              />
              <Image
                src="/yarra-trams/rhino-cinema-3.png"
                alt="Beware the Rhino cinema advertisement"
                width={352}
                height={191}
                className="h-[180px] w-full object-cover object-center md:h-[122px] lg:h-[191px]"
              />
              <Image
                src="/yarra-trams/rhino-cinema-4.png"
                alt="Beware the Rhino cinema advertisement"
                width={352}
                height={191}
                className="h-[180px] w-full object-cover object-center md:h-[122px] lg:h-[191px]"
              />
              <Image
                src="/yarra-trams/rhino-cinema-5.png"
                alt="Beware the Rhino cinema advertisement"
                width={352}
                height={191}
                className="h-[180px] w-full object-cover object-center md:h-[122px] lg:h-[191px]"
              />
              <Image
                src="/yarra-trams/rhino-cinema-6.png"
                alt="Beware the Rhino cinema advertisement"
                width={352}
                height={191}
                className="h-[180px] w-full object-cover object-center md:h-[122px] lg:h-[191px]"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-5 pb-10 md:pb-0">
          <div className="mx-auto max-w-[1140px]">
            <Image
              src="/yarra-trams/language_tram-wrap-1.png"
              alt="'BEWARE' tram wrap spelt out in 30 languages"
              width={1138}
              height={418}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="px-5 pt-10 pb-16 md:pt-16 md:pb-0">
          <div className="mx-auto grid max-w-[1140px] gap-6 md:grid-cols-[35%_1fr] md:gap-5">
            <div className="flex flex-col">
              <p className="text-[20px] leading-[38px] font-light text-black md:pr-0 md:text-[24px] md:leading-[40px]">
                The campaign has been reworked to suit different requirements
                over the years.
              </p>
              <p className="mt-2.5 text-[20px] leading-[38px] font-light text-black md:text-[24px] md:leading-[40px]">
                From &lsquo;BEWARE&rsquo; spelt out in 30 languages, to
                launching a campaign warning drivers of the perils of turning
                carelessly in front of 30 rhinos!
              </p>
            </div>
            <div className="flex flex-col gap-5">
              <Image
                src="/yarra-trams/spik-truck-a.png"
                alt="BEWARE the Rhino driver safety campaign on truck"
                width={640}
                height={325}
                className="h-[260px] w-full object-cover object-center md:h-[380px]"
              />
              <Image
                src="/yarra-trams/launch-of-tram-alert.png"
                alt="Launch of the tram alert campaign"
                width={640}
                height={325}
                className="h-[260px] w-full object-cover object-center md:h-[380px]"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-24 text-center md:pb-32">
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
