import { getGeneralInfo } from "../api/queries";
import { Box, Text } from "../components/chakra";
import Image from "next/image";
import SectionWithBackground from "./(components)/SectionWithBackground";

const Page = async () => {
  const general = await getGeneralInfo();
  return (
    <>
      <SectionWithBackground
        imgSrc={general.hero_image_url}
        imgAlt={"Hero"}
        width="100vw"
        height="100vh"
      >
        <Text
          as="span"
          color="white"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          pb={{ base: 0, md: 10 }}
          px={{ base: 10, md: 0 }}
          textAlign="center"
          width={{ base: "100%", md: "500px", lg: "700px" }}
          fontSize={{ base: "2xl", md: "4xl" }}
        >
          {general.hero_text}
        </Text>
      </SectionWithBackground>
      <Box as="main" position="relative" bg="white">
        <h1>Terve</h1>
        <Text>Terve</Text>
      </Box>
    </>
  );
};

export default Page;
