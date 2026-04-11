import type { Metadata } from "next";
import { ContactContent } from "./content";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DesignedBy Props & Cosplay Studio. We're happy to help with any questions.",
};

export default function ContactPage() {
  return <ContactContent />;
}
