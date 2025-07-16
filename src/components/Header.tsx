import { Book, Play, Settings, FileText, ChevronDown, Sparkles, User, Shield, Menu, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="border-b border-border bg-surface-elevated px-4 md:px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="relative">
            <Book className="h-6 w-6 md:h-8 md:w-8 text-foreground" />
            <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full"></div>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-foreground">book to brain</h1>
            <p className="text-xs text-muted-foreground">PDF to Podcast</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Button variant="outline" size="sm" className="text-foreground border-border hover:bg-accent hover:text-accent-foreground hover:border-accent">
            <Headphones className="h-4 w-4" />
            Player
          </Button>
          
          {/* Setup Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                Setup
                <ChevronDown className="h-3 w-3 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border border-border rounded-lg shadow-lg p-1">
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 border border-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Business Book Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 border border-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Self Improvement Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 border border-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Author Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem className="flex items-center gap-3 px-3 py-2 hover:bg-accent/10 cursor-pointer rounded-md">
                <div className="w-3 h-3 border border-muted-foreground/60 rounded-full"></div>
                <span className="text-foreground">Admin</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Logs
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80">
            <div className="flex flex-col space-y-4 mt-8">
              <Button variant="outline" className="justify-start text-foreground border-border hover:bg-accent hover:text-accent-foreground hover:border-accent h-12">
                <Headphones className="h-4 w-4 mr-2" />
                Player
              </Button>
              
              {/* Mobile Setup Menu Items */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Setup</div>
                <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground h-12 w-full">
                  <div className="w-3 h-3 border border-muted-foreground/60 rounded-full mr-3"></div>
                  Business Book Settings
                </Button>
                <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground h-12 w-full">
                  <div className="w-3 h-3 border border-muted-foreground/60 rounded-full mr-3"></div>
                  Self Improvement Settings
                </Button>
                <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground h-12 w-full">
                  <div className="w-3 h-3 border border-muted-foreground/60 rounded-full mr-3"></div>
                  Author Settings
                </Button>
                <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground h-12 w-full">
                  <div className="w-3 h-3 border border-muted-foreground/60 rounded-full mr-3"></div>
                  Admin
                </Button>
              </div>

              <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground h-12">
                Logs
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;