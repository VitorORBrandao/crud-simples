import type { JSX } from "react";

export type AppRoute = {
  element: JSX.Element;
  path?: string;
  index?: boolean;
  icon?: JSX.Element;
  name?: string;
  hasMenu?: boolean;
  isProtected?: boolean;
  isVisible?: boolean;
  permission?: string;
};
