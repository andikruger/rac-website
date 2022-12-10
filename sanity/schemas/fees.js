export default {
  name: "fees",
  title: "Fees",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      description: "The name of the Membership",
    },
    {
      name: "fees",
      title: "Fees",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "membertype",
              title: "Member Type",
              type: "string",
              description:
                "The type of membership eg. Primary Member, Spouse, Child",
              requored: true,
            },
            {
              name: "note",
              title: "Note",
              type: "string",
              description: "The note of the fee eg. age group",
            },
            {
              name: "basic",
              title: "Basic",
              type: "number",
              description: "The cost of the basic fee",
            },
            {
              name: "licence",
              title: "Licence",
              type: "number",
              description: "The cost of the licence",
            },
          ],
        },
      ],
    },
  ],
};
