import Link from "next/link"

export default function PaymentSuccessPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto rounded-full bg-green-500/10 border-2 border-green-500/20 flex items-center justify-center">
            <svg className="w-10 h-10 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold gradient-text mb-4">
          Дякуємо за замовлення!
        </h1>

        <p className="text-lg text-muted-foreground mb-8">
          Ваша оплата прийнята. Ми зв'яжемося з вами для уточнення деталей доставки.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Переглянути товари
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-border text-foreground font-medium hover:bg-white/5 transition-colors"
          >
            На головну
          </Link>
        </div>
      </div>
    </div>
  )
}
