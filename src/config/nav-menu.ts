import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Home",
          href: "/landing",
          description: "The Arvrtise ATL5D home page.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Challenge",
          href: "/releases",
          description: "Check daily challenges and quests.",
          image: "/images/examples/challenge.jpg",
        },
        {
          title: "Waitlist",
          href: "/waitlist",
          description:
            "The officIal ATL5D wait list form coming soon.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "Learn about how Arvrtise ATL5D pricing works.",
          image: "/images/examples/pricing.jpg",
        },
        {
          title: "About",
          href: "/about",
          description: "Learn about Arvrtise ATL5D.",
          image: "/images/examples/about.jpg",
        },
        {
          title: "Blog",
          href: "/blog",
          description:
            "Read the Arvrtise ATL5D blog to stay tapped into the market owned by creators.",
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
          title: "Tik Tok",
          href: "https://tiktok.com/@atl5d",
          description:
            "Use our Atlanta-themed CapCut videos and TikTok effects.",
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
          title: "Arvrtise Hair",
          href: "https://hair.arvrtise.com",
          description: "Arvrtise Hair in the Hairverse that stylist own as D-commerce.",
          image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "ATLverse",
          href: "https://www.spatial.io/s/ATLverse-662eb8858ef79a2eef2b8193?share=9164371680450447654",
          description: "Join the ATLverse metaverse.",
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
