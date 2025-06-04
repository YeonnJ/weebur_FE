import Link from "next/link";
import React from "react";
import * as styles from "./Button.css";
import clsx from "clsx";

interface ButtonProps {
  children: React.ReactNode;
  fullWidth?: boolean;
}

type ButtonDefaultProps = ButtonProps &
  React.ComponentPropsWithoutRef<"button">;

const ButtonDefault = ({
  children,
  className,
  fullWidth = false,
  ...props
}: ButtonDefaultProps) => {
  return (
    <button
      {...props}
      className={clsx(styles.button({ fullWidth }), className)}
    >
      {children}
    </button>
  );
};

type ButtonLinkProps = ButtonProps & React.ComponentProps<typeof Link>;

const ButtonLink = ({
  children,
  fullWidth = false,
  className,
  ...props
}: ButtonLinkProps) => {
  return (
    <Link {...props} className={clsx(styles.button({ fullWidth }), className)}>
      {children}
    </Link>
  );
};

export default Object.assign(ButtonDefault, {
  Link: ButtonLink,
});
