import type { ReactNode } from "react";

type PlainLayoutProps = {
  children: ReactNode;
};

export const PlainLayout = ({ children }: PlainLayoutProps) => <>{children}</>;
