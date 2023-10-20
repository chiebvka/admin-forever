"use client" 


import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { profileConfig } from '@/config/profile';
import { Profile } from '@/types/collection';
import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import { format } from "date-fns";
import { KickStarter } from '@/types/collection';

type Props = {}


interface PostEditorProps {
    kicker: KickStarter;
  }
  

export default function Starters({kicker} : {kicker: any}) {
    if(!kicker) {
        return <div>loading.....</div>;
    }

    const { created_at, youtube_link, description, title, kickstarter_link  } = kicker

    const date = format(new Date(created_at), "MM/dd/yyyy");

  return (
    <div>
              <Card className="max-w-2xl">
        <CardHeader>
          <CardTitle>{profileConfig.primaryTitle}</CardTitle>
          <CardDescription>{profileConfig.primarySubTitle}</CardDescription>
        </CardHeader>
        <Separator className="mb-8" />
        <CardContent className="space-y-4">
          <div className="mx-auto flex max-w-3xl flex-col justify-center">
            <div className="col-span-full flex items-center gap-x-8">
              {/* <Image
                src={avatar_url || "/images/not-found.jpg"}
                alt="Avatar"
                height={96}
                width={96}
                className="h-24 w-24 flex-none rounded-lg object-cover"
                priority
                placeholder={`data:image/svg+xml;base64,${toBase64(
                  shimmer(96, 96),
                )}`}
              /> */}
            </div>
          </div>
          <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
            <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Username</p>
                <p className="text-sm text-muted-foreground">
                  {title  || 'Yet to register username'}
                </p>
            </div>
          </div>
          <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
            <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Email Address</p>
                <p className="text-sm text-muted-foreground">
                  {description}
                </p>
            </div>
          </div>
          <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
            <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Email Address</p>
                <p className="text-sm text-muted-foreground">
                  {kickstarter_link}
                </p>
            </div>
          </div>
          <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
            <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Email Address</p>
                <p className="text-sm text-muted-foreground">
                  {youtube_link}
                </p>
            </div>
          </div>
          <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
            <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Joined on </p>
                <p className="text-sm text-muted-foreground">
                  {date}
                </p>
            </div>
          </div>
          
        </CardContent>
      </Card>
    </div>
  )
}