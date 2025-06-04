import Link from "next/link";
import React, { forwardRef } from "react";
import * as styles from "./Button.css";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

type ButtonDefaultProps = ButtonProps &
  React.ComponentPropsWithoutRef<"button">;

const ButtonDefault = forwardRef<HTMLButtonElement, ButtonDefaultProps>(
  (
    { children, className, fullWidth = false, ...props }: ButtonDefaultProps,
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={clsx(styles.button({ fullWidth }), className)}
      >
        {children}
      </button>
    );
  }
);

ButtonDefault.displayName = "ButtonDefault";

type ButtonLinkProps = ButtonProps &
  React.ComponentPropsWithoutRef<typeof Link>;

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  ({ children, fullWidth = false, className, ...props }, ref) => {
    return (
      <Link
        {...props}
        ref={ref}
        className={clsx(styles.button({ fullWidth }), className)}
      >
        {children}
      </Link>
    );
  }
);

ButtonLink.displayName = "ButtonLink";

export default Object.assign(ButtonDefault, {
  Link: ButtonLink,
});
