import React from "react";
import { LinkButton } from "@/components/link-button/link-button";
import urls from "@/utils/urls";
import { SEO } from "@/components/seo/seo";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";

import styles from "@/styles/pages/404.module.css";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Страница не найдена | Безпересдач"
        description="Страница не найдена"
        url={`https://bezperesdach.ru/404`}
        image="https://bezperesdach.ru/assets/og_logo.png"
      />

      <div className={`${styles.main} no_select`} style={{ overflow: "hidden" }}>
        {/* <div className={styles.main_container}> */}
        {/* <div className={styles.container}> */}
        <div className={styles.lamp_container}>
          <div className={styles.lamp}>
            <div className={styles.glass}>
              <div className={styles.lava}>
                <div className={styles.blob}></div>
                <div className={styles.blob}></div>
                <div className={styles.blob}></div>
                <div className={styles.blob_top}></div>
                <div className={styles.blob_bottom}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.text_container}>
          <h1>404</h1>
          <h2>Страница не найдена...</h2>
          <LinkButton href={urls.base} backgroundColor="#1070EE">
            На главную
          </LinkButton>
        </div>
      </div>
      {/*  </div> */}
    </>
  );
};

NotFound.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <UnauthorizedUserLayout navbarProps={{ logoHref: "/", noMenuItems: true }} footerProps={{ hideNavigation: true }}>
      {page}
    </UnauthorizedUserLayout>
  );
};

export default NotFound;
