'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface TransitionLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink: React.FC<TransitionLinkProps> = ({
  children,
  href,
  className,
}) => {
  const router = useRouter();

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement>
  ) => {
    e.preventDefault();
    document.body.classList.add("page-transition");

    await sleep(400);
    router.push(href);
    await sleep(400);

    document.body.classList.remove("page-transition");
  };

  return (
    <Link href={href} className={className} onClick={handleTransition}>
      {children}
    </Link>
  );
};
