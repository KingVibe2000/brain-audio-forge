import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Play, Pause, Edit, Trash2, Check, X } from "lucide-react";

// Mock data based on the screenshot structure
const detectedChapters = [
  {
    id: 1,
    number: "1",
    title: "Introduction to the Journey",
    content: "Welcome to this incredible journey through...",
    startTime: "00:00:00",
    endTime: "00:02:15",
    selected: true
  },
  {
    id: 2,
    number: "2", 
    title: "Setting the Foundation",
    content: "Before we dive deep into the core concepts, let's establish...",
    startTime: "00:02:15",
    endTime: "00:04:30",
    selected: true
  },
  {
    id: 3,
    number: "3",
    title: "Understanding the Basics",
    content: "The fundamental principles that guide everything we'll cover...",
    startTime: "00:04:30",
    endTime: "00:07:45",
    selected: true
  },
  {
    id: 4,
    number: "4",
    title: "Deep Dive into Core Concepts",
    content: "Now that we have our foundation, let's explore the intricate details...",
    startTime: "00:07:45",
    endTime: "00:11:20",
    selected: false
  },
  {
    id: 5,
    number: "5",
    title: "Practical Applications",
    content: "Theory is important, but let's see how these concepts apply in real-world scenarios...",
    startTime: "00:11:20",
    endTime: "00:14:55",
    selected: true
  },
  {
    id: 6,
    number: "6",
    title: "Advanced Techniques",
    content: "For those ready to take their understanding to the next level...",
    startTime: "00:14:55",
    endTime: "00:18:10",
    selected: true
  },
  {
    id: 7,
    number: "7",
    title: "Common Pitfalls and Solutions",
    content: "Learning from mistakes is crucial. Here are the most common challenges...",
    startTime: "00:18:10",
    endTime: "00:21:30",
    selected: false
  },
  {
    id: 8,
    number: "8",
    title: "Integration Strategies",
    content: "How to seamlessly integrate everything you've learned into your workflow...",
    startTime: "00:21:30",
    endTime: "00:24:45",
    selected: true
  },
  {
    id: 9,
    number: "9",
    title: "Optimization and Performance",
    content: "Making sure your implementation runs efficiently and effectively...",
    startTime: "00:24:45",
    endTime: "00:28:00",
    selected: true
  },
  {
    id: 10,
    number: "10",
    title: "Future Considerations",
    content: "Looking ahead and preparing for what's to come in this rapidly evolving field...",
    startTime: "00:28:00",
    endTime: "00:31:15",
    selected: false
  }
];

const ReviewChapter = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Review Detected Chapters</h1>
        <p className="text-muted-foreground">
          Review and edit the automatically detected chapters. Select which chapters to include in your audiobook.
        </p>
      </div>

      <div className="flex gap-6 mb-6">
        <Button variant="default" className="gap-2">
          <Check className="w-4 h-4" />
          Select All
        </Button>
        <Button variant="outline" className="gap-2">
          <X className="w-4 h-4" />
          Deselect All
        </Button>
        <div className="ml-auto">
          <Badge variant="secondary" className="text-sm">
            {detectedChapters.filter(c => c.selected).length} of {detectedChapters.length} chapters selected
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content area */}
        <div className="lg:col-span-2">
          <Card className="border border-border">
            <ScrollArea className="h-[800px]">
              <div className="p-6">
                <div className="space-y-4">
                  {detectedChapters.map((chapter) => (
                    <div 
                      key={chapter.id} 
                      className={`p-4 rounded-lg border transition-all ${
                        chapter.selected 
                          ? 'border-primary bg-primary/5' 
                          : 'border-border bg-card'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <Checkbox 
                          checked={chapter.selected}
                          className="mt-1"
                        />
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="font-mono text-xs">
                              {chapter.number}
                            </Badge>
                            <h3 className="font-medium text-foreground truncate">
                              {chapter.title}
                            </h3>
                          </div>
                          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                            {chapter.content}
                          </p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <Play className="w-3 h-3" />
                              </Button>
                              <span className="text-xs text-muted-foreground font-mono">
                                {chapter.startTime} - {chapter.endTime}
                              </span>
                            </div>
                            <div className="flex items-center gap-1 ml-auto">
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                                <Edit className="w-3 h-3" />
                              </Button>
                              <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                                <Trash2 className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollArea>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <Card className="border border-border">
            <div className="p-6">
              <h2 className="text-lg font-semibold mb-4">Chapter Summary</h2>
              <div className="space-y-4">
                <div className="text-sm">
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Total Chapters:</span>
                    <span className="font-medium">{detectedChapters.length}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Selected:</span>
                    <span className="font-medium">{detectedChapters.filter(c => c.selected).length}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-border">
                    <span className="text-muted-foreground">Total Duration:</span>
                    <span className="font-medium">31:15</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Selected Duration:</span>
                    <span className="font-medium">24:30</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <h3 className="font-medium mb-3">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                      <Edit className="w-4 h-4" />
                      Bulk Edit Titles
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                      <Play className="w-4 h-4" />
                      Preview Selected
                    </Button>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button className="w-full" size="lg">
                    Continue to Step 2
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ReviewChapter;