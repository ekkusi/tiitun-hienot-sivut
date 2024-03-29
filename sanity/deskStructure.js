export const structure = (S) =>
  S.list()
    .title("Base")
    .items([
      S.listItem()
        .title("General info")
        .child(
          S.document()
            .schemaType("general")
            .documentId("general")
            .title("General Info")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !["general"].includes(listItem.getId())
      ),
    ]);
