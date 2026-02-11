
import Image from 'next/image';
import { Phone } from 'lucide-react';
import { ProductItem } from '@/types';

interface ProductCardProps {
  product: ProductItem;
  categoryName?: string;
}

export default function ProductCard({ product, categoryName }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-lg hover:border-primary/20 transition-all duration-300 overflow-hidden flex flex-col h-full">
      <div className="relative h-64 w-full bg-white overflow-hidden p-4 flex items-center justify-center">
        <div className="relative h-full w-full">
            <Image
            src={product.image || "https://placehold.co/400x400/e2e8f0/1e293b?text=No+Image"}
            alt={product.alt || product.name || "Product Image"}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        {categoryName && (
          <div className="absolute top-2 right-2 bg-secondary text-white text-xs font-bold px-2 py-1 rounded z-10 shadow-sm">
            {categoryName}
          </div>
        )}
      </div>
      
      <div className="p-4 grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        {/* <p className="text-sm text-gray-500 mb-4 line-clamp-3 grow">
            {product.description}
        </p> */}
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-gray-100">
          <a 
            href="tel:+919408867007"
            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors w-full justify-center py-2 bg-blue-50 rounded hover:bg-blue-100"
          >
            <Phone size={16} />
            <span>Inquire Now</span>
          </a>
        </div>
      </div>
    </div>
  );
}
