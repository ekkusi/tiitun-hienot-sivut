"use client";
import { SectionProps } from "./Section";
import { Project } from "../../api/queries";
import { useTheme, Theme } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import BaseGallery from "./BaseGallery";
import { AnimatePresence } from "framer-motion";
import React from "react";

type ProjectGalleryProps = SectionProps & {
  projects: Project[];
};

const ProjectGallery = ({ projects, ...rest }: ProjectGalleryProps) => {
  const { breakpoints } = useTheme() as Theme;
  return (
    <AnimatePresence initial={true}>
      <BaseGallery
        sources={projects.map((it) => ({
          dimensions: it.main_image.dimensions,
          source: it,
        }))}
        mapFunction={(project: Project) => (
          <ProjectCard
            key={project._id}
            project={project}
            imageProps={{
              sizes: `(max-width: ${breakpoints.md}) 100vw,
                      (max-width: ${breakpoints.lg}) 50vw,
                      33vw
                    `,
            }}
          />
        )}
        {...rest}
      />
    </AnimatePresence>
  );
};

export default ProjectGallery;
