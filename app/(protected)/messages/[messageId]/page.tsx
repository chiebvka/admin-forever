import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers';
import { Database } from '@/types/supabase';
import { Messages } from '@/types/collection';
import MessageDetail from '../components/MessageDetail';

type Props = {}
interface PostEditorPageProps {
    params: { messageId: string };
  }
  async function getMessage(messageId: string)  {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data, error } = await supabase
  .from("messages")
  .select("*")
  .eq('id', messageId) 
  .single<Messages>();

if (error) {
  console.log("Error has occured while getting post data");
  console.log("Error message : ", error.message);
  return null;
}

return data ? data : null;

}
export default async function page({params}: PostEditorPageProps) {
    const messageId = params.messageId;
    const messaging = await getMessage(messageId)

  return (
    <div>
        {messaging && <MessageDetail messaging={messaging} />}
    </div>
  )
}