import { TextProps } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import Link from "next/link";
import { Project } from "../../api/queries";
import { Box, Text } from "../../components/chakra";

type ProjectCardProps = TextProps & {
  project: Project;
  imageProps?: Omit<ImageProps, "src" | "alt">;
};

const textMotion = {
  rest: {
    opacity: 0,
    y: 0,
    x: "-50%",
  },
  hover: {
    opacity: 1,
    y: "-50%",
    x: "-50%",
  },
};

const containerMotion = {
  rest: {
    opacity: 1,
  },
  hover: {
    opacity: 0.8,
  },
};

const ProjectCard = ({ project, imageProps, ...rest }: ProjectCardProps) => {
  return (
    // <Box {...rest}>
    <Text
      as={Link}
      href={`projects/${project.slug.current}`}
      _hover={{ opacity: 1, transition: "none" }}
      {...rest}
    >
      <Box
        as={motion.div}
        position="relative"
        initial="rest"
        whileHover="hover"
        variants={containerMotion}
      >
        <Image
          key={project._id}
          className="next-image__auto-height"
          src={project.main_image.url}
          alt={project.name}
          fill
          {...imageProps}
        />
        <Text
          position="absolute"
          color="white"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          as={motion.span}
          variants={textMotion}
        >
          {project.name}
        </Text>
      </Box>
    </Text>
    // </Box>
  );
};

export default ProjectCard;
