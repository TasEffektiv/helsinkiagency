import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LumoAppHeroVideo from "@/components/LumoAppHeroVideo";
import LumoAppSaVideo from "@/components/LumoAppSaVideo";
import LumoAppSocialVideo from "@/components/LumoAppSocialVideo";

export const metadata: Metadata = {
  title: "Case Study | Lumo Energy App Launch | Helsinki",
  description:
    "Discover how we launched Lumo Energy's app across Victoria and South Australia with two distinct, state-specific campaigns.",
  alternates: {
    canonical: "/lumo-app/",
  },
  openGraph: {
    title: "Case Study | Lumo Energy App Launch | Helsinki",
    description:
      "Discover how we launched Lumo Energy's app across Victoria and South Australia with two distinct, state-specific campaigns.",
    url: "/lumo-app/",
    type: "article",
    images: ["/lumo-app/OOH_MelbAirport_Lumo-Vic.png"],
  },
};

export default function LumoAppPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="px-5 pt-[152px] text-center md:max-nav:pt-[162px] nav:pt-[270px]">
          <h1 className="mx-auto max-w-[1140px] bg-hel-orange px-[25px] font-body text-[20px] leading-[40px] font-bold tracking-[2px] text-black uppercase md:text-[28px] md:leading-[55px]">
            Lumo VIC &amp; SA - App Launch
          </h1>
        </div>

        <section className="overflow-hidden">
          <div className="relative left-1/2 aspect-[1920/871] w-full max-w-none -translate-x-1/2 lg:w-[max(100%,1920px)]">
            <Image
              src="/lumo-app/lumo-app-banner.png"
              alt="Lumo App launch showcased on a desktop monitor"
              fill
              priority
              sizes="(max-width: 1920px) 1920px, 100vw"
              className="object-cover"
            />
            <div className="absolute top-[12.629%] right-[26.198%] left-[27.552%] aspect-[16/9] overflow-hidden">
              <LumoAppHeroVideo />
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-16">
          <div className="mx-auto max-w-[1140px]">
            <h2 className="font-heading text-[28px] leading-[38px] font-light text-black md:text-[36px] md:leading-[60px]">
              One App, two States.
            </h2>
            <p className="mt-4 text-[22px] leading-[38px] font-light text-black md:text-[25px] md:leading-[44px] lg:text-[36px] lg:leading-[60px]">
              Lumo Energy developed one of the most user friendly energy apps
              on the market, so when it came to launch, we honoured that with
              two campaigns, one for their Victorian market and one for their
              South Australian market.
            </p>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-16">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-8 md:flex-row md:gap-5">
            <div className="md:w-[66%]">
              <p className="text-[20px] leading-[37px] font-light text-black md:text-[24px] md:leading-[40px]">
                Lumo has a different brand presence in each state, so we had
                to cleverly deliver the same information in two very
                different styles. Lumo VIC&rsquo;s brand being more
                irreverent, and Lumo SA&rsquo;s having a sunny and warm,
                friendly feel to it.
              </p>
              <h3 className="mt-6 text-[25px] leading-[38px] font-medium text-black md:text-[30px] md:leading-[42px]">
                Lumo Victoria App launch
              </h3>
              <Image
                src="/lumo-app/OOH_MelbAirport_Lumo-Vic.png"
                alt="Lumo VIC app launch out-of-home advertising at Melbourne Airport"
                width={750}
                height={328}
                className="mt-4 h-auto w-full"
              />
              <div className="mt-5 flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex flex-col gap-4 sm:w-[47%]">
                  <Image
                    src="/lumo-app/LumoVIC_APP_SocStat_1080x566_V2.png"
                    alt="Lumo VIC app launch social media asset"
                    width={353}
                    height={185}
                    className="h-auto w-full"
                  />
                  <Image
                    src="/lumo-app/LumoAPP_MyAccountTile_DT_280x200_VIC.png"
                    alt="Lumo VIC My Account app tile"
                    width={353}
                    height={252}
                    className="h-auto w-full"
                  />
                </div>
                <p className="text-[20px] leading-[37px] font-light text-black sm:w-[53%] md:text-[24px] md:leading-[40px]">
                  Victoria was treated to the well known animated home
                  appliances discovering the app on their friend, the
                  SmartPhone.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-5 md:w-[34%]">
              <LumoAppSocialVideo />
              <Image
                src="/lumo-app/LumoVICapp_display_300x600_05.png"
                alt="Lumo VIC app launch display advertisement"
                width={354}
                height={708}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-16">
          <div className="mx-auto flex max-w-[1140px] flex-col gap-8 md:flex-row md:gap-5">
            <div className="md:w-[68%]">
              <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
                <div className="sm:w-[45%]">
                  <LumoAppSaVideo />
                </div>
                <div className="sm:w-[55%]">
                  <h3 className="text-[25px] leading-[38px] font-medium text-black md:text-[30px] md:leading-[42px]">
                    Lumo SA App launch
                  </h3>
                  <p className="mt-4 text-[20px] leading-[37px] font-light text-black md:text-[24px] md:leading-[40px]">
                    South Australians were presented with a slick flying
                    mobile phone over a backdrop of the Lumo SA campaign&rsquo;s
                    &lsquo;Little World&rsquo;, with call-outs to explain and
                    promote the app.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:w-[32%]">
              <Image
                src="/lumo-app/LumoSA_Display_iPhone.png"
                alt="Lumo SA app launch shown on iPhone display"
                width={354}
                height={707}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        <section className="px-5 pt-10 pb-0 md:pt-16">
          <div className="mx-auto grid max-w-[1140px] gap-8 md:grid-cols-2 md:gap-10">
            <Image
              src="/lumo-app/LumoSA_APP_SocStat_1080x566.png"
              alt="Lumo SA app launch social media asset"
              width={574}
              height={301}
              className="h-auto w-full self-center"
            />
            <p className="text-[20px] leading-[37px] font-light text-black md:self-center md:text-[24px] md:leading-[40px]">
              With online promotional videos, a series of socials, display
              ads and a 60 second full explainer video, the app was given the
              fanfare it deserved. Consequently, download numbers skyrocketed
              with a huge percentage of their customer base in each state now
              regular users of the app.
            </p>
          </div>
        </section>

        <section className="px-5 pt-16 pb-24 text-center md:pt-20 md:pb-32">
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
