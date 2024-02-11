import React from "react";
import Home from "./home";
import { client } from "@/lib/client";
import type { About } from "@/types/schema-types";

async function getProfile(): Promise<About[]> {
  const query = '*[_type == "about"]';
  return await client.fetch<About[]>(query);
}

export default async function Page() {
  const [about] = await getProfile();

  return <Home about={about} />;
}
