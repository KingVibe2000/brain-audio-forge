import Header from "@/components/Header";

const Test3 = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-secondary/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center mb-2">Text Highlighting Variations</h1>
          <p className="text-center text-muted-foreground">Comprehensive showcase of text highlighting techniques</p>
        </div>

        {/* Basic Highlighting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Basic Highlighting</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="bg-primary/20 px-2 py-1 rounded">engaging audio experience</span> with AI technology.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="bg-secondary/30 px-2 py-1 rounded">personalized podcast</span> for you.
            </p>
            <p className="text-lg">
              Different opacity levels: <span className="bg-accent/40 px-2 py-1 rounded">40% opacity</span>, 
              <span className="bg-accent/60 px-2 py-1 rounded ml-2">60% opacity</span>, 
              <span className="bg-accent/80 px-2 py-1 rounded ml-2">80% opacity</span>
            </p>
          </div>
        </section>

        {/* Marker Style Highlighting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Marker Style Highlighting</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="relative">
                <span className="absolute inset-0 bg-yellow-300/70 -rotate-1 rounded-sm transform -skew-x-6"></span>
                <span className="relative px-1">engaging audio experience</span>
              </span> with advanced AI.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="relative">
                <span className="absolute inset-0 bg-green-300/60 rotate-1 rounded-sm transform skew-x-3"></span>
                <span className="relative px-1">personalized podcast</span>
              </span> just for you.
            </p>
            <p className="text-lg">
              Multiple markers: <span className="relative">
                <span className="absolute inset-0 bg-pink-300/50 -rotate-2 rounded-sm"></span>
                <span className="absolute inset-0 bg-blue-300/50 rotate-1 rounded-sm transform translate-x-1"></span>
                <span className="relative px-1">overlapping effect</span>
              </span>
            </p>
          </div>
        </section>

        {/* Underline Highlighting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Underline Highlighting</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="border-b-4 border-primary/60">engaging audio experience</span> today.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="border-b-2 border-dashed border-accent">personalized podcast</span> for you.
            </p>
            <p className="text-lg">
              Animated underline: <span className="relative group">
                <span className="group-hover:border-b-4 border-secondary transition-all duration-300">hover me</span>
              </span>
            </p>
            <p className="text-lg">
              Wavy underline: <span className="relative">
                <span>special text</span>
                <svg className="absolute bottom-0 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,5 Q25,0 50,5 T100,5" stroke="hsl(var(--primary))" strokeWidth="2" fill="none"/>
                </svg>
              </span>
            </p>
          </div>
        </section>

        {/* Shadow-Based Highlighting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Shadow-Based Highlighting</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="text-primary" style={{textShadow: '0 0 10px hsl(var(--primary)), 0 0 20px hsl(var(--primary)), 0 0 30px hsl(var(--primary))'}}>engaging audio experience</span> with neon glow.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="text-secondary" style={{textShadow: '2px 2px 0 hsl(var(--secondary)), 4px 4px 0 hsl(var(--secondary)/0.7), 6px 6px 0 hsl(var(--secondary)/0.4)'}}>personalized podcast</span> with depth.
            </p>
            <p className="text-lg">
              Multiple shadows: <span style={{textShadow: '1px 1px 0 hsl(var(--primary)), -1px -1px 0 hsl(var(--accent)), 2px 2px 4px hsl(var(--secondary)/0.5)'}}>colorful text</span>
            </p>
          </div>
        </section>

        {/* Border Highlighting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Border Highlighting</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="border-2 border-primary px-2 py-1 rounded-lg">engaging audio experience</span> quickly.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="border-l-4 border-accent pl-2">personalized podcast</span> for you.
            </p>
            <p className="text-lg">
              Dashed borders: <span className="border-2 border-dashed border-secondary px-2 py-1 rounded">highlighted text</span>
            </p>
            <p className="text-lg">
              Pill border: <span className="border-2 border-primary px-4 py-1 rounded-full">pill shape</span>
            </p>
          </div>
        </section>

        {/* Gradient Highlighting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Gradient Highlighting</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="bg-gradient-to-r from-primary/30 to-accent/30 px-2 py-1 rounded">engaging audio experience</span> seamlessly.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="bg-gradient-to-r from-secondary/20 via-primary/20 to-accent/20 px-2 py-1 rounded">personalized podcast</span> for you.
            </p>
            <p className="text-lg">
              Radial gradient: <span className="bg-gradient-radial from-primary/40 to-transparent px-3 py-1 rounded">centered highlight</span>
            </p>
          </div>
        </section>

        {/* Interactive Highlighting */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Interactive Highlighting</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="hover:bg-primary/20 transition-all duration-300 px-2 py-1 rounded cursor-pointer">engaging audio experience</span> (hover me).
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="group relative cursor-pointer">
                <span className="group-hover:bg-accent/30 transition-all duration-500 px-2 py-1 rounded">personalized podcast</span>
                <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-0.5 bg-accent transition-all duration-500"></span>
              </span> for you.
            </p>
          </div>
        </section>

        {/* Creative Effects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Creative Effects</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="bg-primary/20 px-3 py-2 rounded-lg shadow-lg shadow-primary/20 border border-primary/30">engaging audio experience</span> with sticker effect.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="inline-flex items-center bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium shadow-sm">personalized podcast</span> badge.
            </p>
            <p className="text-lg">
              Torn paper effect: <span className="relative bg-accent/30 px-3 py-1" style={{
                clipPath: 'polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%, 5% 50%)'
              }}>highlighted text</span>
            </p>
            <p className="text-lg">
              3D effect: <span className="bg-primary text-primary-foreground px-3 py-2 rounded transform hover:scale-105 transition-transform shadow-lg" style={{
                boxShadow: '0 4px 0 hsl(var(--primary)), 0 8px 20px hsl(var(--primary)/0.3)'
              }}>pop-up text</span>
            </p>
          </div>
        </section>

        {/* Combined Effects */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Combined Effects</h2>
          <div className="space-y-4">
            <p className="text-lg">
              Transform any PDF into an <span className="relative bg-gradient-to-r from-primary/20 to-accent/20 border-l-4 border-primary px-3 py-2 rounded-r-lg shadow-md">
                engaging audio experience
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse"></span>
              </span> with multiple effects.
            </p>
            <p className="text-lg">
              Upload your document and let AI create a <span className="relative group">
                <span className="bg-secondary/30 border-2 border-dashed border-secondary px-3 py-1 rounded-full group-hover:bg-secondary/50 transition-all duration-300">personalized podcast</span>
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">✨ Magic!</span>
              </span> for you.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Test3;