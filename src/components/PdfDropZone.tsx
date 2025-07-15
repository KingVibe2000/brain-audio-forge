import { useState } from "react";
import { Upload, FileText, Headphones, ArrowRight } from "lucide-react";
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
    <div className="flex-1 flex items-center justify-center p-8">
      <div className="w-full max-w-4xl">
        {/* Process Illustration */}
        <div className="flex items-center justify-center mb-8 space-x-8">
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
              <FileText className="h-8 w-8 text-muted-foreground" />
            </div>
            <span className="text-sm text-muted-foreground font-medium">PDF Book</span>
          </div>
          
          <ArrowRight className="h-6 w-6 text-accent" />
          
          <div className="flex flex-col items-center space-y-2">
            <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
              <Headphones className="h-8 w-8 text-accent-foreground" />
            </div>
            <span className="text-sm text-foreground font-medium">Podcast</span>
          </div>
        </div>

        {/* Drop Zone */}
        <div
          className={`
            relative border-2 border-dashed rounded-2xl p-12 text-center transition-all duration-200
            ${isDragOver 
              ? 'border-accent bg-yellow-soft scale-[1.02]' 
              : 'border-border bg-card hover:border-accent/50 hover:bg-yellow-soft/30'
            }
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex flex-col items-center space-y-6">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-colors duration-200 ${
              isDragOver ? 'bg-accent' : 'bg-muted'
            }`}>
              <Upload className={`h-10 w-10 ${
                isDragOver ? 'text-accent-foreground' : 'text-muted-foreground'
              }`} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-foreground">
                Drop your PDF book here
              </h3>
              <p className="text-muted-foreground max-w-md">
                Drag and drop your PDF file or click to browse. 
                We'll transform it into an engaging podcast experience.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                className="border-border hover:border-accent hover:bg-yellow-soft"
              >
                Browse Files
              </Button>
              <span className="text-sm text-muted-foreground">or</span>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start Converting
              </Button>
            </div>
          </div>

          {/* Visual indicator */}
          <div className={`absolute inset-0 rounded-2xl transition-opacity duration-200 pointer-events-none ${
            isDragOver ? 'bg-accent/10 opacity-100' : 'opacity-0'
          }`} />
        </div>

        {/* Additional Info */}
        <div className="mt-6 text-center text-sm text-muted-foreground">
          Supported formats: PDF • Maximum size: 50MB
        </div>
      </div>
    </div>
  );
};

export default PdfDropZone;