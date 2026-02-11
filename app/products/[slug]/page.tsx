
import { productsData } from "@/data/data";
import ProductSidebar from "@/components/shared/ProductSidebar";
import ProductCard from "@/components/ui/ProductCard";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = productsData.find((c) => c.slug === slug);
  if (!category) return { title: "Category Not Found" };

  return {
    title: `${category.category} | OHIO ENTERPRISE`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return productsData.map((category) => ({
    slug: category.slug,
  }));
}

export default async function CategoryPage({ params }: PageProps) {
  const { slug } = await params;
  const category = productsData.find((c) => c.slug === slug);

  if (!category) {
    notFound();
  }

  const categories = productsData.map((c) => ({
    id: c.id,
    category: c.category,
    slug: c.slug,
  }));

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary text-white py-12 mb-8">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">{category.category}</h1>
          <p className="text-blue-100 text-lg max-w-2xl">{category.description}</p>
        </div>
      </div>
      
      <div className="container-custom flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 shrink-0">
           <ProductSidebar categories={categories} />
        </div>
        
        <main className="flex-1">
          {/* Companies / Brands in this category */}
          {/* Filter unique brands for this category - productsData has companies for the category */}
          {category.companies && category.companies.length > 0 && (
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
               <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4">Available Brands</h3>
               <div className="flex flex-wrap gap-8 items-center">
                 {category.companies.map((company, idx) => (
                   <div key={idx} className="relative h-10 w-24 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                      <Image 
                        src={company.logo} 
                        alt={company.name} 
                        fill 
                        className="object-contain"
                      />
                   </div>
                 ))}
               </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, idx) => (
              <ProductCard key={idx} product={product} categoryName={category.category} />
            ))}
          </div>
          
          {category.products.length === 0 && (
             <div className="text-center py-20 bg-white rounded border border-gray-200">
                <p className="text-gray-500">No products found for this category yet.</p>
             </div>
          )}
        </main>
      </div>
    </div>
  );
}
