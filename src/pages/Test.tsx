import Header from "@/components/Header";

const Test = () => {
  const playfulFonts = [
    { name: "Fredoka One", class: "font-fredoka", description: "Playful and rounded" },
    { name: "Nunito", class: "font-nunito", description: "Friendly and approachable" },
    { name: "Comfortaa", class: "font-comfortaa", description: "Geometric and smooth" },
    { name: "Quicksand", class: "font-quicksand", description: "Clean but playful" },
    { name: "Pacifico", class: "font-pacifico", description: "Script-like and casual" },
  ];

  const handwrittenFonts = [
    { name: "Kalam", class: "font-kalam", description: "Handwritten, casual" },
    { name: "Caveat", class: "font-caveat", description: "Handwritten, elegant" },
    { name: "Dancing Script", class: "font-dancing", description: "Script, flowing" },
    { name: "Indie Flower", class: "font-indie", description: "Handwritten, quirky" },
  ];

  const modernFonts = [
    { name: "Inter", class: "font-inter", description: "Clean, modern" },
    { name: "Poppins", class: "font-poppins", description: "Geometric, clean" },
    { name: "Montserrat", class: "font-montserrat", description: "Elegant, minimal" },
    { name: "Work Sans", class: "font-work", description: "Clean, professional" },
    { name: "Space Grotesk", class: "font-space", description: "Modern, unique" },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="w-full max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl font-medium text-foreground mb-4">Font Test Page</h1>
            <p className="text-muted-foreground">Testing different playful fonts for the main heading</p>
          </div>
          
          
          {/* Playful Fonts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Playful Fonts</h2>
            <div className="space-y-12">
              {playfulFonts.map((font, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-foreground mb-1">{font.name}</h3>
                    <p className="text-sm text-muted-foreground">{font.description}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <h1 className={`text-5xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 shadow-lg ${font.class}`}>
                      Your Books into your Podcasts
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Handwritten Fonts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Handwritten Fonts</h2>
            <div className="space-y-12">
              {handwrittenFonts.map((font, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-foreground mb-1">{font.name}</h3>
                    <p className="text-sm text-muted-foreground">{font.description}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <h1 className={`text-5xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 shadow-lg ${font.class}`}>
                      Your Books into your Podcasts
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Modern Minimalistic Fonts */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Modern Minimalistic Fonts</h2>
            <div className="space-y-12">
              {modernFonts.map((font, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-foreground mb-1">{font.name}</h3>
                    <p className="text-sm text-muted-foreground">{font.description}</p>
                  </div>
                  
                  <div className="flex justify-center">
                    <h1 className={`text-5xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 shadow-lg ${font.class}`}>
                      Your Books into your Podcasts
                    </h1>
                  </div>
                </div>
              ))}
            </div>
          </section>
          
          <div className="text-center mt-16">
            <p className="text-sm text-muted-foreground">
              Choose your favorite and we'll implement it on the main page
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;