import Header from "@/components/Header";
import PdfDropZone from "@/components/PdfDropZone";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <PdfDropZone />
    </div>
  );
};

export default Index;
