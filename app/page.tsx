
"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle, Truck, ShieldCheck, Zap } from "lucide-react";
import ProductCard from "@/components/ui/ProductCard";
import { productsData, clientBrands } from "@/data/data";
import BrandLogo from "@/components/shared/BrandLogo";
import MainSlider from "@/components/shared/MainSlider";

export default function Home() {
  const featuredProducts = productsData.map(cat => cat.products[0]).filter(Boolean).slice(0, 4);
  
  const features = [
    {
      icon: <ShieldCheck size={32} className="text-primary" />,
      title: "Genuine Products",
      desc: "100% authentic products from top global brands with warranty."
    },
    {
      icon: <Truck size={32} className="text-primary" />,
      title: "Fast Delivery",
      desc: "Timely delivery across the region ensuring zero downtime."
    },
    {
      icon: <Zap size={32} className="text-primary" />,
      title: "Best Prices",
      desc: "Competitive wholesale pricing for bulk and retail orders."
    },
    {
      icon: <CheckCircle size={32} className="text-primary" />,
      title: "Expert Support",
      desc: "Technical guidance to help you choose the right equipment."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <MainSlider />

      <section className="relative bg-linear-to-r from-primary to-blue-800 text-white overflow-hidden py-16 lg:py-24">
        <div className="container-custom relative z-10 flex flex-col items-center justify-center text-center">
            <div className="max-w-4xl flex flex-col items-center gap-6">
              <div className="inline-block px-4 py-1 bg-white/10 rounded-full text-sm font-semibold uppercase tracking-wider backdrop-blur-sm border border-white/20">
                Trusted Electrical Wholesaler
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold font-display leading-tight">
                Powering Your <span className="text-secondary">Projects</span> with Quality & Reliability
              </h1>
              <p className="text-lg text-gray-200 leading-relaxed">
                OHIO ENTERPRISE is a leading supplier of industrial electrical products in  Pune. Get the best deals on top brands.
              </p>
              <div className="flex gap-4 mt-2">
                <Link 
                  href="/products" 
                  className="px-6 py-3 bg-secondary text-white font-bold rounded hover:bg-secondary-dark transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Explore Products <ArrowRight size={20} />
                </Link>
                <Link 
                  href="/contact" 
                  className="px-6 py-3 bg-white/10 text-white font-bold rounded border border-white/30 hover:bg-white hover:text-primary transition-all backdrop-blur-sm"
                >
                  Contact Us
                </Link>
              </div>
            </div>


        </div>
      </section>

      {/* Authorized Dealers Section */}
      <section className="py-20 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
           <div className="text-center mb-12">
             {/* <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Authorized Stockist Of</h2>
             <p className="text-gray-600 text-lg">We are proud partners with leading global electrical brands.</p> */}
            <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900 mt-2 mb-4">We Are</h2>
            <p className="text-gray-700 text-xl text-center">Trusted Sellers & Stockists</p>
           </div>
        
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientBrands.map((brand, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 flex items-center justify-center h-80 hover:shadow-xl transition-shadow duration-300 group">
                   <div className="relative w-full h-full">
                      <BrandLogo 
                        name={brand.name} 
                        fallbackSrc={brand.logo} 
                        className="w-full h-full transition-transform duration-300 group-hover:scale-105"
                        priority={true}
                      />
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose OHIO ENTERPRISE?</h2>
            <p className="text-gray-600 text-lg">We create value through quality products, technical expertise, and exceptional service.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 group">
                <div className="mb-6 p-4 bg-white rounded-full w-16 h-16 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform text-secondary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
              <p className="text-gray-600 text-lg">Check out our latest and most popular items.</p>
            </div>
            <Link href="/products" className="hidden md:flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, idx) => (
              <ProductCard key={idx} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
             <Link href="/products" className="inline-flex items-center gap-2 text-primary font-bold hover:text-secondary transition-colors border border-primary px-6 py-3 rounded hover:bg-primary hover:text-white">
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-900/50 mix-blend-multiply"></div>
        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">Start Your Project With Us</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
            Get personalized quotes for bulk orders and project requirements. Our team is ready to assist you.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-white text-primary font-bold rounded hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
