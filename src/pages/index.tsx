import dynamic from "next/dynamic";

import { UnauthorizedUserLayout } from "@/components/layouts/unauthorized-user-layout/unauthorized-user-layout";
import { Hero } from "@/components/pages/home/hero/hero";
import { SEO } from "@/components/seo/seo";
import { DiplomnayaUslugaIcon } from "@/icons/uslugi/diplomnaya-usluga-icon";
import { DokladUslugaIcon } from "@/icons/uslugi/doklad-usluga-icon";
import { KursovayaUslugaIcon } from "@/icons/uslugi/kursovaya-usluga-icon";
import { MagisterskayaUslugaIcon } from "@/icons/uslugi/magisterskaya-usluga-icon";
import { OtchetPoPraktikeUslugaIcon } from "@/icons/uslugi/otchet-po-praktike-usluga-icon";
import { PrezentaciyaUslugaIcon } from "@/icons/uslugi/prezentaciya-usluga-icon";
import { ReferatUslugaIcon } from "@/icons/uslugi/referat-usluga-icon";
import { KonsultaciyaUslugaIcon } from "@/icons/uslugi/konsultaciya-usluga-icon";

const DynamicOurAdvantages = dynamic(() =>
  import("@/components/pages/home/our-advantages/our-advantages").then((mod) => mod.OurAdvantages)
);

const DynamicGuarantees = dynamic(() => import("@/components/pages/home/guarantees/guarantees").then((mod) => mod.Guarantees));

const DynamicReviews = dynamic(() => import("@/components/pages/home/reviews/reviews").then((mod) => mod.Reviews));

const DynamicOrderSteps = dynamic(() => import("@/components/pages/home/order-steps/order-steps").then((mod) => mod.OrderSteps));

const DynamicSuggestToBuy = dynamic(() => import("@/components/ui/suggest-to-buy/suggest-to-buy").then((mod) => mod.SuggestToBuy));

const DynamicFaq = dynamic(() => import("@/components/ui/faq/faq").then((mod) => mod.Faq));

