import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Landing",
          href: "/landing",
          description: "A landing page template with differents sections.",
          image: "/images/examples/landing.jpg",
        },
        {
          title: "Challenge",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/challenge.jpg",
        },
        {
          title: "Waitlist",
          href: "/waitlist",
          description:
            "A waitlist form using Astro DB, React Hook Form & Sonner. Static page.",
          image: "/images/examples/waitlist.jpg",
          forceReload: true,
        },
        {
          title: "Pricing",
          href: "/pricing",
          description: "Pricing cards, FAQs and more content with price.",
          image: "/images/examples/pricing.jpg",
        },
        {
          title: "About",
          href: "/about",
          description: "A simple page with a masonry gallery and little text.",
          image: "/images/examples/about.jpg",
        },
        {
          title: "Newsletter",
          href: "/newsletter",
          description:
            "A newsletter form using Astro DB & Simple Stack Form. Counter display!",
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
          title: "Blog",
          href: "/blog",
          description: "Learn how ATL5D D-commerce works for you.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "Tik Tok",
          href: "https://tiktok.com/@atl5d",
          description:
            "Use our Atlanta-themed CapCut videos and TikTok effects, both of which can be customized with your branding.",
          image: "/images/examples/documentation.jpg",
        },
        {
          title: "FREE ATL5D Discord",
          href: "/animes",
          description:
            "The free tier is the parking lot of ATL5D Discord.",
          image: "/images/examples/animes.jpg",
          launched: true,
        },
        {
          title: "PPV ATL5D Discord",
          href: "/blog-db",
          description:
            "Subscribe to a tier of Club 112 to tap in to PPV channels, Midtown tier to set up shops and Gold Room to access the VIP.",
          // image: "/images/examples/blog-db.jpg",
          disabled: true,
        },
        {
          title: "Arvrtise Hair",
          href: "/products",
          disabled: true,
          description: "Arvrtise Hair in the Hairverse that stylist own as D-commerce.",
          // image: "/images/examples/ecommerce.jpg",
        },
        {
          title: "Arvrtise TV",
          href: "/auth",
          description: "Arvrtise TV is YouTube with no ads.",
          // image: "/images/examples/auth.jpg",
          disabled: true,
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
