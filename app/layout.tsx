import type { Metadata } from "next";
import ReactQueryProvider from "@/components/ReactQueryProvider";
import "../style/globals.css";

export const metadata: Metadata = {
  title: "react query",
  description: "Generated by create next app And React Query",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
