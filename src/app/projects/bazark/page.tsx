import type { Metadata } from "next";
import ProjectPage from "@/components/project-page";

export const metadata: Metadata = {
  title: "Bazark — Arabic-First Multi-Vendor Marketplace | Parit Bhardwaj",
  description:
    "A multi-vendor marketplace built RTL-first for Saudi Arabia: listings, live auctions, escrow-backed checkout, shipping and a role-based back office — Next.js and Express on MongoDB, Redis and Elasticsearch, running on Azure.",
};

export default function Bazark() {
  return (
    <ProjectPage
      label="Product — Albearoti Solutions"
      title="Bazark"
      blurb="An Arabic-first multi-vendor marketplace for Saudi Arabia — listings, live auctions, escrow-backed checkout and shipping, with a full role-based back office behind it."
      hero="/project-bazark.png"
      stack={[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux Toolkit",
        "next-intl",
        "Node.js",
        "Express",
        "MongoDB",
        "Redis",
        "BullMQ",
        "Elasticsearch",
        "Socket.IO",
        "Tamara",
        "PayTabs",
        "Azure OpenAI",
        "Azure Blob Storage",
        "Azure Key Vault",
        "Azure DevOps",
        "Sentry",
        "PostHog",
        "React Native",
      ]}
      architecture="Four surfaces over one Express API: an Arabic-first Next.js storefront, a seller dashboard, an internal admin console, and a React Native app. MongoDB holds the domain, Elasticsearch powers listing search and facets, and Redis with BullMQ runs the auction timers, notification fan-out and background jobs. Media sits in Azure Blob Storage, secrets in Key Vault, and every service ships through Azure DevOps pipelines onto App Services behind Front Door."
      modules={[
        {
          title: "Create a Listing — Manually or with AI",
          desc: "A three-step seller wizard in Arabic and English. Type it yourself, or drop in photos and let Azure OpenAI vision write the title, description, category, brand and specs — in both languages, moderated before it posts.",
          shot: { src: "/bazark/card-create-listing.png", w: 1000, h: 750 },
        },
        {
          title: "Seamless Checkout — Tamara & PayTabs",
          desc: "One flow from cart to paid. Split the bill over Tamara instalments, or pay by card through PayTabs — mada, Visa, Mastercard and Apple Pay, with tokenised saved cards. Funds hold in escrow until the buyer has the goods.",
          shot: { src: "/bazark/card-checkout.png", w: 1000, h: 750 },
        },
        {
          title: "Admin & Support — Dashboard with RBAC",
          desc: "Every admin action is gated by a role. 24 modules and 102 granular permissions compose into custom roles, assigned per employee — with departments, blocking, password resets and a full activity log behind them.",
          shot: { src: "/bazark/card-rbac.png", w: 1000, h: 750 },
        },
        {
          title: "One Platform — Everything Shipped",
          desc: "Sellers list by hand or by AI, buyers bid or buy outright, money sits in escrow until delivery, and a role-gated admin runs the whole thing in two languages — web, seller dashboard, admin console and a React Native app.",
          shot: { src: "/bazark/card-platform.png", w: 1000, h: 750 },
        },
      ]}
    />
  );
}
