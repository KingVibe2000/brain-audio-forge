
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChapterTableHeader } from "@/components/ChapterTableHeader";
import { ChapterRow } from "@/components/ChapterRow";
import { ChapterSidebar } from "@/components/ChapterSidebar";

// Mock data based on the screenshot
const detectedChapters = [
  {
    id: 1,
    title: "Also by",
    pages: { start: 5, end: 5, total: 1 },
    selected: true,
    isMain: true,
    chapterNumber: 1
  },
  {
    id: 2,
    title: "Title Page",
    pages: { start: 6, end: 7, total: 2 },
    selected: true,
    isMain: true,
    chapterNumber: 2
  },
  {
    id: 3,
    title: "Copyright Page",
    pages: { start: 8, end: 9, total: 2 },
    selected: true,
    isMain: true,
    chapterNumber: 3
  },
  {
    id: 4,
    title: "Dedication",
    pages: { start: 10, end: 10, total: 1 },
    selected: true,
    isMain: true,
    chapterNumber: 4
  },
  {
    id: 5,
    title: "Acknowledgments",
    pages: { start: 11, end: 12, total: 2 },
    selected: true,
    isMain: true,
    chapterNumber: 5
  },
  {
    id: 6,
    title: "Table of Contents",
    pages: { start: 13, end: 14, total: 2 },
    selected: true,
    isMain: true,
    chapterNumber: 6
  },
  {
    id: 7,
    title: "Author's Note, 2012",
    pages: { start: 15, end: 41, total: 27 },
    selected: true,
    isMain: true,
    chapterNumber: 7
  },
  {
    id: 8,
    title: "Preface",
    pages: { start: 42, end: 49, total: 8 },
    selected: true,
    isMain: true,
    chapterNumber: 8
  },
  {
    id: 9,
    title: "Are You Highly Sensitive? - A SELF-TEST",
    pages: { start: 50, end: 52, total: 3 },
    selected: true,
    isMain: true,
    chapterNumber: 9
  },
  {
    id: 10,
    title: "1 - The Facts About Being Highly Sensitive",
    pages: { start: 53, end: 72, total: 20 },
    selected: true,
    isMain: true,
    chapterNumber: 10
  },
  {
    id: 11,
    title: "Special But Deeply Misunderstood",
    pages: { start: 54, end: 54, total: 1 },
    selected: false,
    isMain: false,
    chapterNumber: 11,
    isSub: true
  },
  {
    id: 12,
    title: "Kristen's Dangerous Year",
    pages: { start: 55, end: 55, total: 1 },
    selected: false,
    isMain: false,
    chapterNumber: 12,
    isSub: true
  }
];

const ReviewChapter = () => {
  const [chapters, setChapters] = useState(detectedChapters);
  const [searchValue, setSearchValue] = useState("");
  const [activeChapter, setActiveChapter] = useState<number | null>(null);

  // Filter chapters based on search
  const filteredChapters = chapters.filter(chapter =>
    chapter.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement) return;
      
      const currentIndex = activeChapter ? filteredChapters.findIndex(c => c.id === activeChapter) : -1;
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = Math.min(currentIndex + 1, filteredChapters.length - 1);
        setActiveChapter(filteredChapters[nextIndex]?.id || null);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex = Math.max(currentIndex - 1, 0);
        setActiveChapter(filteredChapters[prevIndex]?.id || null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeChapter, filteredChapters]);

  const handleSelectionChange = (id: number, selected: boolean) => {
    setChapters(prev => prev.map(chapter => 
      chapter.id === id ? { ...chapter, selected } : chapter
    ));
  };

  const handleSelectAll = () => {
    setChapters(prev => prev.map(chapter => ({ ...chapter, selected: true })));
  };

  const handleDeselectAll = () => {
    setChapters(prev => prev.map(chapter => ({ ...chapter, selected: false })));
  };

  const handleSelectMainOnly = () => {
    setChapters(prev => prev.map(chapter => ({ 
      ...chapter, 
      selected: chapter.isMain 
    })));
  };

  const handleSelectSubOnly = () => {
    setChapters(prev => prev.map(chapter => ({ 
      ...chapter, 
      selected: chapter.isSub || false 
    })));
  };

  const handleEdit = (id: number) => {
    console.log('Edit chapter:', id);
  };

  const handlePreview = (id: number) => {
    console.log('Preview chapter:', id);
  };

  const handleBulkEdit = () => {
    console.log('Bulk edit chapters');
  };

  const handlePreviewSelected = () => {
    console.log('Preview selected chapters');
  };

  const handleContinue = () => {
    console.log('Continue to step 2');
  };

  const selectedCount = chapters.filter(c => c.selected).length;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Review Detected Chapters</h1>
        <p className="text-muted-foreground">
          Review and edit the automatically detected chapters. Select which chapters to include in your audiobook.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content area */}
        <div className="lg:col-span-2 order-2 lg:order-1">
          <Card className="border border-border overflow-hidden">
            <ChapterTableHeader
              selectedCount={selectedCount}
              totalCount={chapters.length}
              onSelectAll={handleSelectAll}
              onDeselectAll={handleDeselectAll}
              onSelectMainOnly={handleSelectMainOnly}
              onSelectSubOnly={handleSelectSubOnly}
              searchValue={searchValue}
              onSearchChange={setSearchValue}
            />
            
            <ScrollArea className="h-[700px]">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead className="w-12 sticky top-0 bg-background/95 backdrop-blur"></TableHead>
                    <TableHead className="sticky top-0 bg-background/95 backdrop-blur">Chapter</TableHead>
                    <TableHead className="w-32 text-right sticky top-0 bg-background/95 backdrop-blur">Pages</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody className="group">
                  {filteredChapters.map((chapter) => (
                    <ChapterRow
                      key={chapter.id}
                      chapter={chapter}
                      isActive={activeChapter === chapter.id}
                      onSelectionChange={handleSelectionChange}
                      onEdit={handleEdit}
                      onPreview={handlePreview}
                      onRowClick={setActiveChapter}
                    />
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="order-1 lg:order-2">
          <ChapterSidebar
            chapters={chapters}
            onBulkEdit={handleBulkEdit}
            onPreviewSelected={handlePreviewSelected}
            onContinue={handleContinue}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewChapter;
