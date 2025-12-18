"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

const icons = {
  check: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  ),
  send: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  ),
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  spinner: (
    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  ),
};

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    adresse: "",
    prestation: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const payload = {
      nom: formData.nom,
      telephone: formData.telephone,
      email: formData.email,
      adresse: formData.adresse,
      prestation: formData.prestation,
      message: formData.message,
      source: `${siteConfig.domain}-contact-form`,
      formulaire: `Demande de devis gratuit ${siteConfig.city}`,
      brand: siteConfig.fullName,
      city: siteConfig.city,
      sitePhone: siteConfig.phone,
      siteEmail: siteConfig.email,
      submittedAt: new Date().toISOString(),
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
      userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
    };

    try {
      const response = await fetch("https://lioai.app.n8n.cloud/webhook/drm-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          nom: "",
          telephone: "",
          email: "",
          adresse: "",
          prestation: "",
          message: "",
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
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card-hover border border-gray-100">
        <div className="text-center py-8">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-metal-800 mb-3">Demande envoyée !</h3>
          <p className="text-gray-600 mb-6">
            Merci pour votre demande. Notre équipe vous recontactera dans les plus brefs délais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={siteConfig.phoneLink}
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Appeler maintenant
            </a>
            <button 
              onClick={() => setSubmitStatus("idle")}
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 hover:border-primary-500 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Nouvelle demande
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-card-hover border border-gray-100 sticky top-24">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
          {icons.send}
        </div>
        <div>
          <h2 className="text-2xl font-bold text-metal-800">Demande de Devis</h2>
          <p className="text-gray-500 text-sm">Réponse garantie sous 24h</p>
        </div>
      </div>

      {submitStatus === "error" && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
          <p className="text-red-700 text-sm font-medium">
            Une erreur est survenue. Veuillez réessayer ou nous appeler directement.
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Nom */}
        <div>
          <label htmlFor="nom" className="block text-sm font-semibold text-gray-700 mb-2">
            Nom complet *
          </label>
          <input 
            type="text" 
            id="nom" 
            name="nom" 
            required 
            value={formData.nom}
            onChange={handleChange}
            placeholder="Votre nom et prénom"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Téléphone */}
        <div>
          <label htmlFor="telephone" className="block text-sm font-semibold text-gray-700 mb-2">
            Téléphone *
          </label>
          <input 
            type="tel" 
            id="telephone" 
            name="telephone" 
            required 
            value={formData.telephone}
            onChange={handleChange}
            placeholder="06 XX XX XX XX"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            placeholder="votre@email.com"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Adresse */}
        <div>
          <label htmlFor="adresse" className="block text-sm font-semibold text-gray-700 mb-2">
            Adresse
          </label>
          <input 
            type="text" 
            id="adresse" 
            name="adresse" 
            value={formData.adresse}
            onChange={handleChange}
            placeholder="Votre adresse (rue, ville, code postal)"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400"
          />
        </div>

        {/* Type d'intervention */}
        <div>
          <label htmlFor="prestation" className="block text-sm font-semibold text-gray-700 mb-2">
            Type d&apos;intervention
          </label>
          <select 
            id="prestation" 
            name="prestation" 
            value={formData.prestation}
            onChange={handleChange}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 bg-white appearance-none cursor-pointer"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%239ca3af'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'right 1rem center',
              backgroundSize: '1.5em 1.5em',
              paddingRight: '3rem'
            }}
          >
            <option value="">Sélectionnez un service...</option>
            <option value="urgence">🔧 Dépannage urgence</option>
            <option value="fabrication">🏭 Fabrication sur-mesure</option>
            <option value="motorisation">⚡ Motorisation</option>
            <option value="entretien">🛠️ Entretien / Maintenance</option>
            <option value="autre">📋 Autre demande</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
            Décrivez votre besoin
          </label>
          <textarea 
            id="message" 
            name="message" 
            rows={4} 
            value={formData.message}
            onChange={handleChange}
            placeholder="Décrivez votre projet ou problème (dimensions, type de rideau, urgence...)"
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-4 focus:ring-primary-100 transition-all outline-none text-gray-800 placeholder:text-gray-400 resize-none"
          />
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
              Envoyer ma demande
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </>
          )}
        </button>

        {/* Urgence notice */}
        <div className="flex items-center gap-3 p-4 bg-secondary-50 rounded-xl border border-secondary-200">
          <div className="w-10 h-10 rounded-full bg-secondary-500 flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-secondary-700">Urgence ?</p>
            <p className="text-sm text-gray-600">
              Appelez directement le{" "}
              <a href={siteConfig.phoneLink} className="font-bold text-secondary-600 hover:underline">
                {siteConfig.phone}
              </a>
            </p>
          </div>
        </div>

        {/* Trust signals */}
        <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {icons.check}
            <span>Devis gratuit</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            {icons.shield}
            <span>Sans engagement</span>
          </div>
        </div>
      </form>
    </div>
  );
}

