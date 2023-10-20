import { ModeToggle } from '@/components/ModeToggle';
import UserNavigation from '@/components/UserNavigation';
import React from 'react';
import { DataTable } from './components/DataTable';
import { Payment, columns } from './components/Column';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { notFound, redirect } from 'next/navigation';

type Props = {}

export default async function page({}: Props) {
    const supabase = createServerComponentClient({ cookies })
    const { data, error } = await supabase.from('kickstarter').select("*")

    console.log(data)

    if (!data || error || !data.length) {
      notFound;
    }
  return (
    <div  className="w-9/12 bg-background absolute h-screen right-0 top-0  flex flex-col items-center justify-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 ">
            <div className="w-full flex justify-end items-center p-3 text-sm text-foreground">
            <ModeToggle />
            </div>
        </nav>
        <div className="hidden border-2 w-full h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2 border-2 ">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your tasks for this month!
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <UserNavigation />
                </div>
            </div>
                <DataTable columns={columns} data={data? data : []}  />
        </div>
    </div>
  )
}