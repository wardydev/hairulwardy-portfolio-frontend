import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "f1ok3rxn",
  dataset: "production",
  apiVersion: "2022-12-23",
  useCode: true,
  useCdn: false,
});
