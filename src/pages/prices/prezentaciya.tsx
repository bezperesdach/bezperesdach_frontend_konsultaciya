import dynamic from "next/dynamic";
import { NextPageWithLayout } from "../_app";
import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { SEO } from "@/components/seo/seo";
import { useAppDispatch } from "@/store/hooks";
import { Button } from "@/components/button/button";
import { setPopupShown } from "@/store/reducers/orderPopupReducer";
import { additionalInfoParams } from "@/utils/popupOrder/utils";
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

import HeroImg from "@/public/assets/images/pages/prices/prezentaciya/hero/заказать_презентацию.webp";
import FallbackHeroImg from "@/public/assets/images/pages/prices/prezentaciya/hero/заказать_презентацию.png";

type Props = {
  averageRating: ReviewsAverageRating | null;
  reviews: RandomReviews | null;
};

const prezentaciya = additionalInfoParams["prezentaciya"];

const Prezentaciya: NextPageWithLayout<Props> = ({ averageRating, reviews }) => {
  const structuredData = [
    {
      "@context": "http://schema.org/",
      "@type": "Product",
      name: "Презентация",
      url: `https://bezperesdach.ru/prices/prezentaciya`,
      image: "https://bezperesdach.ru/assets/images/pages/prices/prezentaciya/hero/заказать_презентацию_white.png",
      description:
        "Закажите презентацию онлайн у опытных специалистов! Высокое качество работы и индивидуальный подход. Сделайте заказ прямо сейчас и сэкономьте время!",
      brand: "Безпересдач",

      offers: {
        "@type": "Offer",
        priceCurrency: "RUB",
        price: 590,
        url: `https://bezperesdach.ru/prices/prezentaciya`,
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
      contentUrl: "https://bezperesdach.ru/assets/images/pages/prices/prezentaciya/hero/заказать_презентацию_white.png",
      license: "https://creativecommons.org/licenses/by-nc/4.0/",
      // "acquireLicensePage": "", this should be a link to our Contact-us page
      creditText: "Заказать презентацию - Безпересдач",
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
      question: "Почему стоит заказать презентацию у нас?",
      answer: (
        <p>
          Если вы ищете качественное выполнение презентации на заказ, то вы на правильном пути. Наша компания предоставляет услуги по
          созданию уникальных презентаций, которые отвечают всем требованиям и пожеланиям клиентов. <br />
          <br />
          Мы работаем с опытными специалистами, которые знают, как привлечь внимание аудитории и передать главные идеи. Мы учитываем все
          детали, от дизайна и графики до информационного содержания, чтобы ваша презентация была эффективной и запоминающейся.
          <br />
          <br /> Заказывая презентацию у нас, вы можете быть уверены в качестве нашей работы и в полной удовлетворенности результатом.
        </p>
      ),
    },
    {
      question: "Как купить презентацию?",
      answer: (
        <p>
          Хотите получить презентация на заказ выполненную быстро, качественно и красиво? Просто нажмите на{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            УЗНАТЬ ЦЕНУ
          </Button>{" "}
          и заполните форму заказа. После успешной отправки заявки мы свяжемся с вами и предложим вам самую выгодную цену. Получите
          помощь в написании своей работы уже сегодня!
        </p>
      ),
    },
    {
      question: "Можно ли заказать срочное выполнение презентации?",
      answer: (
        <p>
          Если у вас возникла необходимость сделать презентацию в кратчайшие сроки, вы можете заказать ее срочное выполнение у нас. Наша
          команда профессиональных авторов готова взять на себя выполнение работы любой сложности в кратчайшие сроки. <br />
          <br />
          Мы гарантируем высокое качество работы и своевременную сдачу, даже если у вас остался всего день до сдачи.
          <br />
          Заказать презентацию у нас очень просто. Для этого нужно{" "}
          <Button onClick={() => dispatch(setPopupShown(true))} style={{ height: "24px", margin: "unset", minWidth: "unset" }}>
            ОСТАВИТЬ ЗАЯВКУ
          </Button>{" "}
          на нашем сайте. После этого мы свяжемся с вами и предложим лучшую цену выполнения вашей работы.
        </p>
      ),
    },
    {
      question: "Сколько стоит презентации на заказ?",
      answer:
        "Стоимость выполнения презентации зависит от её объема, сложности и срока сдачи. Чем раньше вы оставите заказ, тем больше времени будет у исполнителя на его выполнение, что позволит снизить стоимость работы. Поэтому, если вы хотите получить качественную презентацию по доступной цене и точно в срок, рекомендуем не откладывать заказ на последний момент, а оставить его заранее",
    },
    {
      question: "Какие гарантии вы предоставляете?",
      answer: (
        <p>
          Если вы хотите заказать презентацию, то, безусловно, хотите получить гарантии качества и безопасности сделки. Мы предоставляем
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
      question: "Кто будет выполнять мою презентацию на заказ?",
      answer: (
        <p>
          Если вы задумываетесь о том, чтобы заказать презентацию, наверняка у вас возникает вопрос: кто будет выполнять мою работу?{" "}
          <br />
          <br />
          Мы гарантируем, что вашу работу выполнит профессиональный автор с опытом работы по вашей теме. Мы тщательно отбираем наших
          авторов и проверяем их квалификацию, чтобы убедиться, что они способны выполнять качественные работы. <br />
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
        title="Заказать презентацию онлайн, качественно и недорого"
        description="Закажите презентацию онлайн у опытных специалистов! Высокое качество работы и индивидуальный подход. Сделайте заказ прямо сейчас и сэкономьте время!"
        url="https://bezperesdach.ru/prices/prezentaciya"
        image="https://bezperesdach.ru/assets/images/pages/prices/prezentaciya/hero/og_заказать_презентацию.png"
      />
      <StructuredData data={structuredData} nameKey="structured-data" />

      <Hero
        title="Заказать презентацию"
        description="Наш сервис поможет вам купить презентацию онлайн. Мы гарантируем качественное наполнение, выполнение точно в срок и приятное глазу оформление. Закажите презентацию прямо сейчас, и вы сможете увлечь любую аудиторию своей работой."
        imgSrc={HeroImg}
        imgAlt="Заказать презентацию"
        fallbackImgSrc={FallbackHeroImg}
        backgroundColor={additionalInfoParams["prezentaciya"].cardVisualData?.backgroundColor ?? "#fff"}
        breadCrumbsActiveItemName="Презентация"
        projectType="prezentaciya"
      />

      <DynamicWorkPlan
        title="Сроки и ход выполнения презентации на заказ"
        description="Важный фактор для студентов, которые хотят получить хорошую оценку и не нарушить сроки сдачи. Наш сайт предлагает вам
        качественную и оперативную помощь в создании презентаций по любой теме и дисциплине."
        cards={[
          {
            title: "Содержание",
            text: "Предоставим вам примерную структуру презентации и её примерное содержание на утверждение.",
            timeToCompleteInH: 12,
          },
          {
            title: "Оформление",
            text: "Используя утвержденное содержание наполним презентацию качественным и уникальным контентом, добавим анимации и учтём любые ваши требования",
            timeToCompleteInH: 12,
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
                презентация - соответствовать вашим требованиям и ожиданиям
              </>
            ),
          },
          {
            title: "Оформление по вашим требованиям",
            text: (
              <>
                Проверка <span style={{ fontWeight: "600", color: "#1070EE" }}>каждого заказа</span> на соответствие требованиям заявки
                - важная задача нашего отдела качества
              </>
            ),
          },
          {
            title: "Делаем презентации к студенческим работам",
            text: (
              <>
                Если вам к дипломной, курсовой или магистерской нужна презентация -{" "}
                <span style={{ fontWeight: "600", color: "#1070EE" }}>мы поможем</span>! Оформим и выполним строго по методичке
              </>
            ),
          },
        ]}
      />

      {prezentaciya.volumeData && (
        <DynamicPriceCalculator
          title="Цена презентации на заказ"
          basePrice={490}
          showOriginalityControls={false}
          volumeData={{
            name: "Слайдов",
            min: prezentaciya.volumeData.min,
            max: prezentaciya.volumeData.max,
            default: prezentaciya.volumeData.default,
          }}
        />
      )}

      <DynamicHowPaymentWorks />
      {/* <LastFinishedWork works={works} /> */}
      {reviews && <DynamicReviews randomReviews={reviews} />}
      <DynamicSuggestToBuy
        title="Узнай цену своей
		дипломной за 5 кликов"
        projectType="prezentaciya"
      />
      <DynamicFaq questions={Questions} />
    </>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const averageRating = await getAverageRating().then((data) => (data.errors ? null : data.data));
  const reviews = await getReviews({ projectType: "prezentaciya", limit: 12 }).then((data) =>
    data ? (data.errors ? null : data.data) : null
  );
  return {
    props: {
      averageRating,
      reviews,
    },
  };
};

Prezentaciya.getLayout = function getLayout(page: React.ReactElement) {
  return <UnauthorizedUserLayout>{page}</UnauthorizedUserLayout>;
};

export default Prezentaciya;
