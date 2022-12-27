import HeaderSection from "../../(components)/HeaderSection";
import ImageGallery from "../../(components)/ImageGallery";
import Section from "../../(components)/Section";
import { getProject, getProjects } from "../../../api/queries";
import { Box, Flex, Text } from "../../../components/chakra";

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
    </>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((it) => ({ slug: it.slug.current }));
};
