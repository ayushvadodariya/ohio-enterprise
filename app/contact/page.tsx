
import type { Metadata } from 'next';
import { Mail, MapPin, Phone, Building2, User } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us | Ohio Enterprise',
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
              PLOT NO J-PAP 172, SHOP NO.2,<br />
              2nd FLOOR, BHARAT COMPLEX,<br />
              NEAR QUALITY CIRCLE, MIDC,<br />
              BHOSARI, PUNE - 411026
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
              <div className="bg-gray-50 p-4 rounded-lg flex items-center justify-center gap-3">
                <User size={20} className="text-secondary" />
                <div className="text-left">
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Proprietor</p>
                  <p className="text-lg font-bold text-gray-800">KORADIYA HITESH</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Map Embed */}
        <div className="w-full bg-white p-2 rounded-xl shadow-lg border border-gray-200">
           <div className="rounded-lg overflow-hidden h-96 w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.2730620892913!2d73.84305887609257!3d18.65172288246738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c78162238383%3A0x6b49911956555122!2sBharat%20Complex!5e0!3m2!1sen!2sin!4v1709280000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ohio Enterprise Location - Bharat Complex, MIDC Bhosari"
            ></iframe>
           </div>
        </div>
      </div>
    </div>
  );
}
