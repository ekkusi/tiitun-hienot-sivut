import * as React from "react";
import { Box, Text } from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import "../queries/fragments";
import PageWrapper from "../components/PageWrapper";
import HeaderSection from "../components/HeaderSection";
import ProjectGallery from "../components/ProjectGallery";
import Section from "../components/Section";

function IndexPage({ data, location }: PageProps<Queries.IndexPageQuery>) {
  const projects = data.allSanityProject.edges.map((it) => it.node);
  const general = data.sanityGeneral;

  const flowerProjects = projects.filter((it) => it.category === "flower");
  const abstractProjects = projects.filter((it) => it.category === "abstract");
  const portraitProjects = projects.filter((it) => it.category === "portrait");

  return (
    general && (
      <PageWrapper key={location.pathname}>
        <HeaderSection
          imgSrc={general.hero_image.asset.url}
          image={general.hero_image.asset.gatsbyImageData}
          height="100vh"
          title={general.hero_text}
          textElementProps={{
            as: "span",
            fontSize: { base: "3xl", md: "4xl" },
            textAlign: "center",
            width: { base: "100%", md: "500px", lg: "700px" },
            pb: { base: 0, md: 10 },
          }}
        />
        <Box as="main" position="relative">
          <Section colorMode="light">
            <h1>{general.main_description_title}</h1>
            <Text>{general.main_description_text}</Text>
          </Section>
          <HeaderSection
            imgSrc={general.abstract_header_image.asset.url}
            image={general.abstract_header_image.asset.gatsbyImageData}
            title="Abstraktit"
          />
          <ProjectGallery projects={abstractProjects} />
          <HeaderSection
            imgSrc={general.portrait_header_image.asset.url}
            image={general.portrait_header_image.asset.gatsbyImageData}
            title="Portrait"
          />
          <ProjectGallery projects={portraitProjects} />
          <HeaderSection
            image={general.flower_header_image.asset.gatsbyImageData}
            imgSrc={general.flower_header_image.asset.url}
            title="Kukkatädit"
          />
          <ProjectGallery projects={flowerProjects} />
        </Box>
      </PageWrapper>
    )
  );
}

export default IndexPage;

export function Head() {
  return <title>Home Page</title>;
}

export const query = graphql`
  query IndexPage {
    allSanityProject {
      edges {
        node {
          ...SanityProject
        }
      }
    }
    sanityGeneral(_id: { eq: "general" }) {
      hero_text
      main_description_title
      main_description_text
      hero_image {
        ...SanityImage
      }
      abstract_header_image {
        ...SanityImage
      }
      flower_header_image {
        ...SanityImage
      }
      portrait_header_image {
        ...SanityImage
      }
    }
  }
`;
