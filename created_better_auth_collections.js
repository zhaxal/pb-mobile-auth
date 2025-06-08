/// <reference path="../pb_data/types.d.ts" />

/**
 * Auto-generated PocketBase migration – do NOT edit by hand.
 */

migrate((app) => {
  const collections = [
  {
    "id": "pbc_559222759",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text401174203",
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
        "id": "text877451611",
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
        "id": "text69852661",
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
        "id": "bool802365569",
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
        "id": "text154214976",
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
        "id": "date653998053",
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
        "id": "date124507501",
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
        "id": "text562276746",
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
        "id": "text505706675",
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
        "id": "text833676559",
        "name": "phoneNumber",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool693888890",
        "name": "phoneNumberVerified",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate688942531",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate204172636",
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
    "id": "pbc_880398955",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text60227339",
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
        "id": "date546297036",
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
        "id": "text440297836",
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
        "id": "date531611853",
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
        "id": "date681194226",
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
        "id": "text153789163",
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
        "id": "text457505701",
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
        "id": "text940157012",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text740052488",
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
        "id": "autodate892706473",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate985542255",
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
    "id": "pbc_690064176",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text315388713",
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
        "id": "text640142090",
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
        "id": "text477940742",
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
        "id": "text154512404",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text27125877",
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
        "id": "text612005083",
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
        "id": "text716837069",
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
        "id": "date103282474",
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
        "id": "date673167348",
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
        "id": "text238513772",
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
        "id": "text160928692",
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
        "id": "date864651892",
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
        "id": "date203530758",
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
        "id": "autodate346898519",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate991620846",
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
    "id": "pbc_973010976",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text744887484",
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
        "id": "text404093878",
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
        "id": "text291710683",
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
        "id": "date996969321",
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
        "id": "date562102225",
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
        "id": "date822189168",
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
        "id": "autodate330093507",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate786631025",
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
    "id": "pbc_802065672",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text59848772",
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
        "id": "text262469316",
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
        "id": "text459093478",
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
        "id": "text237887983",
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
        "id": "date780741758",
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
        "id": "text459376759",
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
        "id": "autodate735182649",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate622034947",
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
    "id": "pbc_744635408",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text184528475",
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
        "id": "text228617851",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_802065672",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text361184035",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text725350841",
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
        "id": "date418352908",
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
        "id": "autodate509804882",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate649250663",
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
    "id": "pbc_357149023",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text276705787",
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
        "id": "text154738995",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_802065672",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text251798049",
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
        "id": "text114634570",
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
        "id": "text125973998",
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
        "id": "date714773004",
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
        "id": "text941581416",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate620352965",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate877028531",
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
    "id": "pbc_111399528",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text574641695",
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
        "id": "text578873146",
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
        "id": "text351429506",
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
        "id": "text531541976",
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
        "id": "text260813662",
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
        "id": "text875456710",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number120560614",
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
        "id": "number557811073",
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
        "id": "date587798836",
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
        "id": "bool398296056",
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
        "id": "bool209870549",
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
        "id": "number96863184",
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
        "id": "number169746401",
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
        "id": "number828813183",
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
        "id": "number501904904",
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
        "id": "date527271726",
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
        "id": "date317770402",
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
        "id": "date175297019",
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
        "id": "date515496133",
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
        "id": "text128122277",
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
        "id": "text347364304",
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
        "id": "autodate47825271",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate482975147",
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
    "id": "pbc_559222759",
    "name": "ba_user",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text401174203",
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
        "id": "text877451611",
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
        "id": "text69852661",
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
        "id": "bool802365569",
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
        "id": "text154214976",
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
        "id": "date653998053",
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
        "id": "date124507501",
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
        "id": "text562276746",
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
        "id": "text505706675",
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
        "id": "text833676559",
        "name": "phoneNumber",
        "type": "text",
        "required": false,
        "unique": true,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "bool693888890",
        "name": "phoneNumberVerified",
        "type": "bool",
        "required": false,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false
      },
      {
        "id": "autodate688942531",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate204172636",
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
    "id": "pbc_880398955",
    "name": "ba_session",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text60227339",
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
        "id": "date546297036",
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
        "id": "text440297836",
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
        "id": "date531611853",
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
        "id": "date681194226",
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
        "id": "text153789163",
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
        "id": "text457505701",
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
        "id": "text940157012",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text740052488",
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
        "id": "autodate892706473",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate985542255",
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
    "id": "pbc_690064176",
    "name": "ba_account",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text315388713",
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
        "id": "text640142090",
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
        "id": "text477940742",
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
        "id": "text154512404",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text27125877",
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
        "id": "text612005083",
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
        "id": "text716837069",
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
        "id": "date103282474",
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
        "id": "date673167348",
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
        "id": "text238513772",
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
        "id": "text160928692",
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
        "id": "date864651892",
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
        "id": "date203530758",
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
        "id": "autodate346898519",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate991620846",
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
    "id": "pbc_973010976",
    "name": "ba_verification",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text744887484",
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
        "id": "text404093878",
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
        "id": "text291710683",
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
        "id": "date996969321",
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
        "id": "date562102225",
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
        "id": "date822189168",
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
        "id": "autodate330093507",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate786631025",
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
    "id": "pbc_802065672",
    "name": "ba_organization",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text59848772",
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
        "id": "text262469316",
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
        "id": "text459093478",
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
        "id": "text237887983",
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
        "id": "date780741758",
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
        "id": "text459376759",
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
        "id": "autodate735182649",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate622034947",
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
    "id": "pbc_744635408",
    "name": "ba_member",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text184528475",
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
        "id": "text228617851",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_802065672",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text361184035",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text725350841",
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
        "id": "date418352908",
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
        "id": "autodate509804882",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate649250663",
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
    "id": "pbc_357149023",
    "name": "ba_invitation",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text276705787",
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
        "id": "text154738995",
        "name": "organizationId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_802065672",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "text251798049",
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
        "id": "text114634570",
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
        "id": "text125973998",
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
        "id": "date714773004",
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
        "id": "text941581416",
        "name": "inviterId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "autodate620352965",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate877028531",
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
    "id": "pbc_111399528",
    "name": "ba_apikey",
    "type": "base",
    "system": false,
    "fields": [
      {
        "id": "text574641695",
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
        "id": "text578873146",
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
        "id": "text351429506",
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
        "id": "text531541976",
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
        "id": "text260813662",
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
        "id": "text875456710",
        "name": "userId",
        "type": "relation",
        "required": true,
        "unique": false,
        "system": false,
        "presentable": true,
        "hidden": false,
        "primaryKey": false,
        "collectionId": "pbc_559222759",
        "cascadeDelete": true,
        "maxSelect": 1,
        "minSelect": 0
      },
      {
        "id": "number120560614",
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
        "id": "number557811073",
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
        "id": "date587798836",
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
        "id": "bool398296056",
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
        "id": "bool209870549",
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
        "id": "number96863184",
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
        "id": "number169746401",
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
        "id": "number828813183",
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
        "id": "number501904904",
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
        "id": "date527271726",
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
        "id": "date317770402",
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
        "id": "date175297019",
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
        "id": "date515496133",
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
        "id": "text128122277",
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
        "id": "text347364304",
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
        "id": "autodate47825271",
        "name": "created",
        "type": "autodate",
        "onCreate": true,
        "onUpdate": false,
        "required": false,
        "system": false,
        "presentable": false
      },
      {
        "id": "autodate482975147",
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