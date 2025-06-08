/// <reference path="../pb_data/types.d.ts" />

/**
 * Auto-generated PocketBase migration – do NOT edit by hand.
 */

migrate((app) => {
  const collections = [
  {
    "id": "pbc_983165601",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text559299402",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text950386452",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text660876492",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool734415638",
        "name": "emailVerified",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text39054287",
        "name": "image",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date759048398",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date56596967",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text834571254",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text486174423",
        "name": "displayUsername",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate846550517",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate626608493",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_706245509",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text369625228",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "date892092001",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text458974815",
        "name": "token",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date218654710",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date497939496",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text492327477",
        "name": "ipAddress",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text870806082",
        "name": "userAgent",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text759503887",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text322823799",
        "name": "activeOrganizationId",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate694286004",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate854210761",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_336611878",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text53054618",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text615305100",
        "name": "accountId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text104295318",
        "name": "providerId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text868017714",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text32061910",
        "name": "accessToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text966536299",
        "name": "refreshToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text469796482",
        "name": "idToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date838370603",
        "name": "accessTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date667794706",
        "name": "refreshTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text430454977",
        "name": "scope",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text613664311",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date261279546",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date317068047",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate371485507",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate807502001",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_414825264",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text125342213",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text526378084",
        "name": "identifier",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text395237298",
        "name": "value",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date623304495",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date337189281",
        "name": "createdAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date397261223",
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate428585096",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate561229053",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_739131272",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text517075824",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text470978313",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text337715824",
        "name": "slug",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text627967185",
        "name": "logo",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date78453884",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text324269760",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate595810636",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate522651351",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_184793587",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text101130010",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text513513341",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739131272",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text990311312",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text411591898",
        "name": "role",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date409847138",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate830773214",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate144443702",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_897340711",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text305764882",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text73635038",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739131272",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text695010415",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text692635902",
        "name": "role",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text449263030",
        "name": "status",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date442416751",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text607297730",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate38907753",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate700390831",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_101853348",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text896356865",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text189585733",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text102643348",
        "name": "start",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text95762395",
        "name": "prefix",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text147534627",
        "name": "key",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text457281265",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number472889919",
        "name": "refillInterval",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number301573664",
        "name": "refillAmount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date473430311",
        "name": "lastRefillAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool250150496",
        "name": "enabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool164195188",
        "name": "rateLimitEnabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number229761518",
        "name": "rateLimitTimeWindow",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number412683781",
        "name": "rateLimitMax",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number219545771",
        "name": "requestCount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number503355242",
        "name": "remaining",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date359945880",
        "name": "lastRequest",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date983290690",
        "name": "expiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date161669559",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date80439540",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text354439664",
        "name": "permissions",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text166634487",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate435195103",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate725097773",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  }
];

  for (const def of collections) {
    let existing;
    try {
      existing = app.findCollectionByNameOrId(def.name);
    } catch {}

    if (existing) {
      console.info(`[PB] ${def.name} exists – skipping.`);
    } else {
      app.save(new Collection(def));
      console.info(`[PB] created ${def.name}.`);
    }
  }
}, (app) => {
  const collections = [
  {
    "id": "pbc_983165601",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text559299402",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text950386452",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text660876492",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool734415638",
        "name": "emailVerified",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text39054287",
        "name": "image",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date759048398",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date56596967",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text834571254",
        "name": "username",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text486174423",
        "name": "displayUsername",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate846550517",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate626608493",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_706245509",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text369625228",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "date892092001",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text458974815",
        "name": "token",
        "type": "text",
        "required": true,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date218654710",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date497939496",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text492327477",
        "name": "ipAddress",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text870806082",
        "name": "userAgent",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text759503887",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text322823799",
        "name": "activeOrganizationId",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate694286004",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate854210761",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_336611878",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text53054618",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text615305100",
        "name": "accountId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text104295318",
        "name": "providerId",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text868017714",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text32061910",
        "name": "accessToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text966536299",
        "name": "refreshToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text469796482",
        "name": "idToken",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date838370603",
        "name": "accessTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date667794706",
        "name": "refreshTokenExpiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text430454977",
        "name": "scope",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text613664311",
        "name": "password",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date261279546",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date317068047",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate371485507",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate807502001",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_414825264",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text125342213",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text526378084",
        "name": "identifier",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text395237298",
        "name": "value",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date623304495",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date337189281",
        "name": "createdAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date397261223",
        "name": "updatedAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate428585096",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate561229053",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_739131272",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text517075824",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text470978313",
        "name": "name",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text337715824",
        "name": "slug",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text627967185",
        "name": "logo",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date78453884",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text324269760",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate595810636",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate522651351",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_184793587",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text101130010",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text513513341",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739131272",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text990311312",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text411591898",
        "name": "role",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date409847138",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate830773214",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate144443702",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_897340711",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text305764882",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text73635038",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_739131272",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text695010415",
        "name": "email",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text692635902",
        "name": "role",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text449263030",
        "name": "status",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date442416751",
        "name": "expiresAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text607297730",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate38907753",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate700390831",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  },
  {
    "id": "pbc_101853348",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text896356865",
        "name": "id",
        "type": "text",
        "required": true,
        "primaryKey": true,
        "system": true,
        "presentable": false,
        "autogeneratePattern": "[a-z0-9]{15}",
        "pattern": "^[a-z0-9]+$",
        "min": 15,
        "max": 15
      },
      {
        "id": "text189585733",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text102643348",
        "name": "start",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text95762395",
        "name": "prefix",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text147534627",
        "name": "key",
        "type": "text",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text457281265",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_983165601",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number472889919",
        "name": "refillInterval",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number301573664",
        "name": "refillAmount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date473430311",
        "name": "lastRefillAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool250150496",
        "name": "enabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool164195188",
        "name": "rateLimitEnabled",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number229761518",
        "name": "rateLimitTimeWindow",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number412683781",
        "name": "rateLimitMax",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number219545771",
        "name": "requestCount",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "number503355242",
        "name": "remaining",
        "type": "number",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date359945880",
        "name": "lastRequest",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date983290690",
        "name": "expiresAt",
        "type": "date",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date161669559",
        "name": "createdAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "date80439540",
        "name": "updatedAt",
        "type": "date",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text354439664",
        "name": "permissions",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "text166634487",
        "name": "metadata",
        "type": "text",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate435195103",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate725097773",
        "name": "updated",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": true,
        "required": false,
        "system": false,
        "presentable": false
      }
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "indexes": []
  }
].reverse();

  for (const def of collections) {
    try {
      const col = app.findCollectionByNameOrId(def.name);
      if (col) app.delete(col);
    } catch {}
  }
});