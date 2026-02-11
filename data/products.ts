
import { clientBrands } from "./brands";

const categories = [
    "Switchgears",
    "Wires & Cables",
    "Cable Glands & Lugs",
    "Lighting and Fixtures",
    "Other Products"
] as const;

export const productsData = categories.map((catName, idx) => {
    const brandsInCategory = clientBrands.filter(b => b.category === catName);
    
    // Create a slug from the category name
    const slug = catName.toLowerCase()
        .replace(/ & /g, "-") // Handle "Wires & Cables" -> "wires-cables"
        .replace(/ /g, "-");   // Handle "Other Products" -> "other-products"

    return {
        id: idx + 1,
        category: catName,
        slug: slug,
        description: `Authorized distributor for ${brandsInCategory.map(b => b.name).join(", ")}.`,
        companies: brandsInCategory.map(b => ({ name: b.name, logo: b.logo })),
        // We use the brands themselves as "Products" to display them on the products page
        products: brandsInCategory.map(b => ({
            name: b.name,
            image: b.logo,
            alt: `Authorized Dealer for ${b.name} ${catName}`,
            description: `We are authorized dealers and stockists for ${b.name}. Contact us for ${catName} and related products.`
        }))
    };
});
