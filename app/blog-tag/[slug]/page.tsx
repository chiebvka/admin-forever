import { ModeToggle } from '@/components/ModeToggle';
import UserNavigation from '@/components/UserNavigation';
import { Separator } from "@/components/ui/separator";
import React from 'react';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { notFound } from "next/navigation";
import TagForm from '../components/TagForm';
import TagEditForm from '../components/TagEditForm';
// import EditForm from '../components/EditForm';


export const revalidate = 0;
type Props = {
  params: { slug: string }; // Capture the slug parameter from the URL
}


export default async function page({ params }: Props) {

  let tagData = { tagName: '', tagStatus: false };

  async function fetchTagDetails() {
    const supabase = createServerComponentClient({ cookies });

    // Fetch the tag details using the slug parameter
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .eq('id', params.slug);

    if (error) {
      console.error('Error fetching tag:', error);
      return;
    }

    if (data && data.length > 0) {
      console.log(data);
      tagData = {
        tagName: data[0].title,
        tagStatus: data[0].status,
      };
    }
  }

  await fetchTagDetails();

  if (!tagData) {
    return notFound;
  }


  return (
    <div className="w-9/12 bg-background fixed right-0 top-0  flex flex-col items-center justify-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm text-foreground">
          <ModeToggle />
          </div>
        </nav>
        <div className="hidden w-full  space-y-6 p-10  md:block">
            <div className="space-y-0.5 items-center">
            <h2 className="text-2xl font-bold tracking-tight">Edit Blog tag</h2>
            <p className="text-muted-foreground">
              You can Edit your tags that get attcahed to blog posts
            </p>
            </div>
        </div>
        <Separator className="mb-5 max-w-2xl" />
        <div className=" w-full p-10 space-y-6 md:block">
            <TagEditForm tagData={tagData}    />
        </div>
    </div>
  )
}