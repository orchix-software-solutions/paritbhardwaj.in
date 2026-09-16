import type { Metadata } from "next";
import ProjectPage from "@/components/project-page";

export const metadata: Metadata = {
  title: "Sherly Jewels — Jewellery ERP | Parit Bhardwaj",
  description:
    "A jewellery ERP that runs the whole floor: customer orders, CAD design approvals, stone and metal allocation, factory job cards, loyalty and employee management — Next.js on a Fastify API with MongoDB, S3 and Firebase.",
};

export default function SherlyJewels() {
  return (
    <ProjectPage
      label="Freelance Project"
      title="Sherly Jewels"
      blurb="A jewellery ERP that runs the whole floor — customer orders, CAD approvals, stone and metal allocation, factory job cards, loyalty and staff, in one system for shop and factory alike."
      hero="/project-sherly-jewels.png"
      stack={[
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Zustand",
        "Bun",
        "Fastify",
        "MongoDB",
        "Mongoose",
        "AWS S3",
        "Firebase",
        "WebSockets",
        "Docker",
      ]}
      disclaimer="Built for a client under a freelance engagement. Screenshots are shared with permission for portfolio purposes; proprietary business logic and customer data have been omitted."
      architecture="A Turborepo with a Next.js dashboard, a Fastify API and shared type and validation packages, so a Zod schema written once guards both the form and the endpoint. MongoDB holds orders, designs and allocations; CAD renders and media go to S3 through presigned uploads with Sharp handling derivatives; Firebase pushes notifications to the customer app, and Fastify WebSockets keep the floor views live."
      modules={[
        {
          title: "Dashboard",
          desc: "The floor at a glance — orders in flight, approvals waiting, allocation pressure and branch-level activity, so the day starts with what is actually blocked.",
          shot: { src: "/sherly-jewels/dashboard.png", w: 1933, h: 814 },
        },
        {
          title: "Orders",
          desc: "Customer orders carry the whole lifecycle: quotation, specification, CAD round, allocation, factory job and delivery — each stage with its own owner, status and audit trail.",
          shot: { src: "/sherly-jewels/orders.png", w: 1926, h: 816 },
        },
        {
          title: "CAD Approvals",
          desc: "Designers upload CAD renders against an order and the customer approves or requests changes in-app. Every revision is kept, so the approved design is never ambiguous.",
          shot: { src: "/sherly-jewels/cad.png", w: 1926, h: 817 },
        },
        {
          title: "Employees & Roles",
          desc: "Staff records tied to branches and departments, with granular role permissions deciding who can price an order, release stone, or close a factory job.",
          shot: { src: "/sherly-jewels/employees.png", w: 981, h: 1603 },
        },
        {
          title: "Access",
          desc: "Phone-based sign-in with OTP, scoped to a branch, backed by activity logs that record who changed what across orders and allocations.",
          shot: { src: "/sherly-jewels/login.png", w: 493, h: 791 },
        },
      ]}
    />
  );
}
