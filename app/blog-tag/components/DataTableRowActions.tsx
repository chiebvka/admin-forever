"use client"

import React from 'react'
import { Row } from "@tanstack/react-table";
import TagEditButton from './TagEditButton';


interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}

type Props = {}

export default function DataTableRowActions<TData>({
    row,
  }: DataTableRowActionsProps<TData>) {
  return (
    <TagEditButton id={row.getValue("id")} ></TagEditButton>
  )
}