import SideBarNav from "@/components/shared/SideBarNav";
import { Box, Container, Flex } from "@radix-ui/themes";

const Homepage = () => {
  return (
    <Container>
      <Flex>
        <SideBarNav />

        <Box></Box>
      </Flex>
    </Container>
  );
};

export default Homepage;
