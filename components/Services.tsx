import {
  StrategyIcon,
  IdeationIcon,
  BrandingIcon,
  PackageIcon,
  WebsiteIcon,
  DigitalAdIcon,
  RetailIcon,
  VideoIcon,
  PrintIcon,
  EdmIcon,
  PromotionsIcon,
  RetouchingIcon,
  PhotographyIcon,
  IllustrationIcon,
} from "./ServiceIcons";
import ServiceStack from "./ServiceStack";

const services = [
  { label: "Strategy & Research", Icon: StrategyIcon },
  { label: "Ideation & Concept", Icon: IdeationIcon },
  { label: "Branding & Design", Icon: BrandingIcon },
  { label: "Package Design", Icon: PackageIcon },
  { label: "Website Design", Icon: WebsiteIcon },
  { label: "Digital AD Design", Icon: DigitalAdIcon },
  { label: "RETAIL & Display Design", Icon: RetailIcon },
  { label: "Video Production", Icon: VideoIcon },
  { label: "Print Production", Icon: PrintIcon },
  { label: "EDM & DM Production", Icon: EdmIcon },
  { label: "Promotions & SOCIAL", Icon: PromotionsIcon },
  { label: "Photo Retouching", Icon: RetouchingIcon },
  { label: "Photography", Icon: PhotographyIcon },
  { label: "Illustration", Icon: IllustrationIcon },
];

export default function Services() {
  return (
    <section id="services" className="bg-black px-5 py-16 md:py-24">
      <div className="mx-auto max-w-[1145px] text-center">
        <h2 className="mx-auto mb-14 inline-block bg-hel-teal px-4 py-1 font-body text-[20px] leading-[27px] font-bold tracking-[4px] text-white uppercase md:mb-20 md:px-6 md:text-[28px] md:leading-[45px]">
          and we do it all right here
        </h2>

        <ServiceStack />

        <ul className="mx-auto flex flex-wrap justify-center gap-x-[38px] gap-y-[80px] [@media(max-width:767px)]:gap-y-[45px]">
          {services.map(({ label, Icon }) => (
            <li
              key={label}
              className="flex w-[150px] flex-col items-center text-hel-teal [@media(max-width:991px)]:w-[148px] [@media(max-width:767px)]:w-[135px] [@media(max-width:360px)]:w-[110px]"
            >
              <span className="mb-[12px] flex shrink-0">
                <Icon />
              </span>
              <span className="px-[13px] text-center font-heading text-[14px] leading-[24px] font-medium text-white uppercase [@media(max-width:767px)]:px-0 [@media(max-width:767px)]:text-[13px]">
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
