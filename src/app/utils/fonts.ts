import { Ubuntu, Source_Code_Pro } from "next/font/google";
import localFont from "next/font/local";

export const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-ubuntu",
});

export const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-source-code-pro",
});

export const lofty = localFont({
  src: "../../public/assets/fonts/lofty-goals.otf",
  variable: "--font-lofty",
});