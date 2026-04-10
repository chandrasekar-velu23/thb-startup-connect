"use client";

import Container from "@/components/common/Container";
import { Lock, Clock, Ban } from "lucide-react";

export default function UrgencySection() {
  return (
    <section className="py-16 md:py-24 bg-white font-montserrat">
      <Container>
        <div className="space-y-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black text-center font-univia">
            This is Exclusive
          </h2>

          {/* Main urgency messages list */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Closed-door Session */}
            <div className="group relative overflow-hidden bg-white border border-light-grey rounded-2xl p-8 md:p-10 hover:border-black hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center group-hover:bg-black group-hover:text-white text-slate-700 transition-colors duration-500">
                  <Lock className="w-8 h-8 flex-shrink-0" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3 font-univia group-hover:scale-105 transition-transform duration-300">
                    Closed-door Session
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    This is not a public webinar. It's a curated masterclass with
                    limited spots to maintain quality and interactivity.
                  </p>
                </div>
              </div>
            </div>

            {/* Limited seats message */}
            <div className="group relative overflow-hidden bg-white border border-light-grey rounded-2xl p-8 md:p-10 hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white text-amber-600 transition-colors duration-500 relative">
                  <Clock className="w-8 h-8 animate-spin-slow flex-shrink-0" style={{ animationDuration: '4s' }} strokeWidth={2} />
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3 font-univia group-hover:scale-105 transition-transform duration-300 group-hover:text-amber-600">
                    Limited Seats
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    Whether you attend or not, the seats will fill up. Once
                    registrations close, there's no overflow list.
                  </p>
                </div>
              </div>
            </div>

            {/* No replay message */}
            <div className="group relative overflow-hidden bg-white border border-light-grey rounded-2xl p-8 md:p-10 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-bl-full -z-10 group-hover:scale-125 transition-transform duration-700 ease-out"></div>
              <div className="flex flex-col items-center text-center gap-6">
                <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center group-hover:bg-red-500 group-hover:text-white text-red-500 transition-colors duration-500">
                  <Ban className="w-8 h-8 flex-shrink-0 group-hover:animate-pulse" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-3 font-univia group-hover:scale-105 transition-transform duration-300 group-hover:text-red-500">
                    No Replays. No Second Batch.
                  </h3>
                  <p className="text-sm md:text-base text-neutral-600 leading-relaxed">
                    This masterclass is live on May 3rd. If you miss it, it's gone.
                    We don't believe in replacing the energy of live interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom statement */}
          <div className="text-center">
            <p className="text-xl text-black">
              If you're serious about building something real,
            </p>
            <p className="text-2xl md:text-3xl font-bold text-primary mt-4 font-univia">
              this session is for you.
            </p>
            <p className="text-lg text-black mt-6">
              If you're unsure, that's also a signal.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
