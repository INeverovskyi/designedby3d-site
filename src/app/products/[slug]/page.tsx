import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { getSingleProduct } from "@/sanity/queries"
import { urlFor } from "@/sanity/client"
import { Badge } from "@/components/ui/badge"
import { BuyButton } from "@/components/shared/buy-button"

export const revalidate = 60

const CATEGORY_LABELS: Record<string, string> = {
  figurines: "Фігурки",
  jewelry: "Прикраси",
  decor: "Декор",
  custom: "Індивідуальне замовлення",
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = await getSingleProduct(slug)

  if (!product) {
    return { title: "Товар не знайдено" }
  }

  return {
    title: `${product.name} | DesignedBy3D`,
    description: product.description,
  }
}

export async function generateStaticParams() {
  return []
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getSingleProduct(slug)

  if (!product) {
    notFound()
  }

  const imageUrl = product.image
    ? urlFor(product.image).width(800).height(800).fit("crop").url()
    : null

  const activePrice = product.salePrice ?? product.price

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <a
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          ← Назад до товарів
        </a>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-card border border-border">
            {imageUrl ? (
              <Image
                src={imageUrl}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
                <svg
                  className="w-24 h-24"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
              </div>
            )}
            {product.salePrice && (
              <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground font-semibold text-sm px-3 py-1">
                SALE
              </Badge>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-background/70 flex items-center justify-center">
                <span className="text-lg font-medium text-muted-foreground bg-background/90 px-6 py-3 rounded-full">
                  Немає в наявності
                </span>
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col justify-center">
            {product.category && (
              <span className="text-sm text-muted-foreground mb-2">
                {CATEGORY_LABELS[product.category] ?? product.category}
              </span>
            )}

            <h1 className="text-3xl sm:text-4xl font-bold gradient-text">
              {product.name}
            </h1>

            {product.description && (
              <p className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                {product.description}
              </p>
            )}

            {/* Price */}
            <div className="mt-8 flex items-baseline gap-3">
              {product.salePrice ? (
                <>
                  <span className="text-3xl font-bold text-primary">
                    ${product.salePrice}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.price}
                  </span>
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-green-500/10 text-green-400 border-green-500/20"
                  >
                    -{Math.round(((product.price - product.salePrice) / product.price) * 100)}%
                  </Badge>
                </>
              ) : (
                <span className="text-3xl font-bold text-foreground">
                  ${product.price}
                </span>
              )}
            </div>

            {/* Buy button */}
            <div className="mt-8">
              {product.inStock ? (
                <BuyButton
                  productName={product.name}
                  amount={activePrice}
                  productId={product._id}
                />
              ) : (
                <div className="px-8 py-4 rounded-xl bg-muted/50 border border-border text-center text-muted-foreground">
                  Товар тимчасово відсутній на складі
                </div>
              )}
            </div>

            {/* Details */}
            <div className="mt-10 space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Безпечна оплата через LiqPay
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Картки Visa / Mastercard / Google Pay
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Worldwide shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
