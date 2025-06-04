import type { Metadata } from "next";
import Providers from "./providers";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Weebur",
  description: "Weebur Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
