import App from '@/App';
import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Tilman Porschuetz | Software Engineer',
    description:
      'Portfolio of Tilman Porschuetz, a software engineer based in Berlin, Germany.',
    openGraph: {
      title: 'Tilman Porschuetz | Software Engineer',
      images: [
        {
          url: '',
        },
      ],
    },
  };
}

export default async function Index() {
  return (
    <>
      <App />
    </>
  );
}
