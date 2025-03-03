import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Homepage from "./page";
import SideBarNav from "@/components/shared/SideBarNav";

const layout = (children: PropsWithChildren) => {
  return (
    <div className="max-w-[1580px] mx-auto">
      <Flex>
        <Box className="md:max-w-[200px]">
          <SideBarNav />
        </Box>
        <Box className="w-full">
          <Homepage />
        </Box>
      </Flex>
    </div>
  );
};

export default layout;
