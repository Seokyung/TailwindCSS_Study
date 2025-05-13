import clsx from "clsx";

type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  size?: "xs" | "sm" | "md";
  outlined?: boolean;
  rounded?: boolean;
  withDot?: boolean;
  className?: string;
};

const Badge = ({
  children,
  variant = "primary",
  size = "sm",
  outlined,
  rounded,
  withDot,
  className,
}: BadgeProps) => {
  const badgeClasses = clsx(
    "inline-flex flex justify-center items-center text-md font-semibold",
    // size
    {
      "text-xs px-2 py-1": size === "xs",
      "text-sm px-4 py-1": size === "sm",
      "text-md px-6 py-2": size === "md",
    },
    // variant & outlined
    {
      "bg-blue-200 text-blue-700": variant === "primary" && !outlined,
      "bg-green-200 text-green-700": variant === "success" && !outlined,
      "bg-yellow-200 text-yellow-700": variant === "warning" && !outlined,
      "bg-red-200 text-red-700": variant === "danger" && !outlined,
      "bg-sky-200 text-sky-700": variant === "info" && !outlined,

      "border-2": outlined,
      "bg-transparent border-blue-700 text-blue-700":
        variant === "primary" && outlined,
      "bg-transparent border-green-700 text-green-700":
        variant === "success" && outlined,
      "bg-transparent border-yellow-700 text-yellow-700":
        variant === "warning" && outlined,
      "bg-transparent border-red-700 text-red-700":
        variant === "danger" && outlined,
      "bg-transparent border-sky-700 text-sky-700":
        variant === "info" && outlined,
    },
    // rounded
    {
      rounded: !rounded,
      "rounded-full": rounded,
    },
    className,
  );

  const dotClass = clsx(
    "mr-1.5 h-2 w-2 rounded-full",
    // color
    {
      "bg-blue-700": variant === "primary",
      "bg-green-700": variant === "success",
      "bg-yellow-700": variant === "warning",
      "bg-red-700": variant === "danger",
      "bg-sky-700": variant === "info",
    },
  );

  return (
    <span className={badgeClasses}>
      {withDot && <span className={dotClass}></span>}
      {children}
    </span>
  );
};

export default Badge;
