import Header from "@/components/Header";

const Test = () => {
  const fonts = [
    { name: "Fredoka One", class: "font-fredoka", description: "Playful and rounded" },
    { name: "Nunito", class: "font-nunito", description: "Friendly and approachable" },
    { name: "Comfortaa", class: "font-comfortaa", description: "Geometric and smooth" },
    { name: "Quicksand", class: "font-quicksand", description: "Clean but playful" },
    { name: "Pacifico", class: "font-pacifico", description: "Script-like and casual" },
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
          
          <div className="space-y-12">
            {fonts.map((font, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <h2 className="text-lg font-medium text-foreground mb-1">{font.name}</h2>
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