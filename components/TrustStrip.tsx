import { ShieldCheck } from "lucide-react";

const TrustStrip = () => {
  // Updated partners list: Removed "CQC Regulated" for compliance
  const partners = [
    { name: "GPhC Registered Pharmacy", icon: true },
    { name: "London Medical Laboratory", icon: false }, // Key partner
    { name: "MHRA Compliant", icon: true },
    { name: "UK Registered Doctors", icon: true }, // Added to replace CQC
  ];

  return (
    <section className="py-8 bg-surface-cyan border-b border-accent/10">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-[10px] font-bold text-light uppercase tracking-widest mb-6 opacity-70">
          Trusted by UK Medical Bodies & Partners
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-80 hover:opacity-100 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-2 group cursor-default">
              {partner.icon && (
                <ShieldCheck className="w-5 h-5 text-light group-hover:text-accent transition-colors" />
              )}
              <span className="text-sm md:text-base font-heading font-bold text-main group-hover:text-primary transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;