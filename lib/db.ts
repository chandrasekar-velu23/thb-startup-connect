import mongoose, { Connection } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

interface MongooseConnection {
  conn: Connection | null;
  promise: Promise<typeof mongoose> | null;
}

// Create a cached connection to prevent multiple connections in serverless environments
let cached: MongooseConnection = {
  conn: null,
  promise: null,
};

export async function connectDB() {
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }

  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        bufferCommands: false,
      })
      .then(() => mongoose);
  }

  try {
    cached.conn = (await cached.promise).connection;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
