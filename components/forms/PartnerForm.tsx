"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const icons = {
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  spinner: (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  ),
};

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postalCode: "",
    siret: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = {
      title: "demande de partenariat",
      name: formData.name,
      nom: formData.name,
      email: formData.email,
      phone: formData.phone,
      postalCode: formData.postalCode,
      siret: formData.siret,
      brand: "DRM",
      siteSlug: "depannage-rideau-metallique-montpellier",
      site: "depannage-rideau-metallique-montpellier",
    };

    try {
      const response = await fetch("https://lioai.app.n8n.cloud/webhook/preinscription-partenaire", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          postalCode: "",
          siret: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === "success") {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border border-gray-100">
        <div className="text-center py-8">
          <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-metal-800 mb-3">Demande envoyée !</h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Merci pour votre intérêt ! Notre équipe va étudier votre candidature et vous recontactera sous 48h.
          </p>
          <button 
            onClick={() => setSubmitStatus("idle")}
            className="inline-flex items-center justify-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
          >
            Nouvelle demande
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-card-hover border border-gray-100">
      <div className="text-center mb-8">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-metal-800 mb-2">Formulaire de candidature</h2>
        <p className="text-gray-500">Remplissez le formulaire ci-dessous pour rejoindre notre réseau</p>
      </div>

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-700 text-sm font-medium">
            Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nom Prénom */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
            Nom et Prénom *
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required 
            value={formData.name}
            onChange={handleChange}
            placeholder="Jean Dupont"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email professionnel *
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required 
            value={formData.email}
            onChange={handleChange}
            placeholder="contact@votre-entreprise.fr"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Téléphone *
          </label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            required 
            value={formData.phone}
            onChange={handleChange}
            placeholder="06 XX XX XX XX"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Code Postal */}
        <div>
          <label htmlFor="postalCode" className="block text-sm font-semibold text-gray-700 mb-2">
            Code postal (zone d&apos;intervention) *
          </label>
          <input 
            type="text" 
            id="postalCode" 
            name="postalCode" 
            required 
            value={formData.postalCode}
            onChange={handleChange}
            placeholder="34000"
            pattern="[0-9]{5}"
            maxLength={5}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* SIRET */}
        <div>
          <label htmlFor="siret" className="block text-sm font-semibold text-gray-700 mb-2">
            Numéro SIRET *
          </label>
          <input 
            type="text" 
            id="siret" 
            name="siret" 
            required 
            value={formData.siret}
            onChange={handleChange}
            placeholder="XXX XXX XXX XXXXX"
            pattern="[0-9]{14}"
            maxLength={14}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
          <p className="text-xs text-gray-500 mt-1">14 chiffres sans espaces</p>
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              {icons.spinner}
              Envoi en cours...
            </>
          ) : (
            <>
              Envoyer ma candidature
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {icons.check}
            <span>Candidature gratuite</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {icons.check}
            <span>Réponse sous 48h</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {icons.check}
            <span>Sans engagement</span>
          </div>
        </div>
      </form>
    </div>
  );
}

