"use client";

import { SideBar } from "@/constants/SideBar";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const SideBarNav = () => {
  const pathName = usePathname();

  return (
    <aside className="hidden md:block px-4 w-[180px] lg:w-[220px] h-screen border rounded-md">
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
              <Link href={li.link} className="text-gray-400 dark:text-white">
                <div
                  className={`flex items-center gap-4 pl-4 py-4 lg:mt-1 hover:font-medium duration-200 ${
                    li.link === pathName
                      ? "font-medium rounded-md text-white dark:text-gray-400 bg-[#7D29D7]"
                      : ""
                  }`}
                >
                  <Image
                    src={li.image}
                    alt={li.name}
                    className={`w-[30px] hidden lg:block ${
                      li.link === pathName
                        ? "invert-[10%] sepia-[100%] saturate-[300%] hue-rotate-[250deg]"
                        : ""
                    }`}
                  />
                  <Text as="p">{li.name}</Text>
                </div>
              </Link>
            </li>
          </ul>
        ))}

        {/* Sign In & Profile */}
        <Box className="mt-16 text-center">
          <SignedOut>
            <Button asChild className="w-full">
              <SignInButton />
            </Button>
          </SignedOut>

          <SignedIn>
            <UserButton />
          </SignedIn>
        </Box>
      </Box>
    </aside>
  );
};

export default SideBarNav;
