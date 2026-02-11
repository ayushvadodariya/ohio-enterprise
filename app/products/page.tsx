import { productsData } from "@/data/data";
import ProductSidebar from "@/components/shared/ProductSidebar";
import ProductCard from "@/components/ui/ProductCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Products | OHIO ENTERPRISE",
  description: "Browse our complete range of electrical products including Switchgear, Wires, Connectors, and more.",
};

export default function ProductsPage() {
  const categories = productsData.map((c) => ({
    id: c.id,
    category: c.category,
    slug: c.slug,
  }));

  // Flatten all products for the main view or categorize them?
  // Let's categorize them visually.
  
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-primary text-white py-12 mb-8">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">Product Catalog</h1>
          <p className="text-blue-100 text-lg max-w-2xl">Find the perfect electrical components for your project. High quality, best prices.</p>
        </div>
      </div>
      
      <div className="container-custom flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
           <ProductSidebar categories={categories} />
        </div>
        
        <main className="flex-1">
          {productsData.map((category) => (
            <div key={category.id} className="mb-12">
              <h2 className="text-2xl font-bold font-display mb-6 text-gray-800 border-b pb-2 flex justify-between items-center">
                <span>{category.category}</span>
                <a href={`/products/${category.slug}`} className="text-sm font-sans text-primary hover:underline font-normal">View All</a>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.products.slice(0, 3).map((product, idx) => (
                  <ProductCard key={idx} product={product} categoryName={category.category} />
                ))}
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
}
