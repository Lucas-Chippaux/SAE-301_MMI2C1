/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "a2vhtoya0m6d4zh",
    "created": "2023-10-24 08:04:26.321Z",
    "updated": "2023-10-24 08:04:26.321Z",
    "name": "materiaux",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gpxutgzg",
        "name": "libelle_materiaux",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("a2vhtoya0m6d4zh");

  return dao.deleteCollection(collection);
})
