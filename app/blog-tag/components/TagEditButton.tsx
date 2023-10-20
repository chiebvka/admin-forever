import React, { FC, useState } from "react";
import { deleteTag } from '../action';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
  } from "@/components/ui/alert-dialog";

  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { tagConfig } from '@/config/tag';
import { supabase } from "@/utils/supabase-client";
import { Session } from "@supabase/auth-helpers-nextjs";
import {
  MoreVertical as ElipsisIcon,
  Loader2 as SpinnerIcon,
  Trash as TrashIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface TagEditButtonProps {
    id?: string;
}


type Props = {}

const TagEditButton: FC<TagEditButtonProps> = ({ id }) => {
    const router = useRouter();
    const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
    const [isDeleteLoading, setIsDeleteLoading] = useState<boolean>(false);
    const [session, setSession] = React.useState<Session | null>(null);
    const [showLoadingAlert, setShowLoadingAlert] = useState<boolean>(false);



  // Check authentitication and bookmark states
  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, [id, session?.user.id]);

  // Delete post
  async function deleteMyPost() {
    setIsDeleteLoading(true);
    if (id && session?.user.id) {
    // if (id && tagConfig.title) {
      const myTagData = {
        id: id,
        title: session?.user.id,
        // title: tagConfig.title,
      };
      const response = await deleteTag(myTagData);
      if (response) {
        setIsDeleteLoading(false);
        toast.success(tagConfig.successDelete);
        router.refresh();
      } else {
        setIsDeleteLoading(false);
        toast.error(tagConfig.errorDelete);
      }
    } else {
      setIsDeleteLoading(false);
      toast.error(tagConfig.errorDelete);
    }
  }

  return (
    <>
        <DropdownMenu>
            <DropdownMenuTrigger className="flex h-8 w-8 items-center justify-center rounded-md border transition-colors hover:bg-muted">
            <ElipsisIcon className="h-4 w-4" />
            <span className="sr-only">Open</span>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="font-sans">
            <DropdownMenuItem>
                <a
                className="flex w-full"
                onClick={() => {
                    setShowLoadingAlert(true);
                    router.push(`/blog-tag/${id}`);
                    setShowLoadingAlert(false);
                }}
                >
                {tagConfig.edit}
                </a>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
                className="flex cursor-pointer items-center text-destructive focus:text-destructive"
                onSelect={() => setShowDeleteAlert(true)}
            >
                {tagConfig.delete}
            </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        {/* Delete alert */}
        <AlertDialog open={showDeleteAlert} onOpenChange={setShowDeleteAlert}>
            <AlertDialogContent className="text-md font-sans">
            <AlertDialogHeader>
                <AlertDialogTitle>{tagConfig.questionDelete}</AlertDialogTitle>
                <AlertDialogDescription>
                {tagConfig.warning}
                </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>{tagConfig.cancel}</AlertDialogCancel>
                <AlertDialogAction onClick={deleteMyPost}>
                {isDeleteLoading ? (
                    <SpinnerIcon className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                    <TrashIcon className="mr-2 h-4 w-4" />
                )}
                <span>{tagConfig.confirm}</span>
                </AlertDialogAction>
            </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
        {/* Loading alert */}
        <AlertDialog open={showLoadingAlert} onOpenChange={setShowLoadingAlert}>
            <AlertDialogContent className="font-sans">
            <AlertDialogHeader>
                <AlertDialogTitle className="text-center">
                {tagConfig.pleaseWait}
                </AlertDialogTitle>
                <AlertDialogDescription className="mx-auto text-center">
                <SpinnerIcon className="h-6 w-6 animate-spin" />
                </AlertDialogDescription>
            </AlertDialogHeader>
            </AlertDialogContent>
        </AlertDialog>
    </>
  )
}

export default TagEditButton