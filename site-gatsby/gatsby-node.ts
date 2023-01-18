import { GatsbyNode } from "gatsby";
import { resolve } from "path";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }

    type SanityImageDimensions {
      aspectRatio: Float!
      width: Float!
      height: Float!
    }

    type SanityImageMetadata {
      dimensions: SanityImageDimensions!
    }

    type SanityImageAsset {
      metadata: SanityImageMetadata!
      url: String!
    }

    type SanityImage {
      asset: SanityImageAsset!
    }

    type SanitySlug {
      current: String!
    }

    type SanityProject {
      name: String!
      slug: SanitySlug!
      _id: String!
      category: String!
      main_image: SanityImage!
      gallery: [SanityImage!]
    }


    type SanityGeneral {
      hero_image: SanityImage!
      hero_text: String!
      main_description_title: String!
      main_description_text: String!
      abstract_header_image: SanityImage!
      portrait_header_image: SanityImage!
      flower_header_image: SanityImage!
    }
  `);
  };

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
}) => {
  const { createPage } = actions;

  const result: {
    errors?: any;
    data?: {
      allSanityProject?: {
        edges?: { node?: { slug?: { current?: string } } }[];
      };
    };
  } = await graphql(`
    query ProjectPagesCreation {
      allSanityProject(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    throw result.errors;
  }

  const projects = result.data?.allSanityProject?.edges;

  if (projects) {
    projects.forEach((edge) => {
      if (!edge?.node?.slug?.current) return;
      const path = `/project/${edge.node.slug.current}`;

      createPage({
        path,
        component: resolve("./src/templates/project.tsx"),
        context: { slug: edge.node.slug.current },
      });
    });
  }
};
