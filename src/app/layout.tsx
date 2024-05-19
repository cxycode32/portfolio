import type { Metadata } from "next";
import { Ubuntu, Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-ubuntu",
});

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-source-code-pro",
});

const lofty = localFont({
  src: "../../public/assets/fonts/lofty-goals.otf",
  variable: "--font-lofty",
});

export const metadata: Metadata = {
  title: "Cindy Sim",
  description: "A Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="box-border">
      <style>
        {`
          :root {
            --font-ubuntu: ${ubuntu.style.fontFamily};
            --font-source-code-pro: ${source_code_pro.style.fontFamily};
            --font-lofty: ${lofty.style.fontFamily};
          }
        `}
      </style>
      <body className={`${lofty.className}`}>{children}</body>
    </html>
  );
}
