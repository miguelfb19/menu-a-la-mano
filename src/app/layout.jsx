import localFont from "next/font/local";
import "./globals.css";
import { TopMenu } from "@/components";
import { FooterComp } from "@/components";
import { Suspense } from "react";
// el suspense se usa en Next como una manera de manejar el prerenderizado en producción de funcionalidades relacionadas con el cliente, tales como usePathName o useSearchParams

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Menú a la mano",
  description: "Menús y recetas para cada día en tu hogar",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense>
          <TopMenu />
        </Suspense>

        {children}
        <FooterComp />
      </body>
    </html>
  );
}
