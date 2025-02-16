"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { SideBar } from "@/constants/SideBar";
import toggle from "@/public/svg/menu.svg";
import { Box, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="flex justify-between items-center md:hidden px-4">
      <Box>
        <h1 className="text-xl lg:text-2x text-center py-8 font-bold text-[#6055E0]">
          Kith Financial
        </h1>
      </Box>

      <Box>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger>
            <Image src={toggle} alt="toggle menu" />
          </SheetTrigger>
          <SheetContent className="w-[70%]">
            <SheetHeader>
              <SheetTitle className="text-lg text-center py-6 font-bold text-[#6055E0]">
                Kith Financial
              </SheetTitle>
              {SideBar.map((li) => (
                <ul key={li.link}>
                  <li>
                    <Link
                      href={li.link}
                      className="text-gray-400 dark:text-white"
                      onClick={() => setOpen(!open)}
                    >
                      <div
                        className={`flex items-center gap-4 pl-7 py-4 hover:font-medium duration-200 ${
                          li.link === pathName
                            ? "font-medium rounded-md text-white dark:text-gray-400 bg-[#7D29D7]"
                            : ""
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
                        <Text as="p" className="text-sm">
                          {li.name}
                        </Text>
                      </div>
                    </Link>
                  </li>
                </ul>
              ))}

              {/* Sign In & Profile */}
              <Box className="pt-4">
                <SignedOut>
                  <Button asChild className="w-full">
                    <SignInButton />
                  </Button>
                </SignedOut>

                <SignedIn>
                  <UserButton />
                </SignedIn>
              </Box>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </Box>
    </header>
  );
};

export default Navbar;