const Konsultaciya = () => {
  return (
    <>
      <SEO
        title="Сервис Безпересдач | Онлайн-помощь с работами студентам"
        description="Надежный и быстрый сервис онлайн-помощи студентам поможет решить все ваши задачи. Не тратьте время на поиск решений, обращайтесь к нам!"
        url="https://bezperesdach.online"
        image="https://bezperesdach.online/assets/og_logo.png"
      />
      <Hero
        additionalMessage={
          <p className="font_h4" style={{ opacity: 0.8, lineHeight: "124%" }}>
            <span className="font_h3" style={{ fontWeight: "600" }}>
              Не нашли нужную услугу?
            </span>{" "}
            <br /> Не переживайте! Мы консультируем по{" "}
            <span style={{ color: "var(--global-color-blue)" }}>всем видам студенческих работ</span>, просто{" "}
            <span style={{ color: "var(--global-color-blue)" }}>оставьте заявку на консультацию</span> и укажите ваши требования
          </p>
        }
        heroPoints={[
          "Помогаем студентам по всей России",
          "Сопровождаем вплоть до успешной защиты",
          "Беремся за любые темы и виды работ",
          "Бесплатные правки и гарантия 60 дней ",
        ]}
        uslugiTitle="Популярные консультации"
        uslugiButtons={[
          {
            name: "Курсовая",
            id: "kursovaya-rabota",
            icon: <KursovayaUslugaIcon height={80} accentColor="#ABCFFF" title="Курсовая работа" />,
            priceStart: 2990,
          },
          {
            name: "Дипломная",
            id: "diplomnaya-rabota",
            icon: <DiplomnayaUslugaIcon height={80} accentColor="#E9FFBB" title="Дипломная работа" />,
            priceStart: 6990,
          },
          {
            name: "Магистерская",
            id: "magisterskaya-dissertaciya",
            icon: <MagisterskayaUslugaIcon height={80} accentColor="#FFDFAE" title="Магистерская работа" />,
            priceStart: 18990,
          },
          {
            name: "Реферат",
            id: "referat",
            icon: <ReferatUslugaIcon height={80} accentColor="#CAF7FD" title="Реферат" />,
            priceStart: 1290,
          },
          {
            name: "Доклад",
            id: "doklad",
            icon: <DokladUslugaIcon height={80} accentColor="#FEDFFF" title="Доклад" />,
            priceStart: 890,
          },
          {
            name: (
              <p>
                Отчет <br /> по практике
              </p>
            ),
            id: "otchet-po-praktike",
            icon: <OtchetPoPraktikeUslugaIcon height={80} accentColor="#D2D7FF" title="Отчет по практике" />,
            priceStart: 3990,
          },
          {
            name: "Презентация",
            id: "prezentaciya",
            icon: <PrezentaciyaUslugaIcon height={80} accentColor="#FFE1E3" title="Презентация" />,
            priceStart: 890,
          },
          {
            name: "Консультация",
            id: "konsultaciya",
            icon: <KonsultaciyaUslugaIcon height={80} accentColor="#D0FFEE" title="Презентация" />,
            priceStart: 0,
          },
        ]}
      />

      <DynamicOurAdvantages
        cards={[
          {
            title: "Лучшие консультанты",
            text: "Наш строгий и требовательный отбор консультантов позволил нам собрать команду преподавателей с многолетним стажем и студентов старшекурсников и отличников из лучших ВУЗов страны. Вы в надежных руках!",
          },
          {
            title: "Бесплатные правки и улучшения",
            text: "После получения консультации вы сможете обратиться к нам с любыми вопросами и в любое время",
          },
          {
            title: "Полная анонимность",
            text: "Мы не передаем никаких данных о вас и вашем обращении третьим лицам. Вы можете быть уверены, что никто не узнает о том, что вы обратились к нам за помощью",
          },
          {
            title: "Консультируем до самой защиты",
            text: "Мы будем с вами на связи вплоть до вашей защиты! Наша поддержка ответит на любые вопросы в любое время.",
          },
        ]}
      />

      <DynamicGuarantees
        cards={[
          {
            title: "Сделаем во время",
            description:
              "Наши консультации всегда выполняются в указанный срок, без исключений. Независимо от сложности или непредвиденных обстоятельств, мы гарантируем, что ваша консультация будет выполнена точно в оговоренные сроки.",
          },
          {
            title: "Безопасный платеж",
            description:
              "Мы гарантируем безопасность ваших платежей. Вы можете воспользоваться банковским переводом, оплатой с помощью платежных карт, системой быстрых платежей и другими удобными способами. ",
          },
          {
            title: "Все официально",
            description:
              "У нас имеются все необходимые документы, подтверждающие нашу легальность и соответствие требованиям. Мы работаем в полном соответствии с законодательством и соблюдаем все правила и нормы. ",
          },
        ]}
      />

      <DynamicOrderSteps
        steps={[
          "Вы оставляете заявку на консультацию и указываете удобный для вас способ связи",
          "Мы свяжемся с вами, уточним все детали и подберём консультанта",
          "Вы вносите предоплату и наш консультант приступает к помощи ",
          "Ваша работа изучается на предмет правок, наш консультант вам помогает её улучшить. Вы вносите остаток",
          "Работа принимается преподавателем и вы получаете высокий балл",
          "Ваша заявка закрывается и наш консультант получает оплату за консультацию",
        ]}
      />

      <DynamicReviews
        randomReviews={{
          avgRating: 4.9,
          reviews: [
            {
              id: 0,
              name: "Артем М.",
              rating: 5,
              text: "Мне понравилось, просто написал и со мной связались. Помогли с работой вовремя, проблем не было, буду обращаться 💣💣💣",
              date: "",
              avatar: "m5",
              projectType: "kursovaya-rabota",
              anonymous: false,
            },
            {
              id: 1,
              name: "Елизавета Н.",
              rating: 5,
              text: "Спасибо большое за помощь, очень довольна и на краткий срок всё чётко 🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥",
              date: "",
              avatar: "f5",
              projectType: "diplomnaya-rabota",
              anonymous: false,
            },
            {
              id: 2,
              name: "Ульяна М.",
              rating: 4,
              text: "Я осталась довольна, преподаватель много придирался к работе, но мне со всем помогли и я смогла успешно все сдать. Поиск консультанта по моей тематике был немного долгий",
              date: "",
              avatar: "f3",
              projectType: "diplomnaya-rabota",
              anonymous: false,
            },
            {
              id: 3,
              name: "Анонимно",
              rating: 5,
              text: "Проконсультировали добросовестно, качественно и раньше срока. Со вниманием отнеслись ко всем замечаниям и корректировкам, в режиме реального времени поддерживали связь. Осталась очень довольна!",
              date: "",
              avatar: "f1",
              projectType: "diplomnaya-rabota",
              anonymous: true,
            },
            {
              id: 4,
              name: "Татьяна М.",
              rating: 5,
              text: "Мне нужно было разработать веб приложение в краткие сроки, меня очень быстро нашли консультанта и со всем помогли!",
              date: "",
              avatar: "f2",
              projectType: "magisterskaya-dissertaciya",
              anonymous: false,
            },
            {
              id: 5,
              name: "Николай С.",
              rating: 5,
              text: "Нужна была срочная консультация по реферату. Мне быстро помогли в течение одного дня. На все вопросы сразу отвечали. Спасибо!",
              date: "",
              avatar: "m2",
              projectType: "referat",
              anonymous: false,
            },
            {
              id: 6,
              name: "Алена У.",
              rating: 4,
              text: "Консультация прошла отлично, правда препод как-то очень много правок вносил, но меня по каждому моменту проконсультировали и у меня получилось сдать работу на отлично",
              date: "",
              avatar: "f4",
              projectType: "kursovaya-rabota",
              anonymous: false,
            },
            {
              id: 7,
              name: "Евгений Т.",
              rating: 5,
              text: "Нужна была срочная помощь с докладом. Написал сюда, мне быстро подобрали консультанта по моей теме и после консультации я смог сдать работу на отлично",
              date: "",
              avatar: "m1",
              projectType: "doklad",
              anonymous: false,
            },
            {
              id: 8,
              name: "Артур С..",
              rating: 5,
              text: "Искал кто сможет помочь с презентацией для курсовой. Нашел этих ребят в ВК, консультация прошла супер быстро и у меня получилось сделать отличную презентацию, спасибо",
              date: "",
              avatar: "m3",
              projectType: "prezentaciya",
              anonymous: false,
            },
          ],
        }}
      />

      <DynamicSuggestToBuy title="Скидка на первую консультацию 15%" buttonText="Получить" />

      <DynamicFaq
        questions={[
          {
            question: "Сколько будет стоить консультация?",
            answer: (
              <p>
                Стоимость консультации рассчитывается индивидуально исходя из{" "}
                <span style={{ color: "var(--global-color-blue)" }}>ваших требований</span>. Чем раньше вы оставите заказ, тем больше
                времени будет у нашего консультанта на подготовку всех материалов, а значит{" "}
                <span style={{ color: "var(--global-color-blue)" }}>стоимость</span> консультации будет{" "}
                <span style={{ color: "var(--global-color-blue)" }}>ниже</span>!
              </p>
            ),
          },
          {
            question: "Кто будет меня консультировать?",
            answer: (
              <p>
                Консультацией займется один из наших{" "}
                <span style={{ color: "var(--global-color-blue)" }}>квалифицированных консультантов</span> прошедший нашу строгую
                проверку. <br /> <br />
                Мы <span style={{ color: "var(--global-color-blue)" }}>тщательно отбираем</span> наших консультантов и проверяем их
                квалификацию, чтобы убедиться, что они способны осуществлять качественные консультации. <br /> <br /> В среднем, наш
                строгий отбор успешно проходят лишь <span style={{ color: "var(--global-color-blue)" }}>2 из 10</span> человек.
              </p>
            ),
          },
          {
            question: "Какие вы даёте гарантии?",
            answer: (
              <p>
                Мы ценим своих клиентов и предоставляем{" "}
                <span style={{ color: "var(--global-color-blue)" }}>100% гарантию на результат</span>. Наша компания предоставляет
                гарантирует предоставление качественных услуг.
                <br />
                <br />
                <span style={{ color: "var(--global-color-blue)" }}>Правки и доработки бесплатны</span> до успешной сдачи и в течение 30
                дней после этого.
                <br />
                <br />
                <span style={{ color: "var(--global-color-blue)" }}>Строго соблюдаем конфиденциальность</span> и гарантируем, что личные
                данные и информация не будут переданы третьим лицам.
                <br />
                <br />
                <span style={{ color: "var(--global-color-blue)" }}>Работаем через безопасную сделку</span> - консультант получает
                оплату только после вашей успешной сдачи. Мы заключаем договор и при необходимости можем предоставить закрывающие
                документы.
                <br />
                <br />
                <span style={{ color: "var(--global-color-blue)" }}>Всегда соблюдаем сроки</span> оказания консультации
                <br />
                <br />
                Наши консультанты имеют высокий уровень знаний и большой опыт, что позволяет{" "}
                <span style={{ color: "var(--global-color-blue)" }}>гарантировать высокое качество услуг</span>.
              </p>
            ),
          },
          {
            question: "Все требования будут соблюдены?",
            answer: (
              <p>
                <span style={{ color: "var(--global-color-blue)" }}>Конечно!</span> <br />
                <br /> Мы ценим наших клиентов и всегда готовы идти навстречу и удовлетворять их потребности. Чтобы вы могли убедиться,
                что мы соблюдаем ваши требования, мы закрепляем за вами персонального менеджера, который проконтролирует весь процесс
                консультации. Обеспечиваем полную прозрачность в процессе консультации, чтобы вы были спокойны.
              </p>
            ),
          },
        ]}
      />
    </>
  );
};

Konsultaciya.getLayout = function getLayout(page: React.ReactElement) {
  return (
    <UnauthorizedUserLayout navbarProps={{ logoHref: "/", noMenuItems: true }} footerProps={{ hideNavigation: true }}>
      {page}
    </UnauthorizedUserLayout>
  );
};

export default Konsultaciya;
