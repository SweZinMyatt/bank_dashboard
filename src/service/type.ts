export type Transaction = {
  id: number
  description: string
  transactionId: string
  type: "Shopping" | "Transfer" | "Service"
  card: string
  date: string
  amount: number
  receipt: string
}

export const transactions: Transaction[] = [
  {
    id: 1,
    description: "Spotify Subscription",
    transactionId: "#12548796",
    type: "Shopping",
    card: "1234 ****",
    date: "28 Jan, 12:30 AM",
    amount: -2500,
    receipt: "Download",
  },
  {
    id: 2,
    description: "Freepik Sales",
    transactionId: "#12548797",
    type: "Transfer",
    card: "1234 ****",
    date: "25 Jan, 10:40 PM",
    amount: 750,
    receipt: "Download",
  },
  {
    id: 3,
    description: "Mobile Service",
    transactionId: "#12548798",
    type: "Service",
    card: "1234 ****",
    date: "20 Jan, 10:40 PM",
    amount: -150,
    receipt: "Download",
  },
  {
    id: 4,
    description: "Wilson",
    transactionId: "#12548799",
    type: "Transfer",
    card: "1234 ****",
    date: "15 Jan, 03:29 PM",
    amount: -1050,
    receipt: "Download",
  },
  {
    id: 5,
    description: "Emily",
    transactionId: "#12548800",
    type: "Transfer",
    card: "1234 ****",
    date: "14 Jan, 10:40 PM",
    amount: 840,
    receipt: "Download",
  },
]