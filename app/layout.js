import { Roboto, Roboto_Mono  } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Image Gallery",
  description: "A gallery of images.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${robotoMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/colour">Colour Switcher</Link></li>
            <li><Link href="/counter">Counter</Link></li>
          </ul>
        </nav>
        <main>{children}</main></body>
    </html>
  );
}
