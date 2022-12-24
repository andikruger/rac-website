export default {
  name: "clubrun",
  title: "Club Run",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the Club Run",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: "The slug of the Club Run",
      options: {
        source: "name",
        maxLength: 96,
      },
    },
    {
      name: "date",
      title: "Date",
      type: "date",
    },

    {
      name: "time",
      title: "Time",
      type: "array",
      of: [{ type: "datetime" }],
      description: "The start time of the Club Run",
    },
    {
      name: "distance",
      title: "Distance",
      type: "array",
      of: [{ type: "string" }],
      description: "The distance of the Club Run",
    },
    {
      name: "map",
      title: "Map",
      type: "string",
      description:
        "The id of the plotaroute map eg. 1848450 from https://www.plotaroute.com/route/1848450",
    },
  ],
};
