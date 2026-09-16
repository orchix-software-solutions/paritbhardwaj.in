import type { Metadata } from "next";
import ProjectPage from "@/components/project-page";

export const metadata: Metadata = {
  title: "WareFlow — Multi-Warehouse Inventory Management | Parit Bhardwaj",
  description:
    "Inventory and purchasing for multi-warehouse operations: stock across locations, movements, BOM manufacturing, purchase orders and goods received — a Next.js dashboard on a Fastify + Bun API with Drizzle over PostgreSQL.",
};

export default function WareFlow() {
  return (
    <ProjectPage
      label="Freelance Project"
      title="WareFlow"
      blurb="Inventory management for operations running stock across several warehouses — products, raw materials, purchasing, manufacturing and movement history in one system."
      hero="/project-wareflow.png"
      stack={[
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "Bun",
        "Fastify",
        "Drizzle ORM",
        "PostgreSQL",
        "MinIO",
        "Evolution API",
        "WhatsApp",
        "Puppeteer",
        "Docker",
      ]}
      disclaimer="Built for a client under a freelance engagement. Screenshots are shared with permission for portfolio purposes; proprietary business logic and customer data have been omitted."
      architecture="A Bun-powered Turborepo: a Next.js dashboard talking to a Fastify API, with Drizzle owning the PostgreSQL schema in a shared package so types flow from table to form. Fastify plugins cover auth, rate limiting, uploads and an OpenAPI surface; object storage runs on MinIO, PDFs render through Puppeteer, and alerts go out over WhatsApp. The whole stack ships as Docker images."
      modules={[
        {
          title: "Settings & Integrations",
          desc: "One console for every system-wide switch — branding, notifications, ID formats and outbound channels. WhatsApp runs on a self-hosted Evolution API instance: pair by QR, then push purchase orders and quotations straight to suppliers.",
          shot: { src: "/wareflow/card-settings.png", w: 1000, h: 750 },
        },
        {
          title: "Inventory",
          desc: "Stock levels across every warehouse on one screen — on-hand versus reserved, reorder thresholds, and a movement ledger that explains how each number got there.",
        },
        {
          title: "Purchasing",
          desc: "Suppliers, purchase orders, goods received and returns as one connected flow — receiving a shipment updates stock and closes the order line in the same step.",
        },
        {
          title: "Manufacturing",
          desc: "Bills of material turn raw materials and consumables into finished goods, consuming component stock and producing output stock against the same ledger.",
        },
      ]}
    />
  );
}
