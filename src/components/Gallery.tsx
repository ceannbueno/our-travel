import { useState } from "react";
import { Card } from "@/components/ui/card";
import mountainTrailImage from "@/assets/mountain-trail.jpg";
import campingImage from "@/assets/camping.jpg";
import overlookImage from "@/assets/overlook.jpg";
import forestTrailImage from "@/assets/forest-trail.jpg";

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: string;
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const images: GalleryImage[] = [
    {
      src: mountainTrailImage,
      alt: "Winding mountain trail through alpine meadow",
      title: "Alpine Trail",
      category: "mountains",
    },
    {
      src: campingImage,
      alt: "Camping at sunrise with mountain backdrop",
      title: "Mountain Camp",
      category: "camping",
    },
    {
      src: overlookImage,
      alt: "Scenic overlook at sunset",
      title: "Sunset Vista",
      category: "mountains",
    },
    {
      src: forestTrailImage,
      alt: "Forest trail with dappled sunlight",
      title: "Forest Path",
      category: "trails",
    },
  ];

  const categories = [
    { id: "all", label: "All" },
    { id: "mountains", label: "Mountains" },
    { id: "trails", label: "Trails" },
    { id: "camping", label: "Camping" },
  ];

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Adventures
          </h2>
          <div className="w-24 h-1 bg-gradient-nature mx-auto rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Moments captured from our journey through nature's most beautiful landscapes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden group cursor-pointer hover:shadow-hover transition-all duration-300 animate-scale-in border-border bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-primary-foreground font-semibold text-xl p-6">
                    {image.title}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
