import React from "react";
import dynamic from "next/dynamic";
import { SEO } from "@/components/seo/seo";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";

import WorkHero from "@/components/pages/work-page/hero/hero";

const DynamicWeOffer = dynamic(() => import("@/components/pages/work-page/we-offer/we-offer"));

const DynamicWhatsIncluded = dynamic(() =>
  import("@/components/ui/prices/whats-included/whats-included").then((md) => md.WhatsIncluded)
);

import One from "@/public/assets/images/pages/work/we-offer/one.webp";
import OneFallback from "@/public/assets/images/pages/work/we-offer/one.png";

import Two from "@/public/assets/images/pages/work/we-offer/two.webp";
import TwoFallback from "@/public/assets/images/pages/work/we-offer/two.png";

import Three from "@/public/assets/images/pages/work/we-offer/three.webp";
import ThreeFallback from "@/public/assets/images/pages/work/we-offer/three.png";

import Four from "@/public/assets/images/pages/work/we-offer/four.webp";
import FourFallback from "@/public/assets/images/pages/work/we-offer/four.png";
import ContactUs from "@/components/pages/work-page/contact-us/contact-us";

const Work = () => {
  return (
    <>
      <SEO
        title="Стать автором Безпересдач"
        description="Как зарабатывать не выходя из дома? Стань автором на Безпересдач! Получай стабильный заработок удаленно, помогай студентам и делай мир лучше!"
        url={"https://bezperesdach.ru/work"}
        image="https://bezperesdach.ru/assets/og_logo.png"
      />

      <WorkHero />
      <DynamicWeOffer
        title="Что мы предлагаем нашим авторам"
        description="Мы уважаем труд наших авторов, поэтому мы нигде не выставляем скрытых комиссий, ценообразование работает прозрачно и понятно. Мы уважаем своих авторов и предлагаем им наилучшие условия для работы"
        cards={[
          {
            title: "Выплаты каждый месяц удобным вам способом",
            text: "Мы понимаем, как важно получать свои доходы удобным и быстрым способом. Именно поэтому мы предлагаем выплаты каждый месяц в формате, который наиболее удобен для вас.",
            image: One,
            fallBackImage: OneFallback,
          },
          {
            title: "Удаленная работа и свободный график",
            text: "Вы сами можете выбрать удобное время и место для работы, что поможет вам эффективно организовать свой рабочий день и не отвлекаться на посторонние дела. Работа с нами - это возможность сочетать комфорт и профессиональный рост",
            image: Two,
            fallBackImage: TwoFallback,
          },
          {
            title: "Служба поддержки для авторов",
            text: "Мы готовы оказать вам полную поддержку во время работы с нашей платформой. Наша служба поддержки всегда готова помочь с любыми вопросами и проблемами, связанными с написанием студенческих работ и использованием нашего сервиса. Мы стремимся обеспечить вас комфортными условиями работы и максимальной эффективностью процесса написания работ. ",
            image: Three,
            fallBackImage: ThreeFallback,
          },
          {
            title: "Постоянное наличие заказов",
            text: "Мы гарантируем постоянное наличие заказов, что позволит вам зарабатывать стабильный доход. Мы постоянно работаем над расширением нашей базы заказчиков и инвестируем в развитие нашей площадки. Работая с нами, вы получаете возможность работать на полную занятость и получать заработок, который будет соответствовать вашим профессиональным навыкам",
            image: Four,
            fallBackImage: FourFallback,
          },
        ]}
      />

      <DynamicWhatsIncluded
        title="Что мы ждём от наших авторов"
        cards={[
          {
            title: "Высшее образование",
            text: "Мы ожидаем наличие высшего образования у наших авторов. Также мы готовы сотрудничать со студентами старших курсов, которые готовы доказать качество своих знаний",
          },
          {
            title: "Наличие компьютера и стабильный интернет",
            text: "Для успешной и качественной работы вам потребуется компьютер, а также стабильный доступ в интернет",
          },
          {
            title: "Уверенные знания в своей теме",
            text: "Мы не ожидаем от вас знания всего и сразу, главное, чтобы вы свободно разбирались в своей теме",
          },
        ]}
      />

      <ContactUs />
    </>
  );
};

Work.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default Work;
