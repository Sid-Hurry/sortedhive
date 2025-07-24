import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";


export default async function Page({ params }) {
  // Check if params is available
  const shorturl = params?.shorturl;

  try {
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl });

    console.log("Fetched Document:", doc);

    if (doc?.url) {
      redirect(doc.url); // Redirect to original URL
    } else {
      console.warn("No document found. Redirecting to homepage.");
      redirect(process.env.NEXT_PUBLIC_HOST || "/");
    }
  } catch (error) {
    console.error("Error during redirect lookup:", error);
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }
}
