import "./globals.css";

import { Anonymous_Pro, Fira_Mono } from "next/font/google";
const firaMono = Fira_Mono({
  weight: ["400", "500", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fira-mono",
});

const anonymousPro = Anonymous_Pro({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anonymous-pro",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col justify-between bg-black relative text-white mx-auto max-w-screen-xl mt-40 pb-40 px-8">
        {children}
      </body>
    </html>
  );
}
