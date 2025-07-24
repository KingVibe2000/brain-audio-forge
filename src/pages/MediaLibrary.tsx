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
    <div className={`flex-shrink-0 ${cardSize} cursor-pointer`}>
      <div className="relative">
        <img 
          src={podcast.coverUrl} 
          alt={podcast.title}
          className={`${imageSize} w-full rounded-lg object-cover`}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-yellow-primary/80 text-white p-2 rounded-full">
            <Play className="h-4 w-4 fill-current" />
          </div>
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-2">{podcast.title}</h3>
        <p className="text-xs text-muted-foreground">{podcast.author}</p>
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
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        {!showAll && podcasts.length > 2 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onSeeAll}
            className="text-muted-foreground"
          >
            <span className="text-sm mr-1">See all</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-4">
          {displayPodcasts.map((podcast) => (
            <PodcastCard key={podcast.id} podcast={podcast} />
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
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Headphones className="h-6 w-6 text-yellow-primary" />
              <h1 className="text-2xl font-semibold text-foreground">Media Library</h1>
            </div>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search audiobooks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 rounded-lg"
              />
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
        <div className="space-y-6">
          <h2 className="text-xl font-semibold text-foreground">Browse by Category</h2>
          
          {/* Business Category */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-yellow-primary" />
              <h3 className="text-lg font-medium text-foreground">Business</h3>
              <span className="text-sm text-muted-foreground">({businessPodcasts.length})</span>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4">
                {businessPodcasts.slice(0, 8).map((podcast) => (
                  <PodcastCard key={podcast.id} podcast={podcast} size="compact" />
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Self Improvement Category */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Star className="h-4 w-4 text-yellow-primary" />
              <h3 className="text-lg font-medium text-foreground">Self Improvement</h3>
              <span className="text-sm text-muted-foreground">({selfImprovementPodcasts.length})</span>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-4">
                {selfImprovementPodcasts.slice(0, 8).map((podcast) => (
                  <PodcastCard key={podcast.id} podcast={podcast} size="compact" />
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaLibrary;