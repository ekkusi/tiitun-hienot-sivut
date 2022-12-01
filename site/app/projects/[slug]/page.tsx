import { getProject, getProjects } from "../../../api/queries";
import { Text } from "../../../components/chakra";

const Page = async ({ params }: { params: { slug: string } }) => {
  const project = await getProject(params.slug);

  return (
    <>
      <Text as="h1">Terve</Text>
      <Text as="h2">Terve</Text>
      <Text as="h3">Terve</Text>
      <Text>Projekti: {project.name}</Text>
    </>
  );
};

export default Page;

export const generateStaticParams = async () => {
  const projects = await getProjects();
  return projects.map((it) => ({ slug: it.slug.current }));
};
