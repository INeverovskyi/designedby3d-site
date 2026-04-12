import { defineField, defineType } from "sanity"

export const productSchema = defineType({
  name: "product",
  title: "Товар",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Назва",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "price",
      title: "Ціна ($)",
      type: "number",
      validation: (rule) => rule.required().positive(),
    }),
    defineField({
      name: "salePrice",
      title: "Ціна зі знижкою ($)",
      type: "number",
    }),
    defineField({
      name: "category",
      title: "Категорія",
      type: "string",
      options: {
        list: [
          { title: "Фігурки", value: "figurines" },
          { title: "Прикраси", value: "jewelry" },
          { title: "Декор", value: "decor" },
          { title: "Індивідуальне замовлення", value: "custom" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Головне фото",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Опис",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "inStock",
      title: "В наявності",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "featured",
      title: "Показати на головній",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "price",
      media: "image",
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: subtitle ? `$${subtitle}` : "Без ціни",
        media,
      }
    },
  },
})
