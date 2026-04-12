import { sanityClient } from "./client"

const PRODUCT_BY_SLUG_QUERY = `*[_type == "product" && slug.current == $slug][0] {
  _id, name, slug, price, salePrice, category, image, description, inStock, featured
}`

const PRODUCTS_QUERY = `*[_type == "product"] | order(_createdAt desc) {
  _id, name, slug, price, salePrice, category, image, description, inStock, featured
}`

const FEATURED_QUERY = `*[_type == "product" && featured == true] | order(_createdAt desc)[0...8] {
  _id, name, slug, price, salePrice, category, image, description, inStock, featured
}`

export interface SanityProduct {
  _id: string
  name: string
  slug: { current: string }
  price: number
  salePrice?: number
  category?: string
  image: { asset: { _ref: string } }
  description?: string
  inStock: boolean
  featured: boolean
}

export async function getSingleProduct(slug: string): Promise<SanityProduct | null> {
  if (!sanityClient) return null
  try {
    return await sanityClient.fetch(PRODUCT_BY_SLUG_QUERY, { slug })
  } catch {
    return null
  }
}

export async function getAllProducts(): Promise<SanityProduct[]> {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch(PRODUCTS_QUERY)
  } catch {
    return []
  }
}

export async function getFeaturedProducts(): Promise<SanityProduct[]> {
  if (!sanityClient) return []
  try {
    return await sanityClient.fetch(FEATURED_QUERY)
  } catch {
    return []
  }
}
