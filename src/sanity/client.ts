import { createClient } from "next-sanity"
import imageUrlBuilder from "@sanity/image-url"
import { sanityConfig } from "./config"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID

export const sanityClient = projectId
  ? createClient(sanityConfig)
  : null

export function urlFor(source: Parameters<ReturnType<typeof imageUrlBuilder>["image"]>[0]) {
  if (!sanityClient) {
    const dummy = {
      url: () => "",
      width: () => dummy,
      height: () => dummy,
      fit: () => dummy,
    }
    return dummy
  }
  return imageUrlBuilder(sanityClient).image(source)
}
