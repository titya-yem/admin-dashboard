import { Box, Container, Flex, Text } from "@radix-ui/themes";
import Image from "next/image";
import masterCardLogo from "@/public/image/Mastercard-Logo.wine 1.png";
import { cardType, status } from "@/constants/Card";

interface CardProps {
  id: string;
  cardNumber: string;
  status: status;
  amount: number;
  type: cardType;
  backgroundColor: string;
}

const Cards: React.FC<CardProps> = (Props) => {
  const { id, cardNumber, status, amount, type, backgroundColor } = Props;

  return (
    <Container>
      <Flex justify="between" align="center">
        <Flex
          direction="column"
          justify="between"
          className="w-[320px] h-[200px] rounded-lg p-4 mx-auto text-white"
          style={{ backgroundColor }}
        >
          <Box key={id}>
            <Flex justify="between" align="center">
              <Box>
                <h4>{cardNumber}</h4>
                <Text as="p" className="text-[#E2E2E2]">
                  Card Number
                </Text>
              </Box>
              <Box>
                <h4>{status}</h4>
                <Text as="p" className="text-[#E2E2E2]">
                  Status
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex justify="between" align="center">
              <Box>
                <h4>${amount}</h4>
                <Text as="p" className="text-[#E2E2E2]">
                  Balance
                </Text>
              </Box>
              <Flex justify="between" align="center">
                <Image src={masterCardLogo} alt="Master card Logo" width={30} />
                <Text as="p" className="text-[#E2E2E2]">
                  {type}
                </Text>
              </Flex>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Cards;
