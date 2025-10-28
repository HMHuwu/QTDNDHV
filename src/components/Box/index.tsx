import { ReactNode } from "react";

type BoxProps = {
  children: ReactNode;
  className?: string;
};

export default function Box({ children, className = "" }: BoxProps) {
  return (
    <div
      className={`border rounded-xl shadow-sm bg-white p-4 ${className} bg-[var(--border)] justify-center items-center flex`}
    >
      {children}
    </div>
  );
}
