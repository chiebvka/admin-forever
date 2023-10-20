import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import Link from 'next/link';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';
import { ModeToggle } from '@/components/ModeToggle';
import TeamSwitcher from '@/components/TeamSwitcher';
import TabNavigation from '@/components/TabNavigation';
import Navsearch from '@/components/Navsearch';
import UserNavigation from '@/components/UserNavigation';
import RecentSignups from '@/components/RecentSignups';
import TrendingBlogs from '@/components/TrendingBlogs';

export const dynamic = 'force-dynamic'

export default async function Index() {
  const supabase = createServerComponentClient({ cookies })
  const { data: {session}} = await supabase.auth.getSession()
  if(!session) {
    redirect("/login")
  }
  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <>
      <div className="mx-auto max-w-5xl p-4 sm:p-6 ">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 ">
        </nav>
        <div className="hidden w-full flex-col md:flex">
          <div className="border-b">
            <div className="flex h-16 items-center px-4">
              <TeamSwitcher />
              {/* <TabNavigation className='mx-6' /> */}
              <div className="ml-auto flex items-center space-x-4">
                <Navsearch />
                <UserNavigation />
              </div>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4 my-8">
            <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Read Posts
                        </CardTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4 w-4 text-muted-foreground lucide-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">45,231.89 <span className='text-base'>mins</span> </div>
                        <p className="text-xs text-muted-foreground">
                          +20.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Newsletter Sub
                        </CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+2350</div>
                        <p className="text-xs text-muted-foreground">
                          +180.1% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Site Visit</CardTitle>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="h-4 w-4 text-muted-foreground"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+12,234</div>
                        <p className="text-xs text-muted-foreground">
                          +19% from last month
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Active Now
                        </CardTitle>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide h-4 w-4 text-muted-foreground lucide-monitor-dot"><circle cx="19" cy="6" r="3"/><path d="M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9"/><path d="M12 17v4"/><path d="M8 21h8"/></svg>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">+573</div>
                        <p className="text-xs text-muted-foreground">
                          +201 since last hour
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className='col-span-4'>
                      <CardHeader>
                        <CardTitle>Trending Blog Post</CardTitle>
                        <CardDescription>
                          Choose what you want to be notified about.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className='pl-2'>
                        <TrendingBlogs />
                      </CardContent>
                    </Card>
                  <Card className="col-span-3">
                    <CardHeader>
                      <CardTitle>Recent Users</CardTitle>
                      <CardDescription>
                        Most recently signed up users
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <RecentSignups />
                    </CardContent>
                  </Card>
                  </div>
            </TabsContent>
          </Tabs>
          
        </div>
      </div>
    </>
  )
}
