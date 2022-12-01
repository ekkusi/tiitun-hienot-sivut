import { Project, General } from "tiitu-cms/types/schema";
import client from "./sanity-client";

export const getProjects = async () => {
  return client.fetch<Project[]>(`
    *[_type=="project"] | order(_createdAt desc) {
      ...
    }
  `);
};

type ProjectFullInfo = Project & {
  main_image_url: string;
};

export const getProject = async (slug: string) => {
  return client.fetch<ProjectFullInfo>(`
    *[_type=="project" && slug.current=="${slug}"][0] {
      ...,
      "main_image_url": main_image.asset->url
    }
  `);
};

type GeneralInfo = General & {
  logo_url: string;
  hero_image_url: string;
};

export const getGeneralInfo = async () => {
  return client.fetch<GeneralInfo>(`*[_type=="general"&&_id=="general"][0] {
      ...,
      "logo_url": logo_image.asset->url,
      "hero_image_url": hero_image.asset->url
    }
  `);
};
