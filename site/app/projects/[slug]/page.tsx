import HeaderSection from "../../(components)/HeaderSection";
import ImageGallery from "../../(components)/ImageGallery";
import ProjectGallery from "../../(components)/ProjectGallery";
import Section from "../../(components)/Section";
import { getProject, getProjects } from "../../../api/queries";
import { Flex, Text } from "../../../components/chakra";

const Page = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  return (
    <>
      <HeaderSection
        title={project.name}
        imgSrc={project.main_image.url}
        width="100vw"
        height="70vh"
      />
      {project.description && (
        <Section>
          <Text>{project.description}</Text>
        </Section>
      )}
      {project.youtube_video_url && (
        <Section pt="0" as={Flex} alignItems="center">
          <iframe
            width="560"
            height="315"
            src={project.youtube_video_url}
            title={`${project.name} - video`}
            allow="accelerometer;
              autoplay;
              clipboard-write;
              encrypted-media;
              gyroscope;
              picture-in-picture"
            allowFullScreen
          ></iframe>
        </Section>
      )}
      {project.gallery_images && project.gallery_images.length > 0 && (
        <ImageGallery images={project.gallery_images} />
      )}
    </>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((it) => ({ slug: it.slug.current }));
};
