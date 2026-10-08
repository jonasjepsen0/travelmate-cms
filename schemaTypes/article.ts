import { defineField, defineType } from "sanity"

// Opretter vores Article type
export const article = defineType({
  name: "article",
  title: "Article",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string"
    }),

    defineField({
      name: "description",
      type: "text"
    }),

    defineField({
        name: "slug",
        type: "slug"
    }),

    defineField({
        name: "artikeltekst",
        type: "string"
    }),

    defineField({
        name: "image",
        type: "image"
    }),

    defineField({
        name: "udgivelsesdato",
        type: "date"
    }),

    defineField({
        name: "forfatter",
        type: "string"
    }),
  ]
})