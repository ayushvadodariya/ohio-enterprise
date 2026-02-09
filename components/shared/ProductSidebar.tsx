"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";
import clsx from "clsx";

interface Category {
  id: number;
  category: string;
  slug: string;
}

interface ProductSidebarProps {
  categories: Category[];
}

export default function ProductSidebar({ categories }: ProductSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="w-full md:w-64 shrink-0 mb-8 md:mb-0">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden sticky top-24">
        <div className="bg-primary text-white p-4">
          <h2 className="text-lg font-bold font-display">Categories</h2>
        </div>
        <nav className="flex flex-col">
          <Link
            href="/products"
            className={clsx(
              "px-4 py-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors",
              pathname === "/products" ? "bg-blue-50 text-primary font-bold" : "text-gray-700"
            )}
          >
            <span>All Categories</span>
            {pathname === "/products" && <ChevronRight size={16} />}
          </Link>
          {categories.map((cat) => {
            const isActive = pathname === `/products/${cat.slug}`;
            return (
              <Link
                key={cat.id}
                href={`/products/${cat.slug}`}
                className={clsx(
                  "px-4 py-3 border-b border-gray-100 flex items-center justify-between hover:bg-gray-50 transition-colors last:border-0",
                  isActive ? "bg-blue-50 text-primary font-bold" : "text-gray-700"
                )}
              >
                <span>{cat.category}</span>
                {isActive && <ChevronRight size={16} />}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
