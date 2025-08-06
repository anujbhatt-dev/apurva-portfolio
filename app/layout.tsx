import type { Metadata } from "next";
import "./globals.css";
import Provider from "@/components/Provider";



export const metadata: Metadata = {
  title: "APURVA THAKUR",
  description: "Apurva Thakur - AI/ML Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-[100vh]  tracking-wide overflow-x-hidden`}
      >
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}

