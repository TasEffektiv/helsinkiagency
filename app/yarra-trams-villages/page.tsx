import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study | Yarra Trams - City of Villages | Helsinki",
  description:
    "Discover how Helsinki Agency turned back the clock to move Melbourne forward with the Yarra Trams City of Villages campaign — vintage-style travel posters for the world's largest tram network.",
  alternates: {
    canonical: "/yarra-trams-villages/",
  },
  openGraph: {
    title: "Case Study | Yarra Trams - City of Villages | Helsinki",
    description:
      "Discover how Helsinki Agency turned back the clock to move Melbourne forward with the Yarra Trams City of Villages campaign — vintage-style travel posters for the world's largest tram network.",
    url: "/yarra-trams-villages/",
    type: "article",
    images: ["/yarra-trams-villages/route96_poster-min.png"],
  },
};

export default function YarraTramsVillagesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-[152px] pb-10 text-center md:max-nav:pt-[162px] nav:pt-[270px] md:pb-0">
          <h1 className="mx-auto max-w-[1140px] bg-hel-orange px-4 py-1.5 font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-9 md:text-[28px] md:leading-[55px]">
            Yarra Trams &ndash; City of Villages
          </h1>
        </div>

        <section className="relative flex min-h-[83px] items-center justify-center overflow-hidden px-4 md:min-h-[400px] lg:min-h-[783px]">
          <Image
            src="/yarra-trams-villages/sth-melb-route-header-bg-min.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-16">
          <div className="mx-auto grid max-w-[1140px] gap-0 md:grid-cols-[66.66%_1fr] md:gap-5">
            <div className="pb-10 md:pr-5">
              <h2 className="font-body text-[24px] leading-[38px] font-medium text-black md:text-[38px] md:leading-[60px]">
                Turning back the clock to move Melbourne forward
              </h2>
              <p className="mt-0 font-heading text-[22px] leading-[38px] font-light text-black md:mt-4 md:text-[36px] md:leading-[60px]">
                Last year, Yarra Trams engaged Helsinki Agency to develop a
                campaign to increase tram patronage by highlighting special
                places to visit along the world&rsquo;s largest tram network.
              </p>
              <p className="mt-4 mb-4 text-[19px] leading-[35px] font-light text-black md:text-[24px] md:leading-[40px]">
                The key idea was that trams aren&rsquo;t just for commuting to
                and from home and work. Melburnians could be tourists in
                their own town and could &lsquo;Explore More. Travel by
                Tram&rsquo;.
              </p>
              <Image
                src="/yarra-trams-villages/route96_poster-min.png"
                alt="Route 96 vintage-style travel poster"
                width={743}
                height={1046}
                className="h-auto w-full"
              />
              <p className="mt-5 mb-1 text-[19px] leading-[35px] font-light text-black md:text-[24px] md:leading-[40px]">
                The posters proved immediately popular, with Melburnians
                requesting to purchase them across social media.
              </p>
              <p className="mt-0 mb-5 text-[19px] leading-[35px] font-light text-black md:text-[24px] md:leading-[40px]">
                Along with a series of digital assets and a &lsquo;City of
                Villages&rsquo; information page, it&rsquo;s already become a
                highly successful exercise in passenger engagement. There are
                plans for it to continue to be rolled out with
                &lsquo;vintage&rsquo; posters for more and more routes.
              </p>
              <Image
                src="/yarra-trams-villages/Route-57_Insta-1.png"
                alt="Route 57 Instagram campaign asset"
                width={749}
                height={490}
                className="h-auto w-full shadow-[0px_6px_18px_0px_rgba(0,0,0,0.297)]"
              />
            </div>

            <div className="flex flex-col pt-0 pb-10 md:pt-[60px] md:pl-[35px]">
              <Image
                src="/yarra-trams-villages/yt_villages_01_retouch.png"
                alt="City of Villages illustrated destination artwork"
                width={353}
                height={353}
                className="h-[233px] w-full object-cover object-center md:h-[353px]"
              />
              <Image
                src="/yarra-trams-villages/yt_villages_02_retouch.png"
                alt="City of Villages illustrated destination artwork"
                width={353}
                height={353}
                className="mt-4 h-[233px] w-full object-cover object-center md:mt-[50px] md:h-[353px]"
              />
              <p className="mt-5 text-[20px] leading-[38px] font-light text-black md:mt-5 md:text-[23px]">
                We produced wonderfully illustrated vintage (yet modern)
                style travel posters featuring a number of prominent
                destinations along key tram routes.
              </p>
              <p className="mt-2.5 mb-5 text-[20px] leading-[38px] font-light text-black md:text-[23px]">
                We first illustrated Routes 57 and 82. Following their
                outstanding success, we followed with the world famous Route
                96.
              </p>
              <Image
                src="/yarra-trams-villages/right-post-side.png"
                alt="Yarra Trams vintage poster artwork"
                width={351}
                height={634}
                className="mt-5 h-[700px] w-full object-cover object-center shadow-[0px_6px_18px_0px_rgba(0,0,0,0.297)] md:mt-20 md:h-auto lg:mt-[215px]"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-0 pb-16 text-center md:pb-32">
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
