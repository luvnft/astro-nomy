import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "ATL5D Telegram",
          href: "https://t.me/atl5d",
          description: "PPV ATL5D Discord",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "ATL5D Discord",
          href: "https://discord.gg/QQeFcekQyx",
          description: "Join the FREE ATL5D Discord.",
          image: "/images/examples/challenge.jpg",
        },
        {
          title: "ATL5D TikTok",
          href: "https://tiktok.com/@atl5d",
          description: "Check the latest challenges",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Advertising",
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
          title: "ATLverse",
          href: "https://www.spatial.io/s/ATLverse-662eb8858ef79a2eef2b8193?share=9164371680450447654 https://discord.com/servers/atl5d-1244450286337003520",
          description: "Find your tribe in the ATLverse metaverse.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Buy ATL",
          href: "https://t.me/blum/app?startapp=memepadjetton_ATL_llnJs-ref_9K5kvzkHYM",
          description: "HODL the ATL memecoin and create content around it.",
          image: "/images/examples/documentation.jpg",
          launched: true,
        },
        {
          title: "Buy ADTC",
          href: "https://adtc.atl5d.com",
          description:
            "ATL5D Digital trading content",
            launched: true,
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
          title: "Studio",
          href: "https://studio.atl5d.com",
          description: "Record and sell music for crypto with no middleman. Promote your songs with ATL memecoins.",
          image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Mixtape",
          href: "https://mixtape.atl5d.com",
          description: "ATL5D Mixtape streaming platform",
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
