import { Book, Play, Settings, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="border-b border-border bg-surface-elevated px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="relative">
            <Book className="h-8 w-8 text-foreground" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-foreground">book to brain</h1>
            <p className="text-xs text-muted-foreground">PDF to Podcast</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Play className="h-4 w-4 mr-2" />
            Player
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <Settings className="h-4 w-4 mr-2" />
            Setup
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            <FileText className="h-4 w-4 mr-2" />
            Logs
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;