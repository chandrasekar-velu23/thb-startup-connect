"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { CheckCircle2, X } from "lucide-react";
import Button from "./Button";

const registrationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(5, "Please enter a valid phone number").refine((val) => /^[0-9\s\-\+\(\)]+$/.test(val), "Invalid phone number format"),
  currentStatus: z.enum(["Student", "Working Professional", "Founder", "Exploring"]),
  description: z.enum(["I want to start a business", "I already started but struggling", "Just exploring"]),
  linkedin: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  reason: z.string().min(5, "Please provide your reason").max(500, "Reason must be less than 500 characters"),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RegistrationModal({
  isOpen,
  onClose,
}: RegistrationModalProps) {
  const [formData, setFormData] = useState<Partial<RegistrationForm>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [currentBg, setCurrentBg] = useState(0);

  const modalSlides = [
    {
      desktop: '/images/bg-cover-ph.png',
      mobile: '/images/bg-cover.png'
    },
    {
      desktop: '/images/bg-cover-1-ph.png',
      mobile: '/images/bg-cover-1.png'
    }
  ];

  useEffect(() => {
    let bgInterval: NodeJS.Timeout;
    if (isOpen) {
      bgInterval = setInterval(() => {
        setCurrentBg((prev) => (prev + 1) % modalSlides.length);
      }, 5000);
    } else {
      setCurrentBg(0);
    }
    return () => clearInterval(bgInterval);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setFormData({});
      setErrors({});
      setSubmitted(false);
      setError("");
      document.body.style.overflow = "";
    } else {
      // Lock background scrolling when modal is open
      document.body.style.overflow = "hidden";
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const validatedData = registrationSchema.parse(formData);
      setIsLoading(true);

      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validatedData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || data.error || "Registration failed. Please try again.");
        return;
      }

      setSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 5000);
    } catch (err) {
      if (err instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        err.errors.forEach((error) => {
          newErrors[error.path[0] as string] = error.message;
        });
        setErrors(newErrors);
      } else {
        setError("An error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-lg border border-light-grey max-w-5xl w-full max-h-[90vh] md:max-h-[85vh] shadow-2xl animate-in fade-in zoom-in-95 font-montserrat flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">

        {/* Left Side: Announcement Image (Desktop) */}
        <div className="w-full md:w-5/12 lg:w-1/2 bg-black relative hidden md:block overflow-hidden">
          {modalSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.desktop}
              alt="Masterclass Announcement"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentBg ? "opacity-100" : "opacity-0 pointer-events-none"}`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/60 pointer-events-none"></div>
        </div>

        {/* Mobile Announcement Banner */}
        <div className="w-full md:hidden relative flex-shrink-0 h-[250px] bg-black overflow-hidden">
          {modalSlides.map((slide, index) => (
            <img
              key={index}
              src={slide.mobile}
              alt="Masterclass Announcement"
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${index === currentBg ? "opacity-100" : "opacity-0 pointer-events-none"}`}
              style={{ objectPosition: 'center 20%' }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 pointer-events-none"></div>
        </div>

        {/* Right Side: Form Container */}
        <div className="w-full md:w-7/12 lg:w-1/2 relative md:overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {/* Header */}
          <div className="p-6 md:p-8 border-b border-light-grey bg-white/95 sticky top-0 z-[60] backdrop-blur-md flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-black font-poppins tracking-tight md:pr-8">Apply for Masterclass Access</h2>
              {!submitted && (
                <p className="text-sm text-grey mt-2">This is a limited-seat session. We review registrations to ensure serious participants.</p>
              )}
            </div>
            {/* Close button - Sticky (Visible on all screens in the persistent header) */}
            <button
              onClick={onClose}
              className="text-mid-grey hover:bg-light-grey hover:text-black rounded-full transition-colors p-2 bg-[#FAFAFA] border border-light-grey flex-shrink-0 ml-4"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          {submitted ? (
            <div className="p-8 md:p-12 space-y-6 flex flex-col items-center justify-center text-center h-full min-h-[50vh]">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce-slow">
                <CheckCircle2 className="w-10 h-10 text-primary" strokeWidth={2.5} />
              </div>
              <h3 className="text-3xl font-bold text-black font-poppins tracking-tight">
                You're almost in.
              </h3>

              <div className="bg-[#FAFAFA] border border-light-grey rounded-2xl p-6 text-left w-full space-y-4 shadow-sm">
                <p className="text-black font-medium">If shortlisted, you will receive:</p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-grey">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Confirmation message
                  </li>
                  <li className="flex items-center gap-3 text-grey">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> Access link
                  </li>
                </ul>
                <p className="text-black font-medium pt-2 border-t border-black/5">on WhatsApp / Email.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  Full Name <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all font-montserrat ${errors.name
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  Email ID <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all font-montserrat ${errors.email
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  Phone Number <span className="text-primary">*</span> <span className="text-grey font-normal text-xs ml-1">(WhatsApp preferred)</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone || ""}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all font-montserrat ${errors.phone
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.phone}</p>
                )}
              </div>

              {/* Current Status */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  Are you currently? <span className="text-primary">*</span>
                </label>
                <select
                  name="currentStatus"
                  value={formData.currentStatus || ""}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all font-montserrat ${errors.currentStatus
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                >
                  <option value="" disabled className="text-mid-grey">Select your status</option>
                  <option value="Student">Student</option>
                  <option value="Working Professional">Working Professional</option>
                  <option value="Founder">Founder</option>
                  <option value="Exploring">Exploring</option>
                </select>
                {errors.currentStatus && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.currentStatus}</p>
                )}
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  What best describes you? <span className="text-primary">*</span>
                </label>
                <select
                  name="description"
                  value={formData.description || ""}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all font-montserrat ${errors.description
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                >
                  <option value="" disabled className="text-mid-grey">Select best description</option>
                  <option value="I want to start a business">I want to start a business</option>
                  <option value="I already started but struggling">I already started but struggling</option>
                  <option value="Just exploring">Just exploring</option>
                </select>
                {errors.description && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.description}</p>
                )}
              </div>

              {/* LinkedIn URL */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  LinkedIn Profile URL <span className="text-grey font-normal text-xs ml-1">(Optional)</span>
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin || ""}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all font-montserrat ${errors.linkedin
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                />
                {errors.linkedin && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.linkedin}</p>
                )}
              </div>

              {/* Portfolio URL */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  Website / Portfolio / Company Info <span className="text-grey font-normal text-xs ml-1">(Optional)</span>
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio || ""}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all font-montserrat ${errors.portfolio
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                />
                {errors.portfolio && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.portfolio}</p>
                )}
              </div>

              {/* Reason */}
              <div>
                <label className="block text-sm font-semibold text-black mb-2 font-poppins">
                  Why do you want to attend this session? <span className="text-primary">*</span> <span className="text-grey font-normal text-xs ml-1">(Short answer)</span>
                </label>
                <textarea
                  name="reason"
                  value={formData.reason || ""}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 bg-[#FAFAFA] border rounded-md text-black focus:outline-none transition-all resize-none font-montserrat ${errors.reason
                    ? "border-red-500 focus:border-red-600 focus:ring-1 focus:ring-red-500"
                    : "border-light-grey focus:bg-white focus:border-primary focus:ring-1 focus:ring-primary/20 hover:border-black/20"
                    }`}
                />
                {errors.reason && (
                  <p className="text-red-500 text-xs mt-1 font-montserrat">{errors.reason}</p>
                )}
              </div>

              {/* Error message */}
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-md p-4">
                  <p className="text-red-600 text-sm font-semibold font-montserrat">{error}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  size="lg"
                  variant="primary"
                  isLoading={isLoading}
                  disabled={isLoading}
                  className="w-full text-lg shadow-lg hover:shadow-xl font-bold rounded-md"
                >
                  Apply & Reserve My Seat
                </Button>
              </div>

            </form>
          )}
        </div>
      </div>
    </div>
  );
}
