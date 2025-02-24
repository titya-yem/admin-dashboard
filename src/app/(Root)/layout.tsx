import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Homepage from "./page";
import SideBarNav from "@/components/shared/SideBarNav";

const layout = (children: PropsWithChildren) => {
  return (
    <div>
      <Flex>
        <Box className="w-[200px]">
          <SideBarNav />
        </Box>
        <Box className="w-screen">
          <Homepage />
        </Box>
      </Flex>
    </div>
  );
};

export default layout;
