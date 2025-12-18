import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique en Matière de Cookies | DRM Montpellier",
  description: "Politique d'utilisation des cookies du site DRM Montpellier. Informations sur les cookies techniques, statistiques et publicitaires, gestion de vos préférences et protection de vos données.",
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

