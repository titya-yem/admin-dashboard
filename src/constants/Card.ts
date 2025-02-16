type cardProps = {
  id: string;
  cardNumber: string;
  amount: number;
  status: status;
  type: cardType;
};

export enum cardType {
  "Master Card" = "Master Card",
  "PayPal" = "PayPal",
  "American Card" = "American Card",
}

export enum status {
  "active" = "active",
  "inActive" = "inActive",
}

export const cardLists: cardProps[] = [
  {
    id: "1",
    cardNumber: "4008 **** **** 9464",
    amount: 6600,
    status: status.active,
    type: cardType["Master Card"],
  },
  {
    id: "2",
    cardNumber: "4008 **** **** 9464",
    amount: 6600,
    status: status.active,
    type: cardType["Master Card"],
  },
  {
    id: "3",
    cardNumber: "4008 **** **** 9464",
    amount: 6600,
    status: status.active,
    type: cardType["Master Card"],
  },
];
