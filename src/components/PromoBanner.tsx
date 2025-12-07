import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import { useState, useEffect } from "react";

export const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary via-primary/90 to-secondary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-foreground/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/10 backdrop-blur-sm rounded-full mb-4">
              <Clock className="w-4 h-4 text-foreground" />
              <span className="text-sm font-medium text-foreground">Limited Time Offer</span>
            </div>
            <h2 className="font-display text-4xl lg:text-6xl text-foreground mb-2">
              ALL-STAR WEEKEND
            </h2>
            <p className="text-xl text-foreground/80">
              Up to <span className="text-accent font-bold">40% OFF</span> on select items
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            {/* Countdown */}
            <div className="flex gap-4">
              {[
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Mins" },
                { value: timeLeft.seconds, label: "Secs" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-foreground/10 backdrop-blur-sm rounded-lg p-4 min-w-[80px] text-center"
                >
                  <span className="font-display text-3xl lg:text-4xl text-foreground">
                    {item.value.toString().padStart(2, "0")}
                  </span>
                  <p className="text-xs text-foreground/70 uppercase tracking-wider">{item.label}</p>
                </div>
              ))}
            </div>

            <Button variant="gold" size="xl">
              Shop the Sale
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
