/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zstxvvd6gbj5ymr",
    "created": "2023-10-24 09:09:30.819Z",
    "updated": "2023-10-24 09:09:30.819Z",
    "name": "cadre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "azhfkcsk",
        "name": "libelle_cadre",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bg7lxwov",
        "name": "forme",
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
  const collection = dao.findCollectionByNameOrId("zstxvvd6gbj5ymr");

  return dao.deleteCollection(collection);
})
