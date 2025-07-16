import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Play, Pause, SkipBack, SkipForward, ChevronLeft, Check, Bookmark, FileText, RotateCcw, RotateCw, Settings, ScrollText, X, ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Chapter {
  id: number;
  title: string;
  duration: string;
  audioUrl: string;
  completed: boolean;
  bookmarked: boolean;
  summary: string;
  pdfUrl: string;
}

const Player = () => {
  const navigate = useNavigate();
  const audioRef = useRef<HTMLAudioElement>(null);
  
  // Mock data - replace with real data from your backend
  const bookData = {
    title: "Ego is the Enemy",
    author: "Ryan Holiday",
    currentChapter: 1,
    totalChapters: 24
  };

  const chapters: Chapter[] = [
    { 
      id: 1, 
      title: "Talk, Talk, Talk", 
      duration: "5:24", 
      audioUrl: "", 
      completed: true, 
      bookmarked: false,
      summary: "This chapter explores the danger of talking too much and not acting enough. It emphasizes how constant discussion can become a substitute for real work and progress.",
      pdfUrl: "/pdf/chapter-1.pdf"
    },
    { 
      id: 2, 
      title: "To Be or To Do", 
      duration: "4:56", 
      audioUrl: "", 
      completed: true, 
      bookmarked: true,
      summary: "A critical examination of the choice between being someone and doing something meaningful. This chapter challenges readers to prioritize substance over status.",
      pdfUrl: "/pdf/chapter-2.pdf"
    },
    { 
      id: 3, 
      title: "Become a Student", 
      duration: "6:12", 
      audioUrl: "", 
      completed: false, 
      bookmarked: false,
      summary: "The importance of maintaining a student mindset throughout life. This chapter discusses how ego prevents learning and growth.",
      pdfUrl: "/pdf/chapter-3.pdf"
    },
    { 
      id: 4, 
      title: "Restrain Yourself", 
      duration: "5:43", 
      audioUrl: "", 
      completed: false, 
      bookmarked: false,
      summary: "Learning to control impulses and ego-driven reactions. This chapter teaches the value of patience and strategic thinking.",
      pdfUrl: "/pdf/chapter-4.pdf"
    },
    { 
      id: 5, 
      title: "Get Out of Your Own Head", 
      duration: "4:28", 
      audioUrl: "", 
      completed: false, 
      bookmarked: true,
      summary: "Breaking free from overthinking and self-sabotage. This chapter focuses on moving beyond mental barriers to take action.",
      pdfUrl: "/pdf/chapter-5.pdf"
    },
    { 
      id: 6, 
      title: "The Danger of Early Pride", 
      duration: "5:17", 
      audioUrl: "", 
      completed: false, 
      bookmarked: false,
      summary: "How early success can lead to complacency and failure. This chapter warns against letting initial achievements inflate the ego.",
      pdfUrl: "/pdf/chapter-6.pdf"
    },
    { 
      id: 7, 
      title: "Work, Work, Work", 
      duration: "6:33", 
      audioUrl: "", 
      completed: false, 
      bookmarked: false,
      summary: "The fundamental importance of consistent effort and dedication. This chapter emphasizes that there are no shortcuts to mastery.",
      pdfUrl: "/pdf/chapter-7.pdf"
    },
    { 
      id: 8, 
      title: "For Everything That Comes Next", 
      duration: "4:42", 
      audioUrl: "", 
      completed: false, 
      bookmarked: false,
      summary: "Preparing for future challenges by building character and resilience. This chapter discusses long-term thinking and preparation.",
      pdfUrl: "/pdf/chapter-8.pdf"
    },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showSpeedMenu, setShowSpeedMenu] = useState(false);
  
  // Modal states
  const [showSummaryModal, setShowSummaryModal] = useState(false);
  const [showPdfModal, setShowPdfModal] = useState(false);
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null);
  
  // Player state
  const [isPlayerExpanded, setIsPlayerExpanded] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    const updateDuration = () => {
      setDuration(audio.duration);
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleChapterPlay = (chapterId: number) => {
    setCurrentChapter(chapterId);
    setIsPlaying(true);
    // In a real app, you'd load the audio URL and start playing
  };

  const handleProgressChange = (value: number[]) => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const newTime = (value[0] / 100) * duration;
    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const skipToNext = () => {
    if (currentChapter < chapters.length) {
      handleChapterPlay(currentChapter + 1);
    }
  };

  const skipToPrevious = () => {
    if (currentChapter > 1) {
      handleChapterPlay(currentChapter - 1);
    }
  };

  const skip15Forward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.min(audio.currentTime + 15, audio.duration);
  };

  const skip15Backward = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = Math.max(audio.currentTime - 15, 0);
  };

  const toggleSpeed = () => {
    const speeds = [0.75, 1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextSpeed = speeds[(currentIndex + 1) % speeds.length];
    setPlaybackSpeed(nextSpeed);
    
    const audio = audioRef.current;
    if (audio) {
      audio.playbackRate = nextSpeed;
    }
  };

  const handleShowSummary = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setShowSummaryModal(true);
  };

  const handleShowPdf = (chapter: Chapter) => {
    setSelectedChapter(chapter);
    setShowPdfModal(true);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      {/* Header */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container max-w-md mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate(-1)}
              className="shrink-0"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="min-w-0 flex-1">
              <h1 className="text-lg font-medium text-foreground inline-block bg-accent px-2 py-1 pb-2 rounded-sm transform -rotate-1 font-space relative" style={{boxShadow: '3px 4px 2px 0 rgba(0, 0, 0, 0.6), 5px 6px 15px 0 rgba(0, 0, 0, 0.25)'}}>{bookData.title}</h1>
              <p className="text-sm text-muted-foreground">by {bookData.author}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Book Cover Section */}
      <div className="container max-w-md mx-auto px-4 py-6">
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-48 h-48 mb-4 rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-red-500 to-red-700">
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{bookData.title}</h2>
                <p className="text-sm opacity-90">by {bookData.author}</p>
              </div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Chapter {currentChapter} of {bookData.totalChapters}
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <div className="container max-w-md mx-auto px-4 pb-6 space-y-2">
        {chapters.map((chapter) => (
          <Card 
            key={chapter.id}
            className={`transition-all duration-200 ${
              currentChapter === chapter.id 
                ? 'bg-accent/10 border-accent' 
                : 'hover:bg-muted/50'
            }`}
          >
            <div className="flex items-center gap-3 p-4 min-h-[60px]">
              {/* Chapter Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-base leading-tight mb-1">
                  {chapter.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>{chapter.duration}</span>
                  {chapter.completed && (
                    <Check className="w-4 h-4 text-green-600 fill-current" />
                  )}
                  {chapter.bookmarked && (
                    <Bookmark className="w-4 h-4 text-accent fill-current" />
                  )}
                </div>
                
                {currentChapter === chapter.id && (
                  <div className="mt-2">
                    <Progress value={progress} className="h-1" />
                  </div>
                )}
              </div>
              
              {/* Action Icons */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Summary Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShowSummary(chapter)}
                  className="w-11 h-11 text-muted-foreground hover:text-foreground"
                  aria-label={`View summary for ${chapter.title}`}
                >
                  <ScrollText className="w-4 h-4" />
                </Button>
                
                {/* PDF Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleShowPdf(chapter)}
                  className="w-11 h-11 text-muted-foreground hover:text-foreground"
                  aria-label={`View PDF for ${chapter.title}`}
                >
                  <FileText className="w-4 h-4" />
                </Button>
                
                {/* Play Button - Larger Touch Target */}
                <Button
                  size="icon"
                  variant={currentChapter === chapter.id && isPlaying ? "default" : "outline"}
                  onClick={() => handleChapterPlay(chapter.id)}
                  className={`w-12 h-12 ${
                    currentChapter === chapter.id && isPlaying 
                      ? 'bg-accent hover:bg-accent/90 text-accent-foreground border-accent' 
                      : 'bg-accent hover:bg-accent/90 text-accent-foreground border-accent'
                  }`}
                  aria-label={`${isPlaying ? 'Pause' : 'Play'} ${chapter.title}`}
                >
                  {currentChapter === chapter.id && isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Fixed Bottom Player - Collapsible */}
      <div className={`fixed left-0 right-0 bg-card border-t border-border transition-all duration-300 ease-in-out ${
        isPlayerExpanded ? 'bottom-0 pb-safe' : 'bottom-0'
      }`} style={{
        transform: isPlayerExpanded ? 'translateY(0)' : `translateY(calc(100% - 3.5rem))`
      }}>
        <div className="container max-w-md mx-auto px-4">
          {/* Collapse/Expand Toggle */}
          <div className="flex items-center justify-center py-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlayerExpanded(!isPlayerExpanded)}
              className="w-8 h-6 p-0"
              aria-label={isPlayerExpanded ? "Minimize player" : "Expand player"}
            >
              {isPlayerExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </Button>
          </div>

          {isPlayerExpanded ? (
            /* Expanded Player */
            <div className="pb-4">
              {/* Progress Bar */}
              <div className="mb-4">
                <Slider
                  value={[progress]}
                  onValueChange={handleProgressChange}
                  max={100}
                  step={0.1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-1">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Current Chapter Info */}
              <div className="text-center mb-4">
                <h4 className="font-medium text-sm">
                  {chapters.find(c => c.id === currentChapter)?.title}
                </h4>
                <p className="text-xs text-muted-foreground">
                  Chapter {currentChapter} of {bookData.totalChapters}
                </p>
              </div>

              {/* Main Playback Controls */}
              <div className="flex items-center justify-center gap-6 mb-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={skipToPrevious}
                  disabled={currentChapter === 1}
                  className="w-12 h-12"
                >
                  <SkipBack className="w-6 h-6" />
                </Button>

                <Button
                  size="icon"
                  onClick={togglePlayPause}
                  className="w-16 h-16 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8" />
                  ) : (
                    <Play className="w-8 h-8 ml-1" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={skipToNext}
                  disabled={currentChapter === chapters.length}
                  className="w-12 h-12"
                >
                  <SkipForward className="w-6 h-6" />
                </Button>
              </div>

              {/* Secondary Controls */}
              <div className="flex items-center justify-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={skip15Backward}
                  className="w-10 h-10"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleSpeed}
                  className="text-xs font-medium min-w-[44px] h-8"
                >
                  {playbackSpeed}x
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={skip15Forward}
                  className="w-10 h-10"
                >
                  <RotateCw className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ) : (
            /* Mini Player */
            <div className="flex items-center gap-3 pb-4">
              {/* Mini Progress Bar */}
              <div className="flex-1">
                <Slider
                  value={[progress]}
                  onValueChange={handleProgressChange}
                  max={100}
                  step={0.1}
                  className="w-full h-2"
                />
              </div>

              {/* Compact Controls */}
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={skipToPrevious}
                  disabled={currentChapter === 1}
                  className="w-8 h-8"
                >
                  <SkipBack className="w-4 h-4" />
                </Button>

                <Button
                  size="icon"
                  onClick={togglePlayPause}
                  className="w-10 h-10 bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </Button>

                <Button
                  variant="ghost"
                  size="icon"
                  onClick={skipToNext}
                  disabled={currentChapter === chapters.length}
                  className="w-8 h-8"
                >
                  <SkipForward className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} />

      {/* Summary Modal */}
      <Dialog open={showSummaryModal} onOpenChange={setShowSummaryModal}>
        <DialogContent className="max-w-md mx-auto max-h-[80vh] overflow-hidden">
          <DialogHeader>
            <DialogTitle className="text-left">
              {selectedChapter?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="overflow-y-auto max-h-[60vh] pr-2">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>Duration: {selectedChapter?.duration}</span>
                {selectedChapter?.completed && (
                  <Check className="w-4 h-4 text-green-600 fill-current" />
                )}
                {selectedChapter?.bookmarked && (
                  <Bookmark className="w-4 h-4 text-accent fill-current" />
                )}
              </div>
              <div className="text-sm leading-relaxed">
                {selectedChapter?.summary}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* PDF Modal */}
      <Dialog open={showPdfModal} onOpenChange={setShowPdfModal}>
        <DialogContent className="max-w-4xl w-[95vw] h-[90vh] max-h-[90vh] overflow-hidden p-0">
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle className="text-left">
              {selectedChapter?.title} - Original Text
            </DialogTitle>
          </DialogHeader>
          <div className="flex-1 overflow-hidden">
            {selectedChapter?.pdfUrl ? (
              <iframe
                src={selectedChapter.pdfUrl}
                className="w-full h-full border-0"
                title={`PDF for ${selectedChapter.title}`}
              />
            ) : (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                <div className="text-center">
                  <FileText className="w-12 h-12 mx-auto mb-4 opacity-50" />
                  <p>PDF not available for this chapter</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Player;