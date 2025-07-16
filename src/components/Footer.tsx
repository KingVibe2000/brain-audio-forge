import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-surface-elevated px-4 md:px-6 py-6 mt-auto">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Copyright and company info */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2024 Book to Brain. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Transform your PDFs into engaging podcasts with AI
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Logs
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </Button>
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
              Terms of Service
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;