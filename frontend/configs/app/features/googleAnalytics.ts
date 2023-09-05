import type { Feature } from './types';

import { getEnvValue } from '../utils';

const propertyId = getEnvValue(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_PROPERTY_ID);

const title = 'Google analytics';

const config: Feature<{ propertyId: string }> = (() => {
  if (propertyId) {
    return Object.freeze({
      title,
      isEnabled: true,
      propertyId,
    });
  }

  return Object.freeze({
    title,
    isEnabled: false,
  });
})();

export default config;
