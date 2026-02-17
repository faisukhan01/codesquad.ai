import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import "@/index.css";

export const metadata: Metadata = {
  title: "CodeSquad - Modern AI Software Solutions",
  description: "Modern softwares that help SMEs grow with AI",
  icons: {
    icon: [
      { url: "/favicon.svg?v=3", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg?v=3",
    apple: { url: "/favicon.png", sizes: "180x180", type: "image/png" },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg?v=3" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
