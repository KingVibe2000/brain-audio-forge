import { Book, Play, Settings, FileText, ChevronDown, Sparkles, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
          
          {/* Setup Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Settings className="h-4 w-4 mr-2" />
                Setup
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border border-border rounded-lg shadow-lg p-1">
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 bg-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Business Book Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 bg-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Self Improvement Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 bg-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Author Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 bg-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Admin</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

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