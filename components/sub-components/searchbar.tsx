"use client";

import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const TopBar = () => {
  const router = useRouter();
  const currentPath = usePathname();
  const path = currentPath.split("/");
  return (
    <>
      {path.length > 3 ? (
        <button
          type="button"
          onClick={() => router.back()}
          className="relative flex flex-1 items-center"
        >
          <ArrowLeftIcon
            className="mr-2 h-5 w-5 text-foreground"
            aria-hidden="true"
          />
          <span className="text-sm text-foreground">Go Back</span>
        </button>
      ) : (
        <Link href="/" className="relative flex flex-1 items-center">
          <ArrowLeftIcon
            className="mr-2 h-5 w-5 text-foreground"
            aria-hidden="true"
          />
          <span className="text-sm text-foreground">Go Back </span>
        </Link>
      )}
    </>
  );
};

export default TopBar;
