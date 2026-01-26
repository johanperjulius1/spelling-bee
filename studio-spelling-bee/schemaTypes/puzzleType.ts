import { defineField, defineType } from 'sanity'

export const puzzleType = defineType({
    name: 'puzzle',
    title: 'Puzzle',
    type: 'document',
    fields: [
        defineField({
            name: 'displayWeekday',
            type: 'string',
            title: 'Display Weekday',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'displayDate',
            type: 'string',
            title: 'Display Date',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'printDate',
            type: 'date',
            title: 'Print Date',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'centerLetter',
            type: 'string',
            title: 'Center Letter',
            validation: (rule) => rule.required().length(1),
        }),
        defineField({
            name: 'outerLetters',
            type: 'array',
            title: 'Outer Letters',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required().min(6).max(6),
        }),
        defineField({
            name: 'maxPoints',
            type: 'number',
            title: 'Max Points',
        }),
        defineField({
            name: 'validLetters',
            type: 'array',
            title: 'Valid Letters',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'pangrams',
            type: 'array',
            title: 'Pangrams',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'answers',
            type: 'array',
            title: 'Answers',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'puzzleId',
            type: 'number',
            title: 'Puzzle ID',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'freeExpiration',
            type: 'number',
            title: 'Free Expiration',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'editor',
            type: 'string',
            title: 'Editor',
            validation: (rule) => rule.required(),
        }),
    ],
})