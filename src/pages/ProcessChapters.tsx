import React, { useState, useEffect } from 'react';
import { Check, Download, Eye, Info, Trash2, Edit, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';


// Mock data for processed chapters
const mockProcessedChapters = [
  {
    id: 1,
    title: "Special But Deeply Misunderstood",
    status: "Ready for Podcast",
    pages: "54-54",
    fileSize: "56 kB",
    fileName: "chapter-01.pdf",
    selected: true,
  },
  {
    id: 2,
    title: "Kristen's Dangerous Year", 
    status: "Ready for Podcast",
    pages: "55-85",
    fileSize: "68 kB", 
    fileName: "chapter-02.pdf",
    selected: true,
  },
  {
    id: 3,
    title: "The Good News and the Not-So-Good",
    status: "Ready for Podcast", 
    pages: "86-96",
    fileSize: "44 kB",
    fileName: "chapter-03.pdf",
    selected: true,
  },
];

export default function ProcessChapters() {
  const [chapters, setChapters] = useState(mockProcessedChapters);
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        const currentIndex = activeChapter ? chapters.findIndex(c => c.id === activeChapter) : -1;
        let nextIndex = currentIndex;
        
        if (e.key === 'ArrowDown') {
          nextIndex = currentIndex < chapters.length - 1 ? currentIndex + 1 : 0;
        } else {
          nextIndex = currentIndex > 0 ? currentIndex - 1 : chapters.length - 1;
        }
        
        setActiveChapter(chapters[nextIndex].id);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeChapter, chapters]);

  const handleSelectionChange = (id: number, selected: boolean) => {
    setChapters(chapters.map(chapter => 
      chapter.id === id ? { ...chapter, selected } : chapter
    ));
  };

  const handleSelectAll = () => {
    setChapters(chapters.map(chapter => ({ ...chapter, selected: true })));
  };

  const handleDeselectAll = () => {
    setChapters(chapters.map(chapter => ({ ...chapter, selected: false })));
  };

  const handleDeleteSelected = () => {
    setChapters(chapters.filter(chapter => !chapter.selected));
  };

  const handleBatchRename = () => {
    console.log('Batch rename selected chapters');
  };

  const handleCreatePodcast = () => {
    console.log('Create podcast from selected chapters');
  };

  const selectedCount = chapters.filter(c => c.selected).length;
  const totalSize = chapters.reduce((sum, c) => {
    const size = parseFloat(c.fileSize);
    return sum + (c.fileSize.includes('kB') ? size / 1024 : size);
  }, 0);

  return (
    <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Split Chapters</h1>
            <p className="text-muted-foreground">
              Review and manage your processed chapters before creating the podcast
            </p>
          </div>

          {/* Action Bar */}
          <div className="bg-accent rounded-lg p-4 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-accent-foreground" />
                <span className="font-medium text-accent-foreground">Split Chapters</span>
                <Badge variant="secondary" className="bg-accent-foreground/20 text-accent-foreground">
                  {chapters.length} chapters
                </Badge>
              </div>
              
              <div className="flex items-center gap-2 ml-auto">
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleDeselectAll}
                  className="bg-white/10 border-white/20 text-accent-foreground hover:bg-white/20"
                >
                  Deselect All
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleDeleteSelected}
                  disabled={selectedCount === 0}
                  className="bg-white/10 border-white/20 text-accent-foreground hover:bg-white/20"
                >
                  Delete Selected
                </Button>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={handleBatchRename}
                  disabled={selectedCount === 0}
                  className="bg-white/10 border-white/20 text-accent-foreground hover:bg-white/20"
                >
                  Batch Rename
                </Button>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={handleCreatePodcast}
                  disabled={selectedCount === 0}
                  className="bg-green-600 hover:bg-green-700 text-white"
                >
                  Create Podcast
                </Button>
              </div>
            </div>
          </div>

          {/* Bulk rename notice */}
          <div className="bg-muted rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Info className="h-4 w-4" />
              <span className="text-sm">
                Bulk rename selected chapters to: chapter-01.pdf, chapter-02.pdf...
              </span>
            </div>
          </div>

          {/* Chapter List */}
          <div className="bg-card rounded-lg border overflow-hidden">
            {chapters.map((chapter, index) => (
              <div 
                key={chapter.id}
                className={`
                  flex items-center gap-4 p-4 border-b last:border-b-0 
                  ${activeChapter === chapter.id ? 'bg-accent/10' : ''}
                  hover:bg-muted/50 transition-colors cursor-pointer
                `}
                onClick={() => setActiveChapter(chapter.id)}
              >
                {/* Checkbox */}
                <Checkbox 
                  checked={chapter.selected}
                  onCheckedChange={(checked) => handleSelectionChange(chapter.id, checked as boolean)}
                  className="flex-shrink-0"
                />

                {/* Chapter Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium text-foreground truncate">
                      {chapter.title}
                    </h3>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 text-xs">
                      {chapter.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>Pages {chapter.pages}</span>
                    <span>{chapter.fileSize}</span>
                    <span className="text-accent">{chapter.fileName}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2 flex-shrink-0">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Info className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Download className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Edit className="h-4 w-4 text-muted-foreground" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Summary */}
          <div className="mt-6 bg-card rounded-lg border p-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-medium text-foreground mb-1">Ready to Download</h3>
                <p className="text-sm text-muted-foreground">
                  {selectedCount} chapters • {totalSize.toFixed(2)} MB total
                </p>
              </div>
              <Button 
                variant="outline"
                disabled={selectedCount === 0}
                className="bg-accent hover:bg-accent/90 text-accent-foreground border-accent"
              >
                Download All as ZIP
              </Button>
            </div>
          </div>
        </div>
      </div>
  );
}