"use client"

import { ColumnDef } from "@tanstack/react-table"
 
import { Button } from "@/components/ui/button";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  username: string
  email: string
}

export const columns: ColumnDef<Payment>[] = [
    {
    id: "select",
    header: ({ table }) => (
    <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
    />
    ),
    cell: ({ row }) => (
    <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
    />
    ),
    enableSorting: false,
    enableHiding: false,
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
            <Button
                variant="ghost"
                onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
                Email
                <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
            )
        },
    },
    {
        accessorKey: "username",
        header: "Username",
    },

    {
        accessorKey: "created_at",
        header: () => <div className="text-center">Joined On</div>,

        cell: ({ row }) => {
            const date = format(new Date(row.getValue("created_at")), "MM/dd/yyyy");
      
            if (!date) {
              return null;
            }
      
            return (
              <div className=" text-center font-medium items-center">
                <span>{date}</span>
              </div>
            );
          },
    },
    {
        id: "actions",
        cell: ({ row }) => {
        const payment = row.original
    
        return (
            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.username)}
                >
                Copy Username
                </DropdownMenuItem>
                <DropdownMenuItem
                onClick={() => navigator.clipboard.writeText(payment.email)}
                >
                Copy user email
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Link href={`/users/${payment.id}`}>View Profile</Link>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
            </DropdownMenuContent>
            </DropdownMenu>
        )
        },
    },

]




