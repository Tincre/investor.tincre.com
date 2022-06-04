import {
  UserGroupIcon,
  EmojiHappyIcon,
  TrendingUpIcon,
  CurrencyDollarIcon,
  UsersIcon,
  CursorClickIcon,
  CalculatorIcon,
  LightningBoltIcon,
  VolumeUpIcon,
  MusicNoteIcon,
  CreditCardIcon,
  SpeakerphoneIcon,
  InformationCircleIcon,
  HomeIcon,
  ClockIcon,
  AcademicCapIcon,
} from "@heroicons/react/outline";
const statsIconClassName =
  "h-16 w-16 text-center mx-auto mb-4 text-indigo-600 group-hover:text-indigo-500";

const factSnippetsIconClassName =
  "h-16 w-16 text-center mx-auto mb-4 text-indigo-600 group-hover:text-indigo-300 group-hover:ease-in ease-out duration-300";
const fAQCardIconClassName =
  "h-16 w-16 text-center mx-auto mb-6 text-indigo-600 ";

export const hostname = "investor.tincre.com;";
export const entityTitle = "Tincre";
export const entityUrl = `https://${hostname}`;
export const title = `${entityTitle} Investor Relations`;
export const description =
  "We are raising capital. Rather than a boring pitch deck, we built automated and scalable software, turning fundraising into a profit center.";
export const author = `${entityTitle}, ${entityUrl}`;
export const navigationLinks = [
  `Investing in ${entityTitle}`,
  "Our firm",
  "The Team",
];
export const navigationHrefs = [
  "#why-invest",
  "https://tincre.com",
  "https://tincre.com/about",
];
export const cta = "Invest";
export const logoSrc =
  "https://res.cloudinary.com/tincre/image/upload/v1638892843/tincre.com/tincre-brand-indigo-800_uatfej.svg";
export const newsletterContent = {
  newsletterTitle: "Subscribe",
  newsletterSubtitle: "Stay informed with updates from our blog ",
  newsletterHref: "https://slightlysharpe.com",
  newsletterName: "Slightly Sharpe",
};
export const stats1Data = [
  {
    icon: "",
    numberStat: "45,000,000",
    text: "People reached",
  },
  {
    icon: "",
    numberStat: "600",
    text: "Happy customers",
  },
  {
    icon: "",
    numberStat: "194%",
    text: "Growth Q1 '22 vs. Q4 '21",
  },
  {
    icon: "",
    numberStat: "$456,000",
    text: "ARR May '22",
  },
];
export const whyInvestContent = {
  subTitle: "Scaling our formula",
  title: "We're seeking investment to release more kick-ass brands",
  description:
    "Our autonomous ad-fintech solutions supercharge businesses and creators by quantifying and monetizing interactions across the web. We have a formula for success that works and are looking to introduce five to eight additional brands this year.",
  cta: `Learn about investing in ${entityTitle}`,
  whyInvestCardData: [
    "Scale our efficient user acquisition cost of $5-7 across other industries.",
    "Solid business fundamentals guided by founders' zero bullshit approach.",
    "Take part in something vastly more exciting than burning your cash.",
  ],
};
export const factCardsContent = [
  {
    title: "We make customers happy.",
    description: "28% of MAU use our solutions multiple times a month.",
  },
  {
    title: "We convert customers.",
    description: "Our CAC is top-notch. We spend $5-7 per new  user.",
  },
  {
    title: "Our users spend money.",
    description: "At $320, our monthly ARPU rivals major B2B SaaS platforms.",
  },
  {
    title: "We are building right.",
    description:
      "Our usage grew by 194% from Q4 '21 to Q1 '22 without upping marketing.",
  },
  {
    title: "We keep costs low.",
    description:
      "Our net profit margin is north of 10% and our tech is scalable.",
  },
  {
    title: "Primed for growth.",
    description:
      "We have five additional brands developed for release in 2022.",
  },
];
export const factSnippetsCardContent = [
  {
    description: "Programmatic ads through the biggest providers.",
    imageSrc: "/images/indigo-500-avatar.png",
    title: "70M",
    subTitle: "Impressions delivered",
  },
  {
    description: "Click-through rates 2X the U.S. average.",
    imageSrc: "/images/indigo-500-avatar.png",
    title: "2%",
    subTitle: "Avg. click-through rate",
  },
  {
    description: "Real clicks at a third of the cost.",
    imageSrc: "/images/indigo-500-avatar.png",
    title: "$0.09",
    subTitle: "Avg. cost-per-click",
  },
  {
    description: "Simplest and most powerful solution out there.",
    imageSrc: "/images/indigo-500-avatar.png",
    title: "100",
    subTitle: "Ads with 1 button press",
  },
  {
    description: "We  make noise across the music industry.",
    imageSrc: "/images/indigo-500-avatar.png",
    title: "25M+",
    subTitle: "Listeners saw our ads in '21",
  },
  {
    description: "Our music brand is used by all major players.",
    imageSrc: "/images/indigo-500-avatar.png",
    title: "79%",
    subTitle: "M/M growth",
  },
];
export const teamCardContent = [
  {
    name: "Philip Muellerschoen",
    position: "CEO, Co-Founder",
    description:
      "Phil guides the firm in all aspects both internally and externally, operating and growing its brands.",
    imageSrc: "/team/phil.webp",
    imageAlt: "Philip Muellerschoen",
  },
  {
    name: "Jason R. Stevens, CFA",
    position: "CTO+CFO, Co-Founder",
    description:
      "Anti-script kiddie crushing the keys to build an entirely new world in which he owns all human-associated items.",
    imageSrc: "/team/jason.webp",
    imageAlt: "Jason R. Stevens, CFA",
  },
  {
    name: "Dan Fratoni",
    position: "Partner, External Brand Relationships",
    description: "Drives entertainment industry representation for the firm.",
    imageSrc: "/team/dan.webp",
    imageAlt: "Dan Fratoni",
  },
];
export const fAQCardContent = [
  {
    title: "How do we make money?",
    listItems: [
      { text: "Our ad-fintech brands", href: entityUrl },
      { text: "Our developer platform", href: entityUrl },
      { text: "Our open-source software", href: entityUrl },
      { text: "A link to our financials", href: entityUrl },
    ],
  },
  {
    title: "Why are we raising?",
    listItems: [
      { text: "To release more brands", href: entityUrl },
      { text: "To market the new stuff", href: entityUrl },
      { text: "To dogfood a new product", href: entityUrl },
      { text: "To find better people", href: entityUrl },
    ],
  },
  {
    title: "What are the details?",
    listItems: [
      { text: "Pre-seed up to $1.25M", href: entityUrl },
      { text: "SAFE note, min $50K", href: entityUrl },
      { text: "Accredited investors", href: entityUrl },
      { text: "No crypto bros here", href: entityUrl },
    ],
  },
  {
    title: "Who else is involved?",
    listItems: [
      { text: "Our amazing customers", href: entityUrl },
      {
        text: "Our killer core team",
        href: entityUrl,
      },
      {
        text: "Our select investors",
        href: entityUrl,
      },
      { text: "Our high-octane advisors", href: entityUrl },
    ],
  },
  {
    title: "Why participate now?",
    listItems: [
      { text: "You understand software", href: entityUrl },
      { text: "You like to get in early", href: entityUrl },
      { text: "Complex problems excite you", href: entityUrl },
      { text: "Products and processes matter", href: entityUrl },
    ],
  },
  {
    title: "What's our goal?",
    listItems: [
      {
        text: "Solve the web's last mile",
        href: entityUrl,
      },
      {
        text: "Our brands become sellable",
        href: entityUrl,
      },
      {
        text: "Our core tech lives on",
        href: entityUrl,
      },
      { text: "Piña coladas for everyone", href: entityUrl },
    ],
  },
];
export const footerItems = [
  {
    title: "Company",
    footerColumnItems: [
      {
        text: `About ${entityTitle}`,
        href: entityUrl,
      },
      {
        text: `Team`,
        href: "https://tincre.com/about",
      },
      {
        text: "Brands",
        href: "https://tincre.com/#our-brands",
      },
      {
        text: "Blog",
        href: "https://slightlysharpe.com",
      },
    ],
  },
  {
    title: "Legal",
    footerColumnItems: [
      {
        text: `About ${entityTitle}`,
        href: entityUrl,
      },
      {
        text: `Team`,
        href: "https://tincre.com/about",
      },
      {
        text: "Brands",
        href: "https://tincre.com/#our-brands",
      },
    ],
  },
  {
    title: "Brands",
    footerColumnItems: [
      {
        text: `b00st.com`,
        href: "https://b00st.com",
      },
      {
        text: `Slightly Sharpe`,
        href: "https://slightlysharpe.com",
      },
      {
        text: "Tear Sheet Ads (coming)",
        href: "https://tearsheetads.com",
      },
      {
        text: "Bit Modulus",
        href: "https://bitmodulus.com",
      },
    ],
  },
  {
    title: "Development",
    footerColumnItems: [
      {
        text: `Github`,
        href: "https://github.com/tincre",
      },
      {
        text: `Phund OSS`,
        href: "https://github.com/tincre/phund",
      },
      {
        text: `Pycmc`,
        href: "https://github.com/musicfox/pycmc",
      },
      {
        text: `And more!`,
        href: "https://github.com/tincre",
      },
    ],
  },
];
export const socials = [
  {
    href: "https://twitter.com/tincre",
    displayText: "Twitter",
  },
  {
    href: "https://linkedin.com/company/tincre",
    displayText: "LinkedIn",
  },
  {
    href: "https://instagram.com/webslastmile",
    displayText: "Instagram",
  },
];
export const factSnippetsContent = {
  title:
    "Learn about a tech startup whose roadmap includes developed products, not just bold ideas",
  subTitle: "Growing Growth",
  description: `We're so performant that diversification is just an added cost to you and your portfolio. Displace underperforming assets by writing them down, collecting your tax loss, and reinvesting those proceeds into ${entityTitle}.`,
  cta1: "Invest now",
  cta1Href: "#invest",
};
export const teamContent = {
  title: "Superior people build superior businesses",
  subTitle: "Better People",
  description:
    "Change the pace and stop wasting your resources. Invest in the actual top of the class, a management team with a proven track record and an eye on the bottom line.",
};
export const infoBlockContent = {
  title: "One investment to rule them all.",
  description:
    "Don't miss this opportunity to clean up your horrific past performance and log a win in your P&L. Plus, all your friends will just love doing the same. A win win, by any measure.",
  cta: `Do the right thing: invest in ${entityTitle}`,
  ctaHref: "#invest",
};
export const safeTermsContent = {
  title: "Offering Details",
  subTitle: "Y-Combinator SAFE",
  description:
    "We use the standard Y-Combinator SAFE note and offer all three versions for your convenience. The below are priced to our optimality but present to add choice for your investment and portfolio requirements.",
  safeNoteContent: [
    {
      safeTitle: "Cap",
      href: "",
      description: '"Standard", valuation cap only.',
    },
    {
      safeTitle: "Discount",
      href: "",
      description: "Discount applies at conversion during the Liquidity Event.",
    },
    {
      safeTitle: "MFN",
      href: "",
      description: "No cap and no discount with MFN provision.",
    },
  ],
  cta: "Learn more about our business.",
};
