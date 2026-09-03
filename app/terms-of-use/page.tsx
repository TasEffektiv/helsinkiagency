import LegalPage from "@/components/LegalPage";

export const metadata = {
  title: "Terms of Use | Helsinki Agency",
};

export default function TermsOfUsePage() {
  return (
    <LegalPage title="Terms of Use">
      <h2>Owner of the Website and its Operation</h2>
      <p>
        Helsinki Agency Pty Ltd (ABN 27 154 532 939) owns and operates this
        website for promotional and informational purposes only. The site is
        intended for current or prospective customers, or those with a
        legitimate business interest in the company.
      </p>

      <h2>Acceptance of these Terms of Use</h2>
      <p>
        By accessing this website, you agree to comply with these Terms of
        Use. Breach of these terms may result in immediate termination of
        access.
      </p>

      <h2>Modifications</h2>
      <p>
        Helsinki reserves the right to revise these Terms of Use and the
        website content at any time without notice. Changes become
        effective upon posting.
      </p>

      <h2>Third Party Links</h2>
      <p>
        We are not responsible for linked third-party websites and do not
        endorse their content. Marketing-related cookies are available on
        this site with opt-out capability.
      </p>

      <h2>Intellectual Property</h2>
      <p>
        All materials and content on the Website, including but not limited
        to any and all trade marks, service marks, designs, products,
        software, images and sound recordings, are protected by
        intellectual property laws. You may only view content for personal
        use without removing copyright notices.
      </p>

      <h2>General Use — Permissions and Restrictions</h2>
      <p>
        You may not republish, commercially use, or submit website content
        to artificial intelligence programs or machine learning platforms
        without authorisation.
      </p>

      <h2>Privacy</h2>
      <p>
        Please consult our{" "}
        <a href="/privacy-policy">Privacy Policy</a> for details on how we
        handle personal information.
      </p>

      <h2>Your Rights and Obligations</h2>
      <p>
        You must not use this website to spam, transmit malware, or attempt
        unauthorised access.
      </p>

      <h2>No Liability</h2>
      <p>
        This website is provided &ldquo;as is&rdquo; without warranties.
        While we make every effort to ensure accuracy, Helsinki excludes
        liability for the reliability or completeness of information,
        except where legally non-excludable.
      </p>

      <h2>Indemnity</h2>
      <p>
        You agree to indemnify Helsinki against claims resulting from
        negligent or wilful misuse of this website.
      </p>

      <h2>Termination and Cancellation</h2>
      <p>
        Helsinki reserves the unilateral right to terminate access without
        notice.
      </p>

      <h2>Governing Law</h2>
      <p>
        These terms are governed by Victorian law, with exclusive
        jurisdiction in the courts of Victoria.
      </p>

      <h2>Contact</h2>
      <p>
        Suite 2, 117 Ferrars Street, Southbank, Victoria 3006, Australia
        <br />
        Phone: <a href="tel:+61386726600">+613 8672 6600</a>
        <br />
        Email:{" "}
        <a href="mailto:hei@helsinkiagency.com">hei@helsinkiagency.com</a>
      </p>
    </LegalPage>
  );
}
