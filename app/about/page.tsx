import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | OHIO ENTERPRISE',
  description: 'Learn about OHIO ENTERPRISE, your trusted electrical wholesaler.',
};

export default function AboutPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">About OHIO ENTERPRISE</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Powering industries and homes with quality electrical solutions since 2010.
          </p>
        </div>
      </div>

      <div className="container-custom space-y-20">
        {/* Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl">
               <Image
                 src="https://placehold.co/800x600/0056b3/ffffff?text=Our+Warehouse"
                 alt="Warehouse"
                 fill
                 className="object-cover"
               />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-display">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              OHIO ENTERPRISE began with a simple mission: to provide high-quality electrical components to contractors and industries at fair prices. Over the last decade, we have grown from a small shop to a leading wholesaler in the region, partnering with global brands like L&T, Siemens, and Schneider.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              We understand the critical nature of electrical infrastructure. That's why we don't just sell products; we provide technical expertise to ensure you get the right solution for your project.
            </p>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-secondary">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-lg">
              To be the most reliable partner for electrical supplies by ensuring availability, authenticity, and affordability for all our clients.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-lg">
              To power the future of infrastructure by supplying sustainable and efficient electrical technologies across the nation.
            </p>
          </div>
        </section>

        {/* Team / Values */}
        <section className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 font-display">Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold mb-2">Integrity</h3>
              <p className="text-gray-600">We believe in honest dealings and transparent pricing.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">We only stock products that meet rigorous safety standards.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold mb-2">Service</h3>
              <p className="text-gray-600">Customer satisfaction is our top priority, before and after sales.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
