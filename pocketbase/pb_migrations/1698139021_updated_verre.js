/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfkyd6oveji5ndd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rn1qabyq",
    "name": "verre_mat",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "a2vhtoya0m6d4zh",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfkyd6oveji5ndd")

  // remove
  collection.schema.removeField("rn1qabyq")

  return dao.saveCollection(collection)
})
