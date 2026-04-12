import crypto from "crypto"

const LIQPAY_API = "https://www.liqpay.ua/api/request"

interface LiqPayPaymentParams {
  version: number
  public_key: string
  action: string
  amount: number
  currency: string
  description: string
  order_id: string
  result_url: string
  server_url: string
  language: string
  paytypes: string
}

function signData(params: LiqPayPaymentParams, privateKey: string): string {
  const dataString = JSON.stringify(params)
  const dataBase64 = Buffer.from(dataString).toString("base64")
  const signature = crypto
    .createHash("sha1")
    .update(privateKey + dataBase64 + privateKey)
    .digest("base64")
  return dataBase64
}

function getSignature(data: string, privateKey: string): string {
  return crypto
    .createHash("sha1")
    .update(privateKey + data + privateKey)
    .digest("base64")
}

export function createLiqPayPayment(
  params: Omit<LiqPayPaymentParams, "version" | "public_key" | "action" | "result_url" | "server_url" | "language" | "paytypes">,
  options?: { resultUrl?: string; serverUrl?: string }
): { data: string; signature: string } {
  const publicKey = process.env.LIQPAY_PUBLIC_KEY!
  const privateKey = process.env.LIQPAY_PRIVATE_KEY!
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"

  const paymentParams: LiqPayPaymentParams = {
    version: 3,
    public_key: publicKey,
    action: "pay",
    amount: params.amount,
    currency: params.currency ?? "USD",
    description: params.description,
    order_id: params.order_id,
    result_url: options?.resultUrl ?? `${baseUrl}/payment/success`,
    server_url: options?.serverUrl ?? `${baseUrl}/api/payment/liqpay-callback`,
    language: "en",
    paytypes: "card,google_pay,apple_pay",
  }

  const data = signData(paymentParams, privateKey)
  const signature = getSignature(data, privateKey)

  return { data, signature }
}
