import { ModeToggle } from '@/components/ModeToggle'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import BlogForm from './components/BlogForm'

type Props = {}

export default async function Index({}: Props) {
  return (
    <div className="w-9/12 bg-background fixed right-0 top-0  flex flex-col items-center justify-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
            <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm text-foreground">
            <ModeToggle />
            </div>
        </nav>
        <div className="hidden border w-full  space-y-6 p-10  md:block">
            <div className="space-y-0.5 items-center">
            <h2 className="text-2xl font-bold tracking-tight">Write a Blog Post</h2>
            <p className="text-muted-foreground">
                Make blog post by filling out this form and submit
            </p>
            </div>
        </div>
        <div className=" w-full p-10 space-y-6 md:block">
            <div>
                <h3 className="text-lg font-medium">Profile</h3>
                <p className="text-sm text-muted-foreground">
                This is how others will see you on the site.
                </p>
            </div>
            <Separator />
            <BlogForm />
        </div>
    </div>
  )
}