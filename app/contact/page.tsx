
import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Building2, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | OHIO ENTERPRISE',
  description: 'Get in touch for quotes and inquiries.',
};

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary text-white py-12 mb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We are here to help you with your electrical needs. Reach out for a custom quote.
          </p>
        </div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Column 1: Reach Us (Address) */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
              <MapPin size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-gray-600 leading-relaxed">
              NEAR QUALITY CIRCLE,<br />
              MIDC, BHOSARI, <br />
              PUNE (411026)<br />
            </p>
          </div>

          {/* Column 2: Call/Email */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Phone size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <div className="space-y-4 w-full">
              <div className="flex flex-col gap-2">
                 <p className="text-sm font-semibold text-gray-500 uppercase">Call Us</p>
                 <a href="tel:+919408867007" className="text-lg font-bold text-gray-800 hover:text-primary transition-colors">+91 9408867007</a>
              </div>
              <div className="border-t border-gray-100 pt-4 flex flex-col gap-2">
                 <p className="text-sm font-semibold text-gray-500 uppercase">Email Us</p>
                 <a href="mailto:sales@ohiogroup.in" className="text-gray-800 hover:text-primary transition-colors font-medium">sales@ohiogroup.in</a>
              </div>
            </div>
            <div className="mt-6 w-full grid grid-cols-2 gap-3">
              <a href="tel:+919408867007" className="w-full py-2 bg-primary text-white rounded font-bold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 text-sm">
                <Phone size={16} /> Call Now
              </a>
              <a href="mailto:sales@ohiogroup.in" className="w-full py-2 border border-primary text-primary rounded font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 text-sm">
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Column 3: Business Info */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-primary mb-6">
              <Building2 size={32} />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Business Info</h2>
            <div className="space-y-6 w-full">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">GST Number</p>
                <p className="text-xl font-mono font-bold text-gray-800">27HKSPK3643G1ZO</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Proprietor</p>
                <p className="text-xl font-mono font-bold text-gray-800">KORADIYA HITESH</p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  );
}
