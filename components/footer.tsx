import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import "./footer.css";

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isTalentDevelopmentOpen, setTalentDevelopmentOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const toggleTalentDevelopment = () => {
    setTalentDevelopmentOpen((prevState) => !prevState);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe-newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error('Subscribe failed');
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
    }
  };

  return (
    <footer className="thb-footer">
      <div className="thb-footer-container">
        
        {/* Upper Footer Section */}
        <div className="thb-footer-upper">
          
          {/* Logo Section */}
          <div className="thb-footer-logo-col">
            <Image
              className="thb-footer-logo"
              src="/icons/footer_logo_thb.svg"
              alt="The Half Brick Logo"
              width={200}
              height={99}
              priority
              style={{ width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Explore Section */}
          <div className="thb-footer-col">
            <h3 className="thb-footer-heading">Explore</h3>
            <div className="thb-footer-links-list">
              <Link href="/raw-stories" className="thb-footer-link">Raw Stories</Link>
              <Link href="/startup-connect" className="thb-footer-link">Startup Connect</Link>
              
              <div className={`thb-talent-toggle-container ${isTalentDevelopmentOpen ? 'active' : ''}`}>
                <div className="thb-talent-toggle" onClick={toggleTalentDevelopment}>
                  <span>Talent<br />Development</span>
                  <button className="thb-talent-arrow-btn" aria-label="Toggle Talent Development">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
                {isTalentDevelopmentOpen && (
                  <div className="thb-talent-submenu">
                    <Link href="#" className="thb-footer-link">Internship</Link>
                    <Link href="#" className="thb-footer-link">Mentorship</Link>
                    <Link href="#" className="thb-footer-link">Cohort Programs</Link>
                  </div>
                )}
              </div>
              
              <Link href="/discover/social-impact" className="thb-footer-link">Social Impact</Link>
              <Link href="/discover/peoples_award" className="thb-footer-link">People’s Award</Link>
              <Link href="#" className="thb-footer-link">Events</Link>
            </div>
          </div>

          {/* Resources Section */}
          <div className="thb-footer-col">
            <h3 className="thb-footer-heading">Resources</h3>
            <div className="thb-footer-links-list">
              <Link href="#" className="thb-footer-link">Brick by Brick Blog</Link>
              <Link href="/discover/testimonials" className="thb-footer-link">Testimonials</Link>
              <Link href="#" className="thb-footer-link">Merchandise</Link>
              <Link href="#" className="thb-footer-link">Podcast</Link>
              <Link href="#" className="thb-footer-link">Newsletter</Link>
            </div>
          </div>

          {/* Community Section */}
          <div className="thb-footer-col">
            <h3 className="thb-footer-heading">Community</h3>
            <div className="thb-footer-links-list">
              <Link href="/about-us/organisation" className="thb-footer-link">Organisation</Link>
              <Link href="/about-us/founder" className="thb-footer-link">Founder</Link>
              <Link href="/about-us/advisors" className="thb-footer-link">Advisors</Link>
              <Link href="/discover/speakers" className="thb-footer-link">Speakers</Link>
              <Link href="#" className="thb-footer-link">Partners</Link>
              <Link href="/about-us/team-members" className="thb-footer-link">Team</Link>
            </div>
          </div>

          {/* Solution & Download App Section */}
          <div className="thb-footer-col">
            <h3 className="thb-footer-heading">Solution</h3>
            <div className="thb-footer-links-list">
              <Link href="#" className="thb-footer-link">For Institution</Link>
              <Link href="#" className="thb-footer-link">For Corporate</Link>
            </div>
            
            <div className="thb-download-app-section">
              <h3 className="thb-footer-heading" style={{ marginTop: '24px', marginBottom: '16px' }}>Download App</h3>
              <button type="button" className="thb-launching-soon-btn">
                launching soon
              </button>
            </div>
          </div>

          {/* Right Section: Newsletter & Follow socials */}
          <div className="thb-footer-right-col">
            
            {/* Newsletter */}
            <div className="thb-newsletter-section">
              <h3 className="thb-footer-heading">Subscribe Newsletter</h3>
              <p className="thb-newsletter-desc">Get event updates, latest videos via email</p>
              
              <form className="thb-newsletter-form" onSubmit={handleSubmit}>
                <div className="thb-newsletter-input-container">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="thb-newsletter-input"
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="thb-newsletter-submit-btn"
                >
                  <span className="hidden sm:inline">
                    {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
                  </span>
                  <span className="inline sm:hidden">
                    <Image src="/icons/notification-bell.svg" alt="Subscribe" width={20} height={20} />
                  </span>
                </button>
              </form>
              
              {status === 'success' && (
                <p className="thb-newsletter-status success">Subscribed successfully!</p>
              )}
              {status === 'error' && (
                <p className="thb-newsletter-status error">Something went wrong. Please try again.</p>
              )}
            </div>

            {/* Follow Section */}
            <div className="thb-social-section">
              <h3 className="thb-social-heading">Follow the Half Brick</h3>
              <div className="thb-social-links">
                <Link href="https://www.linkedin.com/company/thehalfbrick/" target="_blank" className="thb-social-link-item">
                  <Image src="/icons/linkedin_icon.svg" alt="LinkedIn" width={38} height={38} />
                </Link>
                <Link href="https://x.com/thehalfbrick" target="_blank" className="thb-social-link-item">
                  <Image src="/icons/x_icon.svg" alt="X" width={38} height={38} />
                </Link>
                <Link href="https://www.instagram.com/thehalfbrickrawstories/" target="_blank" className="thb-social-link-item">
                  <Image src="/icons/insta_icon.svg" alt="Instagram" width={38} height={38} />
                </Link>
                <Link href="https://www.youtube.com/c/TheHalfBrick" target="_blank" className="thb-social-link-item">
                  <Image src="/icons/youtube_icon.svg" alt="YouTube" width={38} height={38} />
                </Link>
                <Link href="https://www.facebook.com/thehalfbrick/" target="_blank" className="thb-social-link-item">
                  <Image src="/icons/facebook_icon.svg" alt="Facebook" width={38} height={38} />
                </Link>
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <hr className="thb-footer-divider" />

        {/* Giant Bottom Links */}
        <div className="thb-giant-links-row">
          <Link href="/raw-stories" className="thb-giant-link">
            <span className="thb-giant-text">
              raw<span className="thb-registered-symbol">®</span>
              <br />
              stories
            </span>
          </Link>

          <Link href="/startup-connect" className="thb-giant-link">
            <span className="thb-giant-text">
              startup
              <br />
              connect
            </span>
          </Link>

          <Link href="#" className="thb-giant-link">
            <span className="thb-giant-text">
              people’s
              <br />
              award
            </span>
          </Link>

          <Link href="#" className="thb-giant-link">
            <span className="thb-giant-text">
              talent
              <br />
              development
            </span>
          </Link>
        </div>

        {/* Lower Copyright Section */}
        <div className="thb-copyright-bar">
          <p className="thb-copyright-text">
            All Copyright © Reserved {currentYear} The Half Brick<sup>®</sup>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;