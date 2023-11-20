import { Pprovider } from "@/Redux/Providers";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Latin ReginApp", // ask what is the name of application?
  description: "This Application is a Social Network for join users to 'Latin ReginApp'", // think about better description
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

        <body >
      <Pprovider>
      {children}
      </Pprovider>
        </body>
    </html>
  );
}
