import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Gallery</h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-muted-foreground">
            Galeri foto dan dokumentasi kegiatan Karang Taruna Pabuaran akan segera ditambahkan.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
