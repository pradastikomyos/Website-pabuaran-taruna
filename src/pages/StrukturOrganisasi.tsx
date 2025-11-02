import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const StrukturOrganisasi = () => {
  const struktur = [
    { jabatan: "Ketua", nama: "Nama Ketua" },
    { jabatan: "Wakil Ketua", nama: "Nama Wakil" },
    { jabatan: "Sekretaris", nama: "Nama Sekretaris" },
    { jabatan: "Bendahara", nama: "Nama Bendahara" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">Struktur Organisasi</h1>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {struktur.map((item, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-lg shadow-sm border border-border"
              >
                <h3 className="font-bold text-lg text-foreground mb-2">{item.jabatan}</h3>
                <p className="text-muted-foreground">{item.nama}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StrukturOrganisasi;
