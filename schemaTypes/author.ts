import { defineField, defineType } from 'sanity';

const Author = defineType({
    name: 'Author',
    title: 'Author',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
        }),
    ],
});

export default Author;