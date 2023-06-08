import dynamic from "next/dynamic";
import { GetStaticProps } from "next/types";
import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { useAppDispatch } from "@/store/hooks";
import { Button } from "@/components/button/button";
import { setPopupShown } from "@/store/reducers/orderPopupReducer";
import { additionalInfoParams } from "@/utils/popupOrder/utils";
import StructuredData from "@/components/structured-data/structured-data";
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

import HeroImg from "@/public/assets/images/pages/prices/magisterskaya-dissertaciya/hero/заказать_магистерскую.webp";
import FallbackHeroImg from "@/public/assets/images/pages/prices/magisterskaya-dissertaciya/hero/заказать_магистерскую.png";
import { getAverageRating, getReviews } from "@/api/api";

type Props = {
  averageRating: ReviewsAverageRating | null;
  reviews: RandomReviews | null;
};

const magisterskayaRabota = additionalInfoParams["magisterskaya-dissertaciya"];

const MagisterskayaRabota: NextPageWithLayout<Props> = ({ averageRating, reviews }) => {
  const structuredData = [
    {
      "@context": "http://schema.org/",
      "@type": "Product",
      name: "Магистерская диссертация",
      url: `https://bezperesdach.ru/prices/magisterskaya-dissertaciya`,
      image: "https://bezperesdach.ru/assets/images/pages/prices/magisterskaya-dissertaciya/hero/заказать_магистерскую_white.png",
      description:
        "Заказать магистерскую диссертацию онлайн – это легко и выгодно! Мы предлагаем быстрое выполнение, уникальный контент и индивидуальный подход к каждому клиенту",
      brand: "Безпересдач",

      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: 21490,
        url: `https://bezperesdach.ru/prices/magisterskaya-dissertaciya`,
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
      contentUrl: "https://bezperesdach.ru/assets/images/pages/prices/magisterskaya-dissertaciya/hero/заказать_магистерскую_white.png",
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
      // "acquireLicensePage": "", this should be a link to our Contact-us page
      creditText: "Заказать магистерскую - Безпересдач",
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
      question: "Почему стоит заказать магистерскую диссертацию у нас?",
      answer: (
        <p>
          Магистерская диссертация на заказ - волнительный и непонятный процесс для многих студентов, которые хотят успешно завершить
          учебу и получить магистерскую диссертацию. Однако, многие сталкиваются с проблемой выбора исполнителя или сервиса.
          <br />
          <br />
          Мы можем уверенно заявить, что заказ магистерской диссертации у нас - это правильный выбор. Мы предоставляем профессиональные
          услуги с опытными и квалифицированными авторами, которые готовы выполнить работу любой сложности в срок.
          <br />
          <br />
          Мы гарантируем качество и оригинальность работы, а также строгое соблюдение сроков. Заказ магистерской диссертации у нас - это
          возможность получить высокую оценку и защитить свою магистерскую без проблем.
        </p>
      ),
    },
    {
      question: "Как купить диссертацию?",
      answer: (
        <p>
          Хотите получить магистерскую на заказ выполненную быстро и качественно? Просто нажмите на{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            УЗНАТЬ ЦЕНУ
          </Button>{" "}
          и заполните форму заказа. После успешной отправки заявки мы свяжемся с вами и предложим вам самую выгодную цену. Получите
          помощь в написании магистерской уже сегодня!
        </p>
      ),
    },
    {
      question: "Можно ли заказать магистерскую диссертацию срочно?",
      answer: (
        <p>
          Если у вас возникла необходимость сделать магистерскую работу в кратчайшие сроки, вы можете заказать ее срочное выполнение у
          нас. Наша команда профессиональных авторов готова взять на себя выполнение работы любой сложности в кратчайшие сроки. <br />
          <br />
          Мы гарантируем высокое качество работы и своевременную сдачу, даже если у вас осталось два месяца до срока сдачи. Более того,
          мы предоставляем услугу контроля уникальности текста, чтобы вы могли быть уверены в том, что ваша работа не будет иметь
          проблем с плагиатом. <br />
          <br />
          Заказать магистерскую работу у нас очень просто. Для этого нужно{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            ОСТАВИТЬ ЗАЯВКУ
          </Button>{" "}
          на нашем сайте. После этого мы свяжемся с вами и предложим лучшую цену выполнения вашей работы.
        </p>
      ),
    },
    {
      question: "Сколько будет стоить магистерская диссертация на заказ?",
      answer:
        "Стоимость выполнения магистерской диссертации зависит от ее объема, сложности и срока сдачи. Чем раньше вы оставите заказ, тем больше времени будет у исполнителя на его выполнение, что позволит снизить стоимость работы. Поэтому, если вы хотите получить качественную магистерскую диссертацию по доступной цене и точно в срок, рекомендуем не откладывать заказ на последний момент, а оставить его заранее",
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: (
        <p>
          Если вы хотите заказать диссертацию, то, безусловно, хотите получить гарантии качества и безопасности сделки. Мы предоставляем
          полный комплекс гарантий, которые помогут вам быть уверенными в правильности выбора нашей компании. <br />
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
      question: "Кто будет писать мою диссертацию?",
      answer: (
        <p>
          Если вы задумываетесь о том, чтобы заказать магистерскую диссертацию, наверняка у вас возникает вопрос: кто будет писать мою
          работу? <br />
          <br />
          Мы гарантируем, что вашу работу напишет профессиональный автор с опытом работы по вашей теме. Мы тщательно отбираем наших
          авторов и проверяем их квалификацию, чтобы убедиться, что они способны писать качественные работы. <br />
          <br />
          Вы можете быть уверены, что ваша работа будет написана квалифицированным автором вовремя и с высоким качеством. Заказывайте
          магистерскую работу у нас и наслаждайтесь успехом в учебе.
        </p>
      ),
    },
  ];

  return (
    <>
      <SEO
        title="Заказать,купить магистерскую диссертацию, высокое качество"
        description="Заказать магистерскую диссертацию онлайн – это легко и выгодно! Мы предлагаем быстрое выполнение, уникальный контент и индивидуальный подход к каждому клиенту"
        url="https://bezperesdach.ru/prices/magisterskaya-dissertaciya"
        image="https://bezperesdach.ru/assets/images/pages/prices/magisterskaya-dissertaciya/hero/og_заказать_магистерскую.png"
      />
      <StructuredData data={structuredData} nameKey="structured-data" />

      <Hero
        title={
          <>
            Заказать <br />
            магистерскую работу
          </>
        }
        description={
          "Наши профессиональные авторы имеют огромный опыт написания научных работ и готовы взяться за любую тему магистерской диссертации. Надежность, конфиденциальность и качество - это то, что вы найдете у нас."
        }
        imgSrc={HeroImg}
        imgAlt="Заказать магистерскую диссертацию"
        fallbackImgSrc={FallbackHeroImg}
        backgroundColor={additionalInfoParams["magisterskaya-dissertaciya"].cardVisualData?.backgroundColor ?? "#fff"}
        breadCrumbsActiveItemName="Магистерская работа"
        projectType="magisterskaya-dissertaciya"
      />
      <DynamicWorkPlan
        title="Сроки и ход выполнения магистерской диссертации на заказ"
        description="Важный фактор для студентов, которые хотят получить хорошую оценку и не нарушить сроки сдачи. Наш сайт предлагает вам
        качественную и оперативную помощь в написании магистерских работ по любой теме и дисциплине."
        cards={[
          {
            title: "Оглавление и введение",
            text: "предоставим вам оглавление и введение на утверждение. Введение будет соответствовать вашим методическим рекомендациям, а оглавление будет представлять собой структуру работы, включая главы и разделы",
            timeToCompleteInH: 24 * 6,
          },
          {
            title: "Теоретическая часть",
            text: "данная глава включает в себя описание основных концепций, связанных с темой исследования. В этой главе также может быть описано существующее состояние проблемы, а также существующие подходы к ее решению",
            timeToCompleteInH: 24 * 10,
          },
          {
            title: "Методологическая часть",
            text: "данная глава содержит проведенный анализ по теме вашей работы. Также в этой главе может быть представлено сравнение различных концепций",
            timeToCompleteInH: 24 * 14,
          },
          {
            title: "Практическая часть и заключение",
            text: "данная глава содержит описание результатов исследований, экспериментов, анализа данных. Также здесь могут быть описаны возможные направления дальнейшего исследования по данной теме",
            timeToCompleteInH: 24 * 30,
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
                магистерская - соответствовать вашим требованиям и ожиданиям
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

      {magisterskayaRabota.volumeData && (
        <DynamicPriceCalculator
          title="Цена магистерской "
          basePrice={16990}
          volumeData={{
            min: magisterskayaRabota.volumeData.min,
            max: magisterskayaRabota.volumeData.max,
            default: magisterskayaRabota.volumeData.default,
          }}
        />
      )}

      <DynamicHowPaymentWorks />
      {/* <LastFinishedWork works={works} /> */}
      {reviews && <DynamicReviews randomReviews={reviews} />}
      <DynamicSuggestToBuy
        title="Узнай цену своей
		магистерской за 5 кликов"
        projectType="magisterskaya-dissertaciya"
      />
      <DynamicFaq questions={Questions} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const averageRating = await getAverageRating().then((data) => (data.errors ? null : data.data));
  const reviews = await getReviews({ projectType: "magisterskaya-dissertaciya", limit: 12 }).then((data) =>
    data ? (data.errors ? null : data.data) : null
  );
  return {
    props: {
      averageRating,
      reviews,
    },
  };
};

MagisterskayaRabota.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default MagisterskayaRabota;
