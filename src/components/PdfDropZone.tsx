import { useState } from "react";
import { Upload, ArrowDown, Book, X, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import booksBackground from "@/assets/books-background.png";

const PdfDropZone = () => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [bookType, setBookType] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [coverImageDragOver, setCoverImageDragOver] = useState(false);

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
    
    const files = e.dataTransfer.files;
    if (files.length > 0 && files[0].type === 'application/pdf') {
      setUploadedFile(files[0]);
      setBookTitle(files[0].name.replace('.pdf', ''));
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0 && files[0].type === 'application/pdf') {
      setUploadedFile(files[0]);
      setBookTitle(files[0].name.replace('.pdf', ''));
    }
  };

  const removeFile = () => {
    setUploadedFile(null);
    setBookTitle("");
    setAuthorName("");
    setBookType("");
  };

  const handleCoverImageDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setCoverImageDragOver(true);
  };

  const handleCoverImageDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setCoverImageDragOver(false);
  };

  const handleCoverImageDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setCoverImageDragOver(false);
    // Handle cover image logic here
  };

  return (
    <div className="flex-1 flex items-center justify-center px-8 pt-8 pb-16">
      <div className="w-full max-w-2xl">
        {/* Main Heading with Marker Effect */}
        <div className="text-center mb-8 relative">
          <div 
            className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-10 pointer-events-none"
            style={{
              backgroundImage: `url(${booksBackground})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              filter: 'grayscale(100%)'
            }}
          />
          <h1 className="text-6xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 font-work relative z-10" style={{boxShadow: '6px 8px 3px 0 rgba(0, 0, 0, 0.8), 10px 12px 25px 0 rgba(0, 0, 0, 0.35)'}}>
            Books into Podcasts
          </h1>
        </div>
        
        {/* Explanatory Text */}
        <div className="text-center mb-8 space-y-2">
          <p className="text-xl text-muted-foreground">Transform any PDF into an engaging audio experience</p>
          <p className="text-xl text-muted-foreground">Upload your document and let AI create a personalized podcast for you</p>
        </div>
        
        {/* Pointing Arrow - only show when no file uploaded */}
        {!uploadedFile && (
          <div className="text-center mb-8">
            <ArrowDown className="h-12 w-12 text-accent mx-auto animate-bounce" />
          </div>
        )}
        
        {!uploadedFile ? (
          /* Drop Zone */
          <div
            className={`
              relative border-4 border-dashed rounded-lg p-16 text-center transition-all duration-300
              ${isDragOver 
                ? 'border-accent bg-accent/5' 
                : 'border-muted-foreground/30 hover:border-accent/60'
              }
            `}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="flex flex-col items-center space-y-8">
              <div className={`h-12 w-12 rounded-full transition-colors duration-300 ${
                isDragOver ? 'bg-accent' : 'bg-accent/80'
              }`} />
              
              <div className="space-y-3">
                <h2 className="text-xl font-medium text-foreground">
                  Drop PDF here
                </h2>
              </div>

              <input
                type="file"
                accept=".pdf"
                onChange={handleFileInput}
                className="hidden"
                id="file-input"
              />
              <Button 
                variant="outline" 
                size="sm"
                className="mt-4"
                onClick={() => document.getElementById('file-input')?.click()}
              >
                Browse Files
              </Button>
            </div>
          </div>
        ) : (
          /* Upload Form */
          <div className="space-y-8 max-w-2xl mx-auto">
            {/* Uploaded File Display */}
            <div className="flex items-center justify-between p-6 bg-card border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Book className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{uploadedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={removeFile} className="hover:bg-destructive/10 hover:text-destructive">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Form Steps with Numbers and Dotted Lines */}
            <div className="relative">
              {/* Vertical Dotted Line */}
              <div className="absolute left-3 top-6 bottom-6 w-px border-l-2 border-dotted border-muted-foreground/10"></div>
              
              <div className="space-y-8">
                {/* Book Type */}
                <div className="relative flex gap-6 items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium relative z-10 ring-4 ring-background mt-1">
                    1
                  </div>
                  <div className="flex-1 space-y-3">
                    <Label htmlFor="book-type" className="text-lg font-medium text-foreground">
                      Book Type <span className="text-accent">*</span>
                    </Label>
                    <Select value={bookType} onValueChange={setBookType}>
                      <SelectTrigger id="book-type" className="w-full h-12 text-base">
                        <SelectValue placeholder="Select book type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="business">Business Book</SelectItem>
                        <SelectItem value="fiction">Fiction</SelectItem>
                        <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                        <SelectItem value="educational">Educational</SelectItem>
                        <SelectItem value="biography">Biography</SelectItem>
                        <SelectItem value="self-help">Self-Help</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Book Title and Author */}
                <div className="relative flex gap-6 items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium relative z-10 ring-4 ring-background mt-1">
                    2
                  </div>
                  <div className="flex-1 space-y-3">
                    <Label className="text-lg font-medium text-foreground">
                      Book Details
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="book-title" className="text-lg font-medium text-foreground">
                          Book Title <span className="text-accent">*</span>
                        </Label>
                        <Input
                          id="book-title"
                          value={bookTitle}
                          onChange={(e) => setBookTitle(e.target.value)}
                          placeholder="Enter book title"
                          className="h-12 text-base"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="author-name" className="text-lg font-medium text-foreground">
                          Author Name
                        </Label>
                        <Input
                          id="author-name"
                          value={authorName}
                          onChange={(e) => setAuthorName(e.target.value)}
                          placeholder="Enter author name"
                          className="h-12 text-base"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Book Cover Image */}
                <div className="relative flex gap-6 items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium relative z-10 ring-4 ring-background mt-1">
                    3
                  </div>
                  <div className="flex-1 space-y-3">
                    <Label className="text-lg font-medium text-foreground">
                      Book Cover Image
                    </Label>
                    <p className="text-muted-foreground">
                      Add a cover image to display in the podcast player
                    </p>
                    <div
                      className={`
                        border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300
                        ${coverImageDragOver 
                          ? 'border-accent bg-accent/5' 
                          : 'border-border hover:border-accent/60'
                        }
                      `}
                      onDragOver={handleCoverImageDragOver}
                      onDragLeave={handleCoverImageDragLeave}
                      onDrop={handleCoverImageDrop}
                    >
                      <div className="flex flex-col items-center space-y-4">
                        <div className="p-3 bg-accent/10 rounded-full">
                          <Image className="h-6 w-6 text-accent" />
                        </div>
                        <div>
                          <p className="text-foreground">Click or drag cover image here</p>
                          <p className="text-sm text-muted-foreground mt-1">JPEG, PNG, or WebP • Max 5MB</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Upload Button */}
                <div className="relative flex gap-6 items-start">
                  <div className="w-6 h-6 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-medium relative z-10 ring-4 ring-background mt-1">
                    4
                  </div>
                  <div className="flex-1">
                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-6 text-lg font-medium font-work shadow-lg flex items-center justify-center gap-3">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                      Upload and Extract Bookmarks
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Simple info - only show when no file uploaded */}
        {!uploadedFile && (
          <p className="mt-4 text-center text-xs text-muted-foreground">
            PDF up to 50MB
          </p>
        )}
      </div>
    </div>
  );
};

export default PdfDropZone;