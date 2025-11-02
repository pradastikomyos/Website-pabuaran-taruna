import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const JoinKartar = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Join Karang Taruna</h1>
        <div className="max-w-2xl mx-auto bg-card p-8 rounded-lg shadow-sm border border-border">
          <p className="text-muted-foreground mb-6">
            Bergabunglah dengan Karang Taruna Pabuaran dan jadilah bagian dari komunitas pemuda yang aktif dan berprestasi!
          </p>
          <p className="text-foreground">
            Informasi pendaftaran akan segera hadir. Hubungi kami melalui media sosial untuk informasi lebih lanjut.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinKartar;
