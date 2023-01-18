import * as React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import { graphql, PageProps } from "gatsby";
import "../queries/fragments";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";
import HeaderSection from "../components/HeaderSection";
import Section from "../components/Section";
import ImageGallery from "../components/ImageGallery";

function ProjectPage({ data, location }: PageProps<Queries.ProjectPageQuery>) {
  const project = data.sanityProject;
  if (!project) return <Text>No project with given slug</Text>;
  return (
    <PageWrapper key={location.pathname}>
      <HeaderSection
        title={project.name}
        image={project.main_image.asset.gatsbyImageData}
        imgSrc={project.main_image.asset.url}
        width="100vw"
        height="70vh"
      />
      <motion.main
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "tween",
          // stiffness: 260,
          // damping: 20,
          delay: 0.5,
          duration: 0.5,
        }}
      >
        (
        <Section>
          <Text>
            {project.description
              ? project.description
              : "Tässä projektissa ei vielä ole sisältöä:("}
          </Text>
        </Section>
        )
        {project.youtube_video_url && (
          <Section pt="0" as={Flex} justifyContent="center">
            <Box
              as="iframe"
              width="600px"
              height="350px"
              src={project.youtube_video_url}
              title={`${project.name} - video`}
              allow="accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture"
              allowFullScreen
              maxWidth="100%"
            />
          </Section>
        )}
        {project.gallery && project.gallery.length > 0 && (
          <ImageGallery images={project.gallery} />
        )}
      </motion.main>
    </PageWrapper>
  );
}

export default ProjectPage;

export function Head() {
  return <title>Home Page</title>;
}

export const query = graphql`
  query ProjectPage($slug: String!) {
    sanityProject(slug: { current: { eq: $slug } }) {
      ...SanityProjectFullInfo
    }
  }
`;
