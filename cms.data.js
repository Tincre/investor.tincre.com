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
export const heroContent = {
  heading: "We're a different kind of online business.",
  subHeading:
    "We build and operate financial performant semi-autonomous brands built on our core ad-fintech pricing, placement, and allocation technology.",
  cta: "Learn about our raise",
  ctaHref: "#why-invest",
  imageSrc: logoSrc,
};
export const stats1Data = [
  {
    icon: <UserGroupIcon className={statsIconClassName} />,
    numberStat: "45,000,000",
    text: "People reached",
  },
  {
    icon: <EmojiHappyIcon className={statsIconClassName} />,
    numberStat: "600",
    text: "Happy customers",
  },
  {
    icon: <TrendingUpIcon className={statsIconClassName} />,
    numberStat: "194%",
    text: "Growth Q1 '22 vs. Q4 ???21",
  },
  {
    icon: <CurrencyDollarIcon className={statsIconClassName} />,
    numberStat: "$456,000",
    text: "ARR May '22",
  },
];
export const whyInvestContent = {
  subTitle: "Scaling our formula",
  title: "We're seeking investment to release more kick-ass brands",
  description: (
    <>
      <div className="mb-4">
        Our autonomous ad-fintech brands supercharge businesses and creators by
        quantifying and monetizing interactions across the web.
      </div>
      <div>
        {" "}
        We have a formula for success that{" "}
        <a className="hover:underline font-bold" href="#stats">
          <span className="italic">works</span>
        </a>
        .
      </div>
    </>
  ),
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
    description: "Our CAC is top-notch. We spend $5-7 per new user.",
  },
  {
    title: "Our users spend money.",
    description: "At $320, our monthly ARPU rivals major B2B SaaS platforms.",
  },
  {
    title: "We are building right.",
    description:
      "Our usage grew by 192% from Q4 to Q1 '22 without upping marketing.",
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
    title: "70M",
    subTitle: "Impressions delivered",
    icon: <UsersIcon className={factSnippetsIconClassName} />,
  },
  {
    description: "Click-through rates 2X the U.S. average.",
    title: "2%",
    subTitle: "Avg. click-through rate",
    icon: <CursorClickIcon className={factSnippetsIconClassName} />,
  },
  {
    description: "Real clicks at a third of the cost.",
    title: "$0.09",
    subTitle: "Avg. cost-per-click",
    icon: <CalculatorIcon className={factSnippetsIconClassName} />,
  },
  {
    description: "Simplest and most powerful solution out there.",
    title: "100",
    subTitle: "Ads with 1 button press",
    icon: <LightningBoltIcon className={factSnippetsIconClassName} />,
  },
  {
    description: "We make noise across the music industry.",
    title: "25M+",
    subTitle: "Listeners saw our ads in '21",
    icon: <VolumeUpIcon className={factSnippetsIconClassName} />,
  },
  {
    description: "Our music brand is used by all major players.",
    title: "79%",
    subTitle: "M/M growth",
    icon: <MusicNoteIcon className={factSnippetsIconClassName} />,
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
      "Building an entirely new automated world where high-frequency quant valuation improves decision making everywhere.",
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
      { text: "Our ad-fintech brands", href: "https://b00st.com" },
      { text: "Our developer platform", href: "https://bitmodulus.com" },
      { text: "Our open-source software", href: "https://github.com/tincre" },
    ],
    icon: <CreditCardIcon className={fAQCardIconClassName} />,
  },
  {
    title: "Why are we raising?",
    listItems: [
      { text: "To release more brands", href: "https://tincre.com" },
      { text: "To market the new stuff", href: "https://tearsheetads.com" },
      { text: "To dogfood a new product", href: "https://example.phund.xyz" },
      { text: "To hire the best people", href: "https://tincre.com/about" },
    ],
    icon: <SpeakerphoneIcon className={fAQCardIconClassName} />,
  },
  {
    title: "What are the details?",
    listItems: [
      { text: "Pre-seed up to $1.25M", href: "#safe-terms" },
      { text: "SAFE note, min $50K", href: "#safe-terms" },
      { text: "Accredited investors", href: "#safe-terms" },
      { text: "No crypto bros here", href: "#safe-terms" },
    ],
    icon: <InformationCircleIcon className={fAQCardIconClassName} />,
  },
  {
    title: "Our caravan includes",
    listItems: [
      { text: "Our amazing customers", href: "https://b00st.com" },
      {
        text: "Our killer core team",
        href: "#team",
      },
      {
        text: "Institutional investors",
        href: "https://tincre.com/about",
      },
      { text: "Our high-octane advisors", href: "https://tincre.com/about" },
    ],
    icon: <HomeIcon className={fAQCardIconClassName} />,
  },
  {
    title: "Why participate now?",
    listItems: [
      { text: "You understand software", href: "https://bitmodulus.com" },
      { text: "You like to get in early", href: "https://tincre.com/" },
      { text: "Complex problems excite you", href: "https://tincre.com" },
      {
        text: "Products and processes matter",
        href: "https://slightlysharpe.com/blog/adaptation-and-retrofitting",
      },
    ],
    icon: <ClockIcon className={fAQCardIconClassName} />,
  },
  {
    title: "What's our goal?",
    listItems: [
      {
        text: "Solve the web's last mile",
        href: "https://slightlysharpe.com/blog/the-webs-last-mile",
      },
      {
        text: "Build our brands as corporate assets",
        href: "https://slightlysharpe.com/blog/dogfooding-iteration",
      },
      {
        text: "Better online business for all",
        href: "https://slightlysharpe.com/blog/introducing-tincre",
      },
    ],
    icon: <AcademicCapIcon className={fAQCardIconClassName} />,
  },
];
export const footerItems = [
  {
    title: "Company",
    footerColumnItems: [
      {
        text: `About ${entityTitle}`,
        href: "https://tincre.com",
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
    title: "Our Story",
    footerColumnItems: [
      {
        text: `The Web's Last Mile`,
        href: "https://slightlysharpe.com/blog/the-webs-last-mile",
      },
      {
        text: `Dogfooding Iteration`,
        href: "https://slightlysharpe.com/blog/dogfooding-iteration",
      },
      {
        text: `Where We've Been`,
        href: "https://slightlysharpe.com/blog/adaptation-and-retrofitting",
      },
      {
        text: "Tincre - Introduction",
        href: "https://slightlysharpe.com/blog/introducing-tincre",
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
  description: `Displace underperforming assets by writing them down, collecting your tax loss, and reinvesting those proceeds into ${entityTitle}.`,
  cta1: "Invest now",
  cta1Href: "#safe-terms",
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
    "Don't miss this opportunity to clean up your horrific past performance and log a win. Plus, all your friends will just love doing the same. A win win, by any measure.",
  cta: `Invest in ${entityTitle} now`,
  ctaHref: "#safe-terms",
};
export const safeTermsContent = {
  title: "Offering Details",
  subTitle: "Y-Combinator SAFE",
  description:
    "We use the standard Y-Combinator SAFE note with a simple cap to keep you protected from dilution and us protected from legal complexity and expense.",
  safeNoteContent: [
    {
      safeTitle: "Cap",
      href: "",
      description: '"Standard", valuation cap only.',
    },
  ],
  cta: "Learn more about our business.",
};
