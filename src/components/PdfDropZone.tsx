import { useState } from "react";
import { Upload, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const PdfDropZone = () => {
  const [isDragOver, setIsDragOver] = useState(false);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    // Handle file drop logic here
  };

  return (
    <div className="flex-1 flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl">
        {/* Main Heading with Marker Effect */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1">
            Your Books into your Podcasts
          </h1>
        </div>
        
        {/* Explanatory Text */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-lg text-muted-foreground">Transform any PDF into an engaging audio experience</p>
          <p className="text-lg text-muted-foreground">Upload your document and let AI create a personalized podcast for you</p>
        </div>
        
        {/* Pointing Arrow */}
        <div className="text-center mb-8">
          <ArrowDown className="h-8 w-8 text-accent mx-auto animate-bounce" />
        </div>
        {/* Minimalist Drop Zone */}
        <div
          className={`
            relative border border-dashed rounded-lg p-16 text-center transition-all duration-300
            ${isDragOver 
              ? 'border-accent bg-accent/5' 
              : 'border-border hover:border-accent/60'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-8">
            <Upload className={`h-12 w-12 transition-colors duration-300 ${
              isDragOver ? 'text-accent' : 'text-muted-foreground'
            }`} />
            
            <div className="space-y-3">
              <h2 className="text-xl font-medium text-foreground">
                Drop PDF here
              </h2>
              <p className="text-muted-foreground text-sm">
                or click to browse
              </p>
            </div>

            <Button 
              variant="outline" 
              size="sm"
              className="mt-4"
            >
              Browse Files
            </Button>
          </div>
        </div>

        {/* Simple info */}
        <p className="mt-4 text-center text-xs text-muted-foreground">
          PDF up to 50MB
        </p>
      </div>
    </div>
  );
};

export default PdfDropZone;