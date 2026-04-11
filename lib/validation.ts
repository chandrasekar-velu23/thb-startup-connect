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
  currentStatus: z.enum(
    ["Student", "Working Professional", "Founder", "Exploring"],
    {
      errorMap: () => ({ message: "Please select your current status" }),
    }
  ),
  description: z.enum(
    ["I want to start a business", "I already started but struggling", "Just exploring"],
    {
      errorMap: () => ({ message: "Please select what best describes you" }),
    }
  ),
  linkedin: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  portfolio: z.string().url("Please enter a valid URL").optional().or(z.literal("")),
  referralSource: z.string().min(1, "Please select how you heard about us"),
  otherReferral: z.string().optional(),
  reason: z
    .string()
    .min(5, "Please provide a short reason")
    .max(500, "Must be less than 500 characters"),
}).refine((data) => {
  if (data.referralSource === "Other" && (!data.otherReferral || data.otherReferral.trim() === "")) {
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
