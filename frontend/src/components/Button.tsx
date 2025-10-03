type ButtonProps = {
  label: string;
  onClick: () => void;
  className?: string;
};

export const Button = (props: ButtonProps) => {
  const { label, onClick, className } = props;

  return (
    <button onClick={onClick} className={className}>
      {label}
    </button>
  );
};
