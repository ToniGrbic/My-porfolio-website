import Home from "./home";
import { client } from "../lib/client";
import { About } from "../types/schema-types";
import React from "react";

async function getProfile(): Promise<About> {
  const query = '*[_type == "about"]';
  return (await client.fetch<About>(query))[0];
}

export default async function Page() {
  const about = await getProfile();
  return <Home about={about} />;
}
