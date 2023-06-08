import dynamic from "next/dynamic";
import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { GetStaticProps } from "next";
import { getAverageRating, getReviews } from "@/api/api";
import { additionalInfoParams } from "@/utils/popupOrder/utils";
import { getLastDayOfYear } from "@/utils/utils";
import StructuredData from "@/components/structured-data/structured-data";

import { Hero } from "@/components/ui/prices/prices-hero/prices-hero";

const DynamicHowPaymentWorks = dynamic(() =>
  import("@/components/ui/prices/how-payment-works/how-payment-works").then((mod) => mod.HowPaymentWorks)
);

const DynamicWorkPlan = dynamic(() => import("@/components/ui/prices/work-plan/work-plan").then((mod) => mod.WorkPlan));

const DynamicWhatsIncluded = dynamic(() =>
  import("@/components/ui/prices/whats-included/whats-included").then((mod) => mod.WhatsIncluded)
);

const DynamicReviews = dynamic(() => import("@/components/pages/home/reviews/reviews").then((mod) => mod.Reviews));

const DynamicSuggestToBuy = dynamic(() => import("@/components/ui/suggest-to-buy/suggest-to-buy").then((mod) => mod.SuggestToBuy));

const DynamicFaq = dynamic(() => import("@/components/ui/faq/faq").then((mod) => mod.Faq));

import HeroImg from "@/public/assets/images/pages/prices/konsultaciya/hero/заказать_консультацию.webp";
import FallbackHeroImg from "@/public/assets/images/pages/prices/konsultaciya/hero/заказать_консультацию.png";

type Props = {
  averageRating: ReviewsAverageRating | null;
  reviews: RandomReviews | null;
};

const Questions = [
  {
    question: "Чем вы лучше других компаний?",
    answer:
      "В отличии от других бирж вам не нужно будет тратить свое время на поиск подходящего исполнителя, проверку отзывов и договоры о цене. Мы предложим вам цену основываясь на вашей задаче и требованиях, будем следить за ходом выполнения работы и доведем вас до успешной сдачи.",
  },
];

