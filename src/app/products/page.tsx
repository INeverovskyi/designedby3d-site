import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { getAllProducts, type SanityProduct } from "@/sanity/queries"
import { urlFor } from "@/sanity/client"
import { Badge } from "@/components/ui/badge"
import { SectionHeading } from "@/components/shared/section-heading"

export const metadata: Metadata = {
  title: "Товари | DesignedBy3D",
  description: "Перегляньте нашу колекцію 3D-друкованих виробів.",
}

export const revalidate = 60

const CATEGORY_LABELS: Record<string, string> = {
  figurines: "Фігурки",
  jewelry: "Прикраси",
  decor: "Декор",
  custom: "Індивідуальне замовлення",
}

function ProductCard({ product }: { product: SanityProduct }) {
  const imageUrl = product.image
    ? urlFor(product.image).width(600).height(600).fit("crop").url()
    : null

  return (
    <Link href={`/products/${product.slug.current}`} className="group block">
      <div className="relative overflow-hidden rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-300 h-full cursor-pointer">
        {/* Image */}
        <div className="aspect-square bg-gradient-to-br from-card to-muted relative overflow-hidden">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30">
              <svg className="w-16 h-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {product.salePrice && (
            <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground font-semibold">
              SALE
            </Badge>
          )}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <span className="text-sm font-medium text-muted-foreground bg-background/80 px-3 py-1 rounded-full">
                Немає в наявності
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-4">
          {product.category && (
            <span className="text-xs text-muted-foreground mb-1 block">
              {CATEGORY_LABELS[product.category] ?? product.category}
            </span>
          )}
          <h3 className="text-sm font-medium text-foreground/90 group-hover:text-foreground transition-colors line-clamp-2">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
              {product.description}
            </p>
          )}
          <div className="mt-3 flex items-center gap-2">
            {product.salePrice ? (
              <>
                <span className="text-sm font-bold text-primary">
                  ${product.salePrice}
                </span>
                <span className="text-xs text-muted-foreground line-through">
                  ${product.price}
                </span>
              </>
            ) : (
              <span className="text-sm font-bold text-foreground">
                ${product.price}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default async function ProductsPage() {
  const products = await getAllProducts()

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <SectionHeading
            title="Наші товари"
            subtitle="Колекція 3D-друкованих виробів ручної роботи"
            gradient
          />
        </div>

        {/* Products grid */}
        {products.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-muted-foreground text-lg">
              Товари ще не додані. Зайдіть в{" "}
              <a href="/admin" className="text-primary underline underline-offset-4">
                адмінку
              </a>{" "}
              щоб додати перший товар.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
