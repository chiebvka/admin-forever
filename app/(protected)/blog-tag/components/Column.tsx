"use client"

import { ColumnDef } from "@tanstack/react-table"
 
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link";
import DataTableColumnHeader from "./DataTableColumnHeader";
import DataTableRowActions from "./DataTableRowActions";
// import DeleteTag from "./EditForm";
// import { useRouter } from "next/router";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
//   amount: number
  status: boolean 
  title: string
}

// const router = useRouter();
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
        accessorKey: "status",
        header: "Status",
        cell: ({ row }) => {
            return row.original.status ? 'Active' : 'Inactive';
          }
          
    },
    {
        accessorKey: "title",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Title" />
        ),
        cell: ({ row }) => {
          return (
            <div className="flex space-x-2">
              <span className="max-w-[500px] truncate font-medium">
                {row.getValue("title")}
              </span>
            </div>
          );
        },
        enableHiding: false,
      },
    // {
    //     accessorKey: "title",
    //     header: ({ column }) => {
    //         return (
    //         <Button
    //             variant="ghost"
    //             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    //         >
    //             Catgeory
    //             <ArrowUpDown className="ml-2 h-4 w-4" />
    //         </Button>
    //         )
    //     },
    // },

    {
        accessorKey: "created_at",
        header: ({ column }) => (
          <DataTableColumnHeader column={column} title="Created" />
        ),
        cell: ({ row }) => {
          const date = format(new Date(row.getValue("created_at")), "MM/dd/yyyy");
    
          if (!date) {
            return null;
          }
    
          return (
            <div className="flex w-[100px] items-center">
              <span>{date}</span>
            </div>
          );
        },
      },

    // {
    //     accessorKey: "amount",
    //     header: () => <div className="text-center">Amount</div>,
    //     cell: ({ row }) => {
    //     const amount = parseFloat(row.getValue("amount"))
    //     const formatted = new Intl.NumberFormat("en-US", {
    //         style: "currency",
    //         currency: "USD",
    //     }).format(amount)
    
    //     return <div className="text-center font-medium">{formatted}</div>
    //     },
    // },

    // {
    //     id: "actions",
    //     cell: ({ row }) => {
    //     const payment = row.original
    //     const title = payment.title;
    //     const slug = title.toLowerCase().replace(/ /g, '-');
    
    //     return (
    //         <DropdownMenu>
    //         <DropdownMenuTrigger asChild>
    //             <Button variant="ghost" className="h-8 w-8 p-0">
    //             <span className="sr-only">Open menu</span>
    //             <MoreHorizontal className="h-4 w-4" />
    //             </Button>
    //         </DropdownMenuTrigger>
    //         <DropdownMenuContent align="end">
    //             <DropdownMenuLabel>Actions</DropdownMenuLabel>
    //             <DropdownMenuItem
    //             onClick={() => navigator.clipboard.writeText(payment.id)}
    //             >
    //             Copy payment ID
    //             </DropdownMenuItem>
    //             <DropdownMenuSeparator />
    //             <DropdownMenuItem>
    //                 <Link href={`/blog-tag/${slug}`}>Edit Tag</Link>
    //             </DropdownMenuItem>
    //             {/* <DropdownMenuItem>
    //                 <DeleteTag id={""} title={""} />
    //             </DropdownMenuItem> */}
    //             {/* <DropdownMenuItem>View payment details</DropdownMenuItem> */}
    //         </DropdownMenuContent>
    //         </DropdownMenu>
    //     )
    //     },
    // },

  {
    accessorKey: "id",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Actions" />
    ),
    cell: ({ row }) => <DataTableRowActions row={row} />,
    enableHiding: false,
    enableSorting: false,
  },
]






































// "use client"
// import * as React from "react"
// import {
//   ColumnDef,
//   ColumnFiltersState,
//   SortingState,
//   VisibilityState,
//   flexRender,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   useReactTable,
// } from "@tanstack/react-table";
// import { Input } from "@/components/ui/input"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { Button } from "@/components/ui/button";

// import {
//   DropdownMenu,
//   DropdownMenuCheckboxItem,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

// import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

// import { Badge } from '@/components/ui/badge';
// import { Checkbox } from '@/components/ui/checkbox';

// export const columns: ColumnDef<Payment>[] = [
//     {
//       id: "select",
//       header: ({ table }) => (
//         <Checkbox
//           checked={table.getIsAllPageRowsSelected()}
//           onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
//           aria-label="Select all"
//         />
//       ),
//       cell: ({ row }) => (
//         <Checkbox
//           checked={row.getIsSelected()}
//           onCheckedChange={(value) => row.toggleSelected(!!value)}
//           aria-label="Select row"
//         />
//       ),
//       enableSorting: false,
//       enableHiding: false,
//     },
//     {
//       accessorKey: "status",
//       header: "Status",
//       cell: ({ row }) => (
//         <div className="capitalize">{row.getValue("status")}</div>
//       ),
//     },
//     {
//       accessorKey: "email",
//       header: ({ column }) => {
//         return (
//           <Button
//             variant="ghost"
//             onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
//           >
//             Email
//             <ArrowUpDown className="ml-2 h-4 w-4" />
//           </Button>
//         )
//       },
//       cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
//     },
//     {
//       accessorKey: "amount",
//       header: () => <div className="text-right">Amount</div>,
//       cell: ({ row }) => {
//         const amount = parseFloat(row.getValue("amount"))
   
//         // Format the amount as a dollar amount
//         const formatted = new Intl.NumberFormat("en-US", {
//           style: "currency",
//           currency: "USD",
//         }).format(amount)
   
//         return <div className="text-right font-medium">{formatted}</div>
//       },
//     },
//     {
//       id: "actions",
//       enableHiding: false,
//       cell: ({ row }) => {
//         const payment = row.original
   
//         return (
//           <DropdownMenu>
//             <DropdownMenuTrigger asChild>
//               <Button variant="ghost" className="h-8 w-8 p-0">
//                 <span className="sr-only">Open menu</span>
//                 <MoreHorizontal className="h-4 w-4" />
//               </Button>
//             </DropdownMenuTrigger>
//             <DropdownMenuContent align="end">
//               <DropdownMenuLabel>Actions</DropdownMenuLabel>
//               <DropdownMenuItem
//                 onClick={() => navigator.clipboard.writeText(payment.id)}
//               >
//                 Copy payment ID
//               </DropdownMenuItem>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem>View customer</DropdownMenuItem>
//               <DropdownMenuItem>View payment details</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>
//         )
//       },
//     },
//   ]



