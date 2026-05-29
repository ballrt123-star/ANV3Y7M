interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export default function Button({
  children,
  onClick,
}: ButtonProps) {
  return (
    <button className="pushable" onClick={onClick}>
      <span className="shadow"></span>
      <span className="front">
        {children}
      </span>
    </button>
  );
}