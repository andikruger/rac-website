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
      type: "array",
      of: [{ type: "number" }],
      description: "The distance of the race in kilometers",
    },

    {
      name: "date",
      title: "Date",
      type: "date",
      description: "The date of the race",
    },

    {
      title: "Venue",
      name: "venue",
      type: "string",
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
      title: "Province",
      name: "province",
      type: "string",
      options: {
        list: [
          { title: "Gauteng", value: "Gauteng" },
          { title: "Western Cape", value: "Western Cape" },
          { title: "Eastern Cape", value: "Eastern Cape" },
          { title: "KwaZulu-Natal", value: "KwaZulu-Natal" },
          { title: "Limpopo", value: "Limpopo" },
          { title: "Mpumalanga", value: "Mpumalanga" },
          { title: "North West", value: "North West" },
          { title: "Northern Cape", value: "Northern Cape" },
          { title: "Free State", value: "Free State" },
        ],
        layout: "dropdown",
      },
    },
    {
      title: "Important Race",
      name: "importantRace",
      type: "boolean",
      description: "Is this an important Race",
      default: false,
    },
  ],
};
