import Script from 'next/script';
import React from 'react';

import config from 'configs/app';

const feature = config.features.googleAnalytics;

const GoogleAnalytics = () => {
  if (!feature.isEnabled) {
    return null;
  }

  const id = feature.propertyId;

  return (
    <>
      <Script src={ `https://www.googletagmanager.com/gtag/js?id=${ id }` }/>
      <Script id="google-analytics">
        { `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ id }');
        ` }
      </Script>
    </>
  );
};

export default React.memo(GoogleAnalytics);
