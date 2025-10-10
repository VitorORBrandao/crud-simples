import type { AppRoute } from "../../types/route.type";
import { MenuLayout } from "./MenuLayout";
import { PlainLayout } from "./PlainLayout";
import { ProtectedLayout } from "./ProtectedLayout";

export function resolveLayout(route: AppRoute, routes: AppRoute[]) {
  const { element, isProtected, hasMenu, permission } = route;

  if (hasMenu && isProtected) {
    return (
      <ProtectedLayout permission={permission}>
        <MenuLayout routes={routes} />
        {element}
      </ProtectedLayout>
    );
  } else if (hasMenu) {
    return <MenuLayout routes={routes} />;
  } else if (isProtected) {
    return <ProtectedLayout permission={permission}>{element}</ProtectedLayout>;
  }

  return <PlainLayout>{element}</PlainLayout>;
}
