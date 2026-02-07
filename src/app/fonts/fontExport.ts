import localFont from "next/font/local";

const pinarFont = localFont({
  src: "./pinar.ttf",
  variable: "--font-pinar",
});
const romanFont = localFont({
  src: "./roman.otf",
  variable: "--font-roman",
});
const impactFont = localFont({
  src: "./impact.ttf",
  variable: "--font-impact",
});

export { pinarFont, romanFont, impactFont };
