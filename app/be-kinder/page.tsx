import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const imageShadow = "shadow-[3px_0_10px_0_rgba(0,0,0,0.5)]";

export const metadata: Metadata = {
  title: "Case Study | DOTP - Be Kinder | Helsinki",
  description:
    "A reminder to be kinder. Discover how Helsinki helped the Department of Transport & Planning encourage respectful passenger behaviour across Melbourne's trams, buses and trains.",
  alternates: {
    canonical: "/be-kinder/",
  },
  openGraph: {
    title: "Case Study | DOTP - Be Kinder | Helsinki",
    description:
      "A reminder to be kinder. Discover how Helsinki helped the Department of Transport & Planning encourage respectful passenger behaviour across Melbourne's trams, buses and trains.",
    url: "/be-kinder/",
    type: "article",
    images: ["/be-kinder/be-kinder-banner.png"],
  },
};

export default function BeKinderPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-[152px] pb-10 text-center md:max-nav:pt-[162px] nav:pt-[270px] md:pb-0">
          <h1 className="mx-auto max-w-[1140px] bg-hel-orange px-4 py-1.5 font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-9 md:text-[28px] md:leading-[55px]">
            Department of Transport &amp; Planning &ndash; Reminder to be
            Kinder
          </h1>
        </div>

        <section className="relative min-h-[264px] overflow-hidden px-4 pb-[60px] md:min-h-[543px] md:px-5 md:pb-20 lg:min-h-[871px] lg:pb-[100px]">
          <Image
            src="/be-kinder/be-kinder-banner.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </section>

        <section className="px-5 md:px-[15px] lg:px-5">
          <div className="mx-auto max-w-[1140px] pt-[60px] md:pt-10 lg:pt-[81px] lg:pr-[80px]">
            <h3 className="mt-0 font-body text-[30px] leading-[38px] font-medium text-black md:mt-[38px] md:text-[35px] md:leading-[42px] lg:text-[38px]">
              A question of behaviour.
            </h3>
            <p className="mt-0 font-heading text-[22px] leading-[38px] font-light text-black md:mt-[15px] md:text-[25px] md:leading-[44px] lg:text-[36px] lg:leading-[60px]">
              How to encourage and inspire respectful behaviour and etiquette
              in passengers without an overly authoritarian tone that might
              cause more harm than good? That was the question the Department
              of Transport and Planning (DTP) came to Helsinki with.
            </p>
          </div>
        </section>

        <section className="px-5 md:px-[15px] lg:px-5">
          <div className="mx-auto mt-[50px] flex max-w-[1160px] flex-col md:flex-row">
            <div className="flex flex-col gap-5 md:w-[66.66%] md:pr-[15px] lg:pr-0">
              <Image
                src="/be-kinder/ooh-rail-kinder.jpg"
                alt="A Reminder to be Kinder out-of-home poster at a Melbourne railway station"
                width={1387}
                height={1244}
                priority
                className="h-auto w-full"
              />

              <div className="flex flex-col gap-5 md:flex-row">
                <div className="flex flex-1 flex-col gap-5">
                  <p className="text-[20px] leading-[34px] font-light text-black lg:text-[24px] lg:leading-[40px]">
                    The use of these characters added a friendly levity while
                    rhyming support copy succinctly summed up each etiquette
                    issue,
                  </p>
                  <Image
                    src="/be-kinder/poster-page-2.jpg"
                    alt="Be Kinder poster - Clear the floor around the doors"
                    width={1809}
                    height={2560}
                    className={`h-auto w-full ${imageShadow}`}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-5 md:justify-center">
                  <Image
                    src="/be-kinder/poster-page-3.jpg"
                    alt="Be Kinder poster - Respect those around and keep down the sound"
                    width={1809}
                    height={2560}
                    className={`h-auto w-full ${imageShadow}`}
                  />
                  <p className="text-[20px] leading-[34px] font-light text-black lg:text-[24px] lg:leading-[40px]">
                    The success of the campaign was soon felt with a raft of
                    positive feedback on social media. That led to a roll-out
                    of all messages across all Melbourne&rsquo;s transport
                    modes.
                  </p>
                </div>
              </div>

              <Image
                src="/be-kinder/hub-screen-vline.jpg"
                alt="Be Kinder campaign on a V/Line station hub screen"
                width={1920}
                height={980}
                className={`h-auto w-full ${imageShadow}`}
              />
            </div>

            <div className="mt-[50px] flex flex-col gap-5 md:mt-0 md:w-[34%] md:pt-[60px] md:pl-[15px] lg:pt-0 lg:pl-[35px]">
              <p className="text-[20px] leading-[34px] font-light text-black lg:text-[24px] lg:leading-[40px]">
                Our answer was an eye-catching, warm hug of an approach, with
                positive vibes and clear messages.
              </p>
              <p className="text-[20px] leading-[34px] font-light text-black lg:text-[24px] lg:leading-[40px]">
                Leading with the headline - &lsquo;A Reminder to be
                Kinder&rsquo; - the campaign created characters out of the
                everyday elements of Melbourne&rsquo;s Trams, Buses and
                Trains.
              </p>
              <Image
                src="/be-kinder/poster-page-6.jpg"
                alt="Be Kinder poster - It's the right thing to do, take up one seat not two"
                width={1809}
                height={2560}
                className={`h-auto w-full ${imageShadow}`}
              />
              <Image
                src="/be-kinder/rail-kinder-social.png"
                alt="Be Kinder campaign post on the Public Transport Victoria social feed"
                width={1404}
                height={1686}
                className={`h-auto w-full ${imageShadow}`}
              />
              <Image
                src="/be-kinder/tram-kinder-social.png"
                alt="Be Kinder campaign post on the Public Transport Victoria social feed"
                width={1326}
                height={1974}
                className={`h-auto w-full ${imageShadow}`}
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-[60px] text-center md:pb-20 lg:pt-[75px] lg:pb-[130px]">
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
