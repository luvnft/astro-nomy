import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "PPV ATL5D Discord",
          href: "https://discord.com/servers/atl5d-1244450286337003520",
          description: "PPV ATL5D Discord",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "FREE ATL5D Discord",
          href: "https://discord.gg/QQeFcekQyx",
          description: "Join the FREE ATL5D Discord.",
          image: "/images/examples/challenge.jpg",
        },
        {
          title: "Challenge",
          href: "/releases",
          description: "Check the latest challenges",
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
          title: "Solutions",
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
          title: "ATL5D.shop",
          href: "https://discord.com/servers/atl5d-1244450286337003520",
          description: "You have to pay to see the Reel ATLanta.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "LIVE.ATL5D.shop",
          href: "https://live.atl5d.shop",
          description: "ATL5D.shop live",
          image: "/images/examples/documentation.jpg",
          launched: true,
        },
        {
          title: "Park",
          href: "https://park.atl5d.com",
          description:
            "The audio clubhouse in the park.",
          image: "/images/examples/animes.jpg",
        },
        {
          title: "Podcast",
          href: "https://podcast.atl5d.com",
          description: "Join the ATL5D podcast platform.",
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
