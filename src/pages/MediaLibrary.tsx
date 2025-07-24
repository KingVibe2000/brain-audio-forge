import React, { useState } from 'react';
import { Search, ChevronRight, Play, Headphones, Star, Clock, Users, TrendingUp, BookOpen } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock data for demonstration
const mockPodcasts = [
  // Recently Added Books
  {
    id: 1,
    title: "The 7 Habits of Highly Effective People",
    author: "Stephen R. Covey",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 2,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 3,
    title: "The Lean Startup",
    author: "Eric Ries",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 5,
    title: "Good to Great",
    author: "Jim Collins",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 6,
    title: "The Power of Now",
    author: "Eckhart Tolle",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 7,
    title: "Mindset: The New Psychology of Success",
    author: "Carol S. Dweck",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 8,
    title: "Zero to One",
    author: "Peter Thiel",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 9,
    title: "The Four Agreements",
    author: "Don Miguel Ruiz",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 10,
    title: "Blue Ocean Strategy",
    author: "W. Chan Kim",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 11,
    title: "Daring Greatly",
    author: "Brené Brown",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop&crop=center`
  },
  // Business Category Books
  {
    id: 12,
    title: "The Innovator's Dilemma",
    author: "Clayton M. Christensen",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 13,
    title: "Built to Last",
    author: "Jim Collins",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 14,
    title: "The Hard Thing About Hard Things",
    author: "Ben Horowitz",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 15,
    title: "Crossing the Chasm",
    author: "Geoffrey A. Moore",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 16,
    title: "The E-Myth Revisited",
    author: "Michael E. Gerber",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 17,
    title: "Competitive Strategy",
    author: "Michael E. Porter",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 18,
    title: "The First 90 Days",
    author: "Michael Watkins",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 19,
    title: "Freakonomics",
    author: "Steven D. Levitt",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 20,
    title: "The Tipping Point",
    author: "Malcolm Gladwell",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 21,
    title: "Purple Cow",
    author: "Seth Godin",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 22,
    title: "The Art of War",
    author: "Sun Tzu",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 23,
    title: "Principles",
    author: "Ray Dalio",
    category: "business",
    coverUrl: `https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop&crop=center`
  },
  // Self-Improvement Category Books
  {
    id: 24,
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 25,
    title: "How to Win Friends and Influence People",
    author: "Dale Carnegie",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 26,
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 27,
    title: "12 Rules for Life",
    author: "Jordan B. Peterson",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 28,
    title: "The Miracle Morning",
    author: "Hal Elrod",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 29,
    title: "Outliers",
    author: "Malcolm Gladwell",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 30,
    title: "The 5 AM Club",
    author: "Robin Sharma",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 31,
    title: "Grit",
    author: "Angela Duckworth",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 32,
    title: "The Compound Effect",
    author: "Darren Hardy",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 33,
    title: "You Are a Badass",
    author: "Jen Sincero",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 34,
    title: "The Life-Changing Magic of Tidying Up",
    author: "Marie Kondo",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 35,
    title: "Educated",
    author: "Tara Westover",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop&crop=center`
  },
  {
    id: 36,
    title: "Becoming",
    author: "Michelle Obama",
    category: "selfimprovement",
    coverUrl: `https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop&crop=center`
  }
];

interface PodcastCardProps {
  podcast: typeof mockPodcasts[0];
  size?: 'normal' | 'compact';
}

