/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "2rg9ulpgf4ulros",
    "created": "2023-10-24 09:11:49.577Z",
    "updated": "2023-10-24 09:11:49.577Z",
    "name": "couleur",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "zqpedtqs",
        "name": "libelle_couleur",
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
  const collection = dao.findCollectionByNameOrId("2rg9ulpgf4ulros");

  return dao.deleteCollection(collection);
})
