import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, X, Filter } from "lucide-react";

interface ChapterTableHeaderProps {
  selectedCount: number;
  totalCount: number;
  onSelectAll: () => void;
  onDeselectAll: () => void;
  onSelectMainOnly: () => void;
  onSelectSubOnly: () => void;
}

export const ChapterTableHeader = ({
  selectedCount,
  totalCount,
  onSelectAll,
  onDeselectAll,
  onSelectMainOnly,
  onSelectSubOnly,
}: ChapterTableHeaderProps) => {
  return (
    <div className="sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border z-10 p-4">
      {/* Selection Controls */}
      <div className="flex flex-wrap gap-2 items-center justify-between">
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

        <Badge variant="secondary" className="text-sm shrink-0">
          {selectedCount} of {totalCount} selected
        </Badge>
      </div>
    </div>
  );
};