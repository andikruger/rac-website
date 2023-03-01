export default {
  name: "race",
  title: "Race",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the race, please include the year",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        // add the current year to the slug
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .concat(`-${new Date().getFullYear()}`),

        maxLength: 96,
      },
      description: "Please click the generate button to create the slug",
    },
    {
      name: "distance",
      title: "Distance",
      type: "array",
      of: [{ type: "number" }],
      description: "The distance of the race in kilometers",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "date",
      title: "Date",
      type: "date",
      description: "The date of the race",
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Venue",
      name: "venue",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Club",
      name: "club",
      type: "object",
      fields: [
        {
          title: "Club Name or Organiser",
          name: "clubName",
          type: "string",
          validation: (Rule) => Rule.required(),
        },
        {
          title: "Contact Person",
          name: "contactPerson",
          type: "string",
        },
        {
          title: "Contact Number",
          name: "contactNumber",
          type: "string",
          validation: (Rule) => Rule.min(10),
        },
        {
          title: "Contact Email",
          name: "contactEmail",
          type: "string",
        },
      ],
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Association",
      name: "association",
      type: "string",
      options: {
        list: [
          { title: "CGA", value: "CGA" },
          { title: "EPA", value: "EPA" },
          { title: "KZN", value: "KZN" },
          { title: "AVT", value: "AVT" },
          { title: "WPA", value: "WPA" },
          { title: "AGN", value: "AGN" },
          { title: "AFS", value: "AFS" },
          { title: "BOR", value: "BOR" },
          { title: "MPU", value: "MPU" },
          { title: "CNW", value: "CNW" },
          { title: "NWN", value: "NWN" },
          { title: "SWD", value: "SWD" },
          { title: "BOL", value: "BOL" },
        ],
        layout: "dropdown",
        default: "CGA",
      },
      validation: (Rule) => Rule.required(),
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
