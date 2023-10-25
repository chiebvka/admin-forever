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
import { format } from "date-fns";
import { Messages } from '@/types/collection';

type Props = {}

interface PostEditorProps {
    user: Messages;
  }
  

export default function MessageDetail({messaging}: {messaging: any}) {
    if(!messaging) {
        return <div>Loading...</div>;
    }
    const { name, email, mobile, message, created_at } = messaging;
    const date = format(new Date(created_at), "MM/dd/yyyy");
  return (
    <div>
        <Card className="max-w-2xl">
            <CardHeader>
                <CardTitle>Messages</CardTitle>
                <CardDescription>Message sent by users</CardDescription>
            </CardHeader>
            <Separator className="mb-8" />
            <CardContent className='className="space-y-4"'>
                <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Sender Name</p>
                        <p className="text-sm text-muted-foreground">
                        {name  || 'Yet to register username'}
                        </p>
                    </div>
                </div>
                <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Sender Email Adrress</p>
                        <p className="text-sm text-muted-foreground">
                        {email  || 'Yet to register username'}
                        </p>
                    </div>
                </div>
                <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Sender Mobile Number</p>
                        <p className="text-sm text-muted-foreground">
                        {mobile  || 'Yet to register username'}
                        </p>
                    </div>
                </div>
                <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Message Sent</p>
                        <p className="text-sm text-muted-foreground">
                        {message  || 'Yet to register username'}
                        </p>
                    </div>
                </div>
                <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                    <div className="space-y-1">
                        <p className="text-sm font-medium leading-none">Sent on</p>
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