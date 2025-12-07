const teams = [
  { name: "Lakers", city: "Los Angeles", color: "hsl(45, 100%, 50%)" },
  { name: "Bulls", city: "Chicago", color: "hsl(0, 84%, 50%)" },
  { name: "Celtics", city: "Boston", color: "hsl(120, 60%, 35%)" },
  { name: "Warriors", city: "Golden State", color: "hsl(220, 70%, 50%)" },
  { name: "Heat", city: "Miami", color: "hsl(0, 0%, 15%)" },
  { name: "Nets", city: "Brooklyn", color: "hsl(0, 0%, 20%)" },
];

export const ShopByTeam = () => {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" id="teams">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <p className="text-primary font-medium uppercase tracking-widest mb-2">Rep Your Team</p>
          <h2 className="font-display text-4xl lg:text-6xl text-foreground">
            SHOP BY <span className="text-primary">TEAM</span>
          </h2>
        </div>

        {/* Teams Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
          {teams.map((team, index) => (
            <a
              key={team.name}
              href={`#${team.name.toLowerCase()}`}
              className="group relative aspect-square bg-card rounded-xl overflow-hidden card-shadow transition-all duration-300 hover:scale-105 animate-scale-in opacity-0"
              style={{ 
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'forwards'
              }}
            >
              <div
                className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                style={{ backgroundColor: team.color }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <div
                  className="w-16 h-16 lg:w-20 lg:h-20 rounded-full mb-3 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: team.color }}
                >
                  <span className="font-display text-2xl lg:text-3xl text-foreground">
                    {team.name.charAt(0)}
                  </span>
                </div>
                <p className="font-display text-lg lg:text-xl text-foreground">{team.name}</p>
                <p className="text-xs text-muted-foreground">{team.city}</p>
              </div>
            </a>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-10">
          <a
            href="#all-teams"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
          >
            View All 30 Teams
            <span className="w-4 h-px bg-muted-foreground group-hover:w-8 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
