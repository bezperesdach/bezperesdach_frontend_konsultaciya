import dynamic from "next/dynamic";
import { NextPageWithLayout } from "./_app";

import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { AboutUsHero } from "@/components/pages/about-us/hero/hero";
import { Faq } from "@/components/ui/faq/faq";

const DynamicAboutSite = dynamic(() => import("@/components/pages/about-us/about-site/about-site").then((mod) => mod.AboutSite));
// const DynamicBonus = dynamic(() => import("../components/home-page/bonus/bonus").then((mod) => mod.Bonus));

const Questions = [
  {
    question: "Кто ваши авторы?",
    answer: (
      <p>
        Мы тщательно отбираем наших авторов и проверяем их квалификацию, чтобы убедиться, что они способны писать качественные работы.
        <br />
        <br />
        Вы можете быть уверены, что ваша работа будет написана квалифицированным автором вовремя и с высоким качеством. Заказывайте
        написание студенческих работ у нас и наслаждайтесь успехом в учебе.
      </p>
    ),
  },
  {
    question: "Вы работаете официально?",
    answer: "Да, мы работаем официально, по запросу предоставляем чек за услуги и можем составить договор об оказании услуг",
  },
];

const AboutUs: NextPageWithLayout = () => {
  return (
    <>
      <SEO
        title="О компании Безпересдач"
        description="Компания Безпересдач - ваш надежный помощник в написании студенческих работ. Получите качественную помощь от наших экспертов и добейтесь успеха в учебе!"
        url={"https://bezperesdach.ru/about_us"}
        image="https://bezperesdach.ru/assets/og_logo.png"
      />

      <AboutUsHero />

      <DynamicAboutSite />

      <Faq title="Остались вопросы?" questions={Questions} />

      {/* <DynamicBonus />
      <DynamicContact /> */}
    </>
  );
};

AboutUs.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default AboutUs;
