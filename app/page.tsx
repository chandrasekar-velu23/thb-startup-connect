"use client";

import HeroSection from "@/components/sections/HeroSection";
import RealitySection from "@/components/sections/RealitySection";
import SessionSection from "@/components/sections/SessionSection";
import TargetAudienceSection from "@/components/sections/TargetAudienceSection";
import WhyMattersSection from "@/components/sections/WhyMattersSection";
import UrgencySection from "@/components/sections/UrgencySection";
import FinalCTASection from "@/components/sections/FinalCTASection";
import AnnouncementModal from "@/components/common/AnnouncementModal";
import Navbar from "@/components/common/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-blue-900/10 to-slate-950">
      <Navbar />
      <AnnouncementModal />
      {/* Hero Section - Above the fold */}
      <HeroSection />

      {/* Section 2 - The Reality */}
      <RealitySection />

      {/* Section 3 - What This Session Is */}
      <SessionSection />

      {/* Section 4 - Who This Is For */}
      <TargetAudienceSection />

      {/* Section 5 - Why This Matters */}
      <WhyMattersSection />

      {/* Section 6 - Urgency */}
      <UrgencySection />

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
}