const PodcastCard = ({ podcast, size = 'normal' }: PodcastCardProps) => {
  const cardSize = size === 'compact' ? 'w-32 sm:w-36' : 'w-36 sm:w-40';
  const imageSize = size === 'compact' ? 'h-32 sm:h-36' : 'h-36 sm:h-40';
  
  return (
    <div className={`flex-shrink-0 ${cardSize} group cursor-pointer animate-fade-in`}>
      <div className="relative overflow-hidden">
        <img 
          src={podcast.coverUrl} 
          alt={podcast.title}
          className={`${imageSize} w-full rounded-xl object-cover shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-yellow-primary/25`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
        <div className="absolute inset-0 bg-yellow-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-xl" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="bg-yellow-primary text-primary-foreground p-3 rounded-full shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-200">
            <Play className="h-6 w-6 fill-current" />
          </div>
        </div>
        {/* Floating yellow accent dot */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-yellow-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
      </div>
      <div className="mt-3 space-y-1 px-1">
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 leading-tight group-hover:text-yellow-primary transition-colors duration-200">{podcast.title}</h3>
        <p className="text-xs text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-200">{podcast.author}</p>
      </div>
    </div>
  );
};

interface SectionProps {
  title: string;
  podcasts: typeof mockPodcasts;
  showAll?: boolean;
  onSeeAll?: () => void;
}

const Section = ({ title, podcasts, showAll = false, onSeeAll }: SectionProps) => {
  const displayPodcasts = showAll ? podcasts : podcasts.slice(0, 2);
  
  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between group">
        <div className="flex items-center gap-3">
          <div className="relative">
            <h2 className="text-xl font-bold bg-gradient-to-r from-foreground to-yellow-primary bg-clip-text text-transparent">{title}</h2>
            <div className="absolute -bottom-1 left-0 h-0.5 w-8 bg-gradient-to-r from-yellow-primary to-transparent opacity-60" />
          </div>
          {title === "Recently Added" && <Clock className="h-5 w-5 text-yellow-primary" />}
        </div>
        {!showAll && podcasts.length > 2 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onSeeAll}
            className="text-muted-foreground hover:text-yellow-primary transition-colors duration-200 p-2 hover:bg-yellow-primary/10 rounded-lg"
          >
            <span className="text-sm mr-1">See all</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-5 pb-4">
          {displayPodcasts.map((podcast, index) => (
            <div key={podcast.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <PodcastCard podcast={podcast} />
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

const MediaLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const recentPodcasts = mockPodcasts.slice(0, 11);
  const businessPodcasts = mockPodcasts.filter(p => p.category === 'business');
  const selfImprovementPodcasts = mockPodcasts.filter(p => p.category === 'selfimprovement');

  const handleCategoryClick = (category: string) => {
    // Navigate to category page - implement based on your routing needs
    console.log(`Navigate to ${category} category`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-yellow-primary/5">
      {/* Header with Search */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="space-y-5">
            {/* Hero Section */}
            <div className="flex items-center justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-yellow-primary/10 rounded-xl">
                    <Headphones className="h-6 w-6 text-yellow-primary" />
                  </div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-foreground via-yellow-primary to-foreground bg-clip-text text-transparent">
                    Media Library
                  </h1>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{mockPodcasts.length} Books</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span>Top Authors</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-primary fill-current" />
                    <span>Premium Content</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Search Bar */}
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5 group-focus-within:text-yellow-primary transition-colors duration-200" />
              <Input
                placeholder="Discover your next favorite audiobook..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-card/50 backdrop-blur border-border/50 rounded-2xl text-base placeholder:text-muted-foreground/70 focus:border-yellow-primary/50 focus:ring-2 focus:ring-yellow-primary/20 transition-all duration-200"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-primary/5 to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-200 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-8">
        {/* Recently Added */}
        <Section 
          title="Recently Added" 
          podcasts={recentPodcasts}
        />

        {/* Browse by Category */}
        <div className="space-y-8 animate-fade-in">
          <div className="relative">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-foreground to-yellow-primary bg-clip-text text-transparent">Browse by Category</h2>
            <div className="absolute -bottom-1 left-0 h-0.5 w-12 bg-gradient-to-r from-yellow-primary to-transparent opacity-60" />
          </div>
          
          {/* Business Category */}
          <div className="space-y-4 group">
            <Card className="p-1 bg-gradient-to-r from-yellow-primary/5 to-transparent border-yellow-primary/20 hover:border-yellow-primary/40 transition-all duration-300">
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-primary/10 rounded-xl">
                      <TrendingUp className="h-5 w-5 text-yellow-primary" />
                    </div>
                    <div>
                      <Button
                        variant="ghost"
                        onClick={() => handleCategoryClick('business')}
                        className="text-xl font-bold text-foreground hover:text-yellow-primary p-0 h-auto transition-colors duration-200"
                      >
                        Business
                        <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                      <p className="text-sm text-muted-foreground mt-1">{businessPodcasts.length} books • Leadership, Strategy & Growth</p>
                    </div>
                  </div>
                </div>
                
                <ScrollArea className="w-full">
                  <div className="flex space-x-5 pb-4">
                    {businessPodcasts.slice(0, 10).map((podcast, index) => (
                      <div key={podcast.id} style={{ animationDelay: `${index * 0.05}s` }}>
                        <PodcastCard podcast={podcast} size="compact" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </Card>
          </div>

          {/* Self Improvement Category */}
          <div className="space-y-4 group">
            <Card className="p-1 bg-gradient-to-r from-yellow-primary/5 to-transparent border-yellow-primary/20 hover:border-yellow-primary/40 transition-all duration-300">
              <div className="bg-card rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-yellow-primary/10 rounded-xl">
                      <Star className="h-5 w-5 text-yellow-primary fill-current" />
                    </div>
                    <div>
                      <Button
                        variant="ghost"
                        onClick={() => handleCategoryClick('selfimprovement')}
                        className="text-xl font-bold text-foreground hover:text-yellow-primary p-0 h-auto transition-colors duration-200"
                      >
                        Self Improvement
                        <ChevronRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                      </Button>
                      <p className="text-sm text-muted-foreground mt-1">{selfImprovementPodcasts.length} books • Personal Growth & Mindfulness</p>
                    </div>
                  </div>
                </div>
                
                <ScrollArea className="w-full">
                  <div className="flex space-x-5 pb-4">
                    {selfImprovementPodcasts.slice(0, 10).map((podcast, index) => (
                      <div key={podcast.id} style={{ animationDelay: `${index * 0.05}s` }}>
                        <PodcastCard podcast={podcast} size="compact" />
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;