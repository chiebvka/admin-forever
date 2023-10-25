import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import Link from 'next/link';
import { promises as fs } from "fs"
import path from "path"
import { Metadata } from "next"
import Image from "next/image"
import { z } from "zod"
import { notFound, redirect } from 'next/navigation';
import { ModeToggle } from '@/components/ModeToggle';
import UserNavigation from '@/components/UserNavigation';
import Datatable from './components/Datatable';
import { columns } from './components/Columns';
import { taskSchema } from "./data/schema";
import { postConfig } from '@/config/post';
import { Draft, Post } from '@/types/collection';
import PostTableEmpty from '@/components/protected/post/post-empty-table';
import PostRefreshOnce from '@/components/protected/post/post-refresh-once';


// Simulate a database read for tasks.
async function getTasks() {
    const data = await fs.readFile(
      path.join(process.cwd(), "app/blogs/data/tasks.json")
    )
  
    const tasks = JSON.parse(data.toString())
  
    return z.array(taskSchema).parse(tasks)
  }




export const dynamic = 'force-dynamic'
export const revalidate = 0;

export const metadata: Metadata = {
  title: postConfig.title,
  description: postConfig.description,
};

interface PostsPageProps {
  searchParams: { [key: string]: string | string[] | undefined };
}



export default async function Index({ searchParams }: {searchParams: any}) {
    const supabase = createServerComponentClient({ cookies })
    const { data: {session}} = await supabase.auth.getSession()
    if(!session) {
      redirect("/login")
    }
    const {
      data: { user },
    } = await supabase.auth.getUser();



    // const tasks = await getTasks();

    const { data, error } = await supabase
    .from("drafts")
    .select(`*`)
    .order("created_at", { ascending: false })
    // .match({ author_id: user?.id })
    .returns<Draft[]>();


  if (!data || error || !data.length) {
    notFound;
  }


    return (
        <div className="w-9/12 bg-background absolute overflow-y-auto right-0 top-0  flex flex-col items-center justify-center">
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
                {data?.length && data?.length > 0 ? (
                    <>
                      <Datatable data={data? data : []} columns={columns}/>
                    </>
                ) : (
                  <PostTableEmpty />
                  )}
                <PostRefreshOnce />
                  {/* <Datatable data={data? data : []} columns={columns} /> */}
                 {/* <Datatable data={tasks} columns={columns} /> */}
            </div>
        </div>
    )
}