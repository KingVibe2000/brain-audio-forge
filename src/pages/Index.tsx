import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PdfDropZone from "@/components/PdfDropZone";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <PdfDropZone />
      <Footer />
    </div>
  );
};

export default Index;
