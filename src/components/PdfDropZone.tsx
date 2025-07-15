import { useState } from "react";
import { Upload, ArrowDown, FileText, X, Image } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

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
    <div className="flex-1 flex items-center justify-center px-8 py-16">
      <div className="w-full max-w-2xl">
        {/* Main Heading with Marker Effect */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-medium text-foreground inline-block bg-accent px-3 py-1 rounded-sm transform -rotate-1 shadow-lg font-work">
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
                : 'border-border hover:border-accent/60'
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
          <div className="space-y-6">
            {/* Uploaded File Display */}
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-red-100 rounded-lg">
                  <FileText className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{uploadedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" onClick={removeFile}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Book Type */}
            <div className="space-y-2">
              <Label htmlFor="book-type" className="text-base font-medium">
                Book Type <span className="text-red-500">*</span>
              </Label>
              <Select value={bookType} onValueChange={setBookType}>
                <SelectTrigger id="book-type" className="w-full">
                  <SelectValue placeholder="Business Book" />
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

            {/* Book Title and Author */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="book-title" className="text-base font-medium">
                  Book Title <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="book-title"
                  value={bookTitle}
                  onChange={(e) => setBookTitle(e.target.value)}
                  placeholder="Enter book title"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="author-name" className="text-base font-medium">
                  Author Name
                </Label>
                <Input
                  id="author-name"
                  value={authorName}
                  onChange={(e) => setAuthorName(e.target.value)}
                  placeholder="Enter author name"
                />
              </div>
            </div>

            {/* Book Cover Image */}
            <div className="space-y-2">
              <Label className="text-base font-medium">
                Book Cover Image (Optional)
              </Label>
              <p className="text-sm text-muted-foreground mb-4">
                Add a cover image to display in the podcast player
              </p>
              <div
                className={`
                  border-2 border-dashed rounded-lg p-12 text-center transition-all duration-300
                  ${coverImageDragOver 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border hover:border-primary/60'
                  }
                `}
                onDragOver={handleCoverImageDragOver}
                onDragLeave={handleCoverImageDragLeave}
                onDrop={handleCoverImageDrop}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <Image className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Click or drag cover image here</p>
                    <p className="text-sm text-muted-foreground mt-1">JPEG, PNG, or WebP • Max 5MB</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upload Button */}
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg font-medium">
              Upload and Extract Bookmarks
            </Button>
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