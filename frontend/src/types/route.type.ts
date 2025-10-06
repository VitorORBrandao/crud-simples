import type { JSX } from "react";

export type AppRoute = {
  path?: string;
  index?: boolean;
  element: JSX.Element;
  name?: string;
  hasMenu?: boolean;
  isProtected?: boolean;
  isVisible?: boolean;
  permission?: string;
};