"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function AnnouncementModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if the user is already registered via cookie
    const checkCookie = () => {
      const match = document.cookie.match(new RegExp('(^| )registered_session_id=([^;]+)'));
      if (!match) {
        setIsOpen(true);
      }
    };
    
    // Instant popup
    const timer = setTimeout(() => {
      checkCookie();
    }, 0);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative bg-white rounded-xl border border-light-grey w-full max-w-sm sm:max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col">
        
        {/* Image Section */}
        <div className="w-full relative bg-white flex-shrink-0 flex items-center justify-center p-6 md:p-8 pt-10 md:pt-12 pb-2">
          <img
            src="/images/announcement.jpg"
            alt="Masterclass Announcement"
            className="max-w-full max-h-[55vh] object-contain rounded-sm"
          />
        </div>
        
        {/* Bottom CTA Section */}
        <div className="p-5 flex flex-col items-center bg-white border-t border-light-grey/50">
          <p className="font-bold text-[#333333] font-univia mb-4 text-sm tracking-wide">
            Join us for this upcoming event!
          </p>
          
          <div className="flex w-full gap-3">
            <button
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new Event('open-registration'));
              }}
              className="flex-1 bg-[#D7282F] hover:bg-[#B92228] text-white font-semibold py-2.5 px-4 rounded-md transition-colors font-montserrat shadow-sm text-sm"
            >
              Apply to Join Now
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="bg-[#F5F5F5] hover:bg-[#EAEAEA] text-[#333333] font-semibold py-2.5 px-6 rounded-md transition-colors font-montserrat text-sm border border-black/5"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
