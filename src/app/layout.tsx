import React from "react";
import "../styles/globals.scss";
import { Layout } from "../components";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "tonigrbic portfolio",
  description: " my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
