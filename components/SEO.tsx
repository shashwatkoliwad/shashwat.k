import { DefaultSeo } from 'next-seo';

export const SEO: React.FC = () => {
  return (
    <DefaultSeo
      title="Shashwat's site"
      description="The official site of Shashwat, a software engineer and a TypeScript/JavaScript enthusiast."
      openGraph={{
        site_name: 'shashwatk.xyz'
      }}
      twitter={{
        handle: '@shash__wat',
        site: '@shash__wat',
        cardType: 'summary_large_image'
      }}
    />
  );
};
