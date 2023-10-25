import { ModeToggle } from '@/components/ModeToggle';
import UserNavigation from '@/components/UserNavigation';
import * as React from "react"
 
import TagForm from '../components/TagForm';

type Props = {}

export default function page({}: Props) {
  return (
    <div className="w-9/12 bg-background absolute right-0 top-0  flex flex-col items-center justify-center">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-end items-center p-3 text-sm text-foreground">
          <ModeToggle />
          </div>
        </nav>
        <div className="hidden border w-full  space-y-6 p-10  md:block">
            <div className="space-y-0.5 items-center">
            <h2 className="text-2xl font-bold tracking-tight">Define a Blog tag</h2>
            <p className="text-muted-foreground">
              Make your tags that would be attached to blog posts
            </p>
            </div>
        </div>
        <div className=" w-full p-10 space-y-6 md:block">
            <TagForm />
        </div>
    </div>
  )
}