import { GetServerSideProps } from "next";
import React from "react";
import { ugolokStudentaGetAllArticlesPreviews } from "@/api/api";
import { SEO } from "@/components/seo/seo";
import ArticlePreview from "@/components/pages/ugolok-studenta/article-preview/article-preview";
import { Pagination } from "@/components/pages/ugolok-studenta/components/pagination/pagination";
import { NextBreadCrumbs } from "@/components/next-bread-crumbs/next-bread-crumbs";
import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";

import styles from "@/styles/pages/UgolokStudenta.module.css";

type Props = {
  articles: IArticlePreview[];
  pagination: IPagination;
};

const UgolokStudenta: NextPageWithLayout<Props> = ({ articles, pagination }) => {
  return (
    <>
      <SEO
        title="Уголок студента | Безпересдач"
        description="Уголок студента - это блог компании Безпересдач, в котором вы сможете найти различные статьи и материалы, которые могут пригодиться вам в учёбе"
        url="https://bezperesdach.ru/ugolok-studenta"
        image="https://bezperesdach.ru/assets/og_logo.png"
      />
      <section className={`${styles.articles_container} dynamic_container`}>
        <NextBreadCrumbs url="/ugolok-studenta" />
        <div className={styles.articles}>
          <div className={styles.title_container}>
            <h1>Уголок студента</h1>
            <p>полезные статьи и материалы для студентов</p>
          </div>
          {articles.map((article) => {
            return (
              <ArticlePreview
                key={article.url}
                title={article.title}
                description={article.shortDescription}
                tags={article.tags}
                previewImageUrl={article.previewImageUrl}
                timeToRead={article.timeToRead}
                url={`ugolok-studenta/${article.url}`}
                creationDate={new Date(article.createdAt)}
                updateDate={article.updatedAt ? new Date(article.updatedAt) : undefined}
              />
            );
          })}
        </div>
        <Pagination className={styles.pagination} start={pagination.start} limit={pagination.limit} total={pagination.total} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  ctx.res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
  const forwarded = ctx.req.headers["x-forwarded-for"] as string;
  const ip = forwarded ? forwarded.split(/, /)[0] : ctx.req.connection.remoteAddress;

  const response = await ugolokStudentaGetAllArticlesPreviews(0, 10, ip);

  if (response.data && response.data?.data) {
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
