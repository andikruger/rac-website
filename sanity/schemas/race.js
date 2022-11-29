export default {
  name: "race",
  title: "Race",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the race",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "distance",
      title: "Distance",
      type: "number",
      description: "The distance of the race in kilometers",
    },

    {
      name: "date",
      title: "Date",
      type: "date",
      description: "The date of the race",
    },

    {
      title: "Start Location",
      name: "startLocation",
      type: "geopoint",
    },

    {
      title: "End Location",
      name: "endLocation",
      type: "geopoint",
    },

    {
      title: "Start Time",
      name: "startTime",
      type: "datetime",
      description: "The start time of the race",
    },

    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
  ],
};
