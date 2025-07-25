import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import Test from "./pages/Test";
import Test3 from "./pages/Test3";
import HowItWorks from "./pages/HowItWorks";
import MyBooks from "./pages/MyBooks";
import MediaLibrary from "./pages/MediaLibrary";
import BookDetail from "./pages/BookDetail";
import Player from "./pages/Player";
import ReviewChapter from "./pages/ReviewChapter";
import ProcessChapters from "./pages/ProcessChapters";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/my-books" element={<MyBooks />} />
            <Route path="/media-library" element={<MediaLibrary />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/player" element={<Player />} />
            <Route path="/review-chapter" element={<ReviewChapter />} />
            <Route path="/process-chapters" element={<ProcessChapters />} />
            <Route path="/test" element={<Test />} />
            <Route path="/test3" element={<Test3 />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
