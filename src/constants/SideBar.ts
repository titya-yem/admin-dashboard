import dashboard from "@/public/svg/sideBar/Control Panel.svg";
import budget from "@/public/svg/sideBar/Money Box.svg";
import transaction from "@/public/svg/sideBar/Transaction.svg";
import account from "@/public/svg/sideBar/Ledger.svg";
import payment from "@/public/svg/sideBar/Online Payment.svg";
import report from "@/public/svg/sideBar/Graph Report.svg";

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
    name: "Budget Planner (AI)",
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
