import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, ChevronDown, ChevronUp, Download, Edit3, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [showAllChapters, setShowAllChapters] = useState(false);

  // Mock book data - in real app this would come from API
  const book = {
    id: "1",
    title: "Ego is the enemy",
    author: "Ryan Holiday",
    cover: "/lovable-uploads/98374442-0f40-425a-81f5-28294fbcb030.png",
    totalMinutes: 24,
    completedMinutes: 24,
    readAloudMinutes: 24,
    timeSaved: "0:00",
    chapters: [
      { id: 1, title: "ALL THE TALK", status: "FINISHED", duration: "5 min", progress: 100, audioEnabled: true },
      { id: 2, title: "TO BE OR TO DO?", status: "PAUSED", duration: "4 min", progress: 75, audioEnabled: true },
      { id: 3, title: "BECOME A STUDENT", status: "FINISHED", duration: "6 min", progress: 100, audioEnabled: true },
      { id: 4, title: "DON'T BE PASSIONATE", status: "FINISHED", duration: "3 min", progress: 100, audioEnabled: true },
      { id: 5, title: "FOLLOW THE CANVAS STRATEGY", status: "FINISHED", duration: "5 min", progress: 100, audioEnabled: true },
      { id: 6, title: "RESTRAIN YOURSELF", status: "FINISHED", duration: "3 min", progress: 100, audioEnabled: true },
      { id: 7, title: "GET OUT OF YOUR OWN HEAD", status: "FINISHED", duration: "4 min", progress: 100, audioEnabled: true },
      { id: 8, title: "THE DANGER OF EARLY PRIDE", status: "FINISHED", duration: "4 min", progress: 100, audioEnabled: true },
      { id: 9, title: "WORK, WORK, WORK", status: "FINISHED", duration: "5 min", progress: 100, audioEnabled: true },
      { id: 10, title: "FOR EVERYTHING THAT COMES NEXT, EGO IS THE ENEMY", status: "FINISHED", duration: "5 min", progress: 100, audioEnabled: true },
      { id: 11, title: "ALWAYS STAY A STUDENT", status: "FINISHED", duration: "4 min", progress: 100, audioEnabled: true },
      { id: 12, title: "DON'T TELL YOURSELF A STORY", status: "FINISHED", duration: "3 min", progress: 100, audioEnabled: true },
      { id: 13, title: "WHAT'S IMPORTANT TO YOU?", status: "FINISHED", duration: "6 min", progress: 100, audioEnabled: true },
      { id: 14, title: "ENTITLEMENT, CONTROL, AND PARANOIA", status: "FINISHED", duration: "5 min", progress: 100, audioEnabled: true },
      { id: 15, title: "MANAGING YOURSELF", status: "FINISHED", duration: "4 min", progress: 100, audioEnabled: true },
      { id: 16, title: "BEWARE THE DISEASE OF ME", status: "FINISHED", duration: "4 min", progress: 100, audioEnabled: true },
      { id: 17, title: "MEDITATE ON THE IMMENSITY", status: "FINISHED", duration: "6 min", progress: 100, audioEnabled: true },
      { id: 18, title: "MAINTAIN YOUR SOBRIETY", status: "FINISHED", duration: "2 min", progress: 100, audioEnabled: true },
      { id: 19, title: "ALIVE TIME OR DEAD TIME", status: "FINISHED", duration: "3 min", progress: 100, audioEnabled: true },
      { id: 20, title: "THE EFFORT IS ENOUGH", status: "FINISHED", duration: "3 min", progress: 100, audioEnabled: true },
      { id: 21, title: "NEXT WAS YESTERDAY", status: "FINISHED", duration: "6 min", progress: 100, audioEnabled: true },
      { id: 22, title: "DRAW THE LINE", status: "FINISHED", duration: "6 min", progress: 100, audioEnabled: true },
      { id: 23, title: "WHEREVER YOU ARE, WHATEVER YOU'RE DOING, STOP AND DO BETTER", status: "FINISHED", duration: "7 min", progress: 100, audioEnabled: true },
      { id: 24, title: "ALWAYS LOVE", status: "FINISHED", duration: "3 min", progress: 100, audioEnabled: true },
    ]
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "FINISHED":
        return <Badge variant="outline" className="text-xs border-yellow-primary/30 text-yellow-primary bg-yellow-primary/10">Completed</Badge>;
      case "PAUSED":
        return <Badge variant="outline" className="text-xs border-muted-foreground/30 text-muted-foreground bg-muted/50">Paused</Badge>;
      case "IN_PROGRESS":
        return <Badge variant="outline" className="text-xs border-accent/30 text-accent bg-accent/10">In Progress</Badge>;
      default:
        return <Badge variant="outline" className="text-xs">{status}</Badge>;
    }
  };

  // Get current chapter (first non-finished) and next few chapters
  const currentChapterIndex = book.chapters.findIndex(ch => ch.status !== "FINISHED");
  const visibleChapters = showAllChapters 
    ? book.chapters 
    : book.chapters.slice(Math.max(0, currentChapterIndex - 1), currentChapterIndex + 4);
  
  const completedChapters = book.chapters.filter(ch => ch.status === "FINISHED").length;
  const progressPercentage = Math.round((completedChapters / book.chapters.length) * 100);

  const toggleChapterSelection = (chapterId: string) => {
    setSelectedChapter(selectedChapter === chapterId ? null : chapterId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink 
                    onClick={() => navigate("/my-books")} 
                    className="cursor-pointer flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <Home className="h-4 w-4" />
                    My Books
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium">{book.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/my-books")}
              className="font-sans"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Book Cover */}
            <div className="flex-shrink-0">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-48 h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Book Details */}
            <div className="flex-1 space-y-6">
              <div>
                <h1 className="text-4xl font-space font-bold text-foreground mb-2">{book.title}</h1>
                <p className="text-xl text-muted-foreground font-sans">by {book.author}</p>
              </div>
              
              {/* Progress Circle */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full border-4 border-muted flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{progressPercentage}%</div>
                      <div className="text-xs text-muted-foreground">Complete</div>
                    </div>
                  </div>
                  <Progress 
                    value={progressPercentage} 
                    className="absolute inset-0 w-24 h-24 rounded-full opacity-20"
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{completedChapters} of {book.chapters.length} chapters completed</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>{book.totalMinutes} minutes total</span>
                  </div>
                </div>
              </div>
              
              {/* Primary Action */}
              <div className="flex gap-3">
                <Button size="lg" className="bg-yellow-primary hover:bg-yellow-primary/90 text-foreground font-medium">
                  <Play className="h-5 w-5 mr-2" />
                  Continue Reading
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="h-5 w-5 mr-2" />
                  Download All
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Chapters Section */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-space font-semibold text-foreground">Chapters</h2>
            <div className="text-sm text-muted-foreground">
              {showAllChapters ? book.chapters.length : visibleChapters.length} of {book.chapters.length} chapters
            </div>
          </div>
          
          {/* Chapter List */}
          <div className="space-y-1 bg-card rounded-lg border">
            {visibleChapters.map((chapter, index) => (
              <div
                key={chapter.id}
                className={`flex items-center gap-4 p-4 hover:bg-muted/30 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                  selectedChapter === chapter.id.toString() ? 'bg-yellow-primary/10 border-l-4 border-yellow-primary' : ''
                }`}
              >
                {/* Chapter Number */}
                <div className="text-sm font-medium text-muted-foreground w-8 text-center font-sans">
                  {chapter.id}
                </div>

                {/* Chapter Title and Status */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h4 className="font-space font-medium text-foreground truncate">{chapter.title}</h4>
                    {getStatusBadge(chapter.status)}
                  </div>
                  {chapter.status === "PAUSED" && (
                    <div className="text-xs text-muted-foreground font-sans">75% complete</div>
                  )}
                </div>

                {/* Duration */}
                <div className="text-sm text-muted-foreground font-sans flex-shrink-0">
                  {chapter.duration}
                </div>

                {/* Play Button */}
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 flex-shrink-0 hover:bg-yellow-primary/20"
                  onClick={() => toggleChapterSelection(chapter.id.toString())}
                >
                  <Play className="h-4 w-4" />
                </Button>
              </div>
            ))}
            
            {/* Show More/Less Button */}
            {book.chapters.length > 4 && (
              <div className="p-4 border-t">
                <Button
                  variant="ghost"
                  onClick={() => setShowAllChapters(!showAllChapters)}
                  className="w-full text-muted-foreground hover:text-foreground"
                >
                  {showAllChapters ? (
                    <>
                      <ChevronUp className="h-4 w-4 mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4 mr-2" />
                      Show All {book.chapters.length} Chapters
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;