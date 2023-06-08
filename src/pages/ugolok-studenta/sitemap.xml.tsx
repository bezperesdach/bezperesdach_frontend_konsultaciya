import { GetServerSideProps } from "next";
import { getServerSideSitemap, ISitemapField } from "next-sitemap";
import { ugolokStudentaGetAllArticlesUrls } from "@/api/api";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  ctx.res.setHeader("Cache-Control", "public, s-maxage=432000, stale-while-revalidate=43200");

  const response = await ugolokStudentaGetAllArticlesUrls();
  if (!response.errors) {
    const urls = response.data as { id: number; url: string }[];

    const fields: ISitemapField[] = urls.map((item) => ({
      loc: `https://bezperesdach.ru/ugolok-studenta/${item.url}`,
      lastmod: new Date().toISOString(),
    }));
    return getServerSideSitemap(ctx, fields);
  }

  return {
    notFound: true,
  };
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
export default function Site() {}
