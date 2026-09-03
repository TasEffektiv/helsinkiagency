import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="bg-black px-5 pt-40 pb-20 md:pt-48">
        <div className="mx-auto max-w-[820px]">
          <h1 className="mb-2 font-heading text-[28px] font-extrabold text-white uppercase md:text-[40px]">
            {title}
          </h1>
          {updated && (
            <p className="mb-10 font-body text-[13px] text-white/50">
              {updated}
            </p>
          )}
          <div className="space-y-8 font-body text-[15px] leading-[28px] text-white/85 [&_a]:text-hel-pink2 [&_a]:underline [&_h2]:mb-2 [&_h2]:mt-8 [&_h2]:font-heading [&_h2]:text-[18px] [&_h2]:font-bold [&_h2]:text-white [&_h2]:uppercase [&_strong]:text-white">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
