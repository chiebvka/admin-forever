import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";


type Props = {}

export default async function RecentSignups({}: Props) {
    const cookieStore = cookies()
    const supabase = createServerComponentClient({ cookies: () => cookieStore });


    const { data: users } = await supabase.from("profiles").select();


  return (
    <div className="space-y-8">
        {users?.map((profile) => (
            <div className="flex items-center" key={profile.id}>
                <Avatar className="h-9 w-9">
                <AvatarImage src="../app/images/01.png" alt="Avatar" />
                <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">Olivia Martin</p>
                <p className="text-sm text-muted-foreground">
                    {profile.email}
                </p>
                </div>
                <div className="ml-auto font-medium">+$1,999.00</div>
            </div>
        ))}
    </div>
  )
}