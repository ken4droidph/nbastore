import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBanner}
          alt="NBA Player in action"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl pt-20 lg:pt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">New Season Collection</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl text-foreground leading-none mb-6 animate-slide-up">
            GEAR UP FOR
            <br />
            <span className="text-primary">GREATNESS</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-xl animate-slide-up stagger-2 opacity-0">
            Official NBA merchandise. Authentic jerseys, signature shoes, and exclusive apparel worn by your favorite stars.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-up stagger-3 opacity-0">
            <Button variant="hero" size="xl">
              Shop Collection
              <ChevronRight className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl">
              View Teams
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border/50 animate-slide-up stagger-4 opacity-0">
            <div>
              <p className="font-display text-3xl sm:text-4xl text-foreground">30+</p>
              <p className="text-sm text-muted-foreground">NBA Teams</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl text-foreground">500+</p>
              <p className="text-sm text-muted-foreground">Products</p>
            </div>
            <div>
              <p className="font-display text-3xl sm:text-4xl text-primary">24H</p>
              <p className="text-sm text-muted-foreground">Fast Delivery</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <div className="w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
};
