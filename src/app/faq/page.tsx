import type { Metadata } from "next";
import { FaqContent } from "./content";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently asked questions about ordering, shipping, materials, and custom cosplay commissions.",
};

export default function FaqPage() {
  return <FaqContent />;
}
