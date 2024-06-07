import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Home",
          href: "/landing",
          description: "The ATL5D home page.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Challenge",
          href: "/releases",
          description: "Check daily challenges and quests",
          image: "/images/examples/challenge.jpg",
        },
        {
          title: "TikTok",
          href: "https://tiktok.com/@atl5d",
          description:
            "Follow us and use our ATL themed effects.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "Learn how ATL5D pricing works.",
          image: "/images/examples/pricing.jpg",
        },
        {
          title: "About",
          href: "/about",
          description: "Learn the ATL5D backstory.",
          image: "/images/examples/about.jpg",
        },
        {
          title: "Blog",
          href: "/blog",
          description:
            "Read the ATL5D blog to stay tapped in.",
          image: "/images/examples/newsletter.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "ATLverse",
      items: [
        {
          title: "PPV ATL5D Discord",
          href: "https://discord.com/servers/atl5d-1244450286337003520",
          description: "You have to pay to see the Reel ATLanta.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "TON TV",
          href: "https://tontv.atl5d.com",
          description:
            "Create short NFTV show episodes on Telegram",
          image: "/images/examples/documentation.jpg",
          launched: true,
        },
        {
          title: "FREE ATL5D Discord",
          href: "https://discord.gg/QQeFcekQyx",
          description:
            "The free tier is the parking lot of ATL5D Discord.",
          image: "/images/examples/animes.jpg",
        },
        {
          title: "Casino",
          href: "https://casino.atl5d.com",
          description:
            "Welcome to ATL5D City Casino on Solana Blockchain.",
            launched: true,
          image: "/images/examples/blog-db.jpg",
        },
        {
          title: "BET",
          href: "https://bet.atl5d.com",
          description: "Watch the Atlanta BET (Bitcoin Entertainment TV) network subscribers own.",
          image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "ATLverse",
          href: "https://www.spatial.io/s/ATLverse-662eb8858ef79a2eef2b8193?share=9164371680450447654",
          description: "Find your tribe in the ATLverse metaverse.",
          image: "/images/examples/auth.jpg",
        },
      ],
    },
  ],
  links: [
    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
