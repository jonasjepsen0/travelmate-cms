import { defineField, defineType } from "sanity"

export const countryInfo = defineType({
  name: "countryInfo",
  title: "countryInfo",
  type: "document",

  fields: [
    defineField({
      name: "country",
      title: "Country",
      type: "reference",
      to: [{ type: "country" }],
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
