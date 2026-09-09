import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-white pt-[112px] nav:pt-[170px]">
        <div className="px-[15px] py-[22px] text-center md:px-5 md:pt-[50px] md:pb-5">
          <h1 className="font-heading text-[28px] leading-[40px] font-extrabold text-black md:text-[36px] md:leading-[1.2]">
            {title}
          </h1>
        </div>
        <div className="mx-auto max-w-[1140px] px-[15px] pb-[60px]">
          <div className="font-heading text-[16px] leading-[32px] text-black [&_a]:text-hel-pink [&_a:hover]:underline [&_h2]:mt-[40px] [&_h2]:mb-[15px] [&_h2]:text-[22px] [&_h2]:leading-[1.4] [&_h2]:font-extrabold [&_h2]:text-black [&_li]:mb-[10px] [&_p]:mb-[25px] [&_strong]:font-semibold [&_ul]:my-[25px] [&_ul]:list-disc [&_ul]:pl-[22px]">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
