import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "ATL5D",
  description:
    "The Atlanta united economy powered by blockchain tech that works for everyone. Subscribers learn, earn $ATL B🍑🍑ty memecoins and network in the ATLverse with a leaderboard. ",
  url: "https://atl5d.arvrtise.com",
  ogImage: "https://atl5d.arvrtise.com/og.jpg",
  links: {
    twitter: "https://twitter.com/atl5d",
    github: "https://discord.gg/QQeFcekQyx",
  },
};

export const footerLinks: SidebarNavItem[] = [
  {
    title: "Socials",
    items: [
      { title: "Free Discord", href: "https://discord.gg/QQeFcekQyx" },
      { title: "X", href: "https://x.com/atl5d" },
      { title: "TikTok", href: "https://tiktok.com/@atl5d" },
      { title: "Instagram", href: "https://instagram.com/atl5d" },
    ],
  },
  {
    title: "ATLverse",
    items: [
      { title: "Metaverse", href: "https://www.spatial.io/s/ATLverse-662eb8858ef79a2eef2b8193?share=9164371680450447654" },
      { title: "ATL5D.shop", href: "https://atl5d.shop" },
      { title: "Podcast", href: "https://podcast.atl5d.com" },
      { title: "ATLcast", href: "https://atlcast.atl5d.com/" },
    ],
  },
  {
    title: "ATL5D",
    items: [
      { title: "Blog", href: "https://atl5d.arvrtise.com/blog" },
      { title: "PPV", href: "https://ppv.atl5d.com" },
      { title: "Pricing", href: "https://atl5d.com/pricing" },
      { title: "Sora Studio", href: "https://sora.atl5d.com" },
    ],
  },
];