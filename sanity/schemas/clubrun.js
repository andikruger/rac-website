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
  ],
};
