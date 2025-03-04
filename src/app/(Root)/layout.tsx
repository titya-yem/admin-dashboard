import { Box, Flex } from "@radix-ui/themes";
import { PropsWithChildren } from "react";
import SideBarNav from "@/components/shared/SideBarNav";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="max-w-[1580px] mx-auto">
      <Flex>
        <Box className="md:w-[250px]">
          <SideBarNav />
        </Box>
        <Box className="w-full pl-6">{children}</Box>
      </Flex>
    </div>
  );
};

export default Layout;
