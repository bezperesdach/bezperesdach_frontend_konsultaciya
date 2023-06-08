import dynamic from "next/dynamic";
import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { additionalInfoParams } from "@/utils/popupOrder/utils";
import { useAppDispatch } from "@/store/hooks";
import { Button } from "@/components/button/button";
import { setPopupShown } from "@/store/reducers/orderPopupReducer";
import StructuredData from "@/components/structured-data/structured-data";
import { GetStaticProps } from "next";
import { getAverageRating, getReviews } from "@/api/api";
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

import HeroImg from "@/public/assets/images/pages/prices/otchet-po-praktike/hero/заказать_отчет_по_практике.webp";
import FallbackHeroImg from "@/public/assets/images/pages/prices/otchet-po-praktike/hero/заказать_отчет_по_практике.png";

type Props = {
  averageRating: ReviewsAverageRating | null;
  reviews: RandomReviews | null;
};

const otchetPoPraktike = additionalInfoParams["otchet-po-praktike"];

const OtchetPoPraktike: NextPageWithLayout<Props> = ({ averageRating, reviews }) => {
  const structuredData = [
    {
      "@context": "http://schema.org/",
      "@type": "Product",
      name: "Отчет по практике",
      url: `https://bezperesdach.ru/prices/otchet-po-praktike`,
      image: "https://bezperesdach.ru/assets/images/pages/prices/otchet-po-praktike/hero/заказать_отчет_по_практике_white.png",
      description:
        "Закажите отчет по практике у нас и получите профессиональную помощь! Бесплатные правки, гарантия качества, индивидуальный подход и соблюдение сроков.",
      brand: "Безпересдач",

      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: 3490,
        url: `https://bezperesdach.ru/prices/otchet-po-praktike`,
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
      contentUrl: "https://bezperesdach.ru/assets/images/pages/prices/otchet-po-praktike/hero/заказать_отчет_по_практике_white.png",
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
      // "acquireLicensePage": "", this should be a link to our Contact-us page
      creditText: "Заказать отчет по практике - Безпересдач",
      creator: {
        "@type": "Organization",
        name: "Безпересдач",
      },
      copyrightNotice: "Безпересдач",
    },
  ];

  const dispatch = useAppDispatch();

  const Questions = [
    {
      question: "Почему стоит заказать отчет по практике у нас?",
      answer: (
        <p>
          Хотите заказать качественный отчет по практике ? Тогда вы попали по адресу. Наша компания предлагает выполнить отчет по
          практике в срок и с гарантией качества.
          <br />
          <br />
          Мы работаем с квалифицированными авторами, которые имеют большой опыт написания отчетов и учтут все требования вашего вуза.
          Также мы предлагаем доступные цены и возможность получить скидку на заказ. З
          <br />
          <br />
          Закажите отчет по практике у нас и получите готовый документ, который принесет вам высокую оценку. Не откладывайте на завтра
          то, что можно сделать сегодня - свяжитесь с нами прямо сейчас.
        </p>
      ),
    },
    {
      question: "Как купить отчет по практике?",
      answer: (
        <p>
          Хотите получить отчет по практике выполненный быстро и качественно? Просто нажмите на{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            УЗНАТЬ ЦЕНУ
          </Button>{" "}
          и заполните форму заказа. После успешной отправки заявки мы свяжемся с вами и предложим вам самую выгодную цену. Получите
          помощь в написании своей работы уже сегодня!
        </p>
      ),
    },
    {
      question: "Можно ли заказать отчет по практике срочно?",
      answer: (
        <p>
          Если у вас возникла необходимость сделать отчет по практике работу в кратчайшие сроки, вы можете заказать его срочное
          выполнение у нас. Наша команда профессиональных авторов готова взять на себя выполнение работы любой сложности в кратчайшие
          сроки. <br />
          <br />
          Мы гарантируем высокое качество работы и своевременную сдачу, даже если у вас осталось всего неделя до сдачи. Более того, мы
          предоставляем услугу контроля уникальности текста, чтобы вы могли быть уверены в том, что ваша работа не будет иметь проблем с
          плагиатом. <br />
          <br />
          Заказать отчет по практике у нас очень просто. Для этого нужно{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            ОСТАВИТЬ ЗАЯВКУ
          </Button>{" "}
          на нашем сайте. После этого мы свяжемся с вами и предложим лучшую цену выполнения вашей работы.
        </p>
      ),
    },
    {
      question: "Сколько стоит отчет по практике на заказ?",
      answer:
        "Стоимость выполнения отчет по практике зависит от его объема, сложности и срока сдачи. Чем раньше вы оставите заказ, тем больше времени будет у исполнителя на его выполнение, что позволит снизить стоимость работы. Поэтому, если вы хотите получить качественный отчет по практике по доступной цене и точно в срок, рекомендуем не откладывать заказ на последний момент, а оставить его заранее",
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: (
        <p>
          Если вы хотите заказать отчет по практике, то, безусловно, хотите получить гарантии качества и безопасности сделки. Мы
          предоставляем полный комплекс гарантий, которые помогут вам быть уверенными в правильности выбора нашей компании. <br />
          <br />
          <span style={{ color: "#1170EE" }}>Бесплатные правки</span> - мы предоставляем бесплатные правки и доработки до успешной сдачи
          и в течение 30 дней после сдачи работы. Кроме того, мы обеспечиваем полную конфиденциальность и защиту персональных данных
          наших клиентов. <br />
          <br />
          <span style={{ color: "#1170EE" }}>Безопасный платеж</span> - мы работаем через безопасный платеж, автор выполняющий работу
          получит деньги только после вашей успешной сдачи!
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Предоставляем чек</span> - при необходимости выдадим вам чек за оказанные услуги
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Заключаем договор</span> - при необходимости заключим с вами договор об оказании услуг
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Мы работаем официально</span> - при необходимости выдадим вам чек, который фиксирует факт
          оплаты нашей работы
          <br />
          <br />
          <span style={{ color: "#1170EE" }}>Не берём с вас всю сумму сразу</span> - работаем по предоплате, которая дает обоюдную
          гарантию выполнения обязательств
        </p>
      ),
    },
    {
      question: "Кто будет писать мой отчет по практике?",
      answer: (
        <p>
          Если вы задумываетесь о том, чтобы заказать отчет по практике, наверняка у вас возникает вопрос: кто будет писать мою работу?
          <br />
          <br />
          Мы гарантируем, что вашу работу напишет профессиональный автор с опытом работы по вашей теме. Мы тщательно отбираем наших
          авторов и проверяем их квалификацию, чтобы убедиться, что они способны писать качественные работы. <br />
          <br />
          Вы можете быть уверены, что ваша работа будет написана квалифицированным автором вовремя и с высоким качеством. Заказывайте
          отчет по практике у нас и наслаждайтесь успехом в учебе.
        </p>
      ),
    },
  ];
  return (
    <>
      <SEO
        title="Заказать отчет по практике | Недорого и быстро"
        description="Закажите отчет по практике у нас и получите профессиональную помощь! Бесплатные правки, гарантия качества, индивидуальный подход и соблюдение сроков."
        url="https://bezperesdach.ru/prices/otchet-po-praktike"
        image="https://bezperesdach.ru/assets/images/pages/prices/otchet-po-praktike/hero/og_заказать_отчет_по_практике.png"
      />
      <StructuredData data={structuredData} nameKey="structured-data" />

      <Hero
        title="Заказать отчет по практике"
        description="Получите качественный отчет по практике с нашим онлайн-сервисом. Мы поможем вам составить идеальный отчет, сделаем анализ вашей практики и предоставим подробный отчет в удобном формате."
        imgSrc={HeroImg}
        imgAlt="Заказать отчёт по практике"
        fallbackImgSrc={FallbackHeroImg}
        backgroundColor={additionalInfoParams["otchet-po-praktike"].cardVisualData?.backgroundColor ?? "#fff"}
        breadCrumbsActiveItemName="Отчет по практике"
        projectType="otchet-po-praktike"
      />

      <DynamicWorkPlan
        title="Сроки и ход выполнения отчета по практике"
        description="Важный фактор для студентов, которые хотят успешно сдать отчет и не нарушить сроки сдачи. Наш сайт предлагает вам
        качественную и оперативную помощь в написании курсовых работ по любой теме и дисциплине. "
        cards={[
          {
            title: "Реферативная часть",
            text: "предоставим вам основные результаты и выводы по цели и задачам работы. Реферативная часть состоит из введения, двух-трех глав, заключения, списка использованных источников, приложения.",
            timeToCompleteInH: 24 * 7,
          },
          {
            title: "Отзыв и рецензия",
            text: "напишем отзыв и рецензию от лица научного руководителя, которые будут содержать общую оценку работы студента",
            timeToCompleteInH: 24 * 1,
          },
          {
            title: "Индивидуальное задание",
            text: "опишем конкретные задачи, которые были поставлены перед вами во время прохождения практики",
            timeToCompleteInH: 24 * 6,
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
                отчет по практике - соответствовать вашим требованиям и ожиданиям
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
            title: "Соответствие требованиям",
            text: (
              <>
                При создании отчета по практике мы{" "}
                <span style={{ fontWeight: "600", color: "#1070EE" }}>строго придерживаемся методических рекомендаций</span>, что
                позволит вам без проблем сдать отчет
              </>
            ),
          },
        ]}
      />

      {otchetPoPraktike.volumeData && (
        <DynamicPriceCalculator
          basePrice={2490}
          volumeData={{
            min: otchetPoPraktike.volumeData.min,
            max: otchetPoPraktike.volumeData.max,
            default: otchetPoPraktike.volumeData.default,
          }}
        />
      )}
      <DynamicHowPaymentWorks />
      {/* <LastFinishedWork works={works} /> */}
      {reviews && <DynamicReviews randomReviews={reviews} />}
      <DynamicSuggestToBuy
        title="Узнай цену своего
		отчета за 5 кликов"
        projectType="otchet-po-praktike"
      />
      <DynamicFaq questions={Questions} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const averageRating = await getAverageRating().then((data) => (data.errors ? null : data.data));
  const reviews = await getReviews({ projectType: "otchet-po-praktike", limit: 12 }).then((data) =>
    data ? (data.errors ? null : data.data) : null
  );
  return {
    props: {
      averageRating,
      reviews,
    },
  };
};

OtchetPoPraktike.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default OtchetPoPraktike;
