"use client";

import totalImage from "@/public/svg/total.svg";
import earningImage from "@/public/svg/earning.svg";
import expenseImage from "@/public/svg/exspend.svg";
import savingImage from "@/public/svg/saving.svg";
import TotalData from "@/components/shared/TotalData";

const totalData = [
  { name: "Income", value: 7000 },
  { name: "Expense", value: 3000 },
];

const earningData = [
  { name: "Salary", value: 3000 },
  { name: "Investments", value: 1200 },
];

const expenseData = [
  { name: "Rent", value: 1200 },
  { name: "Groceries", value: 840 },
];

const savingData = [
  { name: "Bank Savings", value: 1500 },
  { name: "Investments", value: 680 },
];

const Total = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-4">
      <TotalData
        image={totalImage}
        alt="Total"
        name="Total"
        total={12345}
        data={totalData}
      />
      <TotalData
        image={earningImage}
        alt="Earning"
        name="Earnings"
        total={4200}
        data={earningData}
      />
      <TotalData
        image={expenseImage}
        alt="Expense"
        name="Expenses"
        total={2040}
        data={expenseData}
      />
      <TotalData
        image={savingImage}
        alt="Saving"
        name="Savings"
        total={2180}
        data={savingData}
      />
    </div>
  );
};

export default Total;
