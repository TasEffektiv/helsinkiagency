import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study | Red Energy - Lightscape | Helsinki",
  description:
    "A really bright idea. Discover how Helsinki created a multi-media campaign for Red Energy's third year powering Lightscape at the Royal Botanic Gardens Melbourne.",
  alternates: {
    canonical: "/lightscape/",
  },
  openGraph: {
    title: "Case Study | Red Energy - Lightscape | Helsinki",
    description:
      "A really bright idea. Discover how Helsinki created a multi-media campaign for Red Energy's third year powering Lightscape at the Royal Botanic Gardens Melbourne.",
    url: "/lightscape/",
    type: "article",
    images: ["/lightscape/red-en.jpg"],
  },
};

export default function LightscapePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-[152px] pb-10 text-center md:max-nav:pt-[162px] nav:pt-[270px] md:pb-0">
          <h1 className="mx-auto max-w-[1140px] bg-hel-orange px-4 py-1.5 font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-9 md:text-[28px] md:leading-[55px]">
            Red Energy - Lightscape
          </h1>
        </div>

        <section className="relative min-h-[264px] overflow-hidden px-4 pb-[60px] md:min-h-[543px] md:px-5 md:pb-20 lg:min-h-[871px] lg:pb-[100px]">
          <Image
            src="/lightscape/lightspeed-banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="relative z-10 mx-auto w-full max-w-[1140px]">
            <div className="relative left-1 mx-auto mt-[17px] w-full max-w-[280px] md:left-[11px] md:mt-[52px] md:max-w-[580px] lg:left-[15px] lg:mt-[107px] lg:max-w-[878px]">
              <video
                className="aspect-video h-full w-full bg-black object-contain shadow-2xl"
                controls
                preload="metadata"
                controlsList="nodownload"
              >
                <source
                  src="/lightscape/RedEnergy_Lightscape_ReceptionScreen_Peonies.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-10">
          <div className="mx-auto max-w-[1140px]">
            <h3 className="mt-0 font-body text-[30px] leading-[38px] font-medium text-black md:mt-[38px] md:text-[35px] md:leading-[42px] lg:text-[38px]">
              A really bright idea.
            </h3>
            <p className="mt-0 font-heading text-[22px] leading-[38px] font-light text-black md:mt-[15px] md:text-[25px] md:leading-[44px] lg:text-[36px] lg:leading-[60px]">
              Helsinki was asked to create a multi-media campaign for Red
              Energy supporting Royal Botanic Gardens Melbourne&rsquo;s
              outstanding installation art event, Lightscape.
            </p>
          </div>
        </section>

        <section className="px-5 pt-[50px] pb-0 md:pt-[50px]">
          <div className="mx-auto flex max-w-[1160px] flex-col gap-8 md:flex-row md:gap-5">
            <div className="md:w-[66.66%]">
              <p className="text-[20px] leading-[34px] font-light text-black md:text-[20px] md:leading-[34px] lg:text-[24px] lg:leading-[40px]">
                It was Red Energy&rsquo;s third year powering the event, and
                they needed a concept that would work across everything from
                tram and car wraps, to social, digital and OOH. It even made
                an appearance on their reception mega screen TV.
              </p>
              <Image
                src="/lightscape/red-en.jpg"
                alt="Red Energy Lightscape animated Peonies installation campaign"
                width={2136}
                height={1116}
                priority
                className="mt-5 h-auto w-full md:mt-8"
              />
              <p className="mt-5 text-[20px] leading-[34px] font-light text-black md:mt-8 md:text-[20px] md:leading-[34px] lg:text-[24px] lg:leading-[40px]">
                Using existing imagery, we animated a still of the
                &lsquo;Peonies&rsquo; installation, and added an animated
                &lsquo;light trail&rsquo; that wound through the peonies and
                connected with the Red Energy logo&rsquo;s &lsquo;Spark&rsquo;
                graphic.
              </p>
              <p className="mt-5 text-[20px] leading-[34px] font-light text-black md:mt-5 md:text-[20px] md:leading-[34px] lg:text-[24px] lg:leading-[40px]">
                That connected this campaign with our other work on the
                brand, where the light-trail is a key graphic device.
              </p>
              <Image
                src="/lightscape/Red-Energy_Tram-Wrap_3K-scaled.jpg"
                alt="Red Energy tram wrap along the Botanic Gardens route"
                width={2560}
                height={1285}
                className="mt-5 h-auto w-full md:mt-8"
              />
            </div>
            <div className="md:w-[34%] md:pl-[15px] lg:pl-[35px]">
              <Image
                src="/lightscape/Red-Energy_Lightscape_VMO_Portrait.jpg"
                alt="Red Energy Lightscape Sea of Lights OOH and social creative"
                width={576}
                height={1024}
                className="h-auto w-full"
              />
              <Image
                src="/lightscape/light-sidebr.png"
                alt="Red Energy reception mega screen displaying Lightscape campaign"
                width={640}
                height={640}
                className="mt-5 h-auto w-full"
              />
              <div className="mt-5 text-[16px] leading-[26px] font-light text-black">
                <p>ABOVE: &lsquo;Sea of Lights&rsquo; was also used across OOH and Social.</p>
                <p className="mt-3">LEFT: Tram wrap along the Botanic Gardens route.</p>
                <p className="mt-3">BELOW: Red Energy&rsquo;s reception mega screen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-16">
          <div className="mx-auto max-w-[1140px]">
            <Image
              src="/lightscape/lightspeed-bottom.png"
              alt="Red Energy Lightscape campaign across tram wrap, digital and OOH"
              width={2290}
              height={1066}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="px-5 pt-10 pb-16 text-center md:pt-[75px] md:pb-32">
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
