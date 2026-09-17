import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "About · Soul Beauty Healing Center",
  description: "Meet the team behind Soul Beauty Healing Center.",
};

export default function AboutPage() {
  return (
    <PlaceholderPage
      active="/about"
      kicker="Care • Restore • Belong"
      title="More than a treatment — a place you belong."
      description="This page is waiting on its design and copy. Our practitioner profiles, clinic story and credentials will live here."
    />
  );
}
