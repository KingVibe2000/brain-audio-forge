
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Search, Edit, Check, X, Eye } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search chapters..." 
              className="pl-10"
            />
          </div>
        </div>
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
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12"></TableHead>
                    <TableHead>Chapter</TableHead>
                    <TableHead className="w-32">Pages</TableHead>
                    <TableHead className="w-32 text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {detectedChapters.map((chapter) => (
                    <TableRow key={chapter.id} className={chapter.selected ? 'bg-primary/5' : ''}>
                      <TableCell>
                        <Checkbox checked={chapter.selected} />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {chapter.isSub && (
                            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200">
                              Sub
                            </Badge>
                          )}
                          <div className="flex items-center gap-2 min-w-0 flex-1">
                            <span className="font-medium truncate">{chapter.title}</span>
                            <Button size="sm" variant="ghost" className="h-6 w-6 p-0 shrink-0">
                              <Edit className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Pages: {chapter.pages.start} - {chapter.pages.end}, {chapter.pages.total} pages
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {chapter.pages.total} pages
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button size="sm" variant="ghost" className="h-8 px-2 text-xs">
                            <Eye className="w-3 h-3 mr-1" />
                            Preview
                          </Button>
                          <span className="text-xs text-muted-foreground">Chapter {chapter.chapterNumber}</span>
                          {chapter.isMain && (
                            <Badge variant="secondary" className="text-xs bg-green-50 text-green-600 border-green-200">
                              Main
                            </Badge>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
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
                    <span className="text-muted-foreground">Main Chapters:</span>
                    <span className="font-medium">{detectedChapters.filter(c => c.isMain).length}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Sub Chapters:</span>
                    <span className="font-medium">{detectedChapters.filter(c => c.isSub).length}</span>
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
                      <Eye className="w-4 h-4" />
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
