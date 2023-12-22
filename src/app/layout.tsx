import { repositoryName } from '@/prismicio';
import { PrismicPreview } from '@prismicio/next';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <link
          rel='icon'
          type='image/png'
          sizes='any'
          href='/favicon.ico'
        />
      </head>
      <body>
        <div id='root'>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </div>
      </body>
    </html>
  );
}
