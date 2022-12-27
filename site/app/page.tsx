import { getGeneralInfo, getProjects } from "../api/queries";
import { Box, Text } from "../components/chakra";
import HeaderSection from "./(components)/HeaderSection";
import PageWrapper from "./(components)/PageWrapper";
import ProjectGallery from "./(components)/ProjectGallery";
import Section from "./(components)/Section";

const Page = async () => {
  const general = await getGeneralInfo();
  const projects = await getProjects();
  const flowerProjects = projects.filter((it) => it.category == "flower");
  const abstractProjects = projects.filter((it) => it.category == "abstract");
  const portraitProjects = projects.filter((it) => it.category == "portrait");
  return (
    <PageWrapper>
      <HeaderSection
        imgSrc={general.hero_image_url}
        imgAlt={"Hero"}
        height="100vh"
        title={general.hero_text}
        textElementProps={{
          as: "span",
          fontSize: { base: "3xl", md: "4xl" },
          textAlign: "center",
          width: { base: "100%", md: "500px", lg: "700px" },
          pb: { base: 0, md: 10 },
        }}
      />
      <Box as="main" position="relative">
        <Section colorMode="light">
          <h1>{general.main_description_title}</h1>
          <Text>{general.main_description_text}</Text>
        </Section>
        <HeaderSection imgSrc={general.abstract_image_url} title="Abstraktit" />
        <ProjectGallery projects={abstractProjects} />
        <HeaderSection imgSrc={general.portrait_image_url} title="Portrait" />
        <ProjectGallery projects={portraitProjects} />
        <HeaderSection imgSrc={general.flower_image_url} title="Kukkatädit" />
        <ProjectGallery projects={flowerProjects} />
      </Box>
    </PageWrapper>
  );
};

export default Page;
