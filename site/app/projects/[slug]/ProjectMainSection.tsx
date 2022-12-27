"use client";
import { motion } from "framer-motion";
import ImageGallery from "../../(components)/ImageGallery";
import Section from "../../(components)/Section";
import { ProjectFullInfo } from "../../../api/queries";
import { Flex, Text, Box } from "../../../components/chakra";

type ProjectMainSectionProps = {
  project: ProjectFullInfo;
};

const ProjectMainSection = ({ project }: ProjectMainSectionProps) => {
  return (
    <motion.main
      initial={{ y: -300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        type: "tween",
        // stiffness: 260,
        // damping: 20,
        delay: 0.3,
        duration: 0.5,
      }}
    >
      {project.description && (
        <Section>
          <Text>{project.description}</Text>
        </Section>
      )}
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
          ></Box>
        </Section>
      )}
      {project.gallery_images && project.gallery_images.length > 0 && (
        <ImageGallery images={project.gallery_images} />
      )}
    </motion.main>
  );
};

export default ProjectMainSection;
