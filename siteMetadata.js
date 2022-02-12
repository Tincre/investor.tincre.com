import { author, description, entityUrl, logoSrc, title } from "./cms.data";

// https://github.com/garmeeh/next-seo#default-seo-configuration
export const defaultSeoContent = {
  title: title,
  description: description,
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: entityUrl,
    site_name: author,
    images: [
      {
        url: "/images/og-images.jpg",
        width: 800,
        height: 600,
        alt: author,
        type: "image/jpeg",
      },
      {
        url: "/images/og-images.jpg",
        width: 900,
        height: 800,
        alt: author,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@tincre",
    site: "@investor.tincre.com",
    cardType: "summary_large_image",
  },
};

export const routeSeoContent = {
  "/": {
    title: title,
    description: description,
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: entityUrl,
      site_name: author,
      images: [
        {
          url: "/images/og-images.png",
          width: 800,
          height: 600,
          alt: author,
          type: "image/jpeg",
        },
        {
          url: "/images/og-images.png",
          width: 900,
          height: 800,
          alt: author,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      handle: "@tincre",
      site: "@investor.tincre.com",
      cardType: "summary_large_image",
    },
  },
};
