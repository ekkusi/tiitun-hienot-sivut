import { TextProps, Text, Icon } from "@chakra-ui/react";
import { Variants } from "framer-motion";
import { Link } from "gatsby";
import { GatsbyImage, GatsbyImageProps } from "gatsby-plugin-image";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { MotionBox } from "./motion-chakra";

type ProjectCardProps = TextProps & {
  project: Queries.SanityProjectFragment;
  imageProps?: Omit<GatsbyImageProps, "alt" | "image">;
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
    transition: {
      duration: 0.3,
    },
  },
};

const underLineMotion: Variants = {
  rest: {
    width: "0",
    transition: {
      delay: 0,
    },
  },
  hover: {
    width: "100%",
    transition: {
      delay: 0.2,
      // type: "tween",
      // duration: 0.2,
    },
  },
};

const containerMotion = {
  rest: {
    opacity: 1,
    scale: 1,
  },
  hover: {
    opacity: 0.8,
  },
};

function ProjectCard({ project, imageProps, ...rest }: ProjectCardProps) {
  return (
    // <Box {...rest}>
    <Text
      as={Link}
      display="block"
      to={`project/${project.slug.current}`}
      _hover={{ opacity: 1, transition: "none" }}
      {...rest}
    >
      <MotionBox
        position="relative"
        initial="rest"
        whileHover="hover"
        variants={containerMotion}
      >
        <GatsbyImage
          key={project._id}
          image={project.main_image.asset.gatsbyImageData}
          alt={project.name}
          {...imageProps}
        />
        <MotionBox
          position="absolute"
          color="white"
          top="50%"
          left="50%"
          transform="translate(-50%, 0)"
          opacity="0"
          variants={textMotion}
        >
          {/* <Text as="span" display="block">
            {project.name}
          </Text> */}
          <Text
            as="span"
            display="block"
            // fontSize={{ base: "lg", md: "xlx " }}
          >
            Lue lisää
          </Text>
          <MotionBox
            variants={underLineMotion}
            position="absolute"
            bottom="1"
            left="0"
            backgroundColor="white"
            width="100%"
            height="1px"
          />
        </MotionBox>
        <Text
          as={Link}
          to={`project/${project.slug.current}`}
          display={{ base: "inline-block", sm: "none" }}
          position="absolute"
          bottom={2}
          right={2}
          color="white"
        >
          <Icon as={BsArrowRight} h={6} w={6} />
        </Text>
      </MotionBox>
    </Text>
    // </Box>
  );
}

export default ProjectCard;
