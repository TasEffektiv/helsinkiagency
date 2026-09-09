import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer id="contactus" className="bg-black px-5 pb-8">
      <div className="mx-auto mb-16 max-w-[750px] bg-hel-cyan text-center md:mb-24">
        <h2 className="px-4 py-3 font-body text-[22px] font-bold text-white uppercase md:text-[28px]">
          Say hei (hello) to Helsinki
        </h2>
      </div>

      <div className="mx-auto max-w-[1175px]">
        <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-2 md:grid-cols-4 md:text-left">
          <div className="font-body text-[16px] leading-[32px] text-white">
            <p>
              You can talk to us F2F here:
              <br />
              <strong>Suite 2, 117 Ferrars Street,</strong>
              <br />
              <strong>Southbank, Victoria 3006</strong>
              <br />
              <strong>Australia</strong>
            </p>
          </div>
          <div className="font-body text-[16px] leading-[32px] text-white">
            <p>
              Or call our GM, Lisa on:
              <br />
              <strong>
                <a href="tel:+61386726600" className="hover:text-hel-pink2">
                  +613 8672 6600
                </a>
              </strong>
            </p>
          </div>
          <div className="font-body text-[16px] leading-[32px] text-white">
            <p>
              Email us at:
              <br />
              <strong>
                <a
                  href="mailto:hei@helsinkiagency.com"
                  className="hover:text-hel-pink2"
                >
                  hei@helsinkiagency.com
                </a>
              </strong>
            </p>
          </div>
          <div className="font-body text-[16px] leading-[32px] text-white">
            <p className="mb-3">Chat with us on Social:</p>
            <div className="flex justify-center gap-4 md:justify-start">
              <a
                href="https://www.instagram.com/helsinki_agency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/instagram.png"
                  alt="Instagram"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/helsinki-agency/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/social/linkedin.png"
                  alt="LinkedIn"
                  width={46}
                  height={39}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-[750px] md:mt-20">
          <h4 className="mb-6 text-center font-body text-[16px] tracking-[2px] text-white uppercase md:text-left">
            Or send us a note below:
          </h4>
          <ContactForm />
        </div>

        <p className="mx-auto mt-16 max-w-[354px] text-center font-body text-[12px] leading-[30px] text-white/70">
          We acknowledge the Wurundjeri people of the Kulin nation as the
          traditional custodians of the land on which we operate today. We
          pay our respects to their Elders past, present and future.
        </p>

        <div className="mt-10 flex flex-col items-center gap-6 border-t border-white/10 pt-8 md:flex-row md:justify-between">
          <div className="flex flex-col flex-wrap items-center gap-1 text-center font-body text-[12px] font-medium text-white/70 md:flex-1 md:flex-row md:justify-between md:gap-4 md:text-left">
            <p>© 2026 Helsinki Agency Pty Ltd.</p>
            <p>All Rights Reserved.</p>
            <Link href="/terms-of-use" className="hover:text-white">
              Terms of Use
            </Link>
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy &amp; Cookie Policy
            </Link>
          </div>
          <BackToTop />
        </div>
      </div>

      <div className="mt-8 flex">
        <div className="h-8 flex-1 bg-hel-orange" />
        <div className="h-8 flex-1 bg-hel-pink" />
        <div className="h-8 flex-1 bg-hel-teal" />
        <div className="h-8 flex-1 bg-hel-cyan" />
        <div className="h-8 flex-1 bg-hel-purple" />
      </div>
    </footer>
  );
}
