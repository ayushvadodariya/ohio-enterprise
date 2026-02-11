"use client";

import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-12 mt-16 font-sans">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-3xl font-bold font-display tracking-wide uppercase">OHIO ENTERPRISE</h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Your trusted partner for high-quality electrical supplies. From industrial switches to home wiring, we power your world with reliability.
            </p>
          </div>
          
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold mb-6 text-secondary border-b border-white/10 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Home</Link></li>
              <li><Link href="/products" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Products</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 bg-secondary rounded-full"></span>Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary border-b border-white/10 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start gap-3 group">
                <MapPin size={20} className="mt-0.5 shrink-0 text-secondary group-hover:text-white transition-colors" />
                <span className="leading-snug">PLOT NO J-PAP 172, SHOP NO.2, 2nd FLOOR, BHARAT COMPLEX NEAR QUALITY CIRCLE, MIDC, BHOSARI Pune - 411026</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone size={20} className="shrink-0 text-secondary group-hover:text-white transition-colors" />
                <a href="tel:+919408867007" className="hover:text-white transition-colors font-medium text-base">+91 9408867007</a>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail size={20} className="shrink-0 text-secondary group-hover:text-white transition-colors" />
                <a href="mailto:sales@ohiogroup.in" className="hover:text-white transition-colors">sales@ohiogroup.in</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-secondary border-b border-white/10 pb-2 inline-block">Business Details</h4>
            <div className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-xs text-gray-400 uppercase tracking-widest font-semibold mb-1">GST Number</p>
                <p className="text-lg font-mono font-bold text-white tracking-wide">27HKSPK3643G1ZO</p>
              </div>

            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          &copy; {currentYear} OHIO ENTERPRISE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
