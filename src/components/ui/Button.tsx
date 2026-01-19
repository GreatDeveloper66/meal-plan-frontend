export default function Button({
  children,
  onClick,
    type = "button",
}: {
  children: React.ReactNode;
  onClick: () => void;
    type?: "button" | "submit" | "reset";
}) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
