"use client"

import { useState } from "react"

interface BuyButtonProps {
  productName: string
  amount: number
  productId: string
}

export function BuyButton({ productName, amount, productId }: BuyButtonProps) {
  const [loading, setLoading] = useState(false)

  const handleBuy = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/payment/liqpay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productName,
          amount,
          productId,
        }),
      })

      const { data, signature } = await response.json()

      if (!data || !signature) {
        throw new Error("Payment initialization failed")
      }

      // Submit LiqPay payment form
      const form = document.createElement("form")
      form.method = "POST"
      form.action = "https://www.liqpay.ua/api/3/checkout"
      form.style.display = "none"

      const dataInput = document.createElement("input")
      dataInput.type = "hidden"
      dataInput.name = "data"
      dataInput.value = data

      const signInput = document.createElement("input")
      signInput.type = "hidden"
      signInput.name = "signature"
      signInput.value = signature

      form.appendChild(dataInput)
      form.appendChild(signInput)
      document.body.appendChild(form)
      form.submit()
      document.body.removeChild(form)
    } catch (error) {
      console.error("Payment error:", error)
      alert("Помилка при ініціалізації оплати. Спробуйте ще раз.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      onClick={handleBuy}
      disabled={loading}
      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-neon-pink to-neon-purple text-white font-bold text-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40"
    >
      {loading ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
          Обробка...
        </span>
      ) : (
        `Купити за $${amount}`
      )}
    </button>
  )
}
