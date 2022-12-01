import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "u6nq8yct",
  dataset: "production",
  apiVersion: "2022-11-30",
  useCdn: true,
});

export default client;
