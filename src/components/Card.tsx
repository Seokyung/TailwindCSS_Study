import clsx from "clsx";
import { ReactNode } from "react";

const BASE_STYLES = "overflow-hidden transition-all";

const PADDING_STYLES = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

const RADIUS_STYLES = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

const VARIANT_STYLES = {
  default: "bg-white border border-gray-400",
  outlined: "bg-white border-2 border-gray-700 hover:border-blue-700",
  elevated: "bg-white shadow-md hover:shadow-xl",
};

type CardProps = {
  children: ReactNode;
  variant: "default" | "outlined" | "elevated";
  padding: "none" | "sm" | "md" | "lg";
  radius: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Card = ({
  children,
  variant = "default",
  padding = "md",
  radius = "md",
  className = "",
}: CardProps) => {
  const cardClass = clsx(
    BASE_STYLES,
    PADDING_STYLES[padding],
    RADIUS_STYLES[radius],
    VARIANT_STYLES[variant],
    className,
  );
  return <div className={cardClass}>{children}</div>;
};

export default Card;
