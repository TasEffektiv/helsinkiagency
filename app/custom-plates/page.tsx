import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Case Study | Revolutionising Custom Plates | Helsinki",
  description:
    "Explore our custom plate case studies and our collaboration with 3D developers for Augmented Reality Instagram filters.",
  alternates: {
    canonical: "/custom-plates/",
  },
  openGraph: {
    title: "Case Study | Revolutionising Custom Plates | Helsinki",
    description:
      "Explore our custom plate case studies and our collaboration with 3D developers for Augmented Reality Instagram filters.",
    url: "/custom-plates/",
    type: "article",
    images: ["/custom-plates/customplate-thum-1.png"],
  },
};

export default function CustomPlatesPage() {
  return (
    <>
      <Header />
      <main className="bg-white font-heading">
        {/* Page title band */}
        <div className="px-[15px] pt-[152px] text-center md:px-5 md:max-nav:pt-[162px] nav:pt-[270px] lg:px-0">
          <h1 className="mx-auto max-w-[1140px] bg-hel-orange px-[15px] py-[5px] font-body text-[20px] leading-[28px] font-bold tracking-[2px] text-black uppercase md:px-[25px] md:py-0 md:text-[28px] md:leading-[55px]">
            Custom Plates - Instagram Lens
          </h1>
        </div>

        {/* Hero banner */}
        <section className="px-[15px] pb-[60px] md:px-5 md:pb-[100px]">
          <Image
            src="/custom-plates/custom-plates-banner-image-up.png"
            alt="Custom Plates Augmented Reality Instagram lens campaign banner"
            width={1920}
            height={781}
            priority
            sizes="100vw"
            className="h-auto w-full"
          />
        </section>

        {/* Intro heading */}
        <section className="mt-[30px] px-[15px] md:p-[10px]">
          <div className="mx-auto flex w-full max-w-[1140px] flex-wrap md:flex-nowrap">
            <div className="w-full pb-[15px] md:w-[64%] md:shrink-0 md:grow-0 md:p-[10px]">
              <p className="text-[28px] leading-[40px] font-medium text-black md:text-[32px] md:leading-[50px] lg:text-[38px] lg:leading-[60px]">
                How Augmented Reality worked for Custom Plates&rsquo;
                &lsquo;try before you buy&rsquo; campaign.
              </p>
            </div>
            <div className="w-full md:w-[50%] md:pt-[50px] md:pl-[50px]" />
          </div>
        </section>

        {/* Lead paragraph */}
        <section className="mt-[10px] px-[15px] pb-[15px] md:p-[10px]">
          <div className="mx-auto w-full max-w-[1140px]">
            <div className="md:p-[10px]">
              <div className="mx-auto w-full max-w-[1140px]">
                <div className="flex w-full flex-wrap md:w-[100.625%]">
                  <p className="w-[105.597%] max-w-[105.597%] text-[22px] leading-[36px] font-light text-black md:text-[30px] md:leading-[50px] lg:text-[36px] lg:leading-[60px]">
                    Partnering with our 3D developers, we created a series of
                    Augmented Reality Instagram filters that allowed users to
                    see plate designs on their very own car through their
                    phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery + copy */}
        <section className="px-[15px] pt-[15px] md:p-[10px]">
          <div className="mx-auto w-full max-w-[1140px]">
            <div className="md:p-[10px]">
              <div className="mx-auto flex w-full max-w-[1140px] flex-wrap gap-5 md:flex-nowrap">
                {/* Left column */}
                <div className="flex w-full flex-col gap-5 md:w-[68%] md:shrink-0 md:grow-0">
                  <div className="flex w-full flex-wrap gap-[30px] md:flex-nowrap">
                    <div className="w-full md:min-w-0 md:flex-1">
                      <Image
                        src="/custom-plates/customplate-thum-1.png"
                        alt="Custom Plates Instagram AR filter opened on a mobile phone"
                        width={353}
                        height={353}
                        priority
                        className="h-auto w-full max-w-full"
                      />
                    </div>
                    <div className="w-full md:min-w-0 md:flex-1">
                      <Image
                        src="/custom-plates/customplate-thum-2.png"
                        alt="Custom plate design previewed on a car through the AR lens"
                        width={353}
                        height={353}
                        className="h-auto w-full max-w-full"
                      />
                    </div>
                  </div>

                  <div className="mt-[10px] flex w-full flex-wrap gap-[30px] md:flex-nowrap">
                    <div className="w-full md:min-w-0 md:flex-1">
                      <Image
                        src="/custom-plates/customplate-thum-3.png"
                        alt="Custom Plates social media campaign creative"
                        width={353}
                        height={353}
                        className="h-auto w-full max-w-full"
                      />
                    </div>
                    <div className="w-full md:min-w-0 md:flex-1">
                      <Image
                        src="/custom-plates/customplate-thum-4.png"
                        alt="Still from a Custom Plates how-to video for the Instagram filters"
                        width={353}
                        height={353}
                        className="h-auto w-full max-w-full"
                      />
                    </div>
                  </div>

                  <div className="mt-[10px] flex w-full flex-wrap gap-[30px] md:flex-nowrap">
                    <div className="w-full md:min-w-0 md:flex-1">
                      <Image
                        src="/custom-plates/customplate-big-thum-1.png"
                        alt="Augmented Reality custom plate shown on a car in the Instagram lens"
                        width={749}
                        height={496}
                        className="h-[277px] w-full max-w-full object-cover object-center md:h-[496px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Right column */}
                <div className="w-full md:min-w-0 md:flex-1 md:pl-5">
                  <div className="flex w-full flex-col gap-5">
                    <p className="text-[20px] leading-[38px] font-light text-black lg:text-[24px] lg:leading-[40px]">
                      Paired with an extensive social media campaign, how to
                      videos and a number of reels and stories about the
                      filters, it became a highly successful selling tool for
                      them.
                    </p>
                    <p className="text-[20px] leading-[38px] font-light text-black lg:text-[24px] lg:leading-[40px]">
                      And the filters remain as popular as ever for those
                      looking to customise their favourite ride.
                    </p>
                    <div>
                      <Image
                        src="/custom-plates/custom-plates-right-side-image.png"
                        alt="Custom Plates Instagram story promoting the Augmented Reality filters"
                        width={349}
                        height={757}
                        className="h-[700px] w-full md:h-[384px] lg:mt-10 lg:h-[728px]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Back to work */}
        <section className="mb-[60px] p-[10px] md:mb-20 lg:mb-[130px]">
          <div className="mx-auto w-full max-w-[1140px] text-center">
            <Link
              href="/#casestudy"
              className="mt-10 inline-block bg-hel-orange px-[37px] py-[17px] text-[18px] leading-[30px] font-bold text-black no-underline transition-colors hover:bg-hel-purple hover:text-white md:mt-[60px] md:text-[28px] md:leading-[32px] lg:mt-[70px]"
            >
              BACK TO
              <br />
              WORK
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
