import { RouteConfigEntry } from "@remix-run/dev/dist/config/routes";
import { index } from "@remix-run/route-config";

export const routes: RouteConfigEntry[] = [index("routes/_index.tsx")];
