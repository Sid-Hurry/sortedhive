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

  try {
    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("urls");

    // Find the URL document by short code
    const urlDocument = await collection.findOne({ 
      shortCode: shorturl 
    });

    if (urlDocument) {
      // Update analytics (optional)
      await collection.updateOne(
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
      );

      // Ensure the URL has a protocol
      let redirectUrl = urlDocument.originalUrl;
      if (!redirectUrl.startsWith('http://') && !redirectUrl.startsWith('https://')) {
        redirectUrl = 'https://' + redirectUrl;
      }

      // Redirect to the original URL
      redirect(redirectUrl);
    } else {
      // Short URL not found in database
      notFound();
    }
  } catch (error) {
    console.error('Database error:', error);
    // If there's a database error, show 404
    notFound();
  }
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