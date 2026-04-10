"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
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

  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsModalOpen(true);
    window.addEventListener('open-registration', handleOpen);

    const bgInterval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % slides.length);
    }, 5000);

    // Auto-scroll on mobile after 2 seconds
    const scrollTimer = setTimeout(() => {
      const isMobile = window.innerWidth < 768;
      if (isMobile && contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 2000);

    return () => {
      window.removeEventListener('open-registration', handleOpen);
      clearInterval(bgInterval);
      clearTimeout(scrollTimer);
    };
  }, []);

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section className="flex flex-col md:block relative bg-slate-950 overflow-hidden">
        {/* Background Slideshow Part */}
        <div className="relative h-[80vh] md:h-screen md:absolute md:inset-0 overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentBg ? "opacity-100" : "opacity-0"
                }`}
            >
              <div
                className="hidden md:block absolute inset-0 bg-cover bg-center md:bg-fixed"
                style={{ backgroundImage: `url('${slide.bgDesktop}')` }}
              />
              <div
                className="md:hidden absolute inset-0 bg-cover"
                style={{
                  backgroundImage: `url('${slide.bgMobile}')`,
                  backgroundPosition: 'center 80%'
                }}
              />
            </div>
          ))}

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/90 md:bg-black/40"></div>

          {/* Scroll Down Button (Mobile Only) */}
          <div className="md:hidden absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3">
            <span className="text-white/40 text-[10px] tracking-[0.3em] font-montserrat uppercase">Explore</span>
            <button
              onClick={scrollToContent}
              className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center animate-bounce bg-white/5 backdrop-blur-sm"
            >
              <ChevronDown className="text-white w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Content Part */}
        <Container size="xl" className="relative z-10 w-full pl-5 ml-5 md:ml-[12.5rem] md:pt-16 pt-5 flex-1 mr-auto transition-all">
          <div
            ref={contentRef}
            className="flex w-full min-h-[50vh] md:min-h-screen pt-16 pb-20 md:pt-0 md:pb-0 items-start md:items-center text-left transition-all scroll-mt-24"
          >
            {/* Main Content Width Wrapper */}
            <div className="w-full lg:w-[85%] xl:w-[75%] max-w-5xl flex flex-col gap-6 md:gap-8 pr-4 lg:pr-12">

              {/* Static Text Content */}
              <div className="relative min-h-[220px] sm:min-h-[250px] md:min-h-[280px] lg:min-h-[300px] flex items-center mb-4 md:mb-8">
                <div className="flex flex-col justify-center w-full">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight font-univia drop-shadow-2xl [text-shadow:_0_4px_12px_rgb(0_0_0_/_0.6)]">
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
                    <h2 className="text-lg sm:text-xl md:text-3xl text-white font-light font-univia leading-relaxed drop-shadow-lg max-w-xs sm:max-w-xl">
                      Learn how to build a Self-Sustainable Business, Brick by Brick
                    </h2>
                  </div>
                </div>
              </div>

              {/* Quick Info Bar */}
              <div className="flex flex-col sm:flex-row gap-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/20 shadow-lg hover:shadow-xl transition-shadow w-full max-w-2xl mt-4 z-20 relative">
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-montserrat uppercase tracking-wider">DATE & TIME</p>
                  <p className="text-white text-lg font-semibold font-univia mt-2">
                    Sunday, May 3rd, 2026
                  </p>
                  <p className="text-white/70 text-sm font-montserrat mt-1">6:00 PM – 8:00 PM</p>
                </div>
                <div className="hidden sm:block w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                <div className="flex-1">
                  <p className="text-white/70 text-xs font-montserrat uppercase tracking-wider">ACCESS</p>
                  <p className="text-white text-lg font-semibold font-univia mt-2">Free Access</p>
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
