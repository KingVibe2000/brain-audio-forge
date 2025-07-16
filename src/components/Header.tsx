import { Book, Play, Settings, FileText, ChevronDown, Sparkles, User, Shield, Menu, Headphones } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "react-router-dom";
const Header = () => {
  return <header className="border-b border-border bg-surface-elevated px-4 md:px-6 py-4">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 md:space-x-3 hover-scale">
          <div className="relative">
            <Book className="h-6 w-6 md:h-8 md:w-8 text-foreground" />
            <div className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-accent rounded-full"></div>
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-foreground">books to brain</h1>
            <p className="text-xs text-muted-foreground">Listen. Learn. Anywhere.</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <Link to="/how-it-works">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-transparent relative after:content-[''] after:absolute after:w-3/4 after:scale-x-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
              How it Works
            </Button>
          </Link>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-transparent relative after:content-[''] after:absolute after:w-3/4 after:scale-x-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
            My Books
          </Button>

          {/* Settings Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground hover:bg-transparent relative after:content-[''] after:absolute after:w-3/4 after:scale-x-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                Settings
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

          <Button variant="outline" size="sm" className="bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:text-accent-foreground hover:border-accent/90 group">
            <Headphones className="h-4 w-4 transition-transform duration-200 group-hover:scale-125" />
            Player
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
              <Link to="/how-it-works">
                <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground hover:bg-transparent h-12 relative after:content-[''] after:absolute after:w-3/4 after:scale-x-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                  How it Works
                </Button>
              </Link>
              <Button variant="ghost" className="justify-start text-muted-foreground hover:text-foreground hover:bg-transparent h-12 relative after:content-[''] after:absolute after:w-3/4 after:scale-x-0 after:h-0.5 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:bg-primary after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100">
                My Books
              </Button>

              {/* Mobile Settings Menu Items */}
              <div className="space-y-2">
                <div className="px-3 py-2 text-sm font-medium text-muted-foreground">Settings</div>
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

              <Button variant="outline" className="justify-start bg-accent text-accent-foreground border-accent hover:bg-accent/90 hover:text-accent-foreground hover:border-accent/90 h-12">
                <Headphones className="h-4 w-4 mr-2" />
                Player
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>;
};
export default Header;