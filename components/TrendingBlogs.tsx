import React from 'react';
import { Flame } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {}

export default function TrendingBlogs({}: Props) {
  return (
        <CardContent className='grid gap-1'>
            <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                <Flame className="mt-px" />
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Everything</p>
                    <p className="text-sm text-muted-foreground">
                    Email digest, mentions & all activity.
                    </p>
                </div>
            </div>
            <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                <Flame className="mt-px" />
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Everything</p>
                    <p className="text-sm text-muted-foreground">
                    Email digest, mentions & all activity.
                    </p>
                </div>
            </div>
            <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                <Flame className="mt-px" />
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Everything</p>
                    <p className="text-sm text-muted-foreground">
                    Email digest, mentions & all activity.
                    </p>
                </div>
            </div>
            <div className='-mx-2 flex items-start space-x-4 rounded-md px-2 py-3 border-b transition-all hover:bg-accent hover:text-accent-foreground'>
                <Flame className="mt-px" />
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">Everything</p>
                    <p className="text-sm text-muted-foreground">
                    Email digest, mentions & all activity.
                    </p>
                </div>
            </div>
        </CardContent>
  )
}