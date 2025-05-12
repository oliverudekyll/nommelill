import { Goudy_Bookletter_1911 } from "next/font/google";
import "./globals.css";

const goudy = Goudy_Bookletter_1911({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nõmme Lill",
  description: "Jubina lilleputka",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={goudy.className}>{children}</body>
    </html>
  );
}
