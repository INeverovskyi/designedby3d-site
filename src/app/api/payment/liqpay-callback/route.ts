import { NextRequest, NextResponse } from "next/server"

// LiqPay will send POST requests here after payment
// This endpoint acknowledges receipt of the payment notification
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const data = formData.get("data") as string
    const signature = formData.get("signature") as string

    console.log("LiqPay callback received:", { data, signature })

    // Here you can:
    // 1. Verify the signature
    // 2. Parse the payment data
    // 3. Update your database with payment status
    // 4. Send confirmation email

    // Acknowledge receipt to LiqPay
    return NextResponse.json({})
  } catch (error) {
    console.error("LiqPay callback error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
