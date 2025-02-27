import totalImge from "@/public/svg/total.svg";
import earningImge from "@/public/svg/earning.svg";
import exspendImge from "@/public/svg/exspend.svg";
import savingImge from "@/public/svg/saving.svg";
import TotalData from "@/components/shared/TotalData";

const Total = () => {
  return (
    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 md:gap-y-4">
      <TotalData image={totalImge} alt="Total" name="Total" total={12345} />
      <TotalData
        image={earningImge}
        alt="Earning"
        name="Earnings"
        total={4200}
      />
      <TotalData
        image={exspendImge}
        alt="Exspend"
        name="Exspenses"
        total={2040}
      />
      <TotalData image={savingImge} alt="Saving" name="Savings" total={2180} />
    </div>
  );
};

export default Total;
