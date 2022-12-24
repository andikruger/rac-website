export default {
  name: "advert",
  title: "Advert",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .concat(`-${Math.random().toString(36).substr(2, 9)}`),

        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      description: "The id of the person selling the item",
    },
    {
      name: "blurb",
      title: "Blurb",
      type: "string",
      description: "A short summary of the post",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      description: "The price of the item",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
      description: "The email address of the seller",
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
      description: "The phone number of the seller",
    },
    {
      name: "whatsapp",
      title: "Whatsapp number",
      type: "string",
      description: "The whatsapp number of the seller",
    },
    {
      name: "sold",
      title: "Sold",
      type: "boolean",
      description: "Is this advert sold?",
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
