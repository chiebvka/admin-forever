import React from 'react';
import { Profile } from "@/types/collection";
import type { Database } from "@/types/supabase";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import ProfileSetting from '@/components/ProfileSetting';
import toast from 'react-hot-toast';

export const revalidate = 0;

async function getUserId() {
    const supabase = createServerComponentClient<Database>({ cookies });
    const {
      data: { session },
      error,
    } = await supabase.auth.getSession();
  
    if (error) {
      console.log("Error has occured while getting UserId!");
      console.log("Error message : ", error.message);
      return null;
    }
  
    return session ? session.user.id : null;
  }

type Props = {}

export default async function page({}: Props) {

    const supabase = createServerComponentClient<Database>({ cookies });

    const userId = await getUserId();

    const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .match({ id: userId })
    .single<Profile>();

  if (error) {
    console.log(error);
    throw Error;
  }

  if (!data) {
    notFound;
    toast.error("Cound't find User profile.");
  }


  return (
    <div className='max-w-5xl px-10'>
        
        <ProfileSetting user={data} />
    </div>
  )
}