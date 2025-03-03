"use client";

import { Box, Heading, Text } from "@radix-ui/themes";
import Image from "next/image";
import React from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";

interface TotalProps {
  image: string;
  alt: string;
  name: string;
  total: number;
  data: { name: string; value: number }[];
}

const TotalData = ({ image, alt, name, total, data }: TotalProps) => {
  return (
    <div className="flex items-center gap-x-4 w-[300px] shadow rounded-lg">
      <Box className="pl-2">
        {/* Icon and name */}
        <div className="flex items-center space-x-3">
          <Image src={image} alt={alt} width={25} height={25} />
          <Text as="p" className="text-[#6055E0] font-medium">
            {name}
          </Text>
        </div>

        {/* Total Amount */}
        <Box>
          <Heading as="h3" className="mt-3 pl-1">
            ${new Intl.NumberFormat("en-US").format(total)}
          </Heading>
        </Box>
      </Box>

      {/* Pie Chart */}
      <Box className="mt-4 w-[200px] h-[100px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              dataKey="value"
              startAngle={180}
              endAngle={0}
              data={data}
              cx={75}
              cy={75}
              outerRadius={50}
              fill="#8884d8"
              label
            />
          </PieChart>
        </ResponsiveContainer>
      </Box>
    </div>
  );
};

export default TotalData;
