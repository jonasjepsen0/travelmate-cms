import { defineField, defineType } from "sanity"

export const city = defineType({
  name: "city",
  title: "city",
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
        name: "attraction",
        title: "Attraction",
        type: "array",
        of: [{ type: "reference", to: [{ type: "attraction" }] }]
    }),

    defineField({
        name: "country",
        title: "Country",
        type: "reference",
        to: [{ type: "country" }]
    })

  ],

  preview: {
    select: {
      title: "slug.current",
      media: "billede"
    }
  }
})
