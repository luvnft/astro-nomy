import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "ATL5D",
  description:
    "The Atlanta united economy powered by blockchain tech that works for everyone. Subscribers learn, earn $ATL B🍑🍑ty memecoins and network in the ATLverse with a leaderboard. ",
  url: "https://atl5d.arvrtise.com",
  ogImage: "https://atl5d.arvrtise.com/og.jpg",
  links: {
    twitter: "https://twitter.com/atl5d",
    github: "https://github.com/luvnft/astro-nomy",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Company",
    items: [
      { title: "About", href: "#" },
      { title: "Enterprise", href: "#" },
      { title: "Partners", href: "#" },
      { title: "Jobs", href: "#" },
    ],
  },
  {
    title: "Product",
    items: [
      { title: "Security", href: "#" },
      { title: "Customization", href: "#" },
      { title: "Customers", href: "#" },
      { title: "Changelog", href: "#" },
    ],
  },
  {
    title: "Docs",
    items: [
      { title: "Introduction", href: "#" },
      { title: "Installation", href: "#" },
      { title: "Components", href: "#" },
      { title: "Code Blocks", href: "#" },
    ],
  },
];