import { defineConfig, isDev } from "sanity";
import { deskTool } from "sanity/desk";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./schemas/schema";
import { structure } from "./deskStructure";

const devOnlyPlugins = [visionTool()];

export default defineConfig({
  name: "tiitu-cms",
  title: "Tiitun studio",
  projectId: "u6nq8yct",
  dataset: "production",
  schema: {
    types: schemaTypes,
  },
  // ...
  plugins: [
    deskTool({
      structure,
    }),
    dashboardTool({
      widgets: [
        netlifyWidget({
          title: "Netlify deploys",
          sites: [
            {
              title: "Tiitun hienot sivut",
              apiId: "63add42c-71d2-46fd-b83a-b7e26c55ea00",
              buildHookId: "63c91180d2e11c5ce08552c9",
              name: "tiitun-hienot-sivut",
              url: "https://tiitun-hienot-sivut.netlify.app",
            },
          ],
        }),
      ],
    }),
    ...(isDev ? devOnlyPlugins : []),
  ],
});
