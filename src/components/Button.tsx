import clsx from "clsx";

// 컴포넌트 외부로 스타일 상수 분리
const BASE_STYLES =
  "rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

const VARIANT_STYLES = {
  primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
  secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500",
  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  ghost: "text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
  link: "text-blue-600 hover:underline focus:ring-blue-500 p-0",
};

const SIZE_STYLES = {
  sm: "text-sm px-3 py-1",
  md: "text-base px-4 py-2",
  lg: "text-lg px-6 py-3",
};

const DISABLED_STYLES = "opacity-50 cursor-not-allowed";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  isDisabled = false,
  className = "",
  onClick,
  ...props
}: ButtonProps) => {
  // clsx를 사용하여 조건부로 클래스 결합
  const buttonClass = clsx(
    // 기본 스타일
    BASE_STYLES,
    // 버튼 크기 (size)
    SIZE_STYLES[size],
    // 버튼 변형 (variant)
    VARIANT_STYLES[variant],
    // 비활성화 상태
    isDisabled && DISABLED_STYLES,
    fullWidth && "w-full",
    // 사용자 정의 클래스 적용
    className,
  );
  return (
    <button
      className={buttonClass}
      disabled={isDisabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
