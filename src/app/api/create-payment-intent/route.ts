import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Get Stripe Secret Key
const stripeKey = process.env.STRIPE_SECRET_KEY;
if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not defined!");

const stripe = new Stripe(stripeKey, {
  apiVersion: "2025-01-27.acacia", // Latest stable version
});

export async function POST(request: NextRequest) {
  try {
    const { amount, orderId, customerName, receiptEmail } = await request.json();

    // Validate input
    if (!amount || !orderId || !customerName || !receiptEmail) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: "usd",
      metadata: { orderId, customerName },
      receipt_email: receiptEmail,
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    return NextResponse.json({ error: "Failed to create PaymentIntent" }, { status: 500 });
  }
}
