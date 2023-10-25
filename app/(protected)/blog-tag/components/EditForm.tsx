// 'use client'

// import { experimental_useFormState as useFormState } from 'react-dom'
// import { experimental_useFormStatus as useFormStatus } from 'react-dom'
// import React from 'react';
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label";
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select";
// import { useToast } from "@/components/ui/use-toast";
// import { createTag, deleteTag, updateTag } from '../action';

// import { Button } from '@/components/ui/button';
// import { Icons } from '@/components/Icons';

// type Props = {}

// const initialState = {
//     message: null,
//   }


// //   function EditButton() {
// //     const { pending } = useFormStatus();
// //     const { toast } = useToast();
    
// //     const [state, formAction] = useFormState(createTag, initialState);
  
// //     return (
// //       <>
// //               <Button type="submit"  
// //               onClick={() => {
// //               toast({
// //                 title: state?.title,
// //                 description: state?.message,
               
// //               })
// //             }}  className='border-2 p-4' disabled={pending}>
// //                     {pending && (
// //               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
// //             ) ? "Editing Tag" : "Edit"}
// //             </Button>
// //       </>
// //     )
// //   }


//   function DeleteButton() {
//     const { pending } = useFormStatus();
//     const { toast } = useToast();
    
//     const [state, formAction] = useFormState(createTag, initialState);
  
//     return (
//       <>
//               <Button type="submit"  
//               onClick={() => {
//               toast({
//                 title: state?.title,
//                 description: state?.message,
               
//               })
//             }}  className='border-2 p-4' disabled={pending}>
//                     {pending && (
//               <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
//             ) ? "Deleting Tag" : "Delete"}
//             </Button>
//       </>
//     )
//   }

// export default function EditForm({ title}: { title: string}) {
//     const [state, formAction] = useFormState(deleteTag, initialState);

//   return (
//     <form  action={formAction}>
//         <div className="grid w-6/12 mb-8 items-center gap-1.5">
//             <Label htmlFor="title" className='mb-2'>Tag Name</Label>
//             {/* <input type="text" name="id" value={title} /> */}
//             <Input type="text" name='title'  value={title} />
//             <div className='w-full text-sm'>
//             This is the tag or category name to be used in blog posts
//             </div>
//         </div>
//         {/* <div className="grid w-6/12 my-8 items-center gap-1.5">
//             <Label htmlFor="status" className='mb-2'>Tag Status</Label>
//             <Select name='status' >
//                 <SelectTrigger>
//                     <SelectValue placeholder="Select tag status" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="true">Active</SelectItem>
//                   <SelectItem value="false">Inactive</SelectItem>
//                 </SelectContent>
//             </Select>
//             <div className='w-full text-sm'>
//             This determines if you want this to be active and usable for blog posts
//             </div>
//         </div> */}

//         {/* <EditButton /> */}
//         <DeleteButton />




//           <p   role="status" >
//             {state?.message}
//           </p>


//     </form>
//   )
// }