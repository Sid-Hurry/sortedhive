import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const shorturl = params.shorturl; // ✅ correct - do not await

  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shorturl });

  if (doc && doc.url) {
    redirect(doc.url);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST);
  }
}
