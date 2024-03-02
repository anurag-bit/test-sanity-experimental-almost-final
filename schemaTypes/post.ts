import { defineField, defineType } from 'sanity';
import Author from './author';
const Post = defineType({
    name: 'Post',
    title: 'Blog Post',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'shortDescription',
            title: 'Short Description',
            type: 'string',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: [{ type: 'Author' }],
        }),
    ],
});

export default Post;