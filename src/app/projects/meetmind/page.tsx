import type { Metadata } from "next";
import ProjectPage from "@/components/project-page";

export const metadata: Metadata = {
  title: "MeetMind — AI Meeting Assistant | Parit Bhardwaj",
  description:
    "A note-taker bot that joins your calls, transcribes them, and turns the transcript into summaries, action items and a searchable RAG chat over every meeting you have ever had.",
};

export default function MeetMind() {
  return (
    <ProjectPage
      label="Personal Product"
      title="MeetMind"
      blurb="An AI meeting assistant that sends a bot to your calls, transcribes them, and turns the transcript into summaries, action items and a searchable chat over everything that was ever said."
      hero="/project-meetmind.png"
      stack={[
        "Turborepo",
        "Next.js 15",
        "React 19",
        "TypeScript",
        "Tailwind CSS v4",
        "shadcn/ui",
        "Framer Motion",
        "Express 5",
        "Prisma",
        "PostgreSQL",
        "ChromaDB",
        "Hugging Face",
        "Groq",
        "Slack API",
        "Stripe",
        "AWS S3",
      ]}
      architecture="A Turborepo monorepo: a Next.js 15 dashboard, a separate Express 5 API that owns the bot, transcription and RAG pipeline, and a shared Prisma package so both sides read the same PostgreSQL schema. Transcripts are chunked, embedded through Hugging Face and indexed in ChromaDB; Groq serves the chat and summarisation passes. Recordings live in S3-compatible storage, and webhooks drive both the note-taker lifecycle and Stripe billing."
      modules={[
        {
          title: "Meetings",
          desc: "A note-taker bot joins the call on schedule, records it, and returns a diarised transcript. Every meeting lands in one library with playback, full transcript and an AI summary.",
        },
        {
          title: "Ask",
          desc: "RAG chat over your entire meeting history. Transcripts are chunked, embedded with a sentence-transformers model and stored in ChromaDB, so answers cite the meetings they came from.",
        },
        {
          title: "Semantic Search",
          desc: "Search by meaning rather than keyword — find the call where pricing was renegotiated without remembering who said it or when.",
        },
        {
          title: "Action Items",
          desc: "The LLM pass pulls owners, tasks and due dates out of the transcript, then pushes them straight into Jira, Trello or Asana through per-user OAuth connections.",
        },
        {
          title: "Calendar & Scheduling",
          desc: "Connected calendars drive the bot. A scheduler dispatches it ahead of each event's start time, respecting the user's plan allowance and per-meeting opt-outs.",
        },
        {
          title: "Integrations & Billing",
          desc: "Slack app for posting recaps into channels, OAuth token refresh for every issue tracker, and Stripe-backed plans with usage metering on meetings and chat.",
        },
      ]}
    />
  );
}
