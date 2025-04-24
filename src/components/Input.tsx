import clsx from "clsx";

type InputProps = {
  id?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  error?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "filled" | "outlined";
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  id,
  type,
  placeholder,
  label,
  error,
  size = "md",
  variant = "default",
  fullWidth,
  disabled,
  className,
  onChange,
}: InputProps) => {
  const inputClass = clsx(
    "w-full rounded transition-all focus:outline-none focus:ring-1",
    // size
    {
      "px-1 py-2 text-sm": size === "sm",
      "px-2 py-4 text-md": size === "md",
      "px-3 py-6 text-lg": size === "lg",
    },
    // variant
    {
      "border border-gray-400 bg-white focus:border-blue-500":
        variant === "default" && !error && !disabled,
      "bg-green-100 border-none": variant === "filled" && !error && !disabled,
      "border-3 border-gray-400 bg-transparent":
        variant === "outlined" && !error && !disabled,
    },
    error && "border-2 border-red-400 bg-white",
    disabled && "bg-gray-200 text-gray-400 cursor-not-allowed",
    className,
  );

  const labelClass = clsx(
    "block md-2 font-bold",
    // size
    {
      "text-sm": size === "sm",
      "text-md": size === "md",
      "text-lg": size === "lg",
    },
    error && "text-red-400",
    disabled && "text-gray-400",
  );

  const errorClass = clsx(error && "mt-1 ml-1 text-xs font-bold text-red-400");

  return (
    <div className="w-full">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClass}
      />
      {error && <p className={errorClass}>{error}</p>}
    </div>
  );
};

export default Input;
