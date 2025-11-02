const divisions = [
  "Bidang Pendidikan dan Pelatihan",
  "Bidang Olahraga dan Seni",
  "Bidang Usaha Kesejahteraan Sosial",
  "Bidang Lingkungan Hidup",
  "Bidang Kewirausahaan",
  "Bidang Keagamaan",
];

const DivisiSection = () => {
  return (
    <section className="bg-muted py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Divisi
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {divisions.map((division, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <h3 className="font-semibold text-foreground text-center">
                {division}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DivisiSection;
