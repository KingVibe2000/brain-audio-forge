import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { Play, Pause, SkipBack, SkipForward, ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Chapter {
  id: number;
  title: string;
  duration: string;
  audioUrl: string;
  completed: boolean;
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
    { id: 1, title: "Talk, Talk, Talk", duration: "5:24", audioUrl: "", completed: false },
    { id: 2, title: "To Be or To Do", duration: "4:56", audioUrl: "", completed: false },
    { id: 3, title: "Become a Student", duration: "6:12", audioUrl: "", completed: false },
    { id: 4, title: "Restrain Yourself", duration: "5:43", audioUrl: "", completed: false },
    { id: 5, title: "Get Out of Your Own Head", duration: "4:28", audioUrl: "", completed: false },
    { id: 6, title: "The Danger of Early Pride", duration: "5:17", audioUrl: "", completed: false },
    { id: 7, title: "Work, Work, Work", duration: "6:33", audioUrl: "", completed: false },
    { id: 8, title: "For Everything That Comes Next", duration: "4:42", audioUrl: "", completed: false },
  ];

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentChapter, setCurrentChapter] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

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
              <h1 className="font-semibold text-lg truncate">{bookData.title}</h1>
              <p className="text-sm text-muted-foreground">by {bookData.author}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter List */}
      <div className="container max-w-md mx-auto px-4 py-6 space-y-3">
        {chapters.map((chapter) => (
          <Card 
            key={chapter.id}
            className={`p-4 transition-all duration-200 ${
              currentChapter === chapter.id 
                ? 'bg-accent/10 border-accent' 
                : 'hover:bg-muted/50'
            }`}
          >
            <div className="flex items-center gap-4">
              <Button
                size="icon"
                variant={currentChapter === chapter.id && isPlaying ? "default" : "outline"}
                onClick={() => handleChapterPlay(chapter.id)}
                className="shrink-0 w-12 h-12"
              >
                {currentChapter === chapter.id && isPlaying ? (
                  <Pause className="w-5 h-5" />
                ) : (
                  <Play className="w-5 h-5" />
                )}
              </Button>
              
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-sm leading-5 mb-1">
                  {chapter.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Chapter {chapter.id} of {bookData.totalChapters}</span>
                  <span>{chapter.duration}</span>
                </div>
                
                {currentChapter === chapter.id && (
                  <div className="mt-2">
                    <Progress value={progress} className="h-1" />
                  </div>
                )}
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Fixed Bottom Player */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border">
        <div className="container max-w-md mx-auto px-4 py-4">
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

          {/* Playback Controls */}
          <div className="flex items-center justify-center gap-6">
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
        </div>
      </div>

      {/* Hidden Audio Element */}
      <audio ref={audioRef} />
    </div>
  );
};

export default Player;