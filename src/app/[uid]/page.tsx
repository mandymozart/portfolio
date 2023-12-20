import { notFound } from 'next/navigation';

import { createClient } from '@/prismicio';

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID('page', params.uid)
    .catch(() => notFound());

  return <>{params.uid}</>;
}
