import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Confidentialité des Données Personnelles | DRM Montpellier",
  description: "Politique de confidentialité du site DRM Montpellier. Protection des données personnelles, gestion des cookies, droits RGPD et informations sur la collecte et l'utilisation de vos données.",
};

export default function ConfidentialiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

