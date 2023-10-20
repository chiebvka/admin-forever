"use client"

import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Menu, XCircle } from 'lucide-react';
import { cn, getUrl } from "@/lib/utils";
import Link from 'next/link';
import { navigation } from '@/constants';
import { Caveat } from 'next/font/google';
import { usePathname } from 'next/navigation';
import { dashBoardLogout, dashBoardMenusLoop } from "@/config/dashboard";
import { v4 } from 'uuid';



type Props = {}

const cavet = Caveat({ subsets: ['latin'] })

export default function SidebarToggle({}: Props) {
  const currentPath = usePathname();
  const path = currentPath.split("/");
  const pathSlug = `/${path.slice(1, 3).join("/")}`;
    const [open, setOpen] = useState(false)

    
  return (
    < >

<div className="hidden lg:fixed border-4 lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-background px-6 pb-4">
          <Link href={getUrl()} className="flex h-16 shrink-0 items-center">
            <h1 className={`${cavet.className} h-8 text-4xl z-10 text-foreground  w-auto`}>Foreversake Inc.</h1>
          </Link>
          <nav className='flex flex-1 flex-col'>
            <ul role='list' className='flex flex-1 flex-col gap-y-7'>
              <li>
                <ul role='list' className='-mx-2 space-y-1'>
                {dashBoardMenusLoop.map((menu) => (
                    <li key={v4()}>
                    <Link
                      href={menu.slug || ""}
                      className={cn(
                        currentPath === menu.slug ||
                          (path.length > 3 && pathSlug === menu.slug)
                          ? "bg-gray-50 text-orange-600"
                          : "text-gray-700 hover:bg-gray-50 hover:text-orange-600",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6",
                      )}
                    >
                      <menu.icon
                        className={cn(
                          currentPath === menu.slug
                            ? "text-orange-600"
                            : "text-gray-400 group-hover:text-orange-600",
                          "h-6 w-6 shrink-0",
                        )}
                        aria-hidden="true"
                      />
                      {menu.title}
                    </Link>
                  </li>
                ))}
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* <div className="flex md:hidden flex-row absolute w-20 h-16 items-center justify-center left-0 top-0   border-2 border-red-600">
        <Menu color="#fdfcfc"   onClick={() => setOpen(true)} />
      </div>
    
      <div className="min-h-screen md:flex hidden flex-row absolute  max-w-sm w-3/12 left-0 bottom-0 bg-background border-2 border-red-600">
        <div className="flex flex-col w-full bg-background  overflow-hidden">
          <div className="flex items-center justify-center h-16 shadow-md">
            <h1 className={`${cavet.className} h-8 text-4xl z-10 text-foreground  w-auto`}>Foreversake Inc.</h1>
          </div>
          <div className="relative mt-6 flex-1 px-4 sm:px-6">
            {navigation.map((link, index) => (
              <Link href={link.href} key={index} className='flex items-center justify-start hover:bg-slate-500 transition duration-300 ease-in-out border-2 border-red-800 my-6 p-2 rounded-lg'>
                <img src={link.icon} className='flex items-center mr-4 text-foreground' />
                <span className='text-lg items-center justify-start'>{link.title}</span>
              </Link>
            ))}

            <h1 className="text-lg">Your teams</h1>

            {navigation.map((link, index) => (
              <Link href={link.href} key={index} className='flex items-center justify-start hover:bg-slate-500 transition duration-300 ease-in-out border-2 border-red-800 my-6 p-2 rounded-lg'>
                <img src={link.icon} className='flex items-center mr-4 text-foreground' />
                <span className='text-lg items-center justify-start'>{link.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div> */}
 

    </>
  )
}

      // <Transition.Root show={open} as={Fragment}>
      // <Dialog as="div" className="relative z-50" onClose={setOpen}>
      //   <Transition.Child
      //     as={Fragment}
      //     enter="ease-in-out duration-500"
      //     enterFrom="opacity-0"
      //     enterTo="opacity-100"
      //     leave="ease-in-out duration-500"
      //     leaveFrom="opacity-100"
      //     leaveTo="opacity-0"
      //   >
      //     <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      //   </Transition.Child>

      //   <div className="fixed inset-0 overflow-hidden">
      //     <div className="absolute inset-0 overflow-hidden">
      //       <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full pr-10">
      //         <Transition.Child
      //           as={Fragment}
      //           enter="transform transition ease-in-out duration-500 sm:duration-700"
      //           enterFrom="translate-x-full"
      //           enterTo="translate-x-0"
      //           leave="transform transition ease-in-out duration-500 sm:duration-700"
      //           leaveFrom="translate-x-0"
      //           leaveTo="-translate-x-full"
      //         >
      //           <Dialog.Panel className="pointer-events-auto relative w-screen max-w-sm">
      //             <Transition.Child
      //               as={Fragment}
      //               enter="ease-in-out duration-500"
      //               enterFrom="opacity-0"
      //               enterTo="opacity-100"
      //               leave="ease-in-out duration-500"
      //               leaveFrom="opacity-100"
      //               leaveTo="opacity-0"
      //             >
      //               <div className="absolute right-0 top-0 mr-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
      //                 <button
      //                   type="button"
      //                   className="relative rounded-md text-foreground hover:text-white focus:outline-none "
      //                   onClick={() => setOpen(false)}
      //                 >
      //                   <span className="absolute -inset-2.5" />
      //                   <span className="sr-only">Close panel</span>
      //                   <XCircle className="h-6 w-6" aria-hidden="true" />
      //                 </button>
      //               </div>
      //             </Transition.Child>
      //             <div className="flex h-full flex-col overflow-y-scroll bg-background border-2 border-red-700 py-6 shadow-xl">
      //               <div className="px-4 sm:px-6 h-10 shadow-md">
      //                 <Dialog.Title className={`${cavet.className} h-8 text-xl z-10  font-semibold leading-6 text-foreground  w-auto`}>
      //                 {/* <Dialog.Title className="text-base font-semibold leading-6 text-gray-900"> */}
      //                   Foreversake.
      //                 </Dialog.Title>
      //               </div>
      //               <div className="relative mt-6 flex-1 px-4 sm:px-6">
      //                 {navigation.map((link, index) => (
      //                   <Link href={link.href} key={index} className='flex items-center justify-start hover:bg-slate-500 transition duration-300 ease-in-out border-2 border-red-800 my-6 p-2 rounded-lg'>
      //                     <img src={link.icon} className='flex items-center mr-4 text-foreground' />
      //                     <span className='text-lg items-center justify-start'>{link.title}</span>
      //                   </Link>
      //                 ))}

      //                 <h1 className="text-lg">Your teams</h1>

      //                 {navigation.map((link, index) => (
      //                   <Link href={link.href} key={index} className='flex items-center justify-start hover:bg-slate-500 transition duration-300 ease-in-out border-2 border-red-800 my-6 p-2 rounded-lg'>
      //                     <img src={link.icon} className='flex items-center mr-4 text-foreground' />
      //                     <span className='text-lg items-center justify-start'>{link.title}</span>
      //                   </Link>
      //                 ))}



      //               </div>
      //             </div>
      //           </Dialog.Panel>
      //         </Transition.Child>
      //       </div>
      //     </div>
      //     </div>
      // </Dialog>
      // </Transition.Root>