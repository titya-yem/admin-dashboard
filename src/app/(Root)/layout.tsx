import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Homepage from "./page";
import SideBarNav from "@/components/shared/SideBarNav";

const layout = (children: PropsWithChildren) => {
  return (
    <div className="max-w-[1580px] mx-auto">
      <Flex>
        <Box className="md:w-[220px]">
          <SideBarNav />
        </Box>
        <Box className="w-full pl-10">
          <Homepage />
        </Box>
      </Flex>
    </div>
  );
};

export default layout;
