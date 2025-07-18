import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, RefreshCw, Book, CheckCircle, Headphones, HardDrive, Play, Download, Edit, Trash2, MoreHorizontal, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const MyBooks = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooks, setSelectedBooks] = useState<string[]>([]);

  // Mock data for books
  const books = [
    {
      id: "1",
      title: "Ego is the enemy",
      fileName: "Ocean/PDF.com_Ego_is_the_enemy_-_Ryan_Holiday.pdf",
      author: "Ryan Holiday",
      type: "Business",
      status: "Completed",
      progress: 100,
      chapters: "24/24",
      audio: false,
      size: "1.8 MB",
      uploaded: "15.7.2025",
      cover: "/lovable-uploads/98374442-0f40-425a-81f5-28294fbcb030.png"
    },
    {
      id: "2", 
      title: "Sell with a Story",
      fileName: "Ocean/PDF.com_Sell_with_a_Story_-_Paul_Smith.pdf",
      author: "Paul Smith",
      type: "Business",
      status: "Completed", 
      progress: 100,
      chapters: "3/3",
      audio: false,
      size: "8.4 MB",
      uploaded: "17.7.2025",
      cover: "/lovable-uploads/98374442-0f40-425a-81f5-28294fbcb030.png"
    },
    {
      id: "3",
      title: "Your next five moves",
      fileName: "Ocean/PDF.com_Your_next_five_moves_-_Patrick_bet_David.pdf", 
      author: "Patrick bet David",
      type: "Business",
      status: "Errors",
      progress: 93,
      chapters: "14/15",
      audio: false,
      size: "6.6 MB",
      uploaded: "10.7.2025",
      cover: "/lovable-uploads/98374442-0f40-425a-81f5-28294fbcb030.png"
    },
    {
      id: "4",
      title: "Ultralearning",
      fileName: "Ocean/PDF.com_Ultralearning_-_Scott_Young.pdf",
      author: "Scott Young", 
      type: "Self Improvement",
      status: "Errors",
      progress: 93,
      chapters: "14/14",
      audio: false,
      size: "1.3 MB",
      uploaded: "10.7.2025",
      cover: "/lovable-uploads/98374442-0f40-425a-81f5-28294fbcb030.png"
    },
    {
      id: "5",
      title: "Clear Thinking",
      fileName: "Ocean/PDF.com_Clear_Thinking_-_Shane_Parrish.pdf",
      author: "Shane Parrish",
      type: "Business", 
      status: "Completed",
      progress: 100,
      chapters: "27/27",
      audio: true,
      duration: "5h 0m",
      size: "4 MB",
      uploaded: "9.7.2025",
      cover: "/lovable-uploads/98374442-0f40-425a-81f5-28294fbcb030.png"
    },
    {
      id: "6",
      title: "The Psychology of Money",
      fileName: "Ocean/PDF.com_Psychology_Money_-_Morgan_Housel.pdf",
      author: "Morgan Housel",
      type: "Finance", 
      status: "Processing",
      progress: 45,
      chapters: "12/20",
      audio: false,
      size: "3.2 MB",
      uploaded: "20.7.2025",
      cover: "/lovable-uploads/98374442-0f40-425a-81f5-28294fbcb030.png"
    }
  ];

  const stats = [
    { label: "Total Books", value: "10", icon: Book },
    { label: "Completed Chapters", value: "146", icon: CheckCircle },
    { label: "Total Audio", value: "19h 22m", icon: Headphones },
    { label: "Storage Used", value: "47.6 MB", icon: HardDrive }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/20 dark:text-green-400 border-0">Completed</Badge>;
      case "Errors":
        return <Badge variant="destructive" className="border-0">Errors</Badge>;
      case "Processing":
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400 border-0">Processing</Badge>;
      default:
        return <Badge variant="secondary" className="border-0">{status}</Badge>;
    }
  };

  const getProgressColor = (progress: number, status: string) => {
    if (status === "Errors") return "bg-destructive";
    if (progress === 100) return "bg-green-500";
    return "bg-accent";
  };

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || book.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const isSelected = (bookId: string) => selectedBooks.includes(bookId);

  const toggleBookSelection = (bookId: string) => {
    setSelectedBooks(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  return (
    <div className="px-4 md:px-6 py-8">
      <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground relative font-space">
            My Books
            <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-accent"></div>
          </h1>
          <p className="text-muted-foreground mt-3 font-sans">
            Your personal library of audiobooks and documents 
            <span className="ml-2 inline-flex items-center gap-1 px-2 py-1 bg-muted text-foreground rounded-full text-sm font-medium font-sans">
              <Book className="h-3 w-3" />
              {books.length} books
            </span>
          </p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by title or author..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Books</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="processing">Processing</SelectItem>
            <SelectItem value="errors">Has Errors</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Selected Books Actions */}
      {selectedBooks.length > 0 && (
        <Card className="border-accent/20 bg-accent/5">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">
                {selectedBooks.length} book{selectedBooks.length > 1 ? 's' : ''} selected
              </span>
              <div className="flex gap-2">
                <Button size="sm" variant="outline">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setSelectedBooks([])}>
                  Clear
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Books Grid - adjusted for book cover aspect ratio */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Card 
            key={book.id} 
            className={`group border transition-all duration-200 hover:shadow-lg hover:scale-105 cursor-pointer ${
              isSelected(book.id) ? 'ring-2 ring-accent bg-accent/5' : 'hover:border-accent/30'
            }`}
            onClick={() => toggleBookSelection(book.id)}
          >
            <CardContent className="p-0">
              {/* Status Header - full width at top with rounded corners */}
              <div className="w-full px-3 py-2 flex items-center justify-between bg-card border-b rounded-t-lg">
                {getStatusBadge(book.status)}
                {/* Selection Indicator moved to header */}
                {isSelected(book.id) && (
                  <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                    <CheckCircle className="h-3 w-3 text-accent-foreground" />
                  </div>
                )}
              </div>

              {/* Book Cover with gradient background and rounded cover image */}
              <div className="relative bg-gradient-to-br from-muted via-muted/80 to-muted/60 p-4 min-h-[280px] flex items-center justify-center">
                <img 
                  src={book.cover} 
                  alt={book.title}
                  className="max-w-full max-h-[240px] object-contain rounded-lg shadow-lg"
                />

                {/* Progress Overlay for incomplete books */}
                {book.progress < 100 && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-2">
                    <div className="flex items-center gap-2 text-white text-xs">
                      <div className={`h-1 rounded-full ${getProgressColor(book.progress, book.status)}`} 
                           style={{ width: `${book.progress}%` }}></div>
                      <span>{book.progress}%</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Book Info - more compact for smaller cards */}
              <div className="p-3 space-y-2">
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2 text-sm leading-tight">
                    {book.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{book.author}</p>
                </div>

                {/* Audio indicator */}
                {book.audio && (
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <Headphones className="h-3 w-3" />
                    <span>{book.duration}</span>
                  </div>
                )}

                {/* Progress - with light green color */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-xs">{book.chapters}</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-1.5">
                    <div 
                      className="bg-green-400 h-1.5 rounded-full transition-all duration-300" 
                      style={{ width: `${book.progress}%` }}
                    />
                  </div>
                </div>

                {/* Actions - more compact */}
                <div className="flex gap-1 pt-1" onClick={(e) => e.stopPropagation()}>
                  <Button size="sm" className="flex-1 gap-1 bg-accent hover:bg-accent/90 text-accent-foreground text-xs h-7">
                    <Play className="h-3 w-3" />
                    Play
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button size="sm" variant="outline" className="px-2 h-7">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => navigate(`/book/${book.id}`)}>
                        <Edit className="h-4 w-4 mr-2" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="h-4 w-4 mr-2" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Empty State */}
      {filteredBooks.length === 0 && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <Book className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2 font-space">No books found</h3>
            <p className="text-muted-foreground text-center max-w-md">
              {searchQuery || statusFilter !== "all" 
                ? "Try adjusting your search or filter criteria."
                : "Upload your first book to get started with your digital library."
              }
            </p>
          </CardContent>
        </Card>
      )}
      </div>
    </div>
  );
};

export default MyBooks;