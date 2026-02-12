
import Image from "next/image";
import { clientBrands } from "@/data/brands";

export default function BrandMarquee() {
  // Split brands into two rows
  const midpoint = Math.ceil(clientBrands.length / 2);
  const row1 = clientBrands.slice(0, midpoint);
  const row2 = clientBrands.slice(midpoint);

  // Duplicate for seamless loop
  const brandsRow1 = [...row1, ...row1];
  const brandsRow2 = [...row2, ...row2];

  return (
    <section className="py-20 bg-white overflow-hidden relative border-b border-gray-100">
      <div className="container-custom mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">We Are Authorized Dealers & Stockists</h2>
            <p className="text-gray-600 text-lg">Proud partners with leading global electrical brands.</p>
      </div>

      <div className="flex flex-col gap-12">
        {/* Row 1 - Left Scroll (Standard) */}
        <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10"></div>
             <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10"></div>
             
             <div className="flex w-fit animate-scroll">
                {brandsRow1.map((brand, idx) => (
                  <div key={`row1-${brand.id}-${idx}`} className="flex items-center justify-center mx-8 w-40 h-24 relative shrink-0">
                     <Image 
                        src={brand.logo} 
                        alt={brand.name} 
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 160px"
                     />
                  </div>
                ))}
            </div>
        </div>

        {/* Row 2 - Right Scroll (Reverse) */}
        <div className="relative w-full overflow-hidden">
             <div className="absolute inset-y-0 left-0 w-20 bg-linear-to-r from-white to-transparent z-10"></div>
             <div className="absolute inset-y-0 right-0 w-20 bg-linear-to-l from-white to-transparent z-10"></div>

             <div className="flex w-fit animate-scroll-reverse">
                {brandsRow2.map((brand, idx) => (
                  <div key={`row2-${brand.id}-${idx}`} className="flex items-center justify-center mx-8 w-40 h-24 relative shrink-0">
                     <Image 
                        src={brand.logo} 
                        alt={brand.name} 
                        fill 
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 160px"
                     />
                  </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
