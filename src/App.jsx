'use client';

import { PrismicProvider } from '@prismicio/react';
import { ExportPrismic } from './components/ExportPrismic/ExportPrismic';
import './index.css';
import { createClient } from './prismicio';
function App() {
  const client = createClient();
  return (
    <>
      <PrismicProvider client={client}>
        <ExportPrismic />
      </PrismicProvider>
    </>
  );
}

export default App;
