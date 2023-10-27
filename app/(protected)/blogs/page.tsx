import React from 'react';
import Link from 'next/link';
import { Metadata } from "next";
import { BellRing, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { ModeToggle } from '@/components/ModeToggle';
import UserNavigation from '@/components/UserNavigation';
import { postConfig } from '@/config/post';


export const dynamic = 'force-dynamic'
export const revalidate = 0;

export const metadata: Metadata = {
  title: postConfig.title,
  description: postConfig.description,
};



const notifications = [
  {
    title: "Step 1",
    description: "Ensure you'v ebeen invited as an adminstrator",
  },
  {
    title: "Step 2",
    description: "Creat an account or login with the emsail adress you received your invite with",
  },
  {
    title: "Step 3",
    description: "Happy wrirting!! Write away and post your articles",
  },
]


type CardProps = React.ComponentProps<typeof Card>


type Props = {}

export default function page({ className, ...props }: CardProps) {
  return (
    <div className="md:w-9/12 bg-background absolute overflow-y-auto right-0 top-0  flex flex-col items-center justify-center">
    <nav className="w-full flex justify-center border-b border-b-foreground/10 ">
        <div className="w-full flex justify-end items-center p-3 text-sm text-foreground">
          <ModeToggle />
        </div>
    </nav>
    <div className=" border-2 w-full h-full flex-1 flex-col space-y-8 p-8 flex">
        <div className="flex items-center justify-between space-y-2 ">
            <div>
                <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
                <p className="text-muted-foreground">
                    Here&apos;s a list of your tasks for this month!
                </p>
            </div>
        </div>
        <Card className={cn("w-auto", className)} >
          <CardHeader>
            <CardTitle>Start Writing</CardTitle>
            <CardDescription>Let's get you started on making blog posts</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className=" flex items-center space-x-4 rounded-md border p-4">
              <BellRing />
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium leading-none">
                  Notifications
                </p>
                <p className="text-sm text-muted-foreground">
                Before you get started on the blog posts please check and be sure you meet all requirements
                </p>
              </div>
              <Switch />
            </div>
            <div>
              {notifications.map((notification, index) => (
                <div
                  key={index}
                  className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
                >
                  <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {notification.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {notification.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">
              <Link href="https://app.hygraph.com/code/clo70faia0pnt01t7dy4jddoa" target='_blank' className='flex items-center justify-center'>
                <Check className="mr-2 h-4 w-4" /> Let's write
              </Link>
            </Button>
          </CardFooter>
        </Card>
    </div>
</div>
  )
}