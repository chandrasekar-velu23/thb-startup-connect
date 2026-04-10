"use client";

import { useState, useEffect } from "react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import RegistrationModal from "@/components/common/RegistrationModal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentBg, setCurrentBg] = useState(0);

  const slides = [
    {
      bgDesktop: '/images/hero-bg.jpeg',
      bgMobile: '/images/hero-bg-ph-1.png',
    },
    {
      bgDesktop: '/images/bg-1.png',
      bgMobile: '/images/bg1-ph-1.png',
    }
  ];

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-registration', handleOpen);

    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % slides.length);
    }, 5000); // Shift background every 5 seconds

    return () => {
      window.removeEventListener('open-registration', handleOpen);
      clearInterval(bgInterval);
    };
  }, []);

  return (
    <>
      <section
        className="min-h-[100dvh] flex items-center pt-60 md:pt-20 pb-10 relative overflow-hidden bg-white"
      >
        {/* Background Slideshow */}
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBg ? "opacity-100" : "opacity-0"
              }`}
          >
            {/* Desktop Background */}
            <div
              className="hidden md:block absolute inset-0 bg-cover bg-center md:bg-fixed"
              style={{ backgroundImage: `url('${slide.bgDesktop}')` }}
            />
            {/* Mobile Background */}
            <div
              className="md:hidden absolute inset-0 bg-cover "
              style={{
                backgroundImage: `url('${slide.bgMobile}')`,
                backgroundPosition: 'center 80%'
              }}
            />
          </div>
        ))}

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80 md:bg-black/40 md:bg-none"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        {/* Adjusted Container with margin shift left side */}
        <Container size="xl" className="relative z-10 w-full pl-0 ml-10 md:ml-[12.5rem] pt-16 flex-1 mr-auto transition-all">
          <div className="flex w-full min-h-[100dvh] pt-[60vh] pb-16 md:pt-0 md:pb-0 items-start md:items-center text-left">
            {/* Main Content Width Wrapper */}
            <div className="w-full lg:w-[85%] xl:w-[75%] max-w-5xl flex flex-col gap-6 md:gap-8 pr-4 lg:pr-12">

              {/* Static Text Content */}
              <div className="relative min-h-[220px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[300px] flex items-center mb-4 md:mb-8">
                <div className="flex flex-col justify-center w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-poppins drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.6)]">
                    <span className="text-red-600 block">Startup</span>
                    <span className="text-red-600 block mt-2">
                      is the New Trap
                    </span>
                  </h1>

                  <div className="mt-6 md:mt-10 space-y-3">
                    <p className="text-base sm:text-lg md:text-2xl text-white/90 font-montserrat font-light drop-shadow-md">
                      Nobody Told You This
                    </p>

                    {/* Sub-headline */}
                    <h2 className="text-lg sm:text-xl md:text-3xl text-white font-light font-poppins leading-relaxed drop-shadow-lg max-w-xs sm:max-w-xl">
                      Learn how to build a Self-Sustainable Business, Brick by Brick
                    </h2>
                  </div>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow w-full max-w-2xl mt-4 z-20 relative">
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-montserrat uppercase tracking-wider">DATE & TIME</p>
                  <p className="text-white text-lg font-semibold font-poppins mt-2">
                    Sunday, May 3rd, 2026
                  </p>
                  <p className="text-white/70 text-sm font-montserrat mt-1">6:00 PM – 7:30 PM IST</p>
                </div>
                <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-montserrat uppercase tracking-wider">ACCESS</p>
                  <p className="text-white text-lg font-semibold font-poppins mt-2">Free Access</p>
                  <p className="text-orange-300 text-sm font-medium font-montserrat mt-1">
                    Limited Seats
                  </p>
                </div>
              </div>

              <div className="space-y-4 z-20 relative">
                <p className="text-base md:text-lg text-white/80 font-montserrat tracking-wide">
                  Not for Everyone. Only for Serious Builders.
                </p>
                {/* CTA Button */}
                <div className="pt-2">
                  <Button
                    size="lg"
                    variant="primary"
                    onClick={() => setIsModalOpen(true)}
                    className="w-full sm:w-auto shadow-[0_0_20px_rgba(201,37,21,0.4)]"
                  >
                    Apply to Join Now
                  </Button>
                  <p className="text-sm text-white/70 font-montserrat mt-4">
                    Seats are limited. Reserve yours today.
                  </p>
                </div>
              </div>

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
