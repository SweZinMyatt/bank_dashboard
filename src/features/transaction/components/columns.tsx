
import { Button } from "#/components/atoms/button";
import type { Transaction } from "#/service/type";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "transactionId",
    header: "Transaction ID",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "card",
    header: "Card",
  },
  {
    accessorKey: "date",
    header: "Date",
  },
  {
    accessorKey: "amount",
    header: "Amount",
     cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      
     
 
      return <div className= {`${amount<0?"text-red-500":"text-green-500"}`}>{amount}</div>
    },
  },
  {
    accessorKey: "receipt",
    header: "Receipt",
    cell: ({ row }) => {
      const receipt = row.getValue("receipt") as string
      
 
      return <Button variant="outline" className="border border-primary bg-transparent rounded-xl text-right font-medium">{receipt}</Button>
    }

  },
]