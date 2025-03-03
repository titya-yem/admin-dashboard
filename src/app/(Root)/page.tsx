import Total from "@/components/Total";
import { Box } from "@radix-ui/themes";

const Homepage = () => {
  return (
    <main className="ml-12">
      <div>
        {/* Summary boxes */}
        <Total />

        {/* Charts */}
        <Box>
          
        </Box>
      </div>

      {/* Right sideBar */}
      <Box></Box>
    </main>
  );
};

export default Homepage;
