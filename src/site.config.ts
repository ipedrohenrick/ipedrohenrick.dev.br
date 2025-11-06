const siteConfig = ({
  Lang: "pt-BR",
  SiteName: "IPedroHenrick",
  Description: "Pedro Henrick personal portfolio/blog :)",
  Author: "Pedro Henrick Queiroz",
  Year: 2025,
})

const menuLinks: { path: string, title: string }[] = [
  { path: "/", title: "Home" },
  { path: "/blog", title: "Blog" },
  { path: "/about", title: "About" },
];

export { menuLinks, siteConfig };
