import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    defineField({
      name: 'username',
      title: 'UserName',
      type: 'string',
    }),
    defineField({
      name: 'domain',
      title: 'Domain',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'username',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'iconImage',
      title: 'Icon image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),

  ],

})
