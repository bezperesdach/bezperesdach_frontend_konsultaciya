import dynamic from "next/dynamic";
import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { additionalInfoParams } from "@/utils/popupOrder/utils";
import { Button } from "@/components/button/button";
import { setPopupShown } from "@/store/reducers/orderPopupReducer";
import { useAppDispatch } from "@/store/hooks";
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

import HeroImg from "@/public/assets/images/pages/prices/referat/hero/заказать_реферат.webp";
import FallbackHeroImg from "@/public/assets/images/pages/prices/referat/hero/заказать_реферат.png";

type Props = {
  averageRating: ReviewsAverageRating | null;
  reviews: RandomReviews | null;
};
const referat = additionalInfoParams["referat"];

const Referat: NextPageWithLayout<Props> = ({ averageRating, reviews }) => {
  const structuredData = [
    {
      "@context": "http://schema.org/",
      "@type": "Product",
      name: "Реферат",
      url: `https://bezperesdach.ru/prices/referat`,
      image: "https://bezperesdach.ru/assets/images/pages/prices/referat/hero/заказать_реферат_white.png",
      description:
        "Хотите заказать реферат онлайн? Обращайтесь к экспертам в своей области! Гарантируем уникальность, соблюдение сроков, проверку на антиплагиат и доступные цены.",
      brand: "Безпересдач",

      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: 1490,
        url: `https://bezperesdach.ru/prices/referat`,
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
      contentUrl: "https://bezperesdach.ru/assets/images/pages/prices/referat/hero/заказать_реферат_white.png",
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
      // "acquireLicensePage": "", this should be a link to our Contact-us page
      creditText: "Заказать реферат - Безпересдач",
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
      question: "Почему стоит заказать реферат у нас?",
      answer: (
        <p>
          Реферат - это один из самых важных элементов любого учебного процесса, который может определить успех студента в его
          дальнейшей учебе и карьере. Но написание реферата может быть довольно сложной задачей, требующей большого количества времени и
          усилий. Именно поэтому мы предлагаем заказать реферат онлайн у нашей команды профессиональных авторов. <br />
          <br />
          Мы гарантируем, что каждый наш реферат написан с нуля и соответствует всем требованиям заказчика. Кроме того, мы гарантируем
          оригинальность каждой работы, используя проверенные программы для обнаружения плагиата.
          <br />
          <br />
          Наша команда с удовольствием возьмется за любую тему реферата, от истории до экономики, от медицины до права. Мы выполним вашу
          работу в срок и в соответствии с вашими требованиями.
          <br />
          <br />
          Кроме того, мы предлагаем нашим клиентам доступные цены на наши услуги. Мы понимаем, что студенческий бюджет может быть
          ограничен, и поэтому стараемся сделать наши услуги доступными для каждого.
          <br />
          <br />
          Заказывая реферат у нас, вы можете быть уверены, что получите высокую оценку от преподавателя.
        </p>
      ),
    },
    {
      question: "Как купить реферат?",
      answer: (
        <p>
          Хотите получить реферат выполненный быстро и качественно? Просто нажмите на{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            УЗНАТЬ ЦЕНУ
          </Button>{" "}
          и заполните форму заказа. После успешной отправки заявки мы свяжемся с вами и предложим вам самую выгодную цену. Получите
          помощь в написании своей работы уже сегодня!
        </p>
      ),
    },
    {
      question: "Можно ли заказать реферат срочно?",
      answer: (
        <p>
          Если у вас возникла необходимость заказать срочный реферат, вы можете заказать его у нас. Наша команда профессиональных
          авторов готова взять на себя выполнение работы любой сложности в кратчайшие сроки. <br />
          <br />
          Мы гарантируем высокое качество работы и своевременную сдачу, даже если у вас остался всего день до сдачи. Более того, мы
          предоставляем услугу контроля уникальности текста, чтобы вы могли быть уверены в том, что ваша работа не будет иметь проблем с
          плагиатом. <br />
          <br />
          Заказать срочный реферат у нас очень просто. Для этого нужно{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            ОСТАВИТЬ ЗАЯВКУ
          </Button>{" "}
          на нашем сайте. После этого мы свяжемся с вами и предложим лучшую цену выполнения вашей работы.
        </p>
      ),
    },
    {
      question: "Сколько будет стоить реферат на заказ?",
      answer:
        "Стоимость выполнения реферата зависит от его объема, сложности и срока сдачи. Чем раньше вы оставите заказ, тем больше времени будет у исполнителя на его выполнение, что позволит снизить стоимость работы. Поэтому, если вы хотите получить качественный реферат по доступной цене и в удобные сроки, рекомендуем не откладывать заказ на последний момент, а оставить его заранее",
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: (
        <p>
          Если вы хотите заказать реферат недорого, то, безусловно, хотите получить гарантии качества и безопасности сделки. Мы
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
      question: "Кто будет писать мой реферат на заказ?",
      answer: (
        <p>
          Если вы задумываетесь о том, чтобы заказать реферат, наверняка у вас возникает вопрос: кто будет писать мою работу? <br />
          <br />
          Мы гарантируем, что вашу работу напишет профессиональный автор с опытом работы по вашей теме. Мы тщательно отбираем наших
          авторов и проверяем их квалификацию, чтобы убедиться, что они способны писать качественные работы. <br />
          <br />
          Вы можете быть уверены, что ваша работа будет написана квалифицированным автором вовремя и с высоким качеством. Заказывайте
          реферат у нас и наслаждайтесь успехом в учебе.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Заказать реферат | Недорого, быстро и качественно"
        description="Хотите заказать реферат онлайн? Обращайтесь к экспертам в своей области! Гарантируем уникальность, соблюдение сроков, проверку на антиплагиат и доступные цены."
        url="https://bezperesdach.ru/prices/referat"
        image="https://bezperesdach.ru/assets/images/pages/prices/referat/hero/og_заказать_реферат.png"
      />
      <StructuredData data={structuredData} nameKey="structured-data" />

      <Hero
        title="Заказать реферат"
        description="Закажите реферат от профессионалов! Наш сервис гарантирует качественные работы, своевременную поддержку и высокую уникальность. Экономьте время и энергию с помощью наших экспертов. Успех в учебе в один клик!"
        imgSrc={HeroImg}
        imgAlt="Заказать реферат"
        fallbackImgSrc={FallbackHeroImg}
        backgroundColor={additionalInfoParams["referat"].cardVisualData?.backgroundColor ?? "#fff"}
        breadCrumbsActiveItemName="Реферат"
        projectType="referat"
      />

      <DynamicWorkPlan
        title="Сроки и ход выполнения реферата на заказ"
        description="Важный фактор для студентов, которые хотят получить хорошую оценку и не нарушить сроки сдачи. Наш сайт предлагает вам
        качественную и оперативную помощь в написании рефератов по любой теме и дисциплине."
        cards={[
          {
            title: "Оглавление и введение",
            text: "предоставим вам оглавление и введение на утверждение. Введение будет соответствовать вашим методическим рекомендациям, а оглавление будет представлять собой структуру работы, включая главы и разделы",
            timeToCompleteInH: 4,
          },
          {
            title: "Теоретическая часть",
            text: "данная глава включает в себя описание основных концепций, связанных с темой исследования. В этой главе также может быть описано существующее состояние проблемы, а также существующие подходы к ее решению",
            timeToCompleteInH: 20,
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
                реферат - соответствовать вашим требованиям и ожиданиям
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

      {referat.volumeData && (
        <DynamicPriceCalculator
          title="Цена реферата на заказ"
          basePrice={990}
          volumeData={{ min: referat.volumeData.min, max: referat.volumeData.max, default: referat.volumeData.default }}
        />
      )}

      <DynamicHowPaymentWorks />
      {/* <LastFinishedWork works={works} /> */}
      {reviews && <DynamicReviews randomReviews={reviews} />}
      <DynamicSuggestToBuy
        title="Узнай цену своего
		реферата за 5 кликов"
        projectType="referat"
      />
      <DynamicFaq questions={Questions} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const averageRating = await getAverageRating().then((data) => (data.errors ? null : data.data));
  const reviews = await getReviews({ projectType: "referat", limit: 12 }).then((data) =>
    data ? (data.errors ? null : data.data) : null
  );
  return {
    props: {
      averageRating,
      reviews,
    },
  };
};

Referat.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default Referat;
