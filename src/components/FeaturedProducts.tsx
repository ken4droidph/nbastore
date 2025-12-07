import { ProductCard } from "./ProductCard";
import productJersey from "@/assets/product-jersey.jpg";
import productShoes from "@/assets/product-shoes.jpg";
import productShorts from "@/assets/product-shorts.jpg";
import productCap from "@/assets/product-cap.jpg";
import productJacket from "@/assets/product-jacket.jpg";

const products = [
  {
    id: 1,
    image: productJersey,
    name: "Chicago Bulls Icon Edition Swingman Jersey",
    category: "Jerseys",
    price: 110,
    originalPrice: 130,
    isNew: true,
  },
  {
    id: 2,
    image: productShoes,
    name: "LeBron XXI Performance Basketball Shoes",
    category: "Shoes",
    price: 185,
    isFeatured: true,
  },
  {
    id: 3,
    image: productShorts,
    name: "NBA Icon Edition Authentic Shorts",
    category: "Apparel",
    price: 75,
    originalPrice: 90,
  },
  {
    id: 4,
    image: productCap,
    name: "NBA All-Star 2024 Snapback Cap",
    category: "Accessories",
    price: 35,
    isNew: true,
  },
  {
    id: 5,
    image: productJacket,
    name: "NBA Courtside Bomber Jacket",
    category: "Jackets",
    price: 150,
    isFeatured: true,
  },
  {
    id: 6,
    image: productJersey,
    name: "LA Lakers Statement Edition Jersey",
    category: "Jerseys",
    price: 120,
  },
];

export const FeaturedProducts = () => {
  return (
    <section className="py-20 lg:py-32 bg-background" id="featured">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary font-medium uppercase tracking-widest mb-2">Shop Now</p>
            <h2 className="font-display text-4xl lg:text-6xl text-foreground">
              FEATURED <span className="text-primary">PRODUCTS</span>
            </h2>
          </div>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group">
            View All Products
            <span className="w-4 h-px bg-muted-foreground group-hover:w-8 transition-all duration-300" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
