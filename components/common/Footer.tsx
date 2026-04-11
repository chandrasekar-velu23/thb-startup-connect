"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-light-grey">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {/* About */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white font-bold">█</span>
              </div>
              <span className="font-bold text-black font-univia">The Half Brick</span>
            </div>
            <p className="text-mid-grey text-sm font-montserrat">
              Building sustainable businesses brick by brick, not hype by hype.
            </p>
          </div>

          {/* Event Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-black font-univia">Event</h3>
            <ul className="space-y-2 text-sm text-mid-grey font-montserrat">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Masterclass
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div className="space-y-4">
            <h3 className="font-semibold text-black font-univia">Follow</h3>
            <ul className="space-y-2 text-sm text-mid-grey font-montserrat">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-black font-univia">Contact</h3>
            <ul className="space-y-2 text-sm text-mid-grey font-montserrat">
              <li>
                <a
                  href="mailto:hello@thehalfbrick.com"
                  className="hover:text-primary transition-colors"
                >
                  hello@thehalfbrick.com
                </a>
              </li>
              <li>
                <a href="tel:+919876543210" className="hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-light-grey py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mid-grey font-montserrat">
            <p>&copy; {currentYear} The Half Brick. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
