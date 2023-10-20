import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


type Props = {}

export default async function Username({}: Props) {
    const supabase = createServerComponentClient({ cookies });
    const { data: {session}} = await supabase.auth.getSession();
    const {
        data: { user },
      } = await supabase.auth.getUser()
    
  return (
    <div  className="absolute border-2 flex items-center justify-start hover:bg-slate-500 transition duration-300 ease-in-out border-yellow-700  bottom-0 my-8 p-2 rounded-lg">
        <Avatar className='flex items-center mr-4 '>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <span className='text-lg items-center justify-start'>{user?.email}</span>
       
    </div>
  )
}