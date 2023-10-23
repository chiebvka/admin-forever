"use client" 


import React from 'react';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Loader2 as SpinnerIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { shimmer, toBase64 } from "@/lib/utils";
import Image from "next/image";
import { format } from "date-fns";
import { zodResolver } from "@hookform/resolvers/zod";
import { KickStarter } from '@/types/collection';
import { supabase } from "@/utils/supabase-client";
import { useRouter } from "next/navigation";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { kickFormSchema } from '@/lib/validation/kickstarter';
import { updateKickstarter } from '@/actions/kickstarter/update-kickstarter';
import { kickConfig } from '@/config/kickstarter';
import { Textarea } from '@/components/ui/textarea';

type Props = {}



type KickFormValues = z.infer<typeof kickFormSchema>;

interface PostEditorProps {
    kicker: KickStarter;
  }
  

export default function Starters({kicker} : {kicker: any}) {

    const router = useRouter();

    // Setup Uppy with Supabase
    const [showModal, setShowModal] = useState<boolean>(false);
    const [isUpdating, setIsUpdating] = useState<boolean>(false);

    const defaultValues: Partial<KickFormValues> = {
      title: kicker.title || "",
      description: kicker.description || "",
      youtube_link: kicker.youtube_link || "",
      kickstarter_link: kicker.kickstarter_link || "",
    };

    const form = useForm<KickFormValues>({
      resolver: zodResolver(kickFormSchema),
      defaultValues,
      mode: "onChange",
    });

    async function onSubmit(data: KickFormValues) {
      setIsUpdating(true);
  
      const response = await updateKickstarter({
        id: kicker.id,
        title: data.title,
        description: data.description,
        youtube_link: data.youtube_link,
        kickstarter_link: data.kickstarter_link,
      });
  
      if (response) {
        toast.success(kickConfig.successMessage);
        router.push(`/kickstarter`);
      } else {
        toast.error(kickConfig.errorMessage);
      }
  
      setIsUpdating(false);
    }

    if(!kicker) {
        return <div>loading.....</div>;
    }

    const { created_at, youtube_link, description, title, kickstarter_link  } = kicker

    const date = format(new Date(created_at), "MM/dd/yyyy");

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

          <Card className="max-w-2xl">
          <CardHeader>
            <CardTitle>{kickConfig.title}</CardTitle>
            <CardDescription>{kickConfig.title}</CardDescription>
          </CardHeader>
          <Separator className="mb-8" />
          <CardContent className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{kickConfig.title}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={kickConfig.title}
                      {...field}
                      className="max-w-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{kickConfig.description}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={kickConfig.description}
                      {...field}
                      className="max-w-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="youtube_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{kickConfig.youtube}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={kickConfig.youtube}
                      {...field}
                      className="max-w-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="kickstarter_link"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{kickConfig.donation}</FormLabel>
                  <FormControl>
                    <Input
                      placeholder={kickConfig.donation}
                      {...field}
                      className="max-w-md"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          </CardContent>
          </Card>
          <Button type="submit" disabled={isUpdating}>
            {kickConfig.update}
          </Button>
        </form>
      </Form>
      <AlertDialog open={isUpdating} onOpenChange={setIsUpdating}>
        <AlertDialogContent className="font-sans">
          <AlertDialogHeader>
            <AlertDialogTitle className="text-center">
              {kickConfig.pleaseWait}
            </AlertDialogTitle>
            <AlertDialogDescription className="mx-auto text-center">
              <SpinnerIcon className="h-6 w-6 animate-spin" />
            </AlertDialogDescription>
          </AlertDialogHeader>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}