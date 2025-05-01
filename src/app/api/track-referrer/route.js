import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const body = await request.json();
    const { referrer, pathname, timestamp } = body;

    // console.log("[API REQUEST]", body);

    const client = await clientPromise;
    const db = client.db("farvestDB");
    const collection = db.collection("referrer_logs");

    const document = {
      referrer: referrer || "direct",
      pathname: pathname || "unknown",
      timestamp: timestamp ? new Date(timestamp) : new Date(),
    };

    // console.log("[FINAL DOC TO INSERT]", document);

    try {
      const result = await collection.insertOne(document);
      // console.log("[INSERTED]", result);
    } catch (insertErr) {
      // console.error("Insert Error:", insertErr);
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    // console.error("Referrer Tracking Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
