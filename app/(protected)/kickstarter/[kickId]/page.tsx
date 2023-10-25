import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';
import { KickStarter } from '@/types/collection';
import Starters from '../components/Starters';
import toast from 'react-hot-toast';

interface PostEditorPageProps {
  params: { kickId: string };
}

async function getKickstarter(kickId: string) {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
    .from("kickstarter")
    .select("*")
    .eq('id', kickId)
    .single<KickStarter>();

  if (error) {
    toast.error("Error has occurred while getting post data");
    return null;
  }

  return data ? data : null;
}

export default async function page({ params }: PostEditorPageProps) {
  const kickId = params?.kickId; // Ensure kickId is defined

  if (!kickId) {
    toast.error("kickId is undefined or null");
    return null;
  }

  const kicker = await getKickstarter(kickId);

  if (!kicker) {
    toast.error("Failed to retrieve kicker data");
    return null;
  }

  return (
    <div>
      <Starters kicker={kicker} />
    </div>
  );
}
