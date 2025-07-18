import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Edit, Eye, Play } from "lucide-react";

interface Chapter {
  id: number;
  title: string;
  pages: { start: number; end: number; total: number };
  selected: boolean;
  isMain: boolean;
  chapterNumber: number;
  isSub?: boolean;
}

interface ChapterSidebarProps {
  chapters: Chapter[];
  onBulkEdit: () => void;
  onPreviewSelected: () => void;
  onContinue: () => void;
}

export const ChapterSidebar = ({ 
  chapters, 
  onBulkEdit, 
  onPreviewSelected, 
  onContinue 
}: ChapterSidebarProps) => {
  const selectedCount = chapters.filter(c => c.selected).length;
  const mainCount = chapters.filter(c => c.isMain).length;
  const subCount = chapters.filter(c => c.isSub).length;
  const totalPages = chapters.filter(c => c.selected).reduce((sum, c) => sum + c.pages.total, 0);

  return (
    <div className="lg:col-span-1">
      <Card className="border border-border sticky top-24">
        <div className="p-6">
          {/* Header with Badge */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Chapter Summary</h2>
            <Badge variant="secondary" className="text-sm">
              {selectedCount}/{chapters.length}
            </Badge>
          </div>
          
          <div className="space-y-4">
            {/* Statistics */}
            <div className="text-sm space-y-3">
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Total Chapters:</span>
                <span className="font-medium">{chapters.length}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Selected:</span>
                <span className="font-medium text-primary">{selectedCount}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Main Chapters:</span>
                <span className="font-medium">{mainCount}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-border">
                <span className="text-muted-foreground">Sub Chapters:</span>
                <span className="font-medium">{subCount}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-muted-foreground">Total Pages:</span>
                <span className="font-medium">{totalPages}</span>
              </div>
            </div>

            {/* Quick Actions - Grouped */}
            <div className="pt-4 border-t border-border">
              <h3 className="font-medium mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start gap-2"
                  onClick={onBulkEdit}
                >
                  <Edit className="w-4 h-4" />
                  Bulk Edit Titles
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start gap-2"
                  onClick={onPreviewSelected}
                  disabled={selectedCount === 0}
                >
                  <Eye className="w-4 h-4" />
                  Preview Selected ({selectedCount})
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-start gap-2"
                  disabled={selectedCount === 0}
                >
                  <Play className="w-4 h-4" />
                  Generate Audio Preview
                </Button>
              </div>
            </div>

            {/* Progress Indicator */}
            {selectedCount > 0 && (
              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Selection Progress</span>
                  <span className="font-medium">{Math.round((selectedCount / chapters.length) * 100)}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${(selectedCount / chapters.length) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Continue Button */}
            <div className="pt-4 border-t border-border">
              <Button 
                className="w-full" 
                size="lg"
                onClick={onContinue}
                disabled={selectedCount === 0}
              >
                Continue to Step 2
                {selectedCount > 0 && (
                  <Badge variant="secondary" className="ml-2 bg-white/20 text-white">
                    {selectedCount}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};