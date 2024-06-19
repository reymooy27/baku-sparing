import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQuery } from "../../context/reactQuery";
import { SessionProviderContext } from "../../context/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Baku Sparing",
  description: "Platform untuk tanding futsal anak kupang",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionProviderContext>
      <html lang="en">
        <body className={inter.className}>
          <ReactQuery>{children}</ReactQuery>
        </body>
      </html>
    </SessionProviderContext>
  );
}
