import { useState } from "react";
import { Search, Filter, MoreVertical, Play, Edit3, Download, Trash2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";

const MyBooks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [bookType, setBookType] = useState("all");
  const [processingStatus, setProcessingStatus] = useState("all");
  const [sortBy, setSortBy] = useState("upload-date");
  const [order, setOrder] = useState("newest");
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
      cover: "/placeholder.svg"
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
      cover: "/placeholder.svg"
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
      cover: "/placeholder.svg"
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
      cover: "/placeholder.svg"
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
      cover: "/placeholder.svg"
    }
  ];

  const stats = [
    { label: "Total Books", value: "10", icon: "📚" },
    { label: "Completed Chapters", value: "146", icon: "✅" },
    { label: "Total Audio", value: "19h 22m", icon: "🎧" },
    { label: "Storage Used", value: "47.6 MB", icon: "💾" }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Completed</Badge>;
      case "Errors":
        return <Badge variant="destructive">Errors</Badge>;
      case "Self Improvement":
        return <Badge className="bg-accent text-accent-foreground">Self Improvement</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const handleSelectBook = (bookId: string) => {
    setSelectedBooks(prev => 
      prev.includes(bookId) 
        ? prev.filter(id => id !== bookId)
        : [...prev, bookId]
    );
  };

  const handleSelectAll = () => {
    setSelectedBooks(selectedBooks.length === books.length ? [] : books.map(book => book.id));
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground flex items-center gap-3">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
              📚
            </div>
            Book Management
          </h1>
          <p className="text-muted-foreground mt-1">Manage your book library and processing pipeline</p>
        </div>
        <Button variant="outline" size="sm" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border border-border">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="text-2xl">{stat.icon}</div>
                <div>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Filters & Search */}
      <Card className="border border-border">
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <h3 className="font-medium text-foreground">Filters & Search</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Search Books</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, author..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Book Type</label>
              <Select value={bookType} onValueChange={setBookType}>
                <SelectTrigger>
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="self-improvement">Self Improvement</SelectItem>
                  <SelectItem value="fiction">Fiction</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Processing Status</label>
              <Select value={processingStatus} onValueChange={setProcessingStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="All Statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="errors">Errors</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger>
                  <SelectValue placeholder="Upload Date" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upload-date">Upload Date</SelectItem>
                  <SelectItem value="title">Title</SelectItem>
                  <SelectItem value="author">Author</SelectItem>
                  <SelectItem value="size">Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Order</label>
              <Select value={order} onValueChange={setOrder}>
                <SelectTrigger>
                  <SelectValue placeholder="Newest First" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Books Table */}
      <Card className="border border-border">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-foreground">📚 Books ({books.length})</h3>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSelectAll}
              className="gap-2"
            >
              Select All
            </Button>
          </div>

          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 pb-4 border-b border-border text-sm font-medium text-muted-foreground">
            <div className="col-span-1">Select</div>
            <div className="col-span-3">Book</div>
            <div className="col-span-1">Author</div>
            <div className="col-span-1">Type</div>
            <div className="col-span-1">Status</div>
            <div className="col-span-1">Progress</div>
            <div className="col-span-1">Audio</div>
            <div className="col-span-1">Size</div>
            <div className="col-span-1">Uploaded</div>
            <div className="col-span-1">Actions</div>
          </div>

          {/* Book Rows */}
          <div className="space-y-4 mt-4">
            {books.map((book) => (
              <div key={book.id} className="grid grid-cols-12 gap-4 items-center py-4 border-b border-border/50 hover:bg-muted/30 transition-colors">
                <div className="col-span-1">
                  <Checkbox
                    checked={selectedBooks.includes(book.id)}
                    onCheckedChange={() => handleSelectBook(book.id)}
                  />
                </div>
                
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-accent rounded"></div>
                    </div>
                    <div>
                      <div className="font-medium text-foreground text-sm">{book.title}</div>
                      <div className="text-xs text-muted-foreground truncate max-w-48">{book.fileName}</div>
                    </div>
                  </div>
                </div>
                
                <div className="col-span-1">
                  <div className="text-sm text-foreground">{book.author}</div>
                </div>
                
                <div className="col-span-1">
                  {getStatusBadge(book.type)}
                </div>
                
                <div className="col-span-1">
                  {getStatusBadge(book.status)}
                </div>
                
                <div className="col-span-1">
                  <div className="space-y-1">
                    <div className="text-xs text-muted-foreground">{book.chapters}</div>
                    <Progress value={book.progress} className="h-2" />
                    <div className="text-xs text-muted-foreground">{book.progress}% complete</div>
                  </div>
                </div>
                
                <div className="col-span-1">
                  <div className="text-sm text-foreground">
                    {book.audio ? (
                      <div className="flex items-center gap-1">
                        <div className="text-xs text-green-600">✓</div>
                        <span className="text-xs">{book.duration}</span>
                      </div>
                    ) : (
                      <div className="text-xs text-muted-foreground">No audio</div>
                    )}
                  </div>
                </div>
                
                <div className="col-span-1">
                  <div className="text-sm text-foreground">{book.size}</div>
                </div>
                
                <div className="col-span-1">
                  <div className="text-sm text-foreground">{book.uploaded}</div>
                </div>
                
                <div className="col-span-1">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-card border border-border">
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Play className="h-4 w-4" />
                        Play
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Edit3 className="h-4 w-4" />
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer">
                        <Download className="h-4 w-4" />
                        Download
                      </DropdownMenuItem>
                      <DropdownMenuItem className="gap-2 cursor-pointer text-destructive">
                        <Trash2 className="h-4 w-4" />
                        Delete
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MyBooks;