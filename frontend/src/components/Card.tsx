type CardProps = {
  title: string;
  children?: React.ReactNode;
  className?: string;
};
export const Card = (props: CardProps) => {
  const { title, children, className } = props;

  return (
    <div className={className}>
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
};
