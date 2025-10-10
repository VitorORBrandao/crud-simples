import { PiSpinner } from "react-icons/pi";

export function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <PiSpinner
      size={32}
      role="output"
      aria-label="Loading"
      className="size-4 animate-spin"
      {...props}
    />
  );
}
