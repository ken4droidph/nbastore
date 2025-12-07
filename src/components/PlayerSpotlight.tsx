import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const players = [
  {
    name: "LeBron James",
    team: "Lakers",
    number: "23",
    position: "Forward",
    gradient: "from-[hsl(45,100%,50%)] to-[hsl(45,80%,35%)]",
  },
  {
    name: "Stephen Curry",
    team: "Warriors",
    number: "30",
    position: "Guard",
    gradient: "from-[hsl(220,70%,50%)] to-[hsl(220,70%,35%)]",
  },
  {
    name: "Giannis",
    team: "Bucks",
    number: "34",
    position: "Forward",
    gradient: "from-[hsl(120,60%,35%)] to-[hsl(120,50%,25%)]",
  },
];

export const PlayerSpotlight = () => {
  return (
    <section className="py-20 lg:py-32 bg-background" id="players">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <p className="text-primary font-medium uppercase tracking-widest mb-2">Shop By Star</p>
            <h2 className="font-display text-4xl lg:text-6xl text-foreground">
              PLAYER <span className="text-primary">SPOTLIGHT</span>
            </h2>
          </div>
        </div>

        {/* Players Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {players.map((player, index) => (
            <div
              key={player.name}
              className="group relative rounded-2xl overflow-hidden card-shadow animate-slide-up opacity-0"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${player.gradient} opacity-80`} />
              
              {/* Content */}
              <div className="relative p-6 lg:p-8 min-h-[320px] flex flex-col justify-between">
                <div>
                  <span className="font-display text-8xl lg:text-9xl text-foreground/10 absolute top-4 right-4">
                    {player.number}
                  </span>
                  <p className="text-sm font-medium text-foreground/80 uppercase tracking-widest mb-2">
                    {player.team}
                  </p>
                  <h3 className="font-display text-3xl lg:text-4xl text-foreground mb-1">
                    {player.name}
                  </h3>
                  <p className="text-foreground/70">{player.position}</p>
                </div>

                <div className="mt-auto">
                  <Button variant="glass" className="group-hover:bg-foreground/20 transition-all">
                    Shop Collection
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
