import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study | Finger Snap Journey of InstantScripts | Helsinki",
  description:
    "Discover the Finger Snap Journey of InstantScripts in Helsinki. Learn how a simple creative device symbolises the speed and ease of this digital health service.",
  alternates: {
    canonical: "/instantscripts/",
  },
  openGraph: {
    title: "Case Study | Finger Snap Journey of InstantScripts | Helsinki",
    description:
      "Discover the Finger Snap Journey of InstantScripts in Helsinki. Learn how a simple creative device symbolises the speed and ease of this digital health service.",
    url: "/instantscripts/",
    type: "article",
    images: ["/instantscripts/IS_2-Million-Hearts_TVC_30_Frame-2B.png"],
  },
};

export default function InstantScriptsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-32 pb-10 text-center md:pt-44 md:pb-0">
          <h1 className="mx-auto inline-block bg-hel-orange px-4 py-1.5 font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-9 md:text-[28px] md:leading-[55px]">
            Instantscripts &ndash; 2 Million Hearts
          </h1>
        </div>

        <section className="relative flex min-h-[264px] items-start justify-center overflow-hidden px-4 pt-10 pb-14 md:min-h-[543px] md:pt-16 md:pb-20 lg:min-h-[871px] lg:pt-24 lg:pb-24">
          <Image
            src="/instantscripts/instascript-header.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="relative z-10 w-full max-w-[1140px]">
            <div className="mx-auto max-w-[878px] md:ml-4">
              <video
                className="aspect-video w-full bg-black shadow-2xl"
                controls
                preload="metadata"
                controlsList="nodownload"
              >
                <source
                  src="/instantscripts/InstantScripts_Here-for-You-24-7-INP30TV18AU_Compressed.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>

        <section className="px-5 pt-14 pb-4 md:pt-20">
          <div className="mx-auto max-w-[878px]">
            <h2 className="font-body text-[30px] font-medium text-black md:text-[38px]">
              A campaign with real heart
            </h2>
            <p className="mt-4 font-heading text-[22px] leading-[38px] font-normal text-black md:mt-6 md:text-[36px] md:leading-[60px]">
              Following the unequivocal success of the launch campaign for
              InstantScripts, Helsinki Agency was once again asked to take
              the brand to the next level.
            </p>
            <p className="mt-6 text-[20px] leading-[33px] font-normal text-black md:text-[24px] md:leading-[40px]">
              Over the last three years, InstantScripts had gone from helping
              500,000 people to over 2 million (and growing). That made them
              Australia&rsquo;s largest online healthcare provider.
            </p>
            <p className="mt-4 text-[20px] leading-[33px] font-normal text-black md:text-[24px] md:leading-[40px]">
              It was time to move from functional messaging to a more
              compelling and emotionally appealing brand campaign.
            </p>
          </div>
        </section>

        <section className="px-5 pt-10 pb-10 md:pt-12 md:pb-16">
          <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-3 md:gap-5">
            <div>
              <Image
                src="/instantscripts/IS_2-Million-Hearts_TVC_30_Frame-2B.png"
                alt="InstantScripts campaign film still — patient connecting via device"
                width={355}
                height={200}
                className="h-auto w-full"
              />
              <p className="mt-4 text-[20px] leading-[33px] font-normal text-black md:text-[24px] md:leading-[40px]">
                The new campaign shows how people in need can connect with
                InstantScripts any time and any place.
              </p>
            </div>

            <div className="flex flex-col-reverse md:flex-col">
              <p className="mt-4 text-[20px] leading-[33px] font-normal text-black md:mt-0 md:mb-4 md:text-[24px] md:leading-[40px]">
                As they resolve their medical problem, an InstantScripts
                &lsquo;Heart&rsquo; materialises from their device and floats
                upwards.
              </p>
              <Image
                src="/instantscripts/IS_2-Million-Hearts_TVC_30_Frame-7.png"
                alt="InstantScripts campaign film still — heart rising from device"
                width={355}
                height={200}
                className="h-auto w-full"
              />
            </div>

            <div>
              <Image
                src="/instantscripts/IS_2-Million-Hearts_TVC_30_Frame-8.png"
                alt="InstantScripts campaign film still — heart formed over Australia"
                width={354}
                height={200}
                className="h-auto w-full"
              />
              <p className="mt-4 text-[20px] leading-[33px] font-normal text-black md:text-[24px] md:leading-[40px]">
                All culminating in millions of small hearts making up a
                single, massive heart over the whole of Australia.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 pb-10 md:pb-16">
          <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[1.75fr_1fr] md:gap-5">
            <div>
              <Image
                src="/instantscripts/Punt-Rd-OOH_2-Mill-Hearts_2025_MockUp.png"
                alt="2 Million Hearts campaign on out-of-home billboard, Punt Road"
                width={750}
                height={340}
                className="h-auto w-full"
              />
              <p className="mt-4 text-[20px] leading-[33px] font-normal text-black md:text-[24px] md:leading-[40px]">
                The heart is the central idea to this campaign, and links the
                campaign assets across all media from video, to OOH, to
                digital and online.
              </p>
            </div>
            <div>
              <Image
                src="/instantscripts/Digital-City-of-Sydney-Production_MockUp_v1.png"
                alt="2 Million Hearts campaign on digital screen, City of Sydney"
                width={353}
                height={496}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pb-20 md:pb-28">
          <div className="mx-auto grid max-w-[1160px] gap-5 md:grid-cols-[32%_1fr]">
            <div>
              <Image
                src="/instantscripts/2-MILLION-HEARTS_NOV-2024_300x600_SCRIPT_v1.png"
                alt="2 Million Hearts digital skyscraper ad"
                width={354}
                height={708}
                className="h-auto w-full"
              />
            </div>
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-5">
                <Image
                  src="/instantscripts/2-MILLION-HEARTS_NOV-2024_300x250_v1_DOCTOR.png"
                  alt="2 Million Hearts digital ad — doctor"
                  width={355}
                  height={296}
                  className="h-auto w-full"
                />
                <Image
                  src="/instantscripts/2-MILLION-HEARTS_NOV-2024_300x250_v1_SCRIPT.png"
                  alt="2 Million Hearts digital ad — script"
                  width={352}
                  height={293}
                  className="h-auto w-full"
                />
              </div>
              <Image
                src="/instantscripts/IS_Website-Laptop_InSitu_2025.png"
                alt="InstantScripts website shown on laptop"
                width={750}
                height={372}
                className="h-auto w-full"
              />
            </div>
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
