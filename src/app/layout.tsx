import type { Metadata } from "next";
import Providers from "./providers";

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
