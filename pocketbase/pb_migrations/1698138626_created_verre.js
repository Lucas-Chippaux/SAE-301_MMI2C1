/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zfkyd6oveji5ndd",
    "created": "2023-10-24 09:10:26.960Z",
    "updated": "2023-10-24 09:10:26.960Z",
    "name": "verre",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "e0an7zr0",
        "name": "libelle_verre",
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
  const collection = dao.findCollectionByNameOrId("zfkyd6oveji5ndd");

  return dao.deleteCollection(collection);
})
