import { ShieldCheck } from "lucide-react";

const TrustStrip = () => {
  // Placeholder text for logos - in production, replace these with SVGs from the "public/logos" folder
  const partners = [
    { name: "CQC Regulated", icon: true },
    { name: "GPhC Registered Pharmacy", icon: true },
    { name: "London Medical Laboratory", icon: false }, // His specific partner
    { name: "MHRA Compliant", icon: false },
  ];

  return (
    <section className="py-8 bg-surface border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-xs font-bold text-light uppercase tracking-widest mb-6">
          Trusted by UK Medical Bodies & Partners
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, i) => (
            <div key={i} className="flex items-center gap-2 group">
              {partner.icon && (
                <ShieldCheck className="w-5 h-5 text-light group-hover:text-primary transition-colors" />
              )}
              <span className="text-sm md:text-base font-heading font-semibold text-main group-hover:text-primary transition-colors">
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