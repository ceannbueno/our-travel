import { Heart, Map, Camera } from "lucide-react";
import { Card } from "@/components/ui/card";
import hikingGearImage from "@/assets/hiking-gear.jpg";

const About = () => {
  const stats = [
    { icon: Map, label: "Countries Visited", value: "12" },
    { icon: Camera, label: "Photos Taken", value: "2,500+" },
    { icon: Heart, label: "Adventures", value: "50+" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-soft">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <img
              src={hikingGearImage}
              alt="Hiking gear essentials"
              className="rounded-2xl shadow-soft w-full h-auto"
            />
          </div>

          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-semibold text-foreground">
              A Journey of Discovery
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              What started as a simple weekend hike turned into a passionate journey of exploring the world's most beautiful trails and natural wonders. Together, we've discovered that the best adventures are the ones we share.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From sunrise at mountain peaks to sunset campfires, every moment in nature strengthens our bond and creates memories that last a lifetime. We believe that the mountains are calling, and we must go.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="p-8 text-center hover:shadow-hover transition-all duration-300 animate-scale-in border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
              <p className="text-4xl font-bold text-foreground mb-2">{stat.value}</p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
