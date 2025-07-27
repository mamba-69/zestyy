"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-primary font-display">
            ZestyRed
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/journey"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Farm to Bottle
          </Link>
          <Link
            href="/products"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Products
          </Link>
          <Link
            href="/quality"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Quality & Hygiene
          </Link>
          <Link
            href="/contact"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/faq"
            className="text-foreground hover:text-primary font-medium transition-colors"
          >
            FAQ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/journey"
              className="text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Farm to Bottle
            </Link>
            <Link
              href="/products"
              className="text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/quality"
              className="text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Quality & Hygiene
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/faq"
              className="text-foreground hover:text-primary font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
