import { Box, Flex, TextField } from "@radix-ui/themes";
import searchIcon from "@/public/svg/Search.svg";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="pl-4 md:mt-6">
      <Flex justify="between" align="center">
        {/* Search */}
        <div className="hidden md:block w-[1200px]">
          {/* I will make this input chatable with AI */}
          <TextField.Root placeholder="Chat with AI">
            <TextField.Slot>
              <Image
                src={searchIcon}
                alt="Search icon"
                className="w-full h-[16px]"
              />
            </TextField.Slot>
          </TextField.Root>
        </div>

        {/* Sign in and Sign Up */}
        <Box className="mr-12">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </Box>
      </Flex>
    </header>
  );
};

export default Navbar;
