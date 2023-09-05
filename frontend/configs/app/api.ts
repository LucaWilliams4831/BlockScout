import stripTrailingSlash from 'lib/stripTrailingSlash';

import { getEnvValue } from './utils';

const apiHost = getEnvValue(process.env.NEXT_PUBLIC_API_HOST);
const apiSchema = getEnvValue(process.env.NEXT_PUBLIC_API_PROTOCOL) || 'https';
const apiPort = getEnvValue(process.env.NEXT_PUBLIC_API_PORT);
const apiEndpoint = 'https://Texplore.ariettachain.tech'
console.log("===== api endposint = ")
console.log(apiEndpoint)

const socketSchema = getEnvValue(process.env.NEXT_PUBLIC_API_WEBSOCKET_PROTOCOL) || 'wss';

const api = Object.freeze({
  host: 'Texplore.ariettachain.tech',
  endpoint: apiEndpoint,
  socket: `${ socketSchema }://Texplore.ariettachain.tech`,
  basePath: '',
});
console.log("====base path = ", stripTrailingSlash(getEnvValue(process.env.NEXT_PUBLIC_API_BASE_PATH) || ''))

export default api;
