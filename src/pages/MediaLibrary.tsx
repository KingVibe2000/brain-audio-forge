import React, { useState } from 'react';
import { Search, ChevronRight, Play } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock data for demonstration
const mockPodcasts = [
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
    <div className={`flex-shrink-0 ${cardSize} group cursor-pointer`}>
      <div className="relative">
        <img 
          src={podcast.coverUrl} 
          alt={podcast.title}
          className={`${imageSize} w-full rounded-lg object-cover shadow-sm transition-transform duration-200 group-hover:scale-105`}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-lg flex items-center justify-center">
          <Play className="h-8 w-8 text-white fill-white" />
        </div>
      </div>
      <div className="mt-2 space-y-1">
        <h3 className="text-sm font-medium text-foreground line-clamp-2 leading-tight">{podcast.title}</h3>
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
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-foreground">{title}</h2>
        {!showAll && podcasts.length > 2 && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onSeeAll}
            className="text-muted-foreground hover:text-foreground p-0 h-auto"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        )}
      </div>
      
      <ScrollArea className="w-full">
        <div className="flex space-x-4 pb-2">
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
  
  const recentPodcasts = mockPodcasts.slice(0, 4);
  const businessPodcasts = mockPodcasts.filter(p => p.category === 'business');
  const selfImprovementPodcasts = mockPodcasts.filter(p => p.category === 'selfimprovement');

  const handleCategoryClick = (category: string) => {
    // Navigate to category page - implement based on your routing needs
    console.log(`Navigate to ${category} category`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Search */}
      <div className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-foreground">Media Library</h1>
            
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search podcasts, authors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 bg-surface-elevated border-border"
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
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => handleCategoryClick('business')}
                className="text-lg font-medium text-foreground hover:text-primary p-0 h-auto"
              >
                Business
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-2">
                {businessPodcasts.slice(0, 10).map((podcast) => (
                  <PodcastCard key={podcast.id} podcast={podcast} size="compact" />
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Self Improvement Category */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => handleCategoryClick('selfimprovement')}
                className="text-lg font-medium text-foreground hover:text-primary p-0 h-auto"
              >
                Self Improvement
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
            
            <ScrollArea className="w-full">
              <div className="flex space-x-4 pb-2">
                {selfImprovementPodcasts.slice(0, 10).map((podcast) => (
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