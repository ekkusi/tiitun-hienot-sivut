import { useTheme, Theme } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Project } from "tiitu-cms/types/schema";
import { SectionProps } from "./Section";
import ProjectCard from "./ProjectCard";
import BaseGallery from "./BaseGallery";

type ProjectGalleryProps = SectionProps & {
  projects: Queries.SanityProjectFragment[];
};

function ProjectGallery({ projects, ...rest }: ProjectGalleryProps) {
  const { breakpoints } = useTheme() as Partial<Theme>;
  const mapFunction = (project: Queries.SanityProjectFragment) => {
    return (
      <ProjectCard
        key={project._id}
        project={project}
        imageProps={{
          sizes: `(max-width: ${breakpoints?.md}) 100vw,
                      (max-width: ${breakpoints?.lg}) 50vw,
                      33vw
                    `,
        }}
      />
    );
  };
  return (
    <AnimatePresence initial>
      <BaseGallery
        sources={projects.map((it) => ({
          aspectRatio: it.main_image.asset.metadata.dimensions.aspectRatio,
          source: it,
        }))}
        mapFunction={mapFunction}
        {...rest}
      />
    </AnimatePresence>
  );
}

export default ProjectGallery;
