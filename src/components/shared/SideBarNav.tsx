"use client";

import { SideBar } from "@/constants/SideBar";
import { Box, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarNav = () => {
  const pathName = usePathname();

  return (
    <aside className="pl-2">
      <Box>
        <h1 className="text-lg md:text-xl lg:text-2xl py-6 font-bold text-[#6055E0]">
          Kith Financial
        </h1>
      </Box>

      <Box className="w-[38px] md:w-full">
        <Text as="p" className="text-sm font-medium text-gray-400">
          Menu
        </Text>
        {SideBar.map((li) => (
          <ul key={li.link}>
            <li>
              <Link href={li.link} className="text-gray-400 dark:text-white">
                <div
                  className={`flex items-center gap-3 pl-[6px] md:pl-1 md:px-3 py-2 mt-2 duration-200 rounded-md ${
                    li.link === pathName
                      ? "font-medium text-white dark:text-gray-400 bg-[#7D29D7]"
                      : "hover:bg-gray-200"
                  }`}
                >
                  <Image
                    src={li.image}
                    alt={li.name}
                    className={`w-[25px] ${
                      li.link === pathName
                        ? "invert-[10%] sepia-[100%] saturate-[300%] hue-rotate-[250deg]"
                        : ""
                    }`}
                  />
                  <Text as="p" className="hidden md:block text-base">
                    {li.name}
                  </Text>
                </div>
              </Link>
            </li>
          </ul>
        ))}
      </Box>
    </aside>
  );
};

export default SideBarNav;
