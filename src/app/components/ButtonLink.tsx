import { PrismicNextLink } from "@prismicio/next";
import { LinkField } from "@prismicio/client";
import clsx from "clsx";

interface ButtonLinkProps {
  field: LinkField;
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function ButtonLink({
  field,
  className,
  children,
  onClick,
}: ButtonLinkProps) {
  return (
    <PrismicNextLink
      field={field}
      onClick={onClick}
      className={clsx(
        "ring-offset-background focus-visible:ring-ring group animate-rainbow text-foreground before:animate-rainbow relative inline-flex h-10 cursor-pointer items-center justify-center rounded-md border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] [background-clip:padding-box,border-box,border-box] [background-origin:border-box] px-4 py-2 text-sm font-medium whitespace-nowrap transition-transform duration-200 [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] hover:scale-105 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none active:scale-95 disabled:pointer-events-none disabled:opacity-50 dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]",
        className,
      )}
    >
      {children}
    </PrismicNextLink>
  );
}
