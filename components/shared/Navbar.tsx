"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          {/* Logo */}
          {/* Logo */}
          <Link href="/" className="flex items-center gap-4" onClick={() => setIsOpen(false)}>
            <div className="relative h-16 w-48">
               <img src="/icon.jpg" alt="OHIO ENTERPRISE" className="h-full w-full object-contain object-left" />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-primary font-bold" : "text-text-main"
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919408867007"
              className="px-4 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary-dark transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              <span className="hidden lg:inline">HITESH KORADIYA&nbsp;</span>
              <span>+91 9408867007</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-main hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 absolute w-full shadow-lg">
          <div className="container-custom flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "text-lg font-medium py-2 px-4 rounded hover:bg-gray-50",
                  pathname === link.href ? "text-primary bg-blue-50" : "text-text-main"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+919408867007"
              className="mx-4 mt-2 px-4 py-3 bg-primary text-white text-center font-bold rounded hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              <Phone size={18} />
              <span>Call HITESH KORADIYA</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
