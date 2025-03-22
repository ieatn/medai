'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
      <div className="container py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image 
              src="/medai-logo.svg" 
              alt="MedAI Logo" 
              fill 
              priority
              className="object-contain"
            />
          </div>
          <span className="text-xl font-bold text-slate-900">MedAI</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-slate-600 hover:text-indigo-600 font-medium">
            Features
          </Link>
          <Link href="#testimonials" className="text-slate-600 hover:text-indigo-600 font-medium">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-slate-600 hover:text-indigo-600 font-medium">
            Pricing
          </Link>
          <Link href="#contact" className="text-slate-600 hover:text-indigo-600 font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-slate-700 hover:text-indigo-600 font-medium">
            Log in
          </Link>
          <Link href="/signup" className="btn-primary">
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700 focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 py-4">
          <div className="container space-y-4">
            <Link 
              href="#features" 
              className="block py-2 text-slate-600 hover:text-indigo-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#testimonials" 
              className="block py-2 text-slate-600 hover:text-indigo-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#pricing" 
              className="block py-2 text-slate-600 hover:text-indigo-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#contact" 
              className="block py-2 text-slate-600 hover:text-indigo-600 font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            
            <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
              <Link 
                href="/login" 
                className="text-slate-700 hover:text-indigo-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                className="btn-primary inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 