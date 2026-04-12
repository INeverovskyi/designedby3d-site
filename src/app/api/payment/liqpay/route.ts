import { NextRequest, NextResponse } from "next/server"
import { createLiqPayPayment } from "@/lib/liqpay"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { productName, amount, productId } = body

    if (!productName || !amount || !productId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const orderId = `order_${Date.now()}_${productId.slice(0, 8)}`

    const { data, signature } = createLiqPayPayment({
      amount: parseFloat(amount),
      currency: "USD",
      description: `Payment for: ${productName}`,
      order_id: orderId,
    })

    return NextResponse.json({ data, signature })
  } catch (error) {
    console.error("LiqPay API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
