import { defineField, defineType } from "sanity"

export const user = defineType({
  name: "student",
  title: "student",
  type: "document",

  fields: [
    defineField({
      name: "title",
      type: "string"
    }),

  ]
})