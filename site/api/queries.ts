import {
  Project as SanityProject,
  General,
  SanityImageDimensions,
} from "tiitu-cms/types/schema";
import client from "./sanity-client";

export const getProjects = async () => {
  return client.fetch<Project[]>(`
    *[_type=="project"] | order(_createdAt desc) {
      ...,
      "main_image": {
        "url": main_image.asset->url,
        "dimensions": main_image.asset->metadata.dimensions
      },
    }
  `);
};

export type ImageWithDimensions = {
  url: string;
  dimensions: SanityImageDimensions;
};

export type Project = Omit<SanityProject, "main_image"> & {
  main_image: ImageWithDimensions;
};

export type ProjectFullInfo = Project & {
  gallery_images?: ImageWithDimensions[];
};

export const getProject = async (slug: string) => {
  return client.fetch<ProjectFullInfo>(`
    *[_type=="project" && slug.current=="${slug}"][0] {
      ...,
      "main_image": {
        "url": main_image.asset->url,
        "dimensions": main_image.asset->metadata.dimensions
      },
      "gallery_images": gallery[]{
        "url": asset->url,
        "dimensions": asset->metadata.dimensions
      }
    }
  `);
};

export type GeneralInfo = General & {
  logo_url: string;
  hero_image_url: string;
  portrait_image_url: string;
  flower_image_url: string;
  abstract_image_url: string;
};

export const getGeneralInfo = async () => {
  return client.fetch<GeneralInfo>(`*[_type=="general"&&_id=="general"][0] {
      ...,
      "logo_url": logo_image.asset->url,
      "hero_image_url": hero_image.asset->url,
      "portrait_image_url": portrait_header_image.asset->url,
      "flower_image_url": flower_header_image.asset->url,
      "abstract_image_url": abstract_header_image.asset->url,
    }
  `);
};
