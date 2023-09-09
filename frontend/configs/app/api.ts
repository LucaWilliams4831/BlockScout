import stripTrailingSlash from 'lib/stripTrailingSlash';

import { getEnvValue } from './utils';

const apiEndpoint = 'https://backendexplorer.ariettachain.tech'

console.log(apiEndpoint)

const socketSchema = getEnvValue(process.env.NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL) || 'wss';

const api = Object.freeze({
  host: 'backendexplorer.ariettachain.tech',
  endpoint: apiEndpoint,
  socket: `${ socketSchema }://backendexplorer.ariettachain.tech`,
  basePath: '',
});

export default api;
