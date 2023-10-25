/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zstxvvd6gbj5ymr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bakpcjtu",
    "name": "cadre_mat",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nufyns6q",
    "name": "couleur_cadre",
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
  const collection = dao.findCollectionByNameOrId("zstxvvd6gbj5ymr")

  // remove
  collection.schema.removeField("bakpcjtu")

  // remove
  collection.schema.removeField("nufyns6q")

  return dao.saveCollection(collection)
})
