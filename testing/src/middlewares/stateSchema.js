const stateSchema = {
  type: "object",
  properties: {
    comments: {
      type: "array",
      items: {
        type: "string",
      },
    },
    auth: {
      type: "boolean",
    },
  },
};

export default stateSchema;
