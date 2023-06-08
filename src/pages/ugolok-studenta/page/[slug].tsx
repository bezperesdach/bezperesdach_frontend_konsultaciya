import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import React from "react";
import { ugolokStudentaGetAllArticlesPreviews } from "@/api/api";
import { SEO } from "@/components/seo/seo";
import ArticlePreview from "@/components/pages/ugolok-studenta/article-preview/article-preview";
import { Pagination } from "@/components/pages/ugolok-studenta/components/pagination/pagination";
import { NextPageWithLayout } from "@/pages/_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";

import styles from "@/styles/pages/UgolokStudenta.module.css";
import { NextBreadCrumbs } from "@/components/next-bread-crumbs/next-bread-crumbs";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  articles: IArticlePreview[];
  pagination: IPagination;
};

const UgolokStudenta: NextPageWithLayout<Props> = ({ articles, pagination }) => {
  return (
    <>
      <SEO
        title="Уголок студента | Безпересдач"
        description="Здесь вы можете найти различные материалы для помощи в учёбе"
        url="https://bezperesdach.ru/ugolok-studenta"
        image="https://bezperesdach.ru/assets/og_logo.png"
      />
      <section className={`${styles.articles_container} dynamic_container`}>
        <NextBreadCrumbs url="/ugolok-studenta" />
        <div className={styles.articles}>
          {articles.map((article) => (
            <ArticlePreview
              key={article.url}
              title={article.title}
              description={article.shortDescription}
              tags={article.tags}
              previewImageUrl={article.previewImageUrl}
              timeToRead={article.timeToRead}
              url={`ugolok-studenta/${article.url}`}
              creationDate={new Date(article.updatedAt)}
            />
          ))}
        </div>
        <Pagination className={styles.pagination} start={pagination.start} limit={pagination.limit} total={pagination.total} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  ctx.res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");

  const parsedQuery = ctx.query as IParams;

  const forwarded = ctx.req.headers["x-forwarded-for"] as string;
  const ip = forwarded ? forwarded.split(/, /)[0] : ctx.req.connection.remoteAddress;

  const limit = 10;
  const slug = Number(parsedQuery.slug);
  const start = slug === 0 ? 1 : slug / limit;
  const response = await ugolokStudentaGetAllArticlesPreviews(start, limit, ip);

  if (response.data && response.data?.data?.length > 0) {
    const articles = response.data.data as IArticlePreview[];
    const pagination = response.data.meta.pagination as IPagination;

    return { props: { articles, pagination } };
  }

  return {
    notFound: true,
  };
};

UgolokStudenta.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default UgolokStudenta;
