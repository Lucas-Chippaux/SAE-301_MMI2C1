/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zfkyd6oveji5ndd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mctkeytt",
    "name": "couleur_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "2rg9ulpgf4ulros",
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
  collection.schema.removeField("mctkeytt")

  return dao.saveCollection(collection)
})
