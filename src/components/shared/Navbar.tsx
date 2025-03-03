"use client";

import { Box } from "@radix-ui/themes";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import toggle from "@/public/svg/menu.svg";
import { SideBar } from "@/constants/SideBar";
import { Text } from "@radix-ui/themes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathName = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex-between mx-auto py-6 px-2 max-w-[1580px]">
      <h1 className="text-lg md:text-xl lg:text-2xl font-bold text-[#6055E0]">
        Kith Financial
      </h1>

      {/* Mobile Navigation */}
      <div className="block md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <button onClick={() => setIsOpen(!isOpen)}>
              <Image src={toggle} alt="toggle icon" />
            </button>
          </SheetTrigger>
          <SheetContent className="w-2/3">
            <SheetHeader>
              <SheetTitle asChild>
                <h1 className="text-lg md:text-xl lg:text-2xl pt-5 font-bold text-[#6055E0]">
                  Kith Financial
                </h1>
              </SheetTitle>
            </SheetHeader>

            <Box className="pt-4">
              {SideBar.map((li) => (
                <ul key={li.link}>
                  <li>
                    <Link
                      href={li.link}
                      className="text-gray-400 dark:text-white"
                      onClick={() => setIsOpen(false)}
                    >
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
                        <Text as="p" className="text-base">
                          {li.name}
                        </Text>
                      </div>
                    </Link>
                  </li>
                </ul>
              ))}
            </Box>

            {/* Authentication */}
            <Box className="pt-6">
              <SignedOut>
                <Button
                  asChild
                  className="w-full bg-[#7D29D7] hover:bg-[#8937e1] duration-150"
                >
                  <SignInButton />
                </Button>
              </SignedOut>
              <SignedIn>
                <Box className="pl-20">
                  <UserButton />
                </Box>
              </SignedIn>
            </Box>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop screen */}
      <div className="hidden md:block">
        <SignedOut>
          <Button
            asChild
            className="bg-[#7D29D7] hover:bg-[#8937e1] duration-150"
          >
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
