import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales | DRM Montpellier",
  description: "Mentions légales du site DRM Montpellier - Dépannage Rideau Métallique. Informations légales, conditions d'utilisation, gestion des données personnelles et cookies.",
};

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

