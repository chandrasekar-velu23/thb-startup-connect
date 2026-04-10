"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full flex items-center justify-between py-3 md:py-5 pl-10 md:pl-[12.5rem] pr-6 md:pr-[12.5rem]">
        {/* Logo (Left side) */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Startup_connect Logo.png"
            alt="Startup Connect Logo"
            width={180}
            height={50}
            className="h-200 sm:h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Navigation & CTA (Right side) */}
        <div className="flex items-center gap-6 md:gap-8">
          <Link href="https://www.thehalfbrick.com/" className="text-black font-poppins hover:text-primary transition-colors text-sm md:text-base font-medium">
            Home
          </Link>

          {/* CTA Button - Hidden on mobile */}
          <div className="hidden sm:block">
            <Button
              size="sm"
              variant="primary"
              onClick={() => window.dispatchEvent(new Event("open-registration"))}
              className="shadow-md text-[11px] px-3 py-1.5 sm:text-sm whitespace-nowrap"
            >
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
