interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "primary" | "secondary";
}

const buttonStyles = {
  primary:
    "bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg h-fit",
  secondary:
    "bg-gray-600 hover:bg-gray-500 text-white px-4 py-2 rounded-lg h-fit",
};

export function Button({ text, variant = "primary", onClick }: ButtonProps) {
  return <button className={buttonStyles[variant]} onClick={onClick}>{text}</button>;
}
