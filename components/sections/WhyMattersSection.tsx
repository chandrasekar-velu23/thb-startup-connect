"use client";

import Container from "@/components/common/Container";
import { Target, Layers, Blocks, CheckCircle2, Zap } from "lucide-react";

export default function WhyMattersSection() {
  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden group/section">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] transition-transform duration-1000 group-hover/section:-translate-x-10"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] transition-transform duration-1000 group-hover/section:translate-x-10"></div>
      </div>

      <Container className="relative z-10">
        <div className="flex flex-col gap-16 md:gap-24">

          {/* Section Header */}
          <div className="text-center max-w-4xl mx-auto space-y-6">
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm font-montserrat uppercase tracking-widest mb-2 transition-transform hover:scale-105 cursor-default">
              <Zap className="w-4 h-4" />
              The Reality
            </div> */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black font-poppins tracking-tight">
              Why This Matters
            </h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="text-xl md:text-2xl text-grey font-poppins leading-relaxed pt-4">
              You don't need another idea.
              <br className="hidden md:block" />
              You need the <span className="text-primary font-bold relative inline-block group cursor-default">
                right foundation
                <span className="absolute left-0 w-full  bg-primary/30 rounded-full transition-all duration-300"></span>
              </span>.
            </p>
          </div>

          {/* Main Asymmetrical Grid */}
          <div className="grid lg:grid-cols-12 gap-8 max-w-6xl mx-auto w-full">

            {/* Left Column (Stack of interactive panels) */}
            <div className="lg:col-span-7 flex flex-col gap-8">

              {/* Point 1: Because Section (Starting vs Sustaining) */}
              <div className="group relative bg-white border border-light-grey hover:border-black/10 rounded-3xl p-8 md:p-10 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] overflow-hidden cursor-default">
                {/* Background Icon Detail */}
                <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-10 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                  <Target className="w-64 h-64 text-black" />
                </div>

                <h3 className="text-sm uppercase tracking-widest text-grey font-bold font-montserrat mb-8 relative z-10">Because...</h3>

                <div className="relative z-10 flex flex-col gap-8">
                  {/* Item: Starting is easy */}
                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-light-grey flex items-center justify-center text-black font-bold text-xl font-poppins transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/10">
                      1
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black font-poppins mb-2 transition-colors duration-500 group-hover:text-primary">Starting is easy</h4>
                      <p className="text-grey text-sm md:text-base font-montserrat leading-relaxed max-w-md">
                        Anyone can launch a startup. The barrier to entry is almost zero.
                      </p>
                    </div>
                  </div>

                  {/* Subtle Connecting Line */}
                  <div className="h-px w-full bg-light-grey/60 relative ml-7 sm:ml-0">
                    <div className="absolute left-0 sm:left-6 -top-2 w-0.5 h-5 bg-light-grey rounded-full hidden sm:block"></div>
                  </div>

                  {/* Item: Sustaining is everything */}
                  <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-light-grey flex items-center justify-center text-black font-bold text-xl font-poppins transition-all duration-300 group-hover:bg-primary/20 group-hover:text-primary group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/10">
                      2
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-black font-poppins mb-2 transition-colors duration-500 group-hover:text-primary">
                        Sustaining is everything
                      </h4>
                      <p className="text-grey text-sm md:text-base font-montserrat leading-relaxed max-w-md">
                        Building something that lasts, profits, and creates real value is the actual challenge.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Point 2: We Believe Section */}
              <div className="group relative bg-slate-100 text-black rounded-3xl p-8 md:p-10 transition-all duration-700 hover:shadow-xl hover:-translate-y-2 hover:shadow-primary/10 overflow-hidden cursor-default border border-transparent hover:border-black/5">
                {/* Immersive Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-primary/10 blur-[90px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-8">
                      <Layers className="w-6 h-6 text-primary animate-pulse" />
                      <h3 className="text-sm uppercase tracking-widest text-primary font-bold font-montserrat">At The Half Brick</h3>
                    </div>

                    <p className="text-3xl md:text-4xl lg:text-5xl font-poppins leading-tight">
                      <span className="font-light text-black/80">Business is built</span>
                      <br />
                      <span className="font-bold text-black relative inline-block mt-3 transition-colors duration-500 group-hover:text-primary">
                        step by step.
                      </span>
                    </p>
                  </div>

                  <div className="mt-12 pt-6 border-t border-black/10 flex items-center justify-between">
                    <p className="text-lg md:text-xl font-montserrat text-black/50 group-hover:text-black/90 transition-colors duration-500 delay-100">
                      Not hype by hype.
                    </p>
                    {/* <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center bg-white/50 group-hover:bg-primary/20 group-hover:border-primary/20 transition-all duration-500 hover:scale-110">
                       <span className="text-black group-hover:text-primary transform group-hover:translate-x-1 transition-all duration-300">→</span> 
                    </div> */}
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column (Visual Statement - Brick by Brick) */}
            <div className="lg:col-span-5 relative h-full flex min-h-[400px] lg:min-h-0">
              <div className="w-full bg-white border border-light-grey rounded-3xl p-10 flex flex-col justify-center items-center text-center hover:border-primary/40 transition-all duration-700 group relative overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1">

                {/* Custom Animated CSS Bricks */}
                <div className="relative w-48 h-48 mb-12 flex items-end justify-center transform group-hover:scale-105 transition-transform duration-700">

                  {/* Foundation layer */}
                  <div className="absolute bottom-0 flex justify-center w-full gap-2">
                    <div className="w-[70px] h-10 bg-black rounded shadow-md transform transition-all duration-700 group-hover:-translate-y-2 group-hover:bg-primary/20"></div>
                    <div className="w-[70px] h-10 bg-black rounded shadow-md transform transition-all duration-700 delay-75 group-hover:-translate-y-2 group-hover:bg-primary/20 border border-white/10"></div>
                  </div>
                  {/* Middle layer */}
                  <div className="absolute bottom-11 flex justify-center w-full z-10">
                    <div className="w-[70px] h-10 bg-black/90 rounded shadow-md transform transition-all duration-700 delay-150 group-hover:-translate-y-4 group-hover:bg-primary/20"></div>
                  </div>
                  {/* Top layer */}
                  <div className="absolute bottom-[88px] flex justify-center w-full z-20">
                    <div className="w-[70px] h-10 bg-black/80 rounded shadow-md transform transition-all duration-700 delay-200 group-hover:-translate-y-6 group-hover:bg-primary/20"></div>
                  </div>

                  {/* Icon that appears behind on hover */}
                  <Blocks className="absolute -top-4 text-grey/5 w-40 h-40 opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-1000 ease-out" />
                </div>

                <div className="relative z-30">
                  <p className="text-xs md:text-sm font-montserrat uppercase tracking-[0.3em] text-grey mb-4 transition-colors group-hover:text-primary">
                    The ultimate approach
                  </p>
                  <h3 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black font-poppins tracking-tighter !leading-[1.1] transition-transform duration-500 group-hover:scale-105">
                    Brick by
                    <span className="block text-primary transform origin-left transition-all duration-500 ease-out">Brick.</span>
                  </h3>
                </div>
              </div>
            </div>

          </div>

          {/* Key Takeaway Footer */}
          <div className="max-w-5xl mx-auto w-full relative group cursor-default">
            {/* Colorful soft shadow behind the box */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-black to-primary rounded-3xl blur opacity-10 group-hover:opacity-30 transition duration-1000 group-hover:duration-300"></div>

            <div className="relative bg-white border border-light-grey rounded-3xl p-8 md:p-14 font-montserrat transition-all duration-500 group-hover:border-primary/20">
              {/* <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-8 transform group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div> */}

              <p className="text-black text-xl md:text-2xl lg:text-3xl font-regular leading-relaxed md:leading-loose text-justify">
                Every successful business you admire started with a single <span className="font-bold transition-colors duration-500 group-hover:text-primary">brick</span>.
                The difference isn't the idea—it's the <span className="font-bold transition-colors duration-500 group-hover:text-primary">foundation</span> and the <span className="font-bold transition-colors duration-500 group-hover:text-primary">discipline</span> to build properly.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
