// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

const requiredValidation = {
  codegen: { required: true },
  validation: (Rule) => Rule.required(),
};

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    {
      title: "General info",
      name: "general",
      type: "document",
      fields: [
        {
          title: "Logo image",
          name: "logo_image",
          type: "image",
          ...requiredValidation,
        },
        {
          title: "Hero image",
          name: "hero_image",
          type: "image",
          ...requiredValidation,
        },
        {
          title: "Hero text",
          name: "hero_text",
          type: "text",
          ...requiredValidation,
          validation: (Rule) =>
            Rule.required()
              .max(120)
              .error("Eipä saisi tuota 120 merkkiä ylittää!"),
        },
        {
          title: "Main description title",
          name: "main_description_title",
          type: "string",
          description: "This and the next text come under the hero in frontpage as a main description of the site",
          ...requiredValidation,
        },
        {
          title: "Main description text",
          name: "main_description_text",
          type: "text",
          ...requiredValidation,
        },
        {
          title: "Abstract section image",
          name: "abstract_header_image",
          description: "This image will appear in the header before the abstract images section.",
          type: "image",
          ...requiredValidation,
        },
        {
          title: "Portrait section image",
          name: "portrait_header_image",
          description: "This image will appear in the header before the portait images section.",
          type: "image",
          ...requiredValidation,
        },
        {
          title: "Flower section image",
          name: "flower_header_image",
          description: "This image will appear in the header before the flower images ssection.",
          type: "image",
          ...requiredValidation,
        }
      ],
    },
    {
      title: "Projects",
      name: "project",
      type: "document",
      fields: [
        {
          title: "Name",
          name: "name",
          type: "string",
          codegen: { required: true },
          validation: (Rule) =>
            Rule.required()
              .max(120)
              .error("Eipä saisi tuota 120 merkkiä ylittää!"),
        },
        {
          title: "Slug",
          name: "slug",
          type: "slug",
          ...requiredValidation,
          options: {
            source: "name",
            maxLength: 120,
            slugify: (input) =>
              input
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/ö/g, "o")
                .replace(/ä/g, "a")
                .slice(0, 120),
          },
        },
        {
          title: "Category",
          name: "category",
          type: "string",
          ...requiredValidation,
          initialValue: "abstract",
          options: {
            list: ["abstract", "portrait", "flower"],
          },
        },
        {
          title: "Main image",
          name: "main_image",
          type: "image",
          ...requiredValidation,
          // options: {
          //   metadata: ["dimensions"]
          // }
        },
        {
          title: "Description",
          name: "description",
          type: "text",
        },
        {
          title: "Youtube video URL",
          name: "youtube_video_url",
          type: "url"
        },
        {
          title: "Image gallery",
          name: "gallery",
          type: "array",
          of: [
            { type: "image", 
              // options: {
              //   metadata: ["dimensions"]
              // }
            }
          ],
        },
      ],
    },
  ]),
});
