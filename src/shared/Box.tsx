import { ReactNode } from "react";

interface BoxProps {
  className?: string;
  children: ReactNode;
}

export function Box({ className = "", children }: BoxProps) {
  return (
    <div className={"p-4 rounded-lg border border-gray-300 " + className}>
      {children}
    </div>
  );
}
