import dashboard from "@/public/svg/Control Panel.svg";
import budget from "@/public/svg/Money Box.svg";
import transaction from "@/public/svg/Transaction.svg";
import account from "@/public/svg/Ledger.svg";
import payment from "@/public/svg/Online Payment.svg";
import report from "@/public/svg/Graph Report.svg";

interface SideBarType {
  image: string;
  name: string;
  link: string;
}

export const SideBar: SideBarType[] = [
  {
    image: dashboard,
    name: "Dashboard",
    link: "/",
  },
  {
    image: budget,
    name: "Budget Planner",
    link: "/budget-planner",
  },
  {
    image: transaction,
    name: "Transactions",
    link: "/transactions",
  },
  {
    image: account,
    name: "Accounts",
    link: "/accounts",
  },
  {
    image: report,
    name: "Reports",
    link: "/reports",
  },
  {
    image: payment,
    name: "Subscriptions",
    link: "/subscriptions",
  },
];
