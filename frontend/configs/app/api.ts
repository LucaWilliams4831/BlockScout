import stripTrailingSlash from 'lib/stripTrailingSlash';

import { getEnvValue } from './utils';

const apiEndpoint = 'https://backend.cosvm.net'

console.log(apiEndpoint)

const socketSchema = getEnvValue(process.env.NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL) || 'wss';

const api = Object.freeze({
  host: 'backend.cosvm.net',
  endpoint: apiEndpoint,
  socket: `${ socketSchema }://backend.cosvm.net`,
  basePath: '',
});

export default api;
