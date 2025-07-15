import Header from "@/components/Header";

const Test = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-8 py-16">
        <div className="w-full max-w-4xl space-y-12">
          <h1 className="text-4xl font-bold text-center mb-12">Shadow Effect Variations</h1>
          
          {/* Variation 1: Subtle Shadow */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 1: Subtle Shadow</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work shadow-sm">
              Books into Podcasts
            </h1>
          </div>

          {/* Variation 2: Medium Shadow */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 2: Medium Shadow</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work shadow-md">
              Books into Podcasts
            </h1>
          </div>

          {/* Variation 3: Large Shadow (Current) */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 3: Large Shadow (Current)</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work shadow-lg">
              Books into Podcasts
            </h1>
          </div>

          {/* Variation 4: Extra Large Shadow */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 4: Extra Large Shadow</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work shadow-xl">
              Books into Podcasts
            </h1>
          </div>

          {/* Variation 5: Strong Navigation-Style Shadow */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 5: Strong Navigation-Style Shadow</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work" style={{boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15), 0 2px 10px rgba(0, 0, 0, 0.1)'}}>
              Books into Podcasts
            </h1>
          </div>

          {/* Variation 6: Even Stronger Card-Style Shadow */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 6: Even Stronger Card-Style Shadow</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work" style={{boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2), 0 4px 15px rgba(0, 0, 0, 0.15)'}}>
              Books into Podcasts
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;