import { PlaceholderPage } from "@/components/placeholder-page";

export const metadata = {
  title: "Contact · Soul Beauty Healing Center",
  description: "Visit Soul Beauty Healing Center in Thornhill, Ontario.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      active="/contact"
      kicker="We'd love to hear from you"
      title="Get in touch with Soul Beauty."
      description="This page is waiting on its design and copy. Contact details and the clinic map are currently shown on the booking page."
    />
  );
}
