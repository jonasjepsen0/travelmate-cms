import { defineField, defineType } from "sanity"

export const language = defineType({
  name: "language",
  title: "language",
  type: "document",

  fields: [
    defineField({
      name: "navn",
      type: "string",
      validation: (rule) => rule.required()
    }),

    defineField({
      name: "kode",
      type: "string",
      validation: (rule) => rule.required()
    }),
  ],

  preview: {
    select: {
      title: "navn",
      subtitle: "kode"
    }
  }
})
