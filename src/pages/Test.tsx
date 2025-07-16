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

          {/* Variation 5: Codenest-Style Shadow (Right Offset + Blur) */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 5: Codenest-Style Shadow (Right Offset + Blur)</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work" style={{boxShadow: '6px 8px 15px 0 rgba(0, 0, 0, 0.25)'}}>
              Books into Podcasts
            </h1>
          </div>

          {/* Variation 6: Stronger Codenest Shadow */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 6: Stronger Codenest Shadow</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work" style={{boxShadow: '8px 10px 20px 0 rgba(0, 0, 0, 0.3)'}}>
              Books into Podcasts
            </h1>
          </div>

          {/* Variation 7: Maximum Codenest Shadow */}
          <div className="text-center">
            <h2 className="text-2xl font-medium mb-4">Variation 7: Maximum Codenest Shadow</h2>
            <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work" style={{boxShadow: '6px 8px 0 0 rgba(0, 0, 0, 0.8), 10px 12px 25px 0 rgba(0, 0, 0, 0.35)'}}>
              Books into Podcasts
            </h1>
          </div>
        </div>

        {/* Background Text Variations Section */}
        <div className="w-full max-w-4xl space-y-12 mt-16">
          <h1 className="text-4xl font-bold text-center mb-12">Background Text Variations</h1>
          
          {/* Background for testing variations */}
          <div className="relative min-h-screen bg-cover bg-center bg-no-repeat rounded-lg overflow-hidden" style={{backgroundImage: 'url(/src/assets/books-background.png)'}}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 py-16 space-y-16">
              
              {/* Variation 1: Simple Solid Background */}
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-white bg-black/50 px-4 py-2 rounded">Variation 1: Simple Solid Background</h2>
                <div className="bg-background rounded-lg p-6 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-foreground tracking-tight">Transform any PDF into an engaging audio experience</p>
                    <p className="text-xl font-medium text-foreground tracking-tight">Upload your document and let AI create a personalized podcast for you</p>
                  </div>
                </div>
              </div>

              {/* Variation 2: Semi-Transparent with Backdrop Blur */}
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-white bg-black/50 px-4 py-2 rounded">Variation 2: Semi-Transparent with Backdrop Blur</h2>
                <div className="bg-background/80 backdrop-blur-sm rounded-lg p-6 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-foreground tracking-tight">Transform any PDF into an engaging audio experience</p>
                    <p className="text-xl font-medium text-foreground tracking-tight">Upload your document and let AI create a personalized podcast for you</p>
                  </div>
                </div>
              </div>

              {/* Variation 3: Subtle Card-Style Background */}
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-white bg-black/50 px-4 py-2 rounded">Variation 3: Subtle Card-Style Background</h2>
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-border/50 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-foreground tracking-tight">Transform any PDF into an engaging audio experience</p>
                    <p className="text-xl font-medium text-foreground tracking-tight">Upload your document and let AI create a personalized podcast for you</p>
                  </div>
                </div>
              </div>

              {/* Variation 4: Accent Color Background */}
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-white bg-black/50 px-4 py-2 rounded">Variation 4: Accent Color Background</h2>
                <div className="bg-accent rounded-lg p-6 max-w-xl mx-auto">
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-accent-foreground tracking-tight">Transform any PDF into an engaging audio experience</p>
                    <p className="text-xl font-medium text-accent-foreground tracking-tight">Upload your document and let AI create a personalized podcast for you</p>
                  </div>
                </div>
              </div>

              {/* Variation 5: Gradient Background */}
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-white bg-black/50 px-4 py-2 rounded">Variation 5: Gradient Background</h2>
                <div className="backdrop-blur-sm rounded-lg p-6 max-w-xl mx-auto" style={{backgroundImage: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.01))'}}>
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-foreground tracking-tight">Transform any PDF into an engaging audio experience</p>
                    <p className="text-xl font-medium text-foreground tracking-tight">Upload your document and let AI create a personalized podcast for you</p>
                  </div>
                </div>
              </div>

              {/* Variation 6: Paper-Style Background */}
              <div className="text-center">
                <h2 className="text-2xl font-medium mb-4 text-white bg-black/50 px-4 py-2 rounded">Variation 6: Paper-Style Background</h2>
                <div className="bg-background rounded-lg p-6 shadow-xl border border-border max-w-xl mx-auto" style={{boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'}}>
                  <div className="space-y-2">
                    <p className="text-xl font-medium text-foreground tracking-tight">Transform any PDF into an engaging audio experience</p>
                    <p className="text-xl font-medium text-foreground tracking-tight">Upload your document and let AI create a personalized podcast for you</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;