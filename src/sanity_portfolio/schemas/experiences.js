export default {
  name: "Experiences",
  title: "experiences",
  type: "document",
  fields: [
    {
      name: "timePeriod",
      title: "TimePeriod",
      type: "string",
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "department",
      title: "Department",
      type: "string",
    },
    {
      name: "website",
      title: "Website",
      type: "string",
    },
    {
      name: "imgUrl",
      title: "ImageUrl",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
