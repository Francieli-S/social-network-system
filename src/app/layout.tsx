import type { Metadata } from "next";
import "./globals.css";
import StoreWrapper from "@/store/store";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreWrapper>{children}</StoreWrapper>
      </body>
    </html>
  );
}
