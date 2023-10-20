"use server"


import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerActionClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '@/types/supabase';
import * as z from "zod";
import { tagDeleteSchema, tagUpdateSchema } from '@/lib/validation/tag';

export async function createTag(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const status = formData.get("status") === "true";
  const cookieStore = cookies();
  const supabase = createServerActionClient<Database>({ cookies: () => cookieStore });

    const existingTag = await supabase.from("tags").select("*").eq("title", title);

    if (existingTag.data && existingTag.data.length > 0) {
      return { title: 'Error', message: 'Tag with the same title already exists.' };
    } else {
      await supabase.from('tags').insert({ title, status });
      revalidatePath('/blog-tag/write');
      redirect('/blog-tag') 
      return { title: 'Success', message: 'Tag added successfully!!!' };
    }

    return { title: 'Error', message: 'Failed to add tag' };

}

export async function updateTag(prevState: any, formData: FormData) {
  const title = formData.get("title") as string;
  const status = formData.get("status") === "true";
  const cookieStore = cookies();
  const supabase = createServerActionClient<Database>({ cookies: () => cookieStore });

  try {
    const { error } = await supabase
      .from('tags')
      .insert({ title, status })
      .eq('title', title)
      .select();

    if (error) {
      console.error('Error updating tag:', error);
      return { title: 'Error', message: 'Failed to update tag' };
    } else {
      return { title: 'Success', message: 'Tag updated successfully!!!' };
      // redirect('/blog-tag') 
    }
  } catch (error) {
    console.error('Error updating tag:', error);
    return { title: 'Error', message: 'Failed to update tag' };
  }
}

// export async function updateTag(prevState: any, formData: FormData) {
//     const title = formData.get("title") as string;
//     const status = formData.get("status") === "true";
//     const cookieStore = cookies();
//     const supabase = createServerActionClient<Database>({ cookies: () => cookieStore });

//     const { error } = await supabase
//   .from('tags')
//   .update({ title, status })
//   .eq('title', title )
//   .select();

//   redirect('/blog-tag') 
// }


// export async function updateTag(context: z.infer<typeof tagUpdateSchema>) {
//   const supabase = createServerComponentClient<Database>({ cookies });
//   try {
//     const tag = tagUpdateSchema.parse(context);

//     const { data, error } = await supabase
//     .from("tags")
//     .update({
//       title: tag.title,
//       status: tag.status
//     })
//     .select()
//     .single()
//     if(error) {
//       console.log(error)
//       return null;
//     }
//     return data;
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
// }




export async function deleteTag(context: z.infer<typeof tagDeleteSchema>){
    const cookieStore = cookies();
    const supabase = createServerActionClient<Database>({ cookies: () => cookieStore });
  
    try {
      const tag = tagDeleteSchema.parse(context);
      const { data, error } = await supabase
        .from("tags")
        .delete()
        .match({id: tag.id})
        .select();

        if (error) {
          console.log(error);
          return false;
        }
        if (data && data.length > 0) {
          return true;
        }
        return false;
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log(error);
        return false;
      }
      return false;
    }

    // try {
    //     const { error } = await supabase
    //     .from('tags')
    //     .delete()
    //     .eq('title', title)
    
    //     revalidatePath('/')
    //     return { message: `Deleted tag successfully}` }
    //   } catch (e) {
    //     return { message: 'Failed to delete todo' }
    //   }
//     const { error } = await supabase
//   .from('countries')
//   .delete()
//   .eq('title', title)
//         // await supabase.from('tags').delete().eq('title', title);
//         redirect('/blog-tag');
//         revalidatePath('/blog-tag/write');
//         return { title: 'Success', message: 'Tag deleted successfully!!!' };
  
}