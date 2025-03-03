import HomeCart from "@/components/HomeCharts";
import Total from "@/components/Total";
import { Box } from "@radix-ui/themes";

const Homepage = () => {
  return (
    <main>
      <div>
        {/* Summary boxes */}
        <Total />

        {/* Charts */}
        <Box>
          <HomeCart />
        </Box>
      </div>

      {/* Right sideBar */}
      <Box></Box>
    </main>
  );
};

export default Homepage;
