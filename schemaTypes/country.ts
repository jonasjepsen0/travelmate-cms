import { defineField, defineType } from "sanity"

export const country = defineType({
  name: "country",
  title: "country",
  type: "document",

  fields: [
    defineField({
      name: "landekode",
      type: "string"
    }),

    defineField({
      name: "slug",
      type: "slug"
    }),

    defineField({
      name: "billede",
      type: "image"
    }),

    defineField({
        name: "city",
        title: "City",
        type: "array",
        of: [{ type: "reference", to: [{ type: "city" }] }]
    })


  ],

  preview: {
    select: {
      title: "slug.current",
      subtitle: "landekode",
      media: "billede"
    }
  }
})
