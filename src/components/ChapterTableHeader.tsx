import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Check, X, Filter } from "lucide-react";

interface ChapterTableHeaderProps {
  selectedCount: number;
  totalCount: number;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onSelectMainOnly: () => void;
  onSelectSubOnly: () => void;
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export const ChapterTableHeader = ({
  selectedCount,
  totalCount,
  onSelectAll,
  onDeselectAll,
  onSelectMainOnly,
  onSelectSubOnly,
  searchValue,
  onSearchChange,
}: ChapterTableHeaderProps) => {
  return (
    <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-10 p-4 space-y-4">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
        <div className="flex-1 max-w-sm">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Search chapters..." 
              className="pl-10"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
            />
          </div>
        </div>

        <Badge variant="secondary" className="text-sm shrink-0">
          {selectedCount} of {totalCount} selected
        </Badge>
      </div>

      {/* Selection Controls */}
      <div className="flex flex-wrap gap-2 items-center">
        <Button variant="default" size="sm" className="gap-2" onClick={onSelectAll}>
          <Check className="w-4 h-4" />
          Select All
        </Button>
        <Button variant="outline" size="sm" className="gap-2" onClick={onDeselectAll}>
          <X className="w-4 h-4" />
          Deselect All
        </Button>
        <div className="w-px h-6 bg-border mx-2" />
        <Button variant="outline" size="sm" className="gap-2" onClick={onSelectMainOnly}>
          <Filter className="w-4 h-4" />
          Main Only
        </Button>
        <Button variant="outline" size="sm" className="gap-2" onClick={onSelectSubOnly}>
          <Filter className="w-4 h-4" />
          Sub Only
        </Button>
      </div>
    </div>
  );
};