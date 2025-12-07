import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

export const ProductCard = ({
  image,
  name,
  category,
  price,
  originalPrice,
  isNew,
  isFeatured,
}: ProductCardProps) => {
  return (
    <div className="group relative bg-card rounded-xl overflow-hidden card-shadow transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1">
      {/* Badges */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {isNew && (
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
            New
          </span>
        )}
        {isFeatured && (
          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-bold uppercase tracking-wider rounded-full">
            Featured
          </span>
        )}
      </div>

      {/* Wishlist Button */}
      <button className="absolute top-4 right-4 z-10 p-2 bg-background/50 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
        <Heart className="w-4 h-4" />
      </button>

      {/* Image */}
      <div className="relative aspect-square bg-muted overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Quick Add Button */}
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <Button variant="hero" className="w-full" size="lg">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{category}</p>
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{name}</h3>
        <div className="flex items-center gap-2">
          <span className="font-display text-xl text-foreground">${price}</span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  );
};
