type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  className?: string;
};

export const Input = (props: InputProps) => {
  const { label, type, placeholder, className } = props;

  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="font-semibold">{label}</label>
      <input type={type} placeholder={placeholder} className={className} />
    </div>
  );
};
