import Home from "./home";
import { client } from "../lib/client";
import React from "react";

async function getProfile() {
  const query = '*[_type == "about"]';
  const about = await client.fetch(query);
  return about[0];
}

export default async function Page() {
  const about = await getProfile();
  return <Home about={about} />;
}
