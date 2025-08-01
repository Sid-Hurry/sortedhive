// app/[shorturl]/page.js
import clientPromise from '../../lib/mongodb';
import { redirect } from 'next/navigation';
import { notFound } from 'next/navigation';

export default async function Page({ params }) {
  // Await params before accessing properties (Next.js 15 requirement)
  const resolvedParams = await params;
  const shorturl = resolvedParams?.shorturl;

  // If no shorturl parameter, show 404
  if (!shorturl) {
    notFound();
  }

  let client, db, collection, urlDocument;

  try {
    // Connect to MongoDB
    client = await clientPromise;
    db = client.db("bitlinks");
    collection = db.collection("urls");

    // Find the URL document by short code
    urlDocument = await collection.findOne({ 
      shortCode: shorturl 
    });
  } catch (error) {
    console.error('Database connection error:', error);
    notFound();
  }

  // If document not found, show 404
  if (!urlDocument) {
    notFound();
  }

  // Update analytics in background (don't await to avoid blocking redirect)
  collection.updateOne(
    { shortCode: shorturl },
    { 
      $inc: { clicks: 1 },
      $set: { lastAccessed: new Date() },
      $push: { 
        clickHistory: {
          timestamp: new Date(),
          // You can add more analytics data here like IP, user agent, etc.
        }
      }
    }
  ).catch(error => {
    console.error('Analytics update error:', error);
    // Don't fail the redirect if analytics fail
  });

  // Ensure the URL has a protocol
  let redirectUrl = urlDocument.originalUrl;
  if (!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')) {
    redirectUrl = 'https://' + redirectUrl;
  }

  // Redirect to the original URL
  redirect(redirectUrl);
}

// Optional: Add metadata for SEO
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const shorturl = resolvedParams?.shorturl;
  
  return {
    title: `Redirecting... | ${shorturl}`,
    description: 'You are being redirected to the original URL.',
    robots: 'noindex, nofollow',
  };
}