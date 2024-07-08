import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQuery } from "../context/reactQuery";
import { SessionProviderContext } from "../context/sessionProvider";
import { Header } from "@/components/Header";

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
          <ReactQuery>
            <div className="w-full min-h-screen flex bg-background">
              {/* sidebar */}
              <div className="w-[250px] bg-secondary shadow-xl"></div>
              {/* sidebar */}

              {/* main */}
              <main className="w-[calc(100%-250px)]">
                {/* header */}
                <Header />
                {/* header */}
                {children}
              </main>
              {/* main */}
            </div>
          </ReactQuery>
        </body>
      </html>
    </SessionProviderContext>
  );
}
