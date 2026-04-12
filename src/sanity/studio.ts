import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"
import { sanityConfig } from "./config"
import { schemaTypes } from "./schemas"

export default defineConfig({
  ...sanityConfig,
  name: "designedby3d",
  title: "DesignedBy3D — Адмінка",
  basePath: "/admin",
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
