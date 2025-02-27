import Navbar from "@/components/shared/Navbar";
import Total from "@/components/shared/Total";
import { Container } from "@radix-ui/themes";
import totalImge from "@/public/svg/total.svg";

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HomePage */}
      <Container>
        <div>
          <Total image={totalImge} alt="Total" name="Total" total={12345} />
        </div>
      </Container>
    </div>
  );
};

export default Homepage;
