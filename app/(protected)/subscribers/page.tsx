import { ModeToggle } from '@/components/ModeToggle';
import React from 'react';
import { DataTable } from './components/DataTable';
import { columns } from './components/Column';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { notFound } from 'next/navigation';

type Props = {}

export default async function page({}: Props) {
    const supabase = createServerComponentClient({ cookies })
    const { data, error } = await supabase.from('subscribers').select("*")
  
      if (!data || error || !data.length) {
        notFound;
      }
  return (
    <div  className="md:w-9/12 w-full bg-background absolute h-screen right-0 top-0  flex flex-col items-center justify-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 ">
            <div className="w-full flex justify-end items-center p-3 text-sm text-foreground">
            <ModeToggle />
            </div>
        </nav>
        <div className=" w-full h-full flex-1 flex-col space-y-8 p-8 flex">
            <div className="flex items-center justify-between space-y-2 ">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of those who subscribed for the newsletter so far
                    </p>
                </div>
            </div>
                <DataTable columns={columns} data={data? data : []}  />
        </div>
    </div>
  )
}