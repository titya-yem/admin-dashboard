import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";

interface totalProps {
  image: string;
  alt: string;
  name: string;
  total: number;
}

const TotalData = ({ image, alt, name, total }: totalProps) => {
  return (
    <Box className="w-[200px] mx-auto md:mx-0 mt-3 shadow p-5 rounded-lg">
      <Box>
        {/* Icon and name */}
        <div className="flex items-center space-x-3">
          <Image src={image} alt={alt} className="w-[20px] md:w-[25px]" />
          <Text as="p" className="font-medium">
            {name}
          </Text>
        </div>

        {/* Totals */}
        <Box>
          <Heading as="h3" className="mt-3 pl-1">
            $ {new Intl.NumberFormat("en-US").format(total)}
          </Heading>
        </Box>
      </Box>

      {/* Pie Charts */}
      <Box></Box>
    </Box>
  );
};

export default TotalData;
