import HeaderSection from "../../(components)/HeaderSection";
import PageWrapper from "../../(components)/PageWrapper";
import { getProject, getProjects } from "../../../api/queries";
import ProjectMainSection from "./ProjectMainSection";

const Page = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  return (
    <PageWrapper>
      <HeaderSection
        title={project.name}
        imgSrc={project.main_image.url}
        width="100vw"
        height="70vh"
      />
      <ProjectMainSection project={project} />
    </PageWrapper>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((it) => ({ slug: it.slug.current }));
};
