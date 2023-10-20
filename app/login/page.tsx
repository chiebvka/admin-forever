import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import Link from 'next/link'
import Messages from './messages'
import Image from 'next/image'
import rio from "../images/mapa.jpeg"
import AuthForm from '@/components/AuthForm'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { redirect } from 'next/navigation';

export default async function Login() {
  const supabase = createServerComponentClient({ cookies })
  const { data: {session}} = await supabase.auth.getSession()
  if(session) {
    redirect("/")
  }
  return (
    <div className="h-[100vh]">
      <div className="hidden ">
        <Image
          src={rio}
          width={1280}
          height={843}
          alt="Authentication"
          className="block dark:hidden"
        />
        <Image
          src={rio}
          width={1280}
          height={843}
          alt="Authentication"
          className="hidden dark:block"
        />
      </div>
      <div className="container relative  h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        {/* <Link
          href="/examples/authentication"
          className={cn(
            buttonVariants({ variant: "ghost" }),
            "absolute right-4 top-4 md:right-8 md:top-8"
          )}
        >
          Login
        </Link> */}
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-zinc-900" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            Acme Inc */}
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;This library has saved me countless hours of work and
                helped me deliver stunning designs to my clients faster than
                ever before.&rdquo;
              </p>
              <footer className="text-sm">Sofia Davis</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8 flex h-[100vh] my-auto items-center justify-center">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <AuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link
                href="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                href="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      {/* <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Enter your email below to create your account
              </CardDescription>
            </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-6">
            <Button variant="outline">
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
            <Button variant="outline">
              <Icons.google className="mr-2 h-4 w-4" />
              Google
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="m@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
        </CardContent>
      <CardFooter>
        <Button className="w-full">Create account</Button>
      </CardFooter>
    </Card> */}
    </div>
    // <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
    //   <Link
    //     href="/"
    //     className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
    //   >
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="24"
    //       height="24"
    //       viewBox="0 0 24 24"
    //       fill="none"
    //       stroke="currentColor"
    //       strokeWidth="2"
    //       strokeLinecap="round"
    //       strokeLinejoin="round"
    //       className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
    //     >
    //       <polyline points="15 18 9 12 15 6" />
    //     </svg>{' '}
    //     Back
    //   </Link>

    //   <form
    //     className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground"
    //     action="/auth/sign-in"
    //     method="post"
    //   >
    //     <label className="text-md" htmlFor="email">
    //       Email
    //     </label>
    //     <input
    //       className="rounded-md px-4 py-2 bg-inherit border mb-6"
    //       name="email"
    //       placeholder="you@example.com"
    //       required
    //     />
    //     <label className="text-md" htmlFor="password">
    //       Password
    //     </label>
    //     <input
    //       className="rounded-md px-4 py-2 bg-inherit border mb-6"
    //       type="password"
    //       name="password"
    //       placeholder="••••••••"
    //       required
    //     />
    //     <button className="bg-green-700 rounded px-4 py-2 text-white mb-2">
    //       Sign In
    //     </button>
    //     <button
    //       formAction="/auth/sign-up"
    //       className="border border-foreground rounded px-4 py-2 text-foreground mb-2"
    //     >
    //       Sign Up
    //     </button>
    //     <Messages />
    //   </form>
    // </div>
  )
}
