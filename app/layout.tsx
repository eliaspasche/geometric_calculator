import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { NavigationHeader } from "./components/navigation";

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
    <html lang="en" className="light">
      <body>
        <Providers>
          <NavigationHeader>{children}</NavigationHeader>
        </Providers>
      </body>
    </html>
  );
}
