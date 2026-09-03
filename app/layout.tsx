import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.helsinkiagency.com"),
  title: "Digital Agency Australia | Strategy, Design & Production | Helsinki",
  description:
    "Boost your online presence with Helsinki, a leading digital agency in Australia. We specialise in strategy, design, and production to help your business thrive.",
  openGraph: {
    title: "Digital Agency Australia | Strategy, Design & Production | Helsinki",
    description:
      "Boost your online presence with Helsinki, a leading digital agency in Australia. We specialise in strategy, design, and production to help your business thrive.",
    siteName: "Helsinki Agency",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black font-body">
        {children}
      </body>
    </html>
  );
}
