import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

export default function Button({
  variant,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element {
  variant = variant || "primary";
  return (
    <button
      className={` active:scale-90 disabled:bg-gray-400 disabled:text-white disabled:border-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none rounded-lg border-2 py-2 px-4 capitalize transition-all duration-75 hover:brightness-110 font-semibold 
          ${variant === "primary"
          ? "border-violet-500 bg-violet-500 text-violet-50"
          : "border-violet-500 bg-violet-50 text-violet-500"
        } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
