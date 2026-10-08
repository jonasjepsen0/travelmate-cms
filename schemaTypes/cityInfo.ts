import { defineField, defineType } from "sanity"

export const cityInfo = defineType({
  name: "cityInfo",
  title: "cityInfo",
  type: "document",

  fields: [
    defineField({
      name: "city",
      title: "City",
      type: "reference",
      to: [{ type: "city" }],
      validation: (rule) => rule.required()
    }),

    defineField({
      name: "language",
      title: "Language",
      type: "reference",
      to: [{ type: "language" }],
      validation: (rule) => rule.required()
    }),

    defineField({
      name: "navn",
      type: "string"
    }),

    defineField({
      name: "beskrivelse",
      type: "text"
    }),
  ],

  preview: {
    select: {
      title: "navn",
      subtitle: "language.navn"
    }
  }
})
