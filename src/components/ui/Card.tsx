export default function Card({
  children,
}: {
    children: React.ReactNode;
}) {
  return <div style={{ border: "1px solid #ccc", borderRadius: "8px", padding: "16px", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>{children}</div>;
}
