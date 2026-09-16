import type { Metadata } from "next";
import ProjectPage from "@/components/project-page";

export const metadata: Metadata = {
  title: "NextView KAVACH — Dealer Licensing Portal | Parit Bhardwaj",
  description:
    "Freelance case study: a dealer portal for license activation, renewals and expiry tracking at scale — activations, expiry alerts, license keys, dealer management and support. Built with React, Node.js, Express and MongoDB.",
};

const SHOT = { w: 1200, h: 750 };

export default function NextViewKavach() {
  return (
    <ProjectPage
      label="Freelance Project"
      title="NextView KAVACH"
      blurb="Dealer portal for license activation, renewals and expiry tracking at scale — built for NextView's distribution network."
      hero="/project-nextview-kavach.png"
      video
      stack={[
        "React",
        "Vite",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "JWT",
        "Joi",
        "Cloudinary",
        "Resend",
      ]}
      disclaimer="This project was built for a client company under a freelance engagement. Screenshots and details are shared with permission for portfolio purposes. Proprietary business logic and sensitive data have been omitted."
      modules={[
        {
          title: "Activations",
          desc: "Dealers initiate and track license activations across devices. Supports bulk activation workflows with real-time status updates.",
          shot: { src: "/nextview-kavach/01-activations.png", ...SHOT },
        },
        {
          title: "Expiration Tracking",
          desc: "Proactive expiry monitoring with tiered alerts — dealers see which licenses are expiring this week, this month, or overdue.",
          shot: { src: "/nextview-kavach/02-expiration.png", ...SHOT },
        },
        {
          title: "Birthday Reminders",
          desc: "Automated birthday notifications for end customers, helping dealers stay connected and drive renewal conversations.",
          shot: { src: "/nextview-kavach/03-birthdays.png", ...SHOT },
        },
        {
          title: "License Keys",
          desc: "Full lifecycle management of license keys — generate, assign, revoke, and audit keys tied to each dealer account.",
          shot: { src: "/nextview-kavach/04-keys.png", ...SHOT },
        },
        {
          title: "Dealer Management",
          desc: "Admin view for onboarding and managing dealer accounts, quotas, and activity — with role-based access control.",
          shot: { src: "/nextview-kavach/05-dealers.png", ...SHOT },
        },
        {
          title: "Support",
          desc: "In-portal support ticketing so dealers can raise issues without leaving the platform, with admin triage and status tracking.",
          shot: { src: "/nextview-kavach/06-support.png", ...SHOT },
        },
      ]}
    />
  );
}
