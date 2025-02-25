import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Homepage from "./page";
import SideBarNav from "@/components/shared/SideBarNav";

const layout = (children: PropsWithChildren) => {
  return (
    <div className="max-w-[1530px]">
      <Flex>
        <Box className="w-[230px] lg:w-[200px]">
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
