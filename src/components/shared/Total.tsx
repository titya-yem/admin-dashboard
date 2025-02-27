import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

interface totalProps {
  image: string;
  alt: string;
  name: string;
  total: number;
}

const Total = ({ image, alt, name, total }: totalProps) => {
  return (
    <Box className="mt-6 space-y-3 shadow-lg p-5 rounded-lg">
      {/* Icon and name */}
      <div className="flex items-center space-x-3">
        <Image src={image} alt={alt} className="w-[20px] md:w-[25px]" />
        <Text as="p" className=" font-medium">
          {name}
        </Text>
      </div>

      {/* Totals */}
      <Box>
        <Heading as="h3">
          ${new Intl.NumberFormat("en-US").format(total)}
        </Heading>
      </Box>
    </Box>
  );
};

export default Total;
