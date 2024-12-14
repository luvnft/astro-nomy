import type { SidebarNavItem, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "ATL5D",
  description:
    "The Atlanta united economy powered by blockchain tech that works for everyone. Subscribers learn, earn $ATL B🍑🍑ty memecoins and network in the ATLverse with a leaderboard. ",
  url: "https://atl5d.com",
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
      { title: "TikTok @ATL5D", href: "https://tiktok.com/@atl5d" },
      { title: "YT @ATLVERSE", href: "https://youtube.com/@atlverse" },
      { title: "X @ATL5D", href: "https://x.com/atl5d" },
      { title: "IG @ATL5D", href: "https://instagram.com/atl5d" },
    ],
  },
  {
    title: "Amarket",
    items: [
      { title: "ADTC", href: "https://adtc.atl5d.com" },
      { title: "Studio", href: "https://studio.atl5d.com" },
      { title: "Mixtape", href: "https://mixtape.atl5d.com" },
      { title: "ATLcast", href: "https://atlcast.atl5d.com/" },
    ],
  },
  {
    title: "ATL5D",
    items: [
      { title: "Blog", href: "https://atl5d.arvrtise.com/blog" },
      { title: "PPV", href: "https://ppv.atl5d.com" },
      { title: "Tokenize your biz", href: "https://atl5d.com/pricing" },
    ],
  },
];