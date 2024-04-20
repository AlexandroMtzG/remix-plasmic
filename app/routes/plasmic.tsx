import { LoaderFunction, json } from "@remix-run/node";
import { useTypedLoaderData } from "remix-typedjson";
import { PlasmicComponent, PlasmicRootProvider } from "@plasmicapp/loader-react";
import { PLASMIC } from "../plasmic-init";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from "react";

// Fetch the data needed to render Plasmic pages or components, server-side.
export const loader: LoaderFunction = async () => {
  // You can pass in multiple page paths or component names.
  const plasmicData = await PLASMIC.fetchComponentData("Homepage");
  return json(plasmicData);
};

export default function MyPage() {
  const plasmicData = useTypedLoaderData();
  return (
    <PlasmicRootProvider loader={PLASMIC} prefetchedData={plasmicData}>
      <PlasmicComponent component="Homepage" />
    </PlasmicRootProvider>
  );
}
