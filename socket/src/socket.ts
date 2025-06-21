String.prototype.GetHashKey = function (this: string): number {
  const keyLowered = this.toLowerCase();
  const length = this.length;
  let hash, i;

  for (hash = i = 0; i < length; i++) {
    hash += keyLowered.charCodeAt(i);
    hash += hash << 10;
    hash ^= hash >>> 6;
  }

  hash += hash << 3;
  hash ^= hash >>> 11;
  hash += hash << 15;

  return hash;
};

import { config } from 'dotenv';
config({ path: `${__dirname}/../../.env` });

import UserController from './controllers/user';
import CharacterController from './controllers/characters';
import ChatController from './controllers/chat';
import DoorController from './controllers/doors';
import InventoryController from './controllers/inventory';
import StableController from './controllers/stables';
import WorldController from './controllers/world';
import server, { userAccessKey } from './server';
import { seedDB } from './seed';

const { DATABASE_URL, SOCKET_PORT } = process.env;

// import { drizzle } from 'drizzle-orm/node-postgres';
// const db = drizzle(DATABASE_URL);
//
// (async () => {
//   const result = await db.execute('');
//
//   console.log('result', result);
// })();

import { db } from './db/connection';

seedDB();

UserController(userAccessKey);
CharacterController(userAccessKey);
ChatController();
DoorController();
InventoryController();
StableController();
WorldController();

server.listen(Number(SOCKET_PORT), () => {
  const serverAddress = server.address();
  if (typeof serverAddress === 'string') {
    console.log(`Server listening on ${serverAddress}`);
  } else if (serverAddress) {
    console.log(`Server listening on ${serverAddress.address}:${serverAddress.port}`);
  } else {
    console.log('Server listening');
  }
});
