import React from 'react'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { ModeToggle } from '@/components/ModeToggle';
import UserNavigation from '@/components/UserNavigation';
import { DataTable } from './components/DataTable';
import { Payment, columns } from './components/Column';

type Props = {}


export const dynamic = 'force-dynamic'


async function getData(): Promise<Payment[]> {
  const supabase = createServerComponentClient({ cookies });

  // Fetch tags from your Supabase table
  const { data: tags, error } = await supabase.from('tags').select('*');

  if (error) {
    console.error('Error fetching tags from Supabase:', error);
    return [];
  }


  return tags;

}


async function getTags () {
  
}


export default async function Index({}: Props) {
    const supabase = createServerComponentClient({ cookies })
    const { data: {session}} = await supabase.auth.getSession()
    if(!session) {
      redirect("/login")
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();



    const data = await getData();




  return (
    <div className="w-9/12 bg-background absolute h-screen right-0 top-0  flex flex-col items-center  justify-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 ">
            <div className="w-full flex justify-end items-center p-3 text-sm text-foreground">
            <ModeToggle />
            </div>
        </nav>
        <div className="hidden border-2 w-full h-full flex-1 flex-col space-y-8 p-8 md:flex">
            <div className="flex items-center justify-between space-y-2 ">
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                    <p className="text-muted-foreground">
                        Here&apos;s a list of your tasks for this month!
                    </p>
                </div>
            </div>
            {/* <pre>{JSON.stringify(tags, null, 2)}</pre> */}
            <DataTable columns={columns} data={data}  />
        </div>
    </div>
  )
}