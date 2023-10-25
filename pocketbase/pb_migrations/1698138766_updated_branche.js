/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dodv4qst8xmcwto")

  // remove
  collection.schema.removeField("mn2ugrme")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("dodv4qst8xmcwto")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mn2ugrme",
    "name": "compo_branche",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "jomuxooezdg3k2x",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
