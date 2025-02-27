import { Box, Container, Flex, TextField } from "@radix-ui/themes";
import chatIcon from "@/public/svg/chat.svg";
import Image from "next/image";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <header className="mx-auto mt-2">
      <Flex justify="center" align="center" className="gap-x-6">
        {/* Search */}
        <div className="hidden md:block w-[500px] lg:w-[700px] xl:w-[1200px]">
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
