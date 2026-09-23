import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "@/components/landing/LandingPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anchor Name | Anchor, Emcee & Stage Host" },
      {
        name: "description",
        content: "Book Anchor Name for professional hosting at weddings, corporate events, cricket matches and poetry evenings across India.",
      },
      { property: "og:title", content: "Anchor Name | Anchor, Emcee & Stage Host" },
      {
        property: "og:description",
        content: "Energetic, elegant event hosting for weddings, corporate events, cricket commentary and poetry nights across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <LandingPage />;
}
