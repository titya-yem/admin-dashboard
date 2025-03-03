import { Box, Container, Flex, TextField } from "@radix-ui/themes";
import chatIcon from "@/public/svg/chat.svg";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <header className="mx-auto mt-2">
      <div className="flex-between gap-x-8">
        {/* Search */}
        <div className="hidden md:block w-[500px] lg:w-[700px] xl:w-[1200px] xl:ml-3">
          {/* I will make this input chatable with AI */}
          <TextField.Root
            placeholder="Chat with AI"
            className="h-12 rounded-lg"
          >
            <TextField.Slot>
              <Image
                src={chatIcon}
                alt="Search icon"
                className="w-full h-[16px]"
              />
            </TextField.Slot>
          </TextField.Root>
        </div>

        {/* Sign in and Sign Up */}
        <Box className="ml-36 md:ml-0">
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
        </Box>
      </div>
    </header>
  );
};

export default Navbar;
