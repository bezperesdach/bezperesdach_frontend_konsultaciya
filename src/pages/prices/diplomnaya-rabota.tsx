import dynamic from "next/dynamic";
import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { additionalInfoParams } from "@/utils/popupOrder/utils";
import StructuredData from "@/components/structured-data/structured-data";
import { getAverageRating, getReviews } from "@/api/api";
import { GetStaticProps } from "next";
import { getLastDayOfYear } from "@/utils/utils";

import { Hero } from "@/components/ui/prices/prices-hero/prices-hero";

const DynamicWorkPlan = dynamic(() => import("@/components/ui/prices/work-plan/work-plan").then((mod) => mod.WorkPlan));

const DynamicHowPaymentWorks = dynamic(() =>
  import("@/components/ui/prices/how-payment-works/how-payment-works").then((mod) => mod.HowPaymentWorks)
);

const DynamicWhatsIncluded = dynamic(() =>
  import("@/components/ui/prices/whats-included/whats-included").then((mod) => mod.WhatsIncluded)
);

const DynamicPriceCalculator = dynamic(() =>
  import("@/components/ui/prices/price-calculator/price-calculator").then((mod) => mod.PriceCalculator)
);

const DynamicReviews = dynamic(() => import("@/components/pages/home/reviews/reviews").then((mod) => mod.Reviews));

const DynamicSuggestToBuy = dynamic(() => import("@/components/ui/suggest-to-buy/suggest-to-buy").then((mod) => mod.SuggestToBuy));

const DynamicFaq = dynamic(() => import("@/components/ui/faq/faq").then((mod) => mod.Faq));

import HeroImg from "@/public/assets/images/pages/prices/diplomnaya-rabota/hero/заказать_дипломную.webp";
import FallbackHeroImg from "@/public/assets/images/pages/prices/diplomnaya-rabota/hero/заказать_дипломную.png";

type Props = {
  averageRating: ReviewsAverageRating | null;
  reviews: RandomReviews | null;
};

const diplomnayaRabota = additionalInfoParams["diplomnaya-rabota"];

