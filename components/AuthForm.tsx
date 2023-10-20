"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Icons } from './Icons';
import { AlertCircle, Terminal, Waves } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { cn } from '@/lib/utils';
import Messages from '@/app/login/messages';



type AlertProps = {
    type: "info" | "error",
    msg: string
  }


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}
   
  

type Props = {}

export default function AuthForm({ className, ...props }: UserAuthFormProps) {

    const [email, setEmail] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    const [error, setError] = useState<AlertProps | undefined>(undefined);


    const router = useRouter();
    const supabase = createClientComponentClient();
    const searchParams = useSearchParams();
    const message = searchParams.get('message');

    const handleSignIn = async () => {
        try {
        setIsLoading(true); 
        const {  error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError({ type: 'error', msg: error.message }); 
            setIsLoading(false); 
            return;
        }
        setTimeout(() => {
            router.push('/');
        }, 2000);
        } catch (error) {
        console.error('Login failed', error);
        setError({ type: 'error', msg: 'An error occurred while logging in.' });
        }
    }

    const handleSignUp = async () => {
        try {
        setIsLoading(true); 
        const {  error } =  await supabase.auth.signUp({
            email,
            password,
            options: {
            emailRedirectTo: `${location.origin}/auth/callback`,
            },
        });
        if (error) {
            setError({ type: 'error', msg: error.message }); 
            setIsLoading(false); 
            return;
        }
        setTimeout(() => {
          router.push('/');
      }, 2000);
        } catch (error) {
        console.error('Login failed', error);
        setError({ type: 'error', msg: 'An error occurred while getting you signed up' });
        }
    }


  return (
    <div className={cn("grid gap-6 ", className)} {...props}>
    <div>
      <div className="grid gap-2">
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Email
          </Label>
          <Input
            placeholder="name@example.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
          />
        </div>
        <div className="grid gap-1">
          <Label className="sr-only" htmlFor="email">
            Password
          </Label>
          <Input
             type="password"
             name="password"
             placeholder="••••••••"
             onChange={(e) => setPassword(e.target.value)}
             value={password}
             required
          />
        </div>
        <Button disabled={isLoading} onClick={handleSignIn}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign In with Email
        </Button>
        <Button disabled={isLoading} onClick={handleSignUp}>
          {isLoading && (
            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
          )}
          Sign Up
        </Button>

        <Messages />

        {error && (
              <Alert variant="destructive" className='mt-2'>
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
              {error.msg}
              </AlertDescription>
            </Alert>
          // <p className="mt-4 p-3 bg-red-100 border-2 rounded-md border-red-700 text-red-700 text-center">
          //     {error.msg}
          // </p>
        )}
        {message && (
            //   <Alert>
            //   <Terminal className="h-4 w-4" />
            //   <AlertTitle>Heads up!</AlertTitle>
            //   <AlertDescription>
            //     {message}
            //   </AlertDescription>
            // </Alert>
          <p className="mt-4 p-3 bg-green-100 border-2 rounded-md border-green-700 text-green-700 text-center">
            {message}
          </p>
        )}
      </div>
    </div>
    {/* <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="bg-background px-2 text-muted-foreground">
          Or continue with
        </span>
      </div>
    </div> */}
    {/* <Button variant="outline" type="button" disabled={isLoading}>
      {isLoading ? (
        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <Icons.gitHub className="mr-2 h-4 w-4" />
      )}{" "}
      Github
    </Button> */}
    </div>
  )
}