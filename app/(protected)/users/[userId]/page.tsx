import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';
import { Profile } from '@/types/collection';

import Profiles from '../components/Profiles';
import toast from 'react-hot-toast';


interface PostEditorPageProps {
  params: { userId: string };
}

async function getUser(userId: string)  {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq('id', userId) 
  .single<Profile>();

if (error) {
  toast.error("Error has occured while getting post data");

}

return data ? data : null;

}


export default async function page({params}: PostEditorPageProps) {
  const userId = params.userId; // Extract the user ID from the params
  const user = await getUser(userId); // Fetch the user data
  console.log(user)
  return (
    <div>
    {user && <Profiles user={user} />} 
    </div>
  )
}