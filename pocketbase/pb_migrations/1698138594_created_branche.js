/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "dodv4qst8xmcwto",
    "created": "2023-10-24 09:09:54.956Z",
    "updated": "2023-10-24 09:09:54.956Z",
    "name": "branche",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kxc6fuga",
        "name": "libelle_branche",
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
  const collection = dao.findCollectionByNameOrId("dodv4qst8xmcwto");

  return dao.deleteCollection(collection);
})
