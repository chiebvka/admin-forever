import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'
import Login from '../login/page';

type Props = {}

export default async function page({}: Props) {
  const supabase =   createServerComponentClient({ cookies })

  const { data: {session}} = await supabase.auth.getSession()
  if(session) {
    redirect("/")
  }

  return (
    <div><Login/></div>
  )
}