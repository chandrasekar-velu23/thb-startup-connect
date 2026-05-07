import { z } from "zod";

export const registrationSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  phone: z
    .string()
    .min(5, "Please enter a valid phone number")
    .refine(
      (val) => !val || /^[0-9\s\-\+\(\)]+$/.test(val),
      "Phone number must contain only numbers and common phone symbols"
    ),
  college: z
    .string()
    .min(1, "College/University is required")
    .max(200, "College name must be less than 200 characters"),
  interests: z.enum(
    ["Startup Ideas", "Founder Mindset", "Personal Branding", "Freelancing", "Business Growth"],
    {
      errorMap: () => ({ message: "Please select what interests you most" }),
    }
  ),
  challenge: z.enum(
    ["Lack of Clarity", "Fear of Failure", "No Guidance", "No Team", "Don't Know Where to Start"],
    {
      errorMap: () => ({ message: "Please select your biggest challenge" }),
    }
  ),
  reason: z
    .string()
    .min(5, "Please provide a short reason")
    .max(500, "Must be less than 500 characters"),
  linkedin: z.string().min(1, "LinkedIn profile is required").regex(/^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i, "Please enter a valid LinkedIn profile URL"),
  referralSource: z.enum(
    ["Instagram", "WhatsApp", "Friend", "College Community", "LinkedIn", "Other"],
    {
      errorMap: () => ({ message: "Please select how you heard about us" }),
    }
  ),
  otherReferral: z.string().optional().or(z.literal(""))
}).refine((data) => {
  if (data.referralSource === "Other" && (!data.otherReferral || !data.otherReferral.trim())) {
    return false;
  }
  return true;
}, {
  message: "Please specify how you heard about us",
  path: ["otherReferral"],
});

export type RegistrationInput = z.infer<typeof registrationSchema>;

export function validateRegistration(data: unknown) {
  try {
    const result = registrationSchema.parse(data);
    return { success: true, data: result };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        errors: error.errors.map((e) => ({
          field: e.path.join("."),
          message: e.message,
        })),
      };
    }
    return {
      success: false,
      errors: [{ field: "unknown", message: "Validation failed" }],
    };
  }
}
