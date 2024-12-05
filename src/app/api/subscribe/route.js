// pages/api/subscribe.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    const subscription = req.body;

    // Validate the subscription object
    if (!subscription || !subscription.endpoint) {
      return res.status(400).json({ error: "Invalid subscription data" });
    }

    // Here, you would typically store the subscription in your database
    // For example:
    // await saveSubscriptionToDatabase(subscription);

    res.status(200).json({ message: "Subscription successful" });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
