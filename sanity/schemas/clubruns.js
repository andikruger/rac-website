export default {
  name: "clubruns",
  title: "Club Runs",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the Club Run",
    },
    {
      name: "date",
      title: "Date",
      type: "date",
      description: "The date of the Club Run",
    },
    {
      name: "time",
      title: "Time",
      type: "string",
      description: "The time of the Club Run",
    },
    {
      name: "distance",
      title: "Distance",
      type: "string",
      description: "The distance of the Club Run",
    },
  ],
};
