import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { NavigationHeader } from "./components/navigation/Navigation";
import { ApplicationFooter } from "@/app/components/footer/Footer";

export const metadata: Metadata = {
  title: "Geometric Calculator",
  description: "Project for BBS II Göttingen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen justify-between">
            <NavigationHeader />
            <div className="flex-grow">{children}</div>
            <ApplicationFooter />
          </div>
        </Providers>
      </body>
    </html>
  );
}
