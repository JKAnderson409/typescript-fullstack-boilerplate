import { Server } from 'ws';

import ClientType from 'client/src/'

type ServerType = 'server';

const clientStr: ClientType = 'client';

console.log( `Server has types from ${clientStr}!` );

export default ServerType;