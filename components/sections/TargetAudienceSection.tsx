"use client";

import Container from "@/components/common/Container";
import { GraduationCap, Rocket, Hammer, Compass, XCircle, AlertCircle, Eye, CheckCircle2 } from "lucide-react";

interface AudienceType {
  title: string;
  icon: JSX.Element;
  positive?: boolean;
}

function AudienceCard({ audience }: { audience: AudienceType }) {
  return (
    <div className={`group flex items-center gap-6 p-6 md:p-8 rounded-2xl border transition-all duration-500 font-montserrat cursor-default ${audience.positive
      ? "bg-white border-light-grey hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1"
      : "bg-slate-50 border-transparent hover:bg-white hover:border-black/10 hover:shadow-lg hover:-translate-y-1"
      }`}>
      <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full transition-colors duration-500 ${audience.positive ? "bg-primary/5 group-hover:bg-primary/10" : "bg-white border border-light-grey group-hover:bg-slate-100"
        }`}>
        {audience.icon}
      </div>
      <p className={`font-bold text-lg md:text-xl font-poppins transition-colors duration-500 leading-tight ${audience.positive ? "text-black" : "text-grey group-hover:text-black"
        }`}>{audience.title}</p>
    </div>
  );
}

export default function TargetAudienceSection() {
  const forWho: AudienceType[] = [
    { title: "Student Entrepreneurs", icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />, positive: true },
    { title: "Aspiring Founders", icon: <Rocket className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />, positive: true },
    { title: "Early-Stage Builders", icon: <Hammer className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />, positive: true },
    {
      title: "Anyone Confused About Where to Start",
      icon: <Compass className="w-8 h-8 md:w-10 md:h-10 text-primary group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />,
      positive: true,
    },
  ];

  const notFor: AudienceType[] = [
    { title: "People Looking for Shortcuts", icon: <XCircle className="w-8 h-8 md:w-10 md:h-10 text-grey group-hover:text-black group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
    {
      title: "People Chasing Hype or Trends",
      icon: <AlertCircle className="w-8 h-8 md:w-10 md:h-10 text-grey group-hover:text-black group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} />,
    },
    { title: "Passive Learners", icon: <Eye className="w-8 h-8 md:w-10 md:h-10 text-grey group-hover:text-black group-hover:scale-110 transition-all duration-500" strokeWidth={1.5} /> },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      <Container className="relative z-10">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-poppins tracking-tight">
              Who This Is For
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* For Who */}
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                {/* <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={2.5} /> */}
                <h3 className="text-2xl md:text-3xl font-bold text-black font-poppins">For you if</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {forWho.map((audience, idx) => (
                  <AudienceCard key={idx} audience={audience} />
                ))}
              </div>
            </div>

            {/* Not For */}
            <div className="space-y-8 pt-10 border-t border-light-grey">
              <div className="flex items-center gap-4">
                {/* <XCircle className="w-8 h-8 text-black" strokeWidth={2.5} /> */}
                <h3 className="text-2xl md:text-3xl text-grey font-bold font-poppins">This is not for</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6 items-stretch">
                {notFor.map((audience, idx) => (
                  <AudienceCard key={idx} audience={audience} />
                ))}

                {/* Visual balance box to replace 4th item in Not For grid */}
                <div className="group hidden md:flex items-center gap-6 p-6 md:p-8 rounded-2xl border border-transparent bg-primary/5 transition-all duration-500">
                  <p className="text-primary font-bold text-lg font-poppins text-center w-full my-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                    We value action over theory.
                  </p>
                </div>
              </div>

              <div className="bg-slate-100 rounded-2xl p-8 text-center group cursor-default transition-all duration-500 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
                <p className="text-black/90 text-lg md:text-xl font-medium font-montserrat leading-relaxed">
                  If you're here for shortcuts, hype, or passive learning, <span className="text-primary font-bold inline-block">this masterclass won't be a good fit.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
