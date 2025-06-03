import Link from "next/link";
import { ReactNode } from "react";
import { button } from "./ButtonLink.css";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
}

export default function ButtonLink({ href, children }: ButtonLinkProps) {
  return (
    <Link href={href} className={button}>
      {children}
    </Link>
  );
}
