"use client";

import { useState } from "react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import RegistrationModal from "@/components/common/RegistrationModal";

export default function FinalCTASection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="py-16 md:py-32 bg-white relative overflow-hidden font-montserrat">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            {/* Main statement */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold text-black leading-tight font-univia">
                Here's the Truth
              </h2>
              <p className="text-xl md:text-2xl text-black font-montserrat">
                If you are serious about building something real,
                <br />
                <span className="text-primary font-bold">
                  this session is for you.
                </span>
              </p>
            </div>

            {/* Details */}
            <div className="bg-white rounded-xl p-8 md:p-12 border border-light-grey space-y-6 hover:border-primary/30 transition-all duration-300 hover:shadow-md">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <div className="text-center">
                  <p className="text-black text-xs uppercase tracking-wider font-semibold">
                    Event Date
                  </p>
                  <p className="text-3xl md:text-2xl font-bold text-primary font-univia mt-2">
                    May 3rd
                  </p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-light-grey"></div>
                <div className="text-center">
                  <p className="text-black text-xs uppercase tracking-wider font-semibold">
                    Time
                  </p>
                  <p className="text-3xl md:text-2xl font-bold text-primary font-univia mt-2">
                    6:00 - 8:00 PM IST
                  </p>
                </div>
                <div className="hidden sm:block w-px h-16 bg-light-grey"></div>
                <div className="text-center">
                  <p className="text-black text-xs uppercase tracking-wider font-semibold">
                    Duration
                  </p>
                  <p className="text-3xl md:text-2xl font-bold text-primary font-univia mt-2">
                    2 hours
                  </p>
                </div>
              </div>
            </div>

            {/* Final message */}
            <div className="space-y-4 pt-6">
              <p className="text-black text-lg">
                If not, you can skip.
              </p>
              <p className="text-black text-sm">
                But think carefully. How much longer can you stay confused?
              </p>
            </div>

            {/* Primary CTA */}
            <div className="space-y-6 pt-8">
              <Button
                size="lg"
                variant="primary"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto px-12"
              >
                Apply to Join Now
              </Button>
              <p className="text-sm text-black">
                Limited seats • Free access
              </p>
            </div>

            {/* Secondary info */}
            <div className="pt-8 border-t border-light-grey space-y-4">
              <p className="text-black">
                We'll confirm your seat and send you the link within 24 hours.
              </p>
              <p className="text-sm text-black">
                Questions? Reply to the confirmation email.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
