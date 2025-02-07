import { defineType } from "sanity";

export default defineType({
  name: "question",
  title: "question",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "question",
      title: "question",
      type: "string",
    },
    {
      name: "createdAt",
      title: "Created At",
      type: "datetime",
      initialValue: new Date().toISOString(),
    },
  ],
});
