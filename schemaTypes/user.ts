import { defineField, defineType } from "sanity"

export const user = defineType({
  name: "user",
  title: "user",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string"
    }),

    defineField({
      name: "Navn",
      type: "string"
    }),

    defineField({
      name: "email",
      type: "email"
    }),

    defineField({
      name: "profilbillede",
      type: "image"
    }),

    defineField({
      name: "beskrivelse",
      type: "string"
    }),
  ]
})