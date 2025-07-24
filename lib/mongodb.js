// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('❌ Please define the MONGODB_URI environment variable in .env.local');
}

// Global cache to avoid multiple connections during development
let client;
let clientPromise;

if (process.env.NODE_ENV === 'development') {
  // Use a global variable so the value is preserved across hot reloads
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri); // No options needed
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, no need to cache
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;
