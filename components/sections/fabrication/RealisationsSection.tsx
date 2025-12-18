"use client";

import { useState } from "react";
import { ImageWithFallback } from "@/components/ui";
import realisationsContent from "@/content/sections/fabrication/realisations.json";

// ─────────────────────────────────────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────────────────────────────────────
const icons: Record<string, JSX.Element> = {
  images: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  location: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  ),
  dimensions: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v16.5h16.5M3.75 19.5V15m0-3.75v-.75m0 .75h.75m3 3.75v-3.75m0 3.75h.75m3-3.75v-3m0 3h.75m3-3v-2.25m0 2.25h.75m3-2.25V6m0 2.25h.75" />
    </svg>
  ),
  check: (
    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  ),
  arrow: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  ),
  external: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
  ),
};

// ─────────────────────────────────────────────────────────────────────────────
// PROJECT CARD COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
function ProjectCard({ project, index }: { project: typeof realisationsContent.projects[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-accent-100 flex flex-col items-center justify-center text-primary-400">
          <svg className="w-16 h-16 mb-2 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm font-medium">{project.title}</p>
          <p className="text-xs opacity-70">600x400</p>
        </div>
        
        <ImageWithFallback
          src={project.image}
          alt={`${project.title} - Rideau métallique ${project.location}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-sm font-medium mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.features.map((feature, idx) => (
                <span key={idx} className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-lg text-xs font-medium">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-700 capitalize">
            {project.category}
          </span>
        </div>

        {/* Year badge */}
        <div className="absolute top-4 right-4">
          <span className="px-2 py-1 bg-secondary-500 text-white rounded-lg text-xs font-bold">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-metal-800 mb-2 group-hover:text-primary-600 transition-colors">
          {project.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
          <div className="flex items-center gap-1">
            {icons.location}
            <span>{project.location}</span>
          </div>
          <div className="flex items-center gap-1">
            {icons.dimensions}
            <span>{project.dimensions}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
            {project.type}
          </span>
          <span className="text-xs text-gray-400">{project.postalCode}</span>
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function RealisationsSection() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filteredProjects = activeFilter === "all" 
    ? realisationsContent.projects 
    : realisationsContent.projects.filter(p => p.category === activeFilter);

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-50 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-50" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-50 text-secondary-700 text-sm font-semibold mb-4">
            {icons.images}
            {realisationsContent.badge.text}
          </span>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-metal-800 mb-4">
            {realisationsContent.title}
            <span className="block text-primary-600 mt-2">
              {realisationsContent.titleHighlight}
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            {realisationsContent.subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {realisationsContent.filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {filter.label}
              <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                activeFilter === filter.id
                  ? 'bg-white/20 text-white'
                  : 'bg-gray-200 text-gray-500'
              }`}>
                {filter.count}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Stats Row */}
        <div className="bg-gradient-to-br from-sand-100 to-primary-50 rounded-3xl p-8 md:p-10 mb-12">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary-600 mb-2">
                {realisationsContent.stats.totalProjects}
              </div>
              <p className="text-gray-600">Projets réalisés</p>
            </div>
            <div className="border-x border-gray-200">
              <div className="text-4xl md:text-5xl font-bold text-secondary-500 mb-2">
                {realisationsContent.stats.localProjects}
              </div>
              <p className="text-gray-600">Dans le 34</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-green-500 mb-2">
                {realisationsContent.stats.satisfactionRate}
              </div>
              <p className="text-gray-600">Satisfaction</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-metal-800 mb-4">
            {realisationsContent.cta.text}
          </h3>
          <p className="text-gray-600 mb-8">
            {realisationsContent.cta.subtext}
          </p>
          <a 
            href={realisationsContent.cta.href}
            className="inline-flex items-center gap-3 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
          >
            Discuter de mon projet
            {icons.arrow}
          </a>
        </div>

        {/* SEO Hidden Content */}
        <div className="sr-only">
          <p>{realisationsContent.localSeo.intro}</p>
          <p>{realisationsContent.localSeo.coverage}</p>
          <p>{realisationsContent.localSeo.expertise}</p>
        </div>
      </div>
    </section>
  );
}

export default RealisationsSection;

