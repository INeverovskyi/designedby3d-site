import type { Metadata } from "next";
import { AboutContent } from "./content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about DesignedBy Props & Cosplay Studio. 6+ years of experience creating high-quality cosplay props and costumes.",
};

export default function AboutPage() {
  return <AboutContent />;
}
