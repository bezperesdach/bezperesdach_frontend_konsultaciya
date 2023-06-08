import Head from "next/head";

interface Props {
  title: string; //max length 45 characters
  description: string; //max length 135 desktop/ 100 mobile
  url: string;
  type?: string;
  children?: React.ReactNode;
  viewport?: string;
  image: string;
}

export const SEO = ({ title, description, url, viewport, type, image, children }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type ?? "website"} />
      <meta property="og:locale" content="ru_RU" />

      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />

      <meta property="og:image" content={image} />

      <meta name="twitter:image" content={image} />
      <meta name="viewport" content={viewport ?? "width=device-width, initial-scale=1.0"} />

      {children}
    </Head>
  );
};
