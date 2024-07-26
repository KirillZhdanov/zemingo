import { ReactNode } from "react";

interface NotificationProps {
  text: string;
  variant: "success" | "error" | "warning";
  icon?: ReactNode;
}

const notificationStyles = {
  success: {
    backgroundColor: "bg-green-300",
    color: "text-white",
  },
  error: {
    backgroundColor: "bg-red-300",
    color: "text-white",
  },
  warning: {
    backgroundColor: "bg-yellow-300",
    color: "text-gray-600",
  },
};

export function Notification({ variant, text, icon }: NotificationProps) {
  const { backgroundColor, color } = notificationStyles[variant];

  return (
    <div
      className={`flex items-center gap-4 p-4 rounded-lg ${backgroundColor} ${color}`}
      role="alert"
    >
      {icon}
      <p>{text}</p>
    </div>
  );
}
