import React from "react";
import "../styles/globals.scss";
import { Layout } from "../components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
