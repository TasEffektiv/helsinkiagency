import Image from "next/image";

const clients = [
  { name: "Glanmire Park", href: "https://www.glanmirepark.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/Glanmire-Park_Logo2023_rgb_7722.png" },
  { name: "Yarra Trams", href: "https://yarratrams.com.au/", logo: "https://www.helsinkiagency.com/wp-content/uploads/2025/03/Yarra-Trams-MONO-Rev.png" },
  { name: "Westbrook Estate", href: "https://westbrookestate.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/westbrook-logo.png" },
  { name: "Custom Plates", href: "https://www.vicroads.vic.gov.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/customplates-logo.png" },
  { name: "Dennis Family Corp", href: "https://denniscorp.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/dennis-family-logo.png" },
  { name: "Dineamic", href: "https://www.dineamic.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/dineamic-logo.png" },
  { name: "Eva", href: "https://eva.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/eva-logo.png" },
  { name: "InstantScripts", href: "https://www.instantscripts.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/instantscripts-logo.png" },
  { name: "Loreto Toorak", href: "https://www.loretotoorak.vic.edu.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/loreto-logo.png" },
  { name: "Lumo Energy", href: "https://www.lumoenergy.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/lumo-logo.png" },
  { name: "Modeina", href: "https://modeina.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/modeina-logo.png" },
  { name: "Nature One Dairy", href: "https://natureonedairy.com/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/nature-one-logo.png" },
  { name: "Peppercorn Hill", href: "https://peppercornhill.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/peppercorn-hill-logo.png" },
  { name: "Pope Products", href: "https://www.popeproducts.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/pope-logo.png" },
  { name: "Red Energy", href: "https://www.redenergy.com.au/", logo: "https://www.helsinkiagency.com/wp-content/uploads/2025/03/2014-RED-ENERGY-LOGO.png" },
  { name: "V/Line", href: "https://www.vline.com.au/", logo: "https://helsinkiagency.com/wp-content/uploads/2024/02/vline-logo.png" },
];

export default function Clients() {
  return (
    <section id="clients" className="bg-hel-dark px-5 pb-16 md:pb-24">
      <div className="mx-auto max-w-[1475px] text-center">
        <h2 className="mb-[50px] inline-block max-w-[750px] bg-hel-pink2 px-[15px] py-[5px] font-body text-[20px] leading-[27px] font-bold tracking-[4px] text-white uppercase md:px-[25px] md:py-0 md:text-[28px] md:leading-[45px]">
          for these delightful clients
        </h2>

        <div className="mx-auto flex max-w-[1400px] flex-wrap justify-center gap-5 text-left md:gap-[25px] lg:gap-10">
          {clients.map((client) => (
            <a
              key={client.name}
              href={client.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[145px] w-full max-w-[145px] items-center justify-center border border-[#707070] p-5 transition-colors hover:border-hel-purple md:min-h-[200px] md:max-w-[200px] lg:min-h-[254px] lg:max-w-[254px]"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={160}
                className="h-auto max-h-full w-auto max-w-full object-contain"
                unoptimized
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
