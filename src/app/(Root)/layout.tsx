import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import Homepage from "./page";
import SideBarNav from "@/components/shared/SideBarNav";
import Navbar from "@/components/shared/Navbar";

const layout = (children: PropsWithChildren) => {
  return (
    <div>
      <header className="flex items-center justify-between px-4">
        <Navbar />
      </header>

      <Flex>
        <Box className="">
          <SideBarNav />
        </Box>
        <Box>
          <Homepage />
        </Box>
      </Flex>
    </div>
  );
};

export default layout;
