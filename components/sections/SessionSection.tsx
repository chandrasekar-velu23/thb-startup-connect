"use client";

import Container from "@/components/common/Container";
import { Target, Brain, CheckCircle2, Building2, XCircle } from "lucide-react";

interface LearningPoint {
  title: string;
  description: string;
  icon: JSX.Element;
}

function LearningCard({ point }: { point: LearningPoint }) {
  return (
    <div className="group flex items-start gap-6 p-6 md:p-8 rounded-3xl border border-transparent bg-[#FAFAFA] hover:bg-white hover:border-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-500 font-montserrat cursor-default">
      <div className="flex-shrink-0 flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white border border-light-grey group-hover:bg-primary/5 group-hover:border-primary/20 transition-all duration-500 shadow-sm">
        <div className="transform group-hover:scale-110 transition-transform duration-500">
          {point.icon}
        </div>
      </div>
      <div className="space-y-3 mt-1">
        <h4 className="text-lg md:text-xl font-bold text-black font-poppins transition-colors duration-500 group-hover:text-primary">{point.title}</h4>
        <p className="text-grey text-sm md:text-base leading-relaxed tracking-wide">{point.description}</p>
      </div>
    </div>
  );
}

export default function SessionSection() {
  const learningPoints: LearningPoint[] = [
    {
      title: "Avoid the Startup Trap",
      description: "Understand the common pitfalls that quietly derail most startups before they ever gain real traction.",
      icon: <Target className="w-7 h-7 text-primary" strokeWidth={2} />,
    },
    {
      title: "Beyond Funding and Hype",
      description: "Discover why endlessly chasing venture money and industry trends can actually destroy your business.",
      icon: <Brain className="w-7 h-7 text-primary" strokeWidth={2} />,
    },
    {
      title: "Validate What Works",
      description: "Learn proven, actionable methods to test your ideas with real customers quickly without burning cash.",
      icon: <CheckCircle2 className="w-7 h-7 text-primary" strokeWidth={2} />,
    },
    {
      title: "Build Survival Mechanics",
      description: "Master the forgotten fundamentals of sustainable, profitable business building that withstands time.",
      icon: <Building2 className="w-7 h-7 text-primary" strokeWidth={2} />,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden group/section">
      <Container className="relative z-10">
        <div className="space-y-16 lg:space-y-24">

          {/* Main heading and What it Isn't */}
          <div className="text-center space-y-10 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-poppins tracking-tight">
                The <span className="text-primary">Session</span>
              </h2>
              <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 font-montserrat">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-light-grey text-grey shadow-sm group cursor-default hover:border-black/20 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <XCircle className="w-5 h-5 text-black/40 group-hover:text-black transition-colors" />
                <span className="font-semibold text-sm">Not a motivational webinar</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-light-grey text-grey shadow-sm group cursor-default hover:border-black/20 hover:shadow-md hover:-translate-y-0.5 transition-all">
                <XCircle className="w-5 h-5 text-black/40 group-hover:text-black transition-colors" />
                <span className="font-semibold text-sm">Not a startup "how-to" crash course</span>
              </div>
            </div>
          </div>

          {/* What it IS - Immersive Block */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-slate-100 rounded-[2.5rem] p-10 md:p-16 text-center group cursor-default transition-all duration-700 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 relative overflow-hidden">
              {/* immersive background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col items-center justify-center space-y-10">
                <p className="text-2xl md:text-3xl text-black font-montserrat font-light leading-relaxed max-w-2xl">
                  A <span className="font-bold text-black relative transition-colors duration-500 group-hover:text-primary">closed-door masterclass</span> focused on one single objective:
                </p>

                <div className="w-full pt-4 border-t border-black/10">
                  <p className="text-4xl md:text-5xl lg:text-6xl pt-6 font-extrabold text-black font-poppins leading-tight tracking-tight">
                    Building a <br className="md:hidden" />
                    <span className="text-primary group-hover:text-black transition-colors duration-500">self-sustainable </span>
                    business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What you'll learn */}
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-black font-poppins inline-flex flex-col">
                What You Will Learn
                <div className="h-1.5 w-1/2 bg-primary mx-auto mt-4 rounded-full"></div>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch pt-4">
              {learningPoints.map((point, idx) => (
                <LearningCard key={idx} point={point} />
              ))}
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
