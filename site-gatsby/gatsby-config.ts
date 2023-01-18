import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Tiitun hienot sivut`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "u6nq8yct",
        dataset: "production",
      },
    },
    // {
    //   resolve: "gatsby-plugin-sanity-image",
    //   options: {
    //     projectId: "u6nq8yct",
    //     dataset: "production",
    //   },
    // },
    // "gatsby-theme-ekkus-design-library",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    "gatsby-plugin-netlify",
  ],
};

export default config;
