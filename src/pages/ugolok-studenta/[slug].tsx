import React, { useCallback, useEffect } from "react";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";
import { ugolokStudentaGetArticle } from "@/api/api";
import { NextBreadCrumbs } from "@/components/next-bread-crumbs/next-bread-crumbs";
import { SEO } from "@/components/seo/seo";
import { TimeToCompleteIcon } from "@/icons/time-to-complete-icon";
import { DateIcon } from "@/icons/date-icon";
import { getFullDateStr } from "@/utils/utils";
import { ArticleFull } from "@/components/pages/ugolok-studenta/article-full/article-full";
import urls from "@/utils/urls";
import { ShareToSocials } from "@/components/pages/ugolok-studenta/share-to-socials/share-to-socials";
import { getCookie, setCookie } from "@/utils/cookies";
import { Tags } from "@/components/pages/ugolok-studenta/components/tags/tags";
import { DateUpdateIcon } from "@/icons/date-update-icon";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { NextPageWithLayout } from "../_app";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

import styles from "@/styles/pages/UgolokStudentaArticle.module.css";

interface IParams extends ParsedUrlQuery {
  slug: string;
}

type Props = {
  article: IArticleFull;
};

const UgolokStudentaArticle: NextPageWithLayout<Props> = ({ article }) => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      return;
    }

    const cookieExists = getCookie({ cookies: document.cookie, name: article.url });
    if (typeof cookieExists === "undefined") {
      const now = new Date();
      now.setTime(now.getTime() + 30 * 24 * 3600 * 1000);
      setCookie({ name: article.url, value: "1", path: `/ugolok-studenta`, expires: now });
      const googleToken = await executeRecaptcha();
      await fetch(`/api/set-article-view?url=${encodeURIComponent(article.url)}&token=${googleToken}`);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <>
      <SEO
        title={article.titleSEO}
        description={article.descriptionSEO}
        url={`https://bezperesdach.ru/ugolok-studenta/${article.url}`}
        image={"https://backend.bezperesdach.ru" + article.previewImageUrl}
      />
      <section className={`${styles.main} dynamic_container`}>
        <NextBreadCrumbs url="/ugolok-studenta" activeItem={article.title} />
        <h1>{article.title}</h1>
        <Tags tags={article.tags} />
        <div className={styles.info_container}>
          <div className={styles.info}>
            <div className={styles.date}>
              <div>
                <DateIcon width={24} height={24} title="Дата публикации" />
                <p>{getFullDateStr(new Date(article.createdAt).toLocaleDateString("ru-RU"))}</p>
              </div>
              {article.updatedAt && (
                <div>
                  <DateUpdateIcon width={24} height={24} title="Дата публикации" />
                  <p>{getFullDateStr(new Date(article.updatedAt).toLocaleDateString("ru-RU"))}</p>
                </div>
              )}
            </div>
            <div>
              <TimeToCompleteIcon width={24} height={24} title="Время чтения" />

              <p>{article.timeToRead} мин.</p>
            </div>
          </div>
          <ShareToSocials className={styles.share} title={article.title} url={`${urls.ugolokStudenta.base}/${article.url}`} />
        </div>
        <ArticleFull article={article} />
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  ctx.res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate=43200");
  const parsedQuery = ctx.query as IParams;
  const url = parsedQuery.slug;

  const forwarded = ctx.req.headers["x-forwarded-for"] as string;
  const ip = forwarded ? forwarded.split(/, /)[0] : ctx.req.connection.remoteAddress;

  const response = await ugolokStudentaGetArticle(url, ip);

  if (response.data && response.data?.data) {
    const article = response.data.data as IArticleFull;

    return { props: { article } };
  }

  return {
    notFound: true,
  };
};

UgolokStudentaArticle.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default UgolokStudentaArticle;
