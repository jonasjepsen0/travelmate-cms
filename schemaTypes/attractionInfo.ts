import { defineField, defineType } from "sanity"

export const attractionInfo = defineType({
  name: "attractionInfo",
  title: "attractionInfo",
  type: "document",

  fields: [
    defineField({
      name: "attraction",
      title: "Attraction",
      type: "reference",
      to: [{ type: "attraction" }],
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
