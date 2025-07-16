import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Pause, SkipForward, SkipBack, MoreHorizontal, Download, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);

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
    const baseClasses = "text-xs font-medium px-2 py-1";
    switch (status) {
      case "FINISHED":
        return <Badge className={`${baseClasses} bg-yellow-primary/20 text-yellow-primary border-yellow-primary/30`}>{status}</Badge>;
      case "PAUSED":
        return <Badge className={`${baseClasses} bg-orange-500/20 text-orange-600 border-orange-500/30`}>{status}</Badge>;
      case "IN_PROGRESS":
        return <Badge className={`${baseClasses} bg-blue-500/20 text-blue-600 border-blue-500/30`}>{status}</Badge>;
      default:
        return <Badge className={`${baseClasses} bg-muted text-muted-foreground`}>{status}</Badge>;
    }
  };

  const toggleChapterSelection = (chapterId: string) => {
    setSelectedChapter(selectedChapter === chapterId ? null : chapterId);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/my-books")}
              className="font-sans"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Library
            </Button>
            
            <div className="flex items-center gap-4 ml-4">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-12 h-16 object-cover rounded border"
              />
              <div>
                <h1 className="text-xl font-semibold text-foreground">{book.title}</h1>
                <p className="text-sm text-muted-foreground font-sans">by {book.author}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Book Overview */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="font-sans">Book Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{book.totalMinutes}</div>
                <div className="text-sm text-muted-foreground font-sans">Total Minutes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{book.completedMinutes}</div>
                <div className="text-sm text-muted-foreground font-sans">Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">{book.readAloudMinutes}</div>
                <div className="text-sm text-muted-foreground font-sans">Read Aloud</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-500">{book.timeSaved}</div>
                <div className="text-sm text-muted-foreground font-sans">Time Saved</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chapters */}
        <Card>
          <CardHeader>
            <CardTitle className="font-sans">Chapters ({book.chapters.length})</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0">
              {book.chapters.map((chapter, index) => (
                <div
                  key={chapter.id}
                  className={`flex items-center gap-4 p-4 border-b border-border last:border-b-0 hover:bg-muted/30 transition-colors ${
                    selectedChapter === chapter.id.toString() ? 'bg-accent/10' : ''
                  }`}
                >
                  {/* Chapter Number */}
                  <div className="text-sm font-medium text-muted-foreground w-12 font-sans">
                    Chapter {chapter.id}
                  </div>

                  {/* Chapter Title and Status */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h4 className="font-medium text-foreground">{chapter.title}</h4>
                      {getStatusBadge(chapter.status)}
                    </div>
                    <div className="text-sm text-muted-foreground font-sans">
                      Status: {chapter.status.toLowerCase().replace('_', ' ')}
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="text-sm text-muted-foreground font-sans min-w-16">
                    {chapter.duration}
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-0"
                      onClick={() => toggleChapterSelection(chapter.id.toString())}
                    >
                      <Play className="h-4 w-4" />
                    </Button>
                    
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-card font-sans">
                        <DropdownMenuItem>
                          <Download className="h-4 w-4 mr-2" />
                          Download Audio
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit3 className="h-4 w-4 mr-2" />
                          Edit Chapter
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
    </div>
  );
};

export default BookDetail;