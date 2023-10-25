import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';
import { KickStarter } from '@/types/collection';
import Starters from '../components/Starters';

type Props = {}

interface PostEditorPageProps {
    params: { kickId: string };
  }


  async function getKickstarter(kickId: string)  {
    const supabase = createServerComponentClient<Database>({ cookies });
    const { data, error } = await supabase
    .from("kickstarter")
    .select("*")
    .eq('id', kickId) 
    .single<KickStarter>();
  
  if (error) {
    console.log("Error has occured while getting post data");
    console.log("Error message : ", error.message);
    return null;
  }
  
  return data ? data : null;
  console.log(data)
  
  }


export default async function page({params}: PostEditorPageProps) {
    const kickId = params.kickId
    const kicker = await getKickstarter(kickId)
    console.log(kicker)
  return (
    <div>
        {kicker && <Starters kicker={kicker} />}
    </div>
  )
}