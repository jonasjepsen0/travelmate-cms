import { defineField, defineType } from "sanity"

export const attraction = defineType({
  name: "attraction",
  title: "attraction",
  type: "document",

  fields: [
    defineField({
      name: "slug",
      type: "slug"
    }),

    defineField({
      name: "billede",
      type: "image"
    }),

    defineField({
      name: "adresse",
      type: "string"
    }),

    defineField({
        name: "city",
        title: "City",
        type: "reference",
        to: [{ type: "city" }]
    }),

  ],

  preview: {
    select: {
      title: "slug.current",
      media: "billede"
    }
  }
})
