import type { Metadata } from "next";
import { CommissionsContent } from "./content";

export const metadata: Metadata = {
  title: "Commissions",
  description: "Get a custom-made cosplay costume or prop. Contact our professional team for your unique cosplay project.",
};

export default function CommissionsPage() {
  return <CommissionsContent />;
}
