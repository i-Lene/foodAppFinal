export default function Button({ children, textOnly, className, ...props }) {
  const cssCLasses = textOnly
    ? `${className} text-button`
    : `${className} button`;
  return (
    <button className={cssCLasses} {...props}>
      {children}
    </button>
  );
}
