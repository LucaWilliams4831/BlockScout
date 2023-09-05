import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import React from 'react';

import PageNextJs from 'nextjs/PageNextJs';

const PublicTags = dynamic(() => import('ui/pages/PublicTags'), { ssr: false });

const Page: NextPage = () => {
  return (
    <PageNextJs pathname="/account/public-tags-request">
      <PublicTags/>
    </PageNextJs>
  );
};

export default Page;

export { account as getServerSideProps } from 'nextjs/getServerSideProps';
