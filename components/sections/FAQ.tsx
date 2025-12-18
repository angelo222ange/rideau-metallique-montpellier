"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  variant?: "default" | "centered";
}

export function FAQ({ 
  title = "Questions Fréquentes", 
  subtitle,
  items,
  variant = "default"
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const defaultSubtitle = `Retrouvez les réponses aux questions les plus fréquentes sur nos services de rideau métallique à ${siteConfig.city}.`;

  if (variant === "centered") {
    return (
      <section className="section bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                FAQ
              </span>
              <h2 className="section-title">{title}</h2>
              <p className="section-subtitle mx-auto mt-4">{subtitle || defaultSubtitle}</p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {items.map((item, index) => (
                <div 
                  key={index} 
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    openIndex === index 
                      ? 'border-primary-200 bg-primary-50/50 shadow-card' 
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                  >
                    <span className={`font-semibold pr-4 transition-colors ${
                      openIndex === index ? 'text-primary-700' : 'text-metal-800'
                    }`}>
                      {item.question}
                    </span>
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index 
                        ? 'bg-primary-500 text-white rotate-180' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-6 pb-6">
                      <p 
                        className="text-gray-600 leading-relaxed" 
                        dangerouslySetInnerHTML={{ __html: item.answer }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-sand-100 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-dots-pattern opacity-50" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left Column - Header & Contact */}
          <div className="lg:col-span-2 lg:sticky lg:top-24">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-50 text-accent-700 text-sm font-semibold mb-4">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ
            </span>
            <h2 className="section-title">{title}</h2>
            <p className="section-subtitle mb-8">{subtitle || defaultSubtitle}</p>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-card border border-gray-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-metal-800 mb-1">Une autre question ?</h3>
                  <p className="text-gray-600 text-sm">
                    Notre équipe est disponible 24h/24 pour répondre à toutes vos questions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <a 
                  href={siteConfig.phoneLink} 
                  className="btn-phone w-full justify-center"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {siteConfig.phone}
                </a>
                <a 
                  href="/contact-rideau-metallique" 
                  className="btn-secondary w-full justify-center"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nous contacter
                </a>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Réponse rapide</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Devis gratuit</span>
              </div>
            </div>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="lg:col-span-3 space-y-4">
            {items.map((item, index) => (
              <div 
                key={index} 
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  openIndex === index 
                    ? 'border-primary-200 bg-white shadow-card' 
                    : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="w-full flex items-start justify-between p-5 md:p-6 text-left gap-4"
                >
                  <div className="flex items-start gap-4">
                    <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-bold transition-colors ${
                      openIndex === index 
                        ? 'bg-primary-500 text-white' 
                        : 'bg-primary-100 text-primary-600'
                    }`}>
                      {index + 1}
                    </span>
                    <span className={`font-semibold transition-colors pt-1 ${
                      openIndex === index ? 'text-primary-700' : 'text-metal-800'
                    }`}>
                      {item.question}
                    </span>
                  </div>
                  <span className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                    openIndex === index 
                      ? 'bg-primary-100 text-primary-600 rotate-180' 
                      : 'bg-gray-100 text-gray-500'
                  }`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pl-[4.5rem] md:pl-[5rem]">
                    <p 
                      className="text-gray-600 leading-relaxed" 
                      dangerouslySetInnerHTML={{ __html: item.answer }} 
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
