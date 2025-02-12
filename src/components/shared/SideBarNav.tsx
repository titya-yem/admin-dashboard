"use client";

import { SideBar } from "@/constants/SideBar";
import { Box, Flex } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarNav = () => {
  const pathName = usePathname();

  return (
    <aside className="w-[180px]">
      {/* Logo */}
      <Box>
        <h1 className="text-xl lg:text-2x text-center py-8 font-bold text-[#6055E0]">
          Kith Financial
        </h1>
      </Box>

      {/* SideBar */}
      <Box>
        {SideBar.map((li) => (
          <ul key={li.link}>
            <li>
              <Link href={li.link} className="text-gray-400">
                <Flex
                  align="center"
                  gapX="4"
                  className={`pl-4 py-4 hover:font-medium duration-200 ${
                    li.link === pathName ? "font-medium text-[#7D29D7]" : ""
                  }`}
                >
                  <Image
                    src={li.image}
                    alt={li.name}
                    width={25}
                    className={`${
                      li.link === pathName
                        ? "invert-[40%] sepia-[100%] saturate-[300%] hue-rotate-[250deg]"
                        : ""
                    }`}
                  />
                  {li.name}
                </Flex>
              </Link>
            </li>
          </ul>
        ))}

        
      </Box>
    </aside>
  );
};

export default SideBarNav;
