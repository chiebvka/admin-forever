'use client'

import React, { useState } from 'react';
import { experimental_useFormState as useFormState } from 'react-dom'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
  } from "@/components/ui/form";
  import { zodResolver } from "@hookform/resolvers/zod";
  import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";
import { SparklesIcon, Loader2 as SpinnerIcon } from "lucide-react";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { createTag, deleteTag, updateTag } from '../action';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/Icons';
import { useRouter } from 'next/navigation';
import {toast} from 'react-hot-toast';
import { tagConfig } from '@/config/tag';
import { tagEditFormSchema, tagUpdateSchema } from '@/lib/validation/tag';

type Props = {
    tagData: { 
        tagName: string;
        tagStatus: boolean /* other fields from tagData */ };
  };

  const initialState = {
    message: null,
    title: null,
  }

  function SubmitButton() {
    const { pending } = useFormStatus();
    const { toast } = useToast();
    
    const [state, formAction] = useFormState(updateTag, initialState);
  
    return (
      <>
              <Button type="submit"  
              onClick={() => {
              toast({
                title: state?.title,
                description: state?.message,
               
              })
            }}  className='border-2 p-4' disabled={pending}>
                    {pending && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            ) ? "Updating Tag" : "Update"}
            </Button>
      </>
    )
  }
  


  type EditorFormValues = z.infer<typeof tagEditFormSchema>;
  


export default function TagEditForm({ tagData }: Props) {
    const [state, formAction] = useFormState(updateTag, initialState);
    const { pending } = useFormStatus();
    const { toast } = useToast();
  

    
    
    // const [content, setContent] = useState<string | null>(tag?.content || null);
    // const defaultValues: Partial<EditorFormValues> = {
    //     title: tag.title ?? "Untitled",
    //     status: tag.slug ?? `post-${v4()}`,
    // };



  return (
    <>
       <form  action={formAction}>
        <div className="grid w-6/12 mb-8 items-center gap-1.5">
            <Label htmlFor="title" className='mb-2'>Tag Name</Label>
            <Input type="text" defaultValue={tagData?.tagName} name='title' placeholder="Tag Name" required />
            <div className='w-full text-sm'>
            This is the tag or category name to be used in blog posts
            </div>
        </div>
        <div className="grid w-6/12 my-8 items-center gap-1.5">
            <Label htmlFor="status" className='mb-2'>Tag Status</Label>
            <Select name='status' defaultValue={tagData?.tagStatus.toString()}>
                <SelectTrigger>
                    <SelectValue  placeholder="Select tag status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="true">Active</SelectItem>
                  <SelectItem value="false">Inactive</SelectItem>
                </SelectContent>
            </Select>
            <div className='w-full text-sm'>
            This determines if you want this to be active and usable for blog posts
            </div>
        </div>

        <SubmitButton />




          <p   role="status" >
            {state?.message}
          </p>


    </form>
    </>
  )
}