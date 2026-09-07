import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study | Success Story of Modeina Estate | Helsinki",
  description:
    "Discover Modeina Estate's inspiring success story. Learn how strategic brand workshops and market analysis led to its premium position in the real estate market.",
  alternates: {
    canonical: "/modeina-estate/",
  },
  openGraph: {
    title: "Case Study | Success Story of Modeina Estate | Helsinki",
    description:
      "Discover Modeina Estate's inspiring success story. Learn how strategic brand workshops and market analysis led to its premium position in the real estate market.",
    url: "/modeina-estate/",
    type: "article",
    images: ["/modeina-estate/art-of-living-image.png"],
  },
};

export default function ModeinaEstatePage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-32 pb-10 text-center md:pt-44 md:pb-0">
          <h1 className="mx-auto inline-block bg-hel-orange px-4 py-1.5 font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-9 md:text-[28px] md:leading-[55px]">
            Dennis Family Developments - Modeina Estate
          </h1>
        </div>

        <section className="relative min-h-[98px] overflow-hidden md:min-h-[400px] lg:min-h-[783px]">
          <Image
            src="/modeina-estate/modeina-header-banner-image-min.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </section>

        <section className="px-5 pt-10 pb-0 md:px-[15px] md:pt-16">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="font-body text-[25px] leading-[38px] font-medium text-black md:text-[38px] md:leading-[60px]">
              Elevating Modeina to new heights of
              <br className="hidden md:block" /> style and success.
            </h2>
            <p className="mt-4 font-heading text-[22px] leading-[38px] font-light text-black md:mt-9 md:text-[36px] md:leading-[60px]">
              After a rigorous brand workshop and subsequent reassessment of
              market conditions, it was decide that we should elevate Modeina
              and the remaining land lots to occupy a premium position.
            </p>
            <p className="mt-[22px] text-[22px] leading-[38px] font-light text-black md:mt-[34px] md:text-[24px] md:leading-[40px]">
              We started by upscaling key elements like the brand font,
              photography and overall design language to better represent a
              premium brand.
            </p>
            <p className="mt-2.5 mb-5 text-[22px] leading-[38px] font-light text-black md:mt-2.5 md:text-[24px] md:leading-[40px]">
              We redesigned all the brochure work, completely refurbished the
              Sales Centre inside and out, and created all new online and
              digital elements.
            </p>
          </div>
        </section>

        <section className="px-5 pt-0 pb-0 md:px-[15px]">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-5 md:flex-row">
            <div className="md:w-[66%]">
              <Image
                src="/modeina-estate/art-of-living-image.png"
                alt="The Art of Living - Modeina Estate premium brand campaign"
                width={749}
                height={749}
                className="h-[293px] w-full object-cover object-top md:h-[500px] lg:h-[749px]"
              />
            </div>
            <div className="flex flex-col gap-[14px] md:w-[34%] md:pl-[15px]">
              <Image
                src="/modeina-estate/modeina-brochure-1.png"
                alt="Modeina Estate brochure design"
                width={353}
                height={177}
                className="h-[150px] w-full object-cover object-center md:h-[115px] lg:h-[177px]"
              />
              <Image
                src="/modeina-estate/brochure-2.png"
                alt="Modeina Estate brochure design"
                width={353}
                height={177}
                className="h-[150px] w-full object-cover object-center md:h-[115px] lg:h-[177px]"
              />
              <Image
                src="/modeina-estate/brochure-3.png"
                alt="Modeina Estate brochure design"
                width={353}
                height={177}
                className="h-[150px] w-full object-cover object-center md:h-[115px] lg:h-[177px]"
              />
              <Image
                src="/modeina-estate/brochure-4.png"
                alt="Modeina Estate brochure design"
                width={353}
                height={177}
                className="h-[150px] w-full object-cover object-center md:h-[115px] lg:h-[177px]"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-[50px] pb-0 md:px-[15px] md:pt-10">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-5 md:flex-row">
            <div className="flex flex-col gap-5 md:w-[33%]">
              <p className="text-[22px] leading-[38px] font-light text-black md:text-[24px] md:leading-[40px]">
                The first campaign embracing the premium positioning was &lsquo;My
                Perfect Modeina&rsquo; - each headline highlighting a
                &lsquo;perfect&rsquo; aspect of the estate.
              </p>
              <p className="text-[22px] leading-[38px] font-light text-black md:text-[24px] md:leading-[40px]">
                The reception to the new campaign and its premium positioning
                has been excellent, with sales results considerably above
                expectation.
              </p>
            </div>
            <div className="flex flex-col gap-5 md:w-[67%] md:flex-row md:pl-[14px]">
              <Image
                src="/modeina-estate/my-perfect-view-1.png"
                alt="My Perfect Modeina campaign poster"
                width={231}
                height={462}
                className="h-[640px] w-full object-cover object-center md:h-[462px] md:flex-1"
              />
              <Image
                src="/modeina-estate/my-perfect-view-2.png"
                alt="My Perfect Modeina campaign poster"
                width={231}
                height={462}
                className="h-[640px] w-full object-cover object-center md:h-[462px] md:flex-1"
              />
              <Image
                src="/modeina-estate/my-perfect-view-3.png"
                alt="My Perfect Modeina campaign poster"
                width={231}
                height={462}
                className="h-[640px] w-full object-cover object-center md:h-[462px] md:flex-1"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-[50px] pb-0 md:px-[15px] md:pt-[85px]">
          <div className="mx-auto grid max-w-[1140px] grid-cols-1 gap-5 md:grid-cols-3 md:gap-[38px]">
            <Image
              src="/modeina-estate/sc-exterior-1.png"
              alt="Modeina Estate Sales Centre exterior"
              width={353}
              height={353}
              className="h-[190px] w-full object-cover object-center md:h-[353px]"
            />
            <Image
              src="/modeina-estate/sc-exterior-2.png"
              alt="Modeina Estate Sales Centre exterior"
              width={353}
              height={353}
              className="h-[190px] w-full object-cover object-center md:h-[353px]"
            />
            <Image
              src="/modeina-estate/sc-exterior-3.png"
              alt="Modeina Estate Sales Centre exterior"
              width={353}
              height={353}
              className="h-[190px] w-full object-cover object-center md:h-[353px]"
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
