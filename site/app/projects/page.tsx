import Link from "next/link";
import PageWrapper from "../(components)/PageWrapper";
import { getProjects } from "../../api/queries";
import { List, ListItem } from "../../components/chakra";

const Page = async () => {
  const projects = await getProjects();

  return (
    <PageWrapper>
      <h1>Terve</h1>
      <h2>Terve</h2>
      <List>
        {projects.map((it) => (
          <ListItem key={it.name}>
            <Link href={`/projects/${it.slug.current}`}>{it.name}</Link>
          </ListItem>
        ))}
      </List>
    </PageWrapper>
  );
};

export default Page;