const DiplomnayaRabota: NextPageWithLayout<Props> = ({ averageRating, reviews }) => {
  const structuredData = [
    {
      "@context": "http://schema.org/",
      "@type": "Product",
      name: "Дипломная работа",
      url: `https://bezperesdach.ru/prices/diplomnaya-rabota`,
      image: "https://bezperesdach.ru/assets/images/pages/prices/diplomnaya-rabota/hero/заказать_дипломную_white.png",
      description:
        "Нужна дипломная работа на заказ, но вы не знаете, как ее написать? Мы поможем вам! Наша команда профессионалов готова выполнить ваш заказ быстро и качественно.",
      brand: "Безпересдач",

      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: 12990,
        url: `https://bezperesdach.ru/prices/diplomnaya-rabota`,
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
      contentUrl: "https://bezperesdach.ru/assets/images/pages/prices/diplomnaya-rabota/hero/заказать_дипломную_white.png",
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
      // "acquireLicensePage": "", this should be a link to our Contact-us page
      creditText: "Заказать дипломную - Безпересдач",
      creator: {
        "@type": "Organization",
        name: "Безпересдач",
      },
      copyrightNotice: "Безпересдач",
    },
  ];

  const Questions = [
    {
      question: "Кто будет заниматься написанием дипломной работы?",
      answer: (
        <p>
          Этот документ - завершающий весь период учебы и показывающий вашу квалификацию специалиста. Является крайне важным, поскольку
          в его создании необходимо проявить не только глубокие знания и практические навыки, но и оригинальность, творческий подход и
          грамотность. <br />
          <br />
          Поэтому мы работаем только с <span style={{ color: "#1170EE" }}>проверенными и надежными авторами</span>, которые предоставили
          все необходимые документы об образовании и прошли наш строгий отбор. Большинство наших экспертов ведут научную и практическую
          работу. <br />
          <br />
          Мы знаем, как написать дипломную работу, которая{" "}
          <span style={{ color: "#1170EE" }}>соответствует высоким академическим стандартам</span>, поможем вам получить хорошую оценку
          и успешно окончить учебу.
        </p>
      ),
    },
    {
      question: "Сколько стоит заказать дипломную работу?",
      answer: (
        <p>
          Примерная цена дипломной работы рассчитывается с помощью нашего калькулятора выше. <br />
          <br />
          Стоимость дипломной работы зависит от сложности и требуемого срока сдачи.{" "}
          <span style={{ color: "#1170EE" }}>Чем раньше ты сможешь заказать дипломную работу</span>, тем больше мы сможем уделить
          времени на написание и <span style={{ color: "#1170EE" }}>тем ниже будет стоимость</span>. Поэтому мы настоятельно рекомендуем
          не оставлять поиск исполнителя на последний момент, а сделать это заранее.
        </p>
      ),
    },
    {
      question: "Вы даете какие-то гарантии на заказ диплома?",
      answer: (
        <p>
          Мы ценим своих клиентов и предоставляем <span style={{ color: "#1170EE" }}>100% гарантию на результат</span>. Наша компания
          предоставляет гарантирует предоставление качественных услуг по написанию дипломных работ.
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Правки и доработки диплома бесплатны</span> до успешной сдачи ВКР и в течение 30 дней после
          этого.
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Строго соблюдаем конфиденциальность</span> и гарантируем, что личные данные и информация не
          будут переданы третьим лицам.
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Работаем через безопасную сделку</span> - автор получает деньги после успешной сдачи
          заказа. Мы заключаем договор и при необходимости можем предоставить закрывающие документы.
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Всегда соблюдаем сроки</span>, за которые готовы написать ВКР, указывая их в договоре с
          клиентами.
          <br />
          <br />
          Наши авторы имеют высокий уровень знаний и опыта в написании дипломных работ, что позволяет{" "}
          <span style={{ color: "#1170EE" }}>гарантировать высокое качество услуг</span>.
        </p>
      ),
    },
    {
      question: "Мне нужен диплом очень быстро - вы можете помочь?",
      answer:
        "Если необходимо срочно и недорого купить ВКР - дипломная работа на заказ будет готова в кратчайшие сроки. Мы не только гарантируем высочайшее качество и соблюдение сроков, даже если до сдачи работы осталось немного времени, но также предоставляем услугу проверки на уникальность.",
    },
    {
      question: "Если мне нужно общаться с научным руководителем на каждом этапе - можно заказывать главы отдельно?",
      answer:
        "Существует возможность оплаты по главам. Просто укажи это в требованиях при оформлении заказа, и мы будем отправлять каждую часть работы для проверки по мере ее выполнения. ",
    },

    {
      question: "По каким дисциплинам вы можете помочь?",
      answer:
        "Наши специалисты специализируются на важных и актуальных дисциплинах, таким как лингвистика, юриспруденция, правоведение, микро- и макроэкономика, экономическая теория, философия, психология, социология, информатика, математика и многие другие. Каждая дипломная работа, написанная нашими специалистами, уникальна и соответствует всем требованиям и рекомендациям ВУЗов. При этом стоимость дипломной работы также зависит от выбранной вами темы.",
    },
    {
      question: "Все требования будут соблюдены?",
      answer: (
        <p>
          <span style={{ color: "#1170EE" }}>Конечно!</span> <br />
          <br /> Мы ценим наших клиентов и всегда готовы идти навстречу и удовлетворять их потребности. Чтобы вы могли убедиться, что мы
          соблюдаем ваши требования, мы закрепляем за вами персонального менеджера, который проконтролирует весь процесс написания
          работы. <br />
          <br />
          Обеспечиваем полную прозрачность в процессе работы, чтобы вы чувствовали себя уверенно. Каждая дипломная работа проходит{" "}
          <span style={{ color: "#1170EE" }}>тщательную проверку на уникальность</span>. Мы используем самые современные инструменты
          проверки на плагиат.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Дипломная работа на заказ от опытных авторов"
        description="Написание дипломных работ на заказ по доступной цене. Наша команда профессионалов напишет диплом быстро и качественно. Закажите дипломную работу у надежного исполнителя"
        url="https://bezperesdach.ru/prices/diplomnaya-rabota"
        image="https://bezperesdach.ru/assets/images/pages/prices/diplomnaya-rabota/hero/og_заказать_дипломную.png"
      />
      <StructuredData data={structuredData} nameKey="structured-data" />

      <Hero
        title={
          <>
            Заказать дипломную <br />
            работу
          </>
        }
        description={
          <>
            Планируешь успешно защитить диплом и не тратить на его подготовку массу времени? У нас работают эксперты и профессионалы с
            опытом работы в сфере образования, мы гарантируем:
            <span style={{ marginTop: "6px", display: "block" }}>
              Качественное и грамотное написание диплома на любую тему в сжатые сроки.
            </span>
            <span style={{ marginTop: "6px", display: "block" }}>Высокую оригинальность и уникальность работы. </span>
            <span style={{ marginTop: "6px", display: "block" }}>Личный менеджер контролирующий ход выполнения работы</span>
          </>
          // "У нас вы можете заказать дипломную работу легко и быстро! Наш сервис предлагает качественные научные работы от экспертов. Решите учебные проблемы с помощью профессионалов. Быстрая помощь, индивидуальный подход, высокий результат!"
        }
        imgSrc={HeroImg}
        imgAlt="Заказать дипломную работу"
        fallbackImgSrc={FallbackHeroImg}
        backgroundColor={additionalInfoParams["diplomnaya-rabota"].cardVisualData?.backgroundColor ?? "#fff"}
        breadCrumbsActiveItemName="Дипломная работа"
        projectType="diplomnaya-rabota"
      />

      <DynamicWorkPlan
        title="Сроки и ход выполнения дипломной на заказ"
        description="Важный фактор для студентов, которые хотят получить хорошую оценку и не нарушить сроки сдачи. Наш сайт предлагает вам качественную и оперативную помощь в написании магистерских работ по любой теме и дисциплине."
        cards={[
          {
            title: "Лучшие эксперты",
            text: "предоставим вам оглавление и введение на утверждение. Введение будет соответствовать вашим методическим рекомендациям, а оглавление будет представлять собой структуру работы, включая главы и разделы",
            timeToCompleteInH: 24,
          },
          {
            title: "Теоретическая часть",
            text: "данная глава включает в себя описание основных концепций, связанных с темой исследования. В этой главе также может быть описано существующее состояние проблемы, а также существующие подходы к ее решению",
            timeToCompleteInH: 48,
          },
          {
            title: "Методологическая часть",
            text: "данная глава содержит проведенный анализ по теме вашей работы. Также в этой главе может быть представлено сравнение различных концепций",
            timeToCompleteInH: 96,
          },
          {
            title: "Практическая часть и заключение",
            text: "данная глава содержит описание результатов исследований, экспериментов, анализа данных. Также здесь могут быть описаны возможные направления дальнейшего исследования по данной теме",
            timeToCompleteInH: 24 * 7,
          },
        ]}
      />

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
                дипломная работа - соответствовать вашим требованиям и ожиданиям
              </>
            ),
          },
          {
            title: "Оформление по ГОСТ - бесплатно",
            text: (
              <>
                Проверка <span style={{ fontWeight: "600", color: "#1070EE" }}>каждого заказа</span> на соответствие теме, ГОСТ,
                методическим указаниям - важная задача нашего отдела качества
              </>
            ),
          },
          {
            title: "Уникальность работы",
            text: (
              <>
                <span style={{ fontWeight: "600", color: "#1070EE" }}>Каждая работа</span> проходит проверку на оригинальность в
                соответствии с вашими требованиями, что позволяет нам гарантировать{" "}
                <span style={{ fontWeight: "600", color: "#1070EE" }}>высокую оригинальность</span>
              </>
            ),
          },
        ]}
      />

      {diplomnayaRabota.volumeData && (
        <DynamicPriceCalculator
          title="Рассчитайте цену дипломной работы"
          basePrice={9990}
          volumeData={{
            min: diplomnayaRabota.volumeData.min,
            max: diplomnayaRabota.volumeData.max,
            default: diplomnayaRabota.volumeData.default,
          }}
        />
      )}
      <DynamicHowPaymentWorks />
      {/* <LastFinishedWork works={works} /> */}
      {reviews && <DynamicReviews randomReviews={reviews} />}
      <DynamicSuggestToBuy
        title="Узнай цену своей
		дипломной за 5 кликов"
        projectType="diplomnaya-rabota"
      />
      <DynamicFaq questions={Questions} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const averageRating = await getAverageRating().then((data) => (data.errors ? null : data.data));
  const reviews = await getReviews({ projectType: "diplomnaya-rabota", limit: 12 }).then((data) =>
    data ? (data.errors ? null : data.data) : null
  );

  return {
    props: {
      averageRating,
      reviews,
    },
  };
};

DiplomnayaRabota.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default DiplomnayaRabota;
