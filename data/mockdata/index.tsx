export type Record = {
  walletId: string;
  currency: string;
  recordType: "transfer" | "expense" | "income";
  tags: string[];
  transactionId: string;
  amount: number;
  title?: string;
  date?: string;
  place?: string;
  comment?: string;
  transferDetails?: {
    fromWalletId: string;
    toWalletId: string;
  };
};

export const records: Record[] = [
  {
    walletId: "1",
    recordType: "transfer",
    tags: ["finance", "transaction"],
    title: "Bank Transfer",
    amount: 4000,
    currency: "AMD",
    date: "2023-09-21",
    place: "Online",
    comment: "Monthly savings transfer",
    transferDetails: {
      fromWalletId: "1",
      toWalletId: "2",
    },
    transactionId: "7GpXs",
  },
  {
    walletId: "2",
    amount: 2000,
    currency: "AMD",
    recordType: "expense",
    tags: ["food", "restaurant"],
    title: "Dinner at Italian Restaurant",
    date: "2023-09-20",
    place: "Ristorante Bella",
    comment: "Delicious pizza and pasta!",
    transactionId: "D9a40",
  },
  {
    walletId: "1",
    amount: 8000,
    currency: "AMD",
    recordType: "income",
    tags: ["work", "salary"],
    title: "Monthly Salary",
    date: "2023-09-30",
    place: "Office",
    comment: "Received my monthly paycheck",
    transactionId: "Vv8a0",
  },
  {
    walletId: "1",
    currency: "AMD",
    amount: 5400,
    recordType: "expense",
    tags: ["shopping", "clothing"],
    title: "Clothing Shopping",
    date: "2023-09-25",
    place: "Mall",
    comment: "Bought a new wardrobe for the season",
    transactionId: "a1pl7",
  },
  {
    walletId: "4",
    recordType: "transfer",
    tags: ["finance", "transaction"],
    title: "Credit Card Payment",
    amount: 8000,
    currency: "AMD",
    date: "2023-09-15",
    place: "Online",
    comment: "Paid off credit card bill",
    transferDetails: {
      fromWalletId: "4",
      toWalletId: "2",
    },
    transactionId: "v6a14",
  },
  {
    walletId: "2",
    amount: 2500,
    currency: "AMD",
    recordType: "income",
    tags: ["freelance", "payment"],
    title: "Freelance Project Payment",
    date: "2023-09-10",
    place: "Client",
    comment: "Payment for web development project",
    transactionId: "gvRVr",
  },
];
