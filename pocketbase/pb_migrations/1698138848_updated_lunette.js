/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jomuxooezdg3k2x")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kb4dkycf",
    "name": "libelle_lunette",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "sdwjlsst",
    "name": "compo_branche",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "dodv4qst8xmcwto",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dqfm3vvo",
    "name": "compo_verre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zfkyd6oveji5ndd",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yik3odpt",
    "name": "compo_cadre",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "zstxvvd6gbj5ymr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jomuxooezdg3k2x")

  // remove
  collection.schema.removeField("kb4dkycf")

  // remove
  collection.schema.removeField("sdwjlsst")

  // remove
  collection.schema.removeField("dqfm3vvo")

  // remove
  collection.schema.removeField("yik3odpt")

  return dao.saveCollection(collection)
})
