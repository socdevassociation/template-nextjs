export const routes: Route[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Page Two",
    href: "/page-two",
  },
];

export interface Route {
  name: string;
  href: string;
  current?: boolean;
}
