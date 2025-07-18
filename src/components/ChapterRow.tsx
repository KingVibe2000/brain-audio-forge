import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Edit, Eye } from "lucide-react";
import { TableCell, TableRow } from "@/components/ui/table";
import { useState } from "react";

interface Chapter {
  id: number;
  title: string;
  pages: { start: number; end: number; total: number };
  selected: boolean;
  isMain: boolean;
  chapterNumber: number;
  isSub?: boolean;
}

interface ChapterRowProps {
  chapter: Chapter;
  isActive: boolean;
  onSelectionChange: (id: number, selected: boolean) => void;
  onEdit: (id: number) => void;
  onPreview: (id: number) => void;
  onRowClick: (id: number) => void;
}

export const ChapterRow = ({ 
  chapter, 
  isActive,
  onSelectionChange, 
  onEdit, 
  onPreview,
  onRowClick 
}: ChapterRowProps) => {
  const [showPageDetails, setShowPageDetails] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ') {
      e.preventDefault();
      onSelectionChange(chapter.id, !chapter.selected);
    } else if (e.key === 'Enter') {
      onPreview(chapter.id);
    }
  };

  return (
    <TableRow 
      key={chapter.id} 
      className={`
        ${chapter.selected ? 'bg-primary/5 border-primary/20' : 'hover:bg-muted/50'} 
        ${isActive ? 'ring-2 ring-primary/50' : ''}
        cursor-pointer transition-colors focus-within:bg-muted/30
      `}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onClick={() => onRowClick(chapter.id)}
      onMouseEnter={() => setShowPageDetails(true)}
      onMouseLeave={() => setShowPageDetails(false)}
    >
      <TableCell className="w-12">
        <Checkbox 
          checked={chapter.selected} 
          onCheckedChange={(checked) => onSelectionChange(chapter.id, checked as boolean)}
          onClick={(e) => e.stopPropagation()}
        />
      </TableCell>
      
      <TableCell>
        <div className="flex items-center gap-3">
          {/* Chapter Number - More Prominent */}
          <div className="flex-shrink-0">
            <Badge variant="outline" className="font-mono font-semibold text-sm min-w-[2.5rem] justify-center">
              {chapter.chapterNumber}
            </Badge>
          </div>
          
          {/* Chapter Type Indicator */}
          {chapter.isSub && (
            <Badge variant="outline" className="text-xs bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950 dark:text-blue-400">
              Sub
            </Badge>
          )}
          {chapter.isMain && (
            <Badge variant="secondary" className="text-xs bg-green-50 text-green-600 border-green-200 dark:bg-green-950 dark:text-green-400">
              Main
            </Badge>
          )}
          
          {/* Title and Actions */}
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="font-medium truncate text-foreground">{chapter.title}</span>
            <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-7 w-7 p-0 shrink-0"
                onClick={(e) => {
                  e.stopPropagation();
                  onEdit(chapter.id);
                }}
              >
                <Edit className="w-3 h-3" />
              </Button>
              <Button 
                size="sm" 
                variant="ghost" 
                className="h-7 px-2 text-xs"
                onClick={(e) => {
                  e.stopPropagation();
                  onPreview(chapter.id);
                }}
              >
                <Eye className="w-3 h-3 mr-1" />
                Preview
              </Button>
            </div>
          </div>
        </div>
        
        {/* Progressive Disclosure - Page Details */}
        {showPageDetails && (
          <div className="text-sm text-muted-foreground mt-1 animate-fade-in">
            Pages {chapter.pages.start}-{chapter.pages.end} • {chapter.pages.total} pages
          </div>
        )}
      </TableCell>
      
      <TableCell className="text-sm text-muted-foreground text-right w-24">
        {chapter.pages.total} pages
      </TableCell>
    </TableRow>
  );
};