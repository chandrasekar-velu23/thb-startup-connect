"use client";

import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="w-full flex items-center justify-between py-3 md:py-5 pl-10 md:pl-[12.5rem] pr-6 md:pr-[12.5rem]">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Startup_connect Logo.png"
            alt="Startup Connect Logo"
            width={180}
            height={50}
            className="h-200 sm:h-20 md:h-121 w-auto object-contain"
            priority
          />
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
    </header>
  );
}
