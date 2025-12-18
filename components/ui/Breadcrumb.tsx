"use client";

import Link from "next/link";
import type { BreadcrumbItem } from "@/lib/breadcrumb-schema";

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  className?: string;
}

// Composant visuel du fil d'Ariane (Client Component)
export function Breadcrumb({ items, className = "" }: BreadcrumbProps) {
  return (
    <nav 
      aria-label="Fil d'Ariane" 
      className={`bg-gray-50 py-3 border-b ${className}`}
    >
      <div className="container">
        <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
          <li>
            <Link 
              href="/" 
              className="hover:text-primary-600 transition-colors"
            >
              Accueil
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-2">
              <span className="text-gray-400">/</span>
              {item.href ? (
                <Link 
                  href={item.href} 
                  className="hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

// Re-export type for convenience
export type { BreadcrumbItem } from "@/lib/breadcrumb-schema";

