"use client";

import Container from "@/components/common/Container";
import { DollarSign, Lightbulb, Megaphone, TrendingDown, Users, Leaf, AlertCircle } from "lucide-react";

interface Item {
  title: string;
  icon: JSX.Element;
}

function ItemCard({ item, isChase }: { item: Item; isChase: boolean }) {
  return (
    <div className={`group flex items-center gap-5 p-5 md:p-6 rounded-2xl border transition-all duration-500 font-montserrat cursor-default ${isChase
      ? "bg-[#FAFAFA] border-transparent hover:bg-white hover:border-black/10 hover:shadow-lg hover:-translate-y-1"
      : "bg-white border-light-grey hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
      }`}>
      <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full transition-colors duration-500 ${isChase ? "bg-white border border-light-grey group-hover:bg-slate-50" : "bg-primary/5 group-hover:bg-primary/10"
        }`}>
        {item.icon}
      </div>
      <p className={`font-bold text-lg md:text-xl font-poppins transition-colors duration-500 leading-tight ${isChase ? "text-grey group-hover:text-black" : "text-black"
        }`}>{item.title}</p>
    </div>
  );
}

export default function RealitySection() {
  const whatTheyChase: Item[] = [
    { title: "Funding", icon: <DollarSign className="w-6 h-6 md:w-8 md:h-8 text-grey group-hover:text-black group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
    { title: "Ideas", icon: <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-grey group-hover:text-black group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
    { title: "Hype", icon: <Megaphone className="w-6 h-6 md:w-8 md:h-8 text-grey group-hover:text-black group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
  ];

  const whatTheyIgnore: Item[] = [
    { title: "Cash Flow", icon: <TrendingDown className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
    { title: "Customers", icon: <Users className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
    { title: "Sustainability", icon: <Leaf className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden group/section">
      <Container className="relative z-10">
        <div className="space-y-16">

          {/* Main statement */}
          <div className="text-center space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 text-black font-semibold text-sm font-montserrat uppercase tracking-widest mb-2 cursor-default">
              <AlertCircle className="w-4 h-4 text-primary" />
              The Trap
            </div> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-poppins tracking-tight">
              The Reality
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl md:text-2xl text-grey max-w-3xl mx-auto font-poppins leading-relaxed pt-4">
              Most people are starting up today.
              <br />
              Very few are building something that <span className="text-black font-bold relative inline-block group cursor-default">
                survives
                {/* <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full transition-all duration-300 group-hover:h-3 group-hover:bottom-0 -z-10"></span> */}
              </span>.
            </p>
          </div>

          {/* What they chase vs ignore grid */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start pt-8">
            {/* They Chase Column */}
            <div className="space-y-8 relative">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-grey/30"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-grey font-poppins">They Chase</h3>
              </div>
              <div className="space-y-4">
                {whatTheyChase.map((item, idx) => (
                  <ItemCard key={idx} item={item} isChase={true} />
                ))}
              </div>
            </div>

            {/* But Ignore Column */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-black font-poppins">But Ignore</h3>
              </div>
              <div className="space-y-4">
                {whatTheyIgnore.map((item, idx) => (
                  <ItemCard key={idx} item={item} isChase={false} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom message callout */}
          <div className="max-w-4xl mx-auto pt-16">
            <div className="bg-slate-100 rounded-3xl p-8 md:p-14 text-center group cursor-default transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 relative overflow-hidden">
              {/* immersive background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-primary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center justify-center space-y-6">
                <p className="text-xl md:text-2xl text-black/70 font-montserrat">
                  That's why many startups don't fail loudly.
                </p>
                <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-poppins leading-tight tracking-tight">
                  They <span className="text-primary transition-colors duration-500">quietly disappear.</span>
                </div>

                <div className="mt-8 pt-8 border-t border-black/10 w-full max-w-2xl mx-auto">
                  <p className="text-lg md:text-xl text-black/90 font-montserrat leading-relaxed">
                    If you don't want to be one of them, you need
                    <span className="text-primary font-bold"> clarity </span>
                    before you start.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
