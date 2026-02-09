export interface Brand {
  id: number;
  name: string;
  category?: string;
  description?: string;
  slug?: string;
  image?: string;
  logo?: string;
}

export interface ProductItem {
  name: string;
  image: string;
  alt: string;
  description: string;
}

export interface Company {
  name: string;
  logo: string;
}

export interface ProductCategory {
  id: number;
  category: string;
  slug: string;
  description: string;
  companies: Company[];
  products: ProductItem[];
}