const Konsultaciya: NextPageWithLayout<Props> = ({ reviews, averageRating }) => {
  const structuredData = [
    {
      "@context": "http://schema.org/",
      "@type": "Product",
      name: "Онлайн консультация",
      url: `https://bezperesdach.ru/prices/konsultaciya`,
      image: "https://bezperesdach.ru/assets/images/pages/prices/konsultaciya/hero/заказать_консультацию_white.png",
      description:
        "Получите консультацию по любому вопросу, связанному с написанием студенческих работ. Наши эксперты помогут выполнить любую задачу по доступной цене",
      brand: "Безпересдач",

      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: 0,
        url: `https://bezperesdach.ru/prices/konsultaciya`,
        availability: "http://schema.org/InStock",
        priceValidUntil: getLastDayOfYear(),
        seller: {
          "@type": "Organization",
          name: "Безпересдач",
        },
      },

      ...(averageRating && {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: averageRating.ratingValue,
          reviewCount: averageRating.ratingCount,
          bestRating: 5,
          worstRating: 1,
        },
      }),

      ...(reviews && {
        review: [
          reviews.reviews.map((review) => {
            return {
              "@type": "Review",
              author: {
                "@type": "Person",
                name: review.name,
              },
              reviewRating: {
                "@type": "Rating",
                ratingValue: review.rating,
              },
              datePublished: review.date,
            };
          }),
        ],
      }),
    },
    {
      "@context": "https://schema.org/",
      "@type": "ImageObject",
      contentUrl: "https://bezperesdach.ru/assets/images/pages/prices/konsultaciya/hero/заказать_консультацию_white.png",
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
      // "acquireLicensePage": "", this should be a link to our Contact-us page
      creditText: "Получить бесплатную консультацию - Безпересдач",
      creator: {
        "@type": "Organization",
        name: "Безпересдач",
      },
      copyrightNotice: "Безпересдач",
    },
  ];

  return (
    <>
      <SEO
        title="Помощь со студенческими работами онлайн | быстро и недорого"
        description="Получите консультацию по любому вопросу, связанному с написанием студенческих работ. Наши эксперты помогут выполнить любую задачу по доступной цене"
        url="https://bezperesdach.ru/prices/konsultaciya"
        image="https://bezperesdach.ru/assets/images/pages/prices/konsultaciya/hero/og_заказать_консультацию.png"
      />
      <StructuredData data={structuredData} nameKey="structured-data" />
      <Hero
        title="Обратиться за онлайн консультацией"
        description="Поможем с любой студенческой работой, быстро и качественно"
        imgSrc={HeroImg}
        imgAlt="Заказать консультацию по учёбе"
        fallbackImgSrc={FallbackHeroImg}
        backgroundColor={additionalInfoParams["konsultaciya"].cardVisualData?.backgroundColor ?? "#fff"}
        breadCrumbsActiveItemName="Консультация"
        projectType="konsultaciya"
      />
      <DynamicWorkPlan
        title="Что такое онлайн консультация?"
        description={`Если вы не нашли нужную вам услугу на нашем сайте, вы можете оставить заявку на проведение оценки стоимости вашего задания. Просто нажмите узнать стоимость, в "Тип работы" укажите консультация, поясните в теме работы и в комментарии что именно необходимо сделать и мы оценим стоимость выполнения вашей работы`}
        cards={[]}
      />
      {/* <WhatsIncluded /> */}
      {/* <PriceCalculator /> */}
      <DynamicHowPaymentWorks />
      {/* <LastFinishedWork works={works} /> */}
      <DynamicWhatsIncluded
        title="Наши преимущества"
        cards={[
          {
            title: "Мы сами находим эксперта",
            text: (
              <>
                Отбираем только опытных и надежных специалистов - <span style={{ fontWeight: "600", color: "#1070EE" }}>из 10</span>{" "}
                человек <span style={{ fontWeight: "600", color: "#1070EE" }}>отбор нашего сервиса проходят только 2</span>. И они уже
                готовы тебе помочь!
              </>
            ),
          },
          {
            title: "Гарантируем вашу анонимность",
            text: (
              <>
                <span style={{ fontWeight: "600", color: "#1070EE" }}>Никто</span>, включая преподавателей, не узнает, что ты
                воспользовался нашими услугами, а твои данные под{" "}
                <span style={{ fontWeight: "600", color: "#1070EE" }}>надежной защитой</span>
              </>
            ),
          },
          {
            title: "Сопровождаем до успешной защиты",
            text: (
              <>
                Прикрепляем к твоему заказу <span style={{ fontWeight: "600", color: "#1070EE" }}>персонального менеджера</span>,
                который будет с тобой на связи и проконсультирует по любым вопросам
              </>
            ),
          },
          {
            title: "Правки и доработки - бесплатно",
            text: (
              <>
                <span style={{ fontWeight: "600", color: "#1070EE" }}>Гарантируем</span>, что все правки будут внесены бесплатно, а
                курсовая работа - соответствовать вашим требованиям и ожиданиям
              </>
            ),
          },
          {
            title: "Беремся за любые типы работ",
            text: (
              <>
                Наша команда профессионалов поможет вам с <span style={{ fontWeight: "600", color: "#1070EE" }}>любым </span> типом
                работы, просто оставьте заявку на консультацию и опишите требования в заявке
              </>
            ),
          },
          {
            title: "Выполняем работы любой сложности",
            text: (
              <>
                Наша команда имеет опытных авторов в разных сферах, поэтому мы сможем помочь тебе{" "}
                <span style={{ fontWeight: "600", color: "#1070EE" }}>по любому</span> предмету и теме
              </>
            ),
          },
        ]}
      />
      {reviews && <DynamicReviews randomReviews={reviews} />}
      <DynamicSuggestToBuy
        title="Узнай цену своей
		работы за 5 кликов"
        projectType="konsultaciya"
      />
      <DynamicFaq questions={Questions} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const averageRating = await getAverageRating().then((data) => (data.errors ? null : data.data));
  const reviews = await getReviews({ projectType: "konsultaciya", limit: 10 }).then((data) =>
    data ? (data.errors ? null : data.data) : null
  );
  return {
    props: {
      averageRating,
      reviews,
    },
  };
};

Konsultaciya.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default Konsultaciya;
