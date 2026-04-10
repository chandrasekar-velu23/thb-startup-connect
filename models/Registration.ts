import mongoose, { Document, Schema } from "mongoose";

export interface IRegistration extends Document {
  name: string;
  email: string;
  phone: string;
  currentStatus: "Student" | "Working Professional" | "Founder" | "Exploring";
  description: "I want to start a business" | "I already started but struggling" | "Just exploring";
  linkedin?: string;
  portfolio?: string;
  reason: string;
  registeredAt: Date;
  status: "pending" | "confirmed" | "attended" | "cancelled";
  attended: boolean;
  feedbackProvided: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

const registrationSchema = new Schema<IRegistration>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    currentStatus: {
      type: String,
      enum: ["Student", "Working Professional", "Founder", "Exploring"],
      required: true,
    },
    description: {
      type: String,
      enum: ["I want to start a business", "I already started but struggling", "Just exploring"],
      required: true,
    },
    linkedin: {
      type: String,
      trim: true,
    },
    portfolio: {
      type: String,
      trim: true,
    },
    reason: {
      type: String,
      required: true,
      maxlength: 500,
      trim: true,
    },
    registeredAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "attended", "cancelled"],
      default: "pending",
    },
    attended: {
      type: Boolean,
      default: false,
    },
    feedbackProvided: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
registrationSchema.index({ email: 1 });
registrationSchema.index({ registeredAt: -1 });
registrationSchema.index({ status: 1 });

// Check if the model already exists to avoid re-compilation
export const Registration =
  mongoose.models.Registration ||
  mongoose.model<IRegistration>("Registration", registrationSchema);
