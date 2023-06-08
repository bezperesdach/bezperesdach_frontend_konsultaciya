export const contactTypeOptions = [
  { value: "email", label: "Email" },
  { value: "telegram", label: "Telegram" },
  // { value: "whatsapp", label: "WhatsApp" },
  // { value: "viber", label: "Viber" },
  { value: "vk", label: "Вконтакте" },
];

export const typeOptionsInit = [
  { value: "diplomnaya-rabota", label: "Дипломная работа" },
  { value: "vkr", label: "ВКР" },
  { value: "kursovaya-rabota", label: "Курсовая работа" },
  { value: "povyshenie-originalnosti", label: "Повышение оригинальности" },
  { value: "oformlenie-po-gost", label: "Оформление по ГОСТ" },
  { value: "referat", label: "Реферат" },
  { value: "doklad", label: "Доклад" },
  { value: "prezentaciya", label: "Презентация" },
  { value: "konsultaciya", label: "Консультация" },
  { value: "poisk-informacii", label: "Поиск информации" },
  { value: "otchet-po-praktike", label: "Отчет по практике" },
  { value: "programmirovanie", label: "Программирование" },
  { value: "kontrolnaya-rabota", label: "Контрольная работа" },
  { value: "laboratornaya-rabota", label: "Лабораторная работа" },
  { value: "reshenie-zadach", label: "Решение задач" },
  { value: "metodologicheskaya-instrukciya", label: "Методологическая инструкция" },
  { value: "monografiya", label: "Монография" },
  { value: "nir", label: "НИР" },
  { value: "onlain-pomosch", label: "Онлайн помощь" },
  { value: "otvety-na-bilety", label: "Ответы на билеты" },
  { value: "perevod", label: "Перевод с иностранного языка" },
  { value: "podbor-literatury", label: "Подбор литературы" },
  { value: "keisy", label: "Решение кейсов" },
  { value: "podgotovka-k-ekzamenu", label: "Подготовка к экзамену" },
  { value: "recenziya", label: "Рецензия" },
  { value: "sochinenie", label: "Сочинение" },
  { value: "statya", label: "Статья" },
  { value: "reshenie-testov", label: "Решение тестов" },
  { value: "chertezh", label: "Чертеж" },
  { value: "esse", label: "Эссе" },
  { value: "biznes-plan", label: "Бизнес-план" },
  { value: "magisterskaya-rabota", label: "Магистерская работа" },
  { value: "doktorskaya-dissertaciya", label: "Докторская диссертация" },
  { value: "kandidatskaya-dissertaciya", label: "Кандидатская диссертация" },
  { value: "drugoe", label: "Другое" },
];

export const typeOptionsInitMap = new Map([
  ["diplomnaya-rabota", "Дипломная работа"],
  ["vkr", "ВКР"],
  ["kursovaya-rabota", "Курсовая работа"],
  ["povyshenie-originalnosti", "Повышение оригинальности"],
  ["oformlenie-po-gost", "Оформление по ГОСТ"],
  ["referat", "Реферат"],
  ["doklad", "Доклад"],
  ["prezentaciya", "Презентация"],
  ["konsultaciya", "Консультация"],
  ["poisk-informacii", "Поиск информации"],
  ["otchet-po-praktike", "Отчет по практике"],
  ["programmirovanie", "Программирование"],
  ["kontrolnaya-rabota", "Контрольная работа"],
  ["laboratornaya-rabota", "Лабораторная работа"],
  ["reshenie-zadach", "Решение задач"],
  ["metodologicheskaya-instrukciya", "Методологическая инструкция"],
  ["monografiya", "Монография"],
  ["nir", "НИР"],
  ["onlain-pomosch", "Онлайн помощь"],
  ["otvety-na-bilety", "Ответы на билеты"],
  ["perevod", "Перевод с иностранного языка"],
  ["podbor-literatury", "Подбор литературы"],
  ["keisy", "Решение кейсов"],
  ["podgotovka-k-ekzamenu", "Подготовка к экзамену"],
  ["recenziya", "Рецензия"],
  ["sochinenie", "Сочинение"],
  ["statya", "Статья"],
  ["reshenie-testov", "Решение тестов"],
  ["chertezh", "Чертеж"],
  ["esse", "Эссе"],
  ["biznes-plan", "Бизнес-план"],
  ["magisterskaya-rabota", "Магистерская работа"],
  ["doktorskaya-dissertaciya", "Докторская диссертация"],
  ["kandidatskaya-dissertaciya", "Кандидатская диссертация"],
  ["drugoe", "Другое"],
]);

export const getServiceName = (slug: string) => {
  const name = typeOptionsInit.filter((item) => item.value === slug);
  if (name.length > 0) {
    return name[0].label;
  }

  return "Другое";
};

export const getProjectType = (slug: string) => {
  const result = typeOptionsOrder.get(slug);
  return result ? `Заказать ${result[1] === result[1].toLowerCase() ? result.toLowerCase() : result}` : "Оставить заявку";
};

export const getFilteredProjectType = (filter: string[]) => {
  return Array.from(typeOptionsOrder).filter(([key]) => filter.indexOf(key) <= -1);
};

export const isAntiplagiatVisible = (option: string) => {
  const valuesArrayToHide = [
    "konsultaciya",
    "kontrolnaya-rabota",
    "onlain-pomosch",
    "otvety-na-bilety",
    "otchet-po-praktike",
    "podbor-literatury",
    "podgotovka-k-ekzamenu",
    "poisk-informacii",
    "programmirovanie",
    "reshenie-testov",
    "oformlenie-po-gost",
    "chertezh",
    "reshenie-zadach",
  ];

  if (valuesArrayToHide.indexOf(option) > -1) {
    return false;
  }

  return true;
};

export const getInitValue = (option: string) => {
  const result = typeDynamicOrder.get(option);
  return result ? option : null;
};

export const antiPlagiarismOptions = [
  { value: "free", label: "Бесплатная" },
  { value: "paid", label: "Платная" },
];

export const typeOptionsOrder = new Map([
  ["diplomnaya-rabota", "Дипломную работу"],
  ["vkr", "ВКР"],
  ["biznes-plan", "Бизнес-план"],
  ["doklad", "Доклад"],
  ["doktorskaya-dissertaciya", "Докторскую диссертацию"],
  ["kandidatskaya-dissertaciya", "Кандидатскую диссертацию"],
  ["keisy", "Решение кейсов"],
  ["oformlenie-po-gost", "Оформление по ГОСТ"],
  ["konsultaciya", "Консультацию"],
  ["kontrolnaya-rabota", "Решение контрольной работы"],
  ["kursovaya-rabota", "Курсовую работу"],
  ["laboratornaya-rabota", "Лабораторную работу"],
  ["magisterskaya-rabota", "Магистерскую работу"],
  ["metodologicheskaya-instrukciya", "Методологическую инструкцию"],
  ["monografiya", "Монографию"],
  ["nir", "НИР"],
  ["onlain-pomosch", "Онлайн помощь"],
  ["otvety-na-bilety", "Ответы на билеты"],
  ["otchet-po-praktike", "Отчет по практике"],
  ["perevod", "Перевод с иностранного языка"],
  ["povyshenie-originalnosti", "Повышение оригинальности"],
  ["podbor-literatury", "Подбор литературы"],
  ["podgotovka-k-ekzamenu", "Подготовку к экзамену"],
  ["poisk-informacii", "Поиск информации"],
  ["prezentaciya", "Презентацию"],
  ["programmirovanie", "Помощь с программированием"],
  ["referat", "Реферат онлайн"],
  ["recenziya", "Рецензию"],
  ["sochinenie", "Сочинение"],
  ["statya", "Статью"],
  ["reshenie-testov", "Решение тестов"],
  ["chertezh", "Чертеж"],
  ["esse", "Эссе"],
  ["reshenie-zadach", "Решение задач"],
  ["drugoe", "Другое"],
  // ["novyi", "Работу"],
]);

export const typeDynamicOrder = new Map([
  ["diplomnaya-rabota", "Заказать помощь с написанием дипломной работы"],
  ["vkr", "Заказать помощь с ВКР"],
  ["biznes-plan", "Заказать помощь с составлением бизнес-план"],
  ["doklad", "Заказать помощь с написанием доклада"],
  ["doktorskaya-dissertaciya", "Заказать помощь с написанием докторской диссертации"],
  ["kandidatskaya-dissertaciya", "Заказать помощь с написанием кандидатской диссертации"],
  ["keisy", "Заказать помощь с решением кейсов"],
  ["oformlenie-po-gost", "Заказать оформление работы по ГОСТ"],
  ["konsultaciya", "Оставить заявку на онлайн консультацию"],
  ["kontrolnaya-rabota", "Заказать помощь с решением контрольной работы"],
  ["kursovaya-rabota", "Заказать помощь в написании курсовой работы"],
  ["laboratornaya-rabota", "Заказать помощь с выполнением лабораторной работы"],
  ["magisterskaya-rabota", "Заказать помощь с написанием магистерской работы"],
  ["metodologicheskaya-instrukciya", "Заказать помощь с составлением методологической инструкции"],
  ["monografiya", "Заказать помощь с написанием монографии"],
  ["nir", "Заказать помощь с составлением НИР"],
  ["onlain-pomosch", "Оставить заявку на онлайн помощь"],
  ["otvety-na-bilety", "Заказать помощь с решением билетов"],
  ["otchet-po-praktike", "Заказать помощь в написании отчета по практике"],
  ["perevod", "Заказать перевод с иностранного языка"],
  ["povyshenie-originalnosti", "Заказать повышение оригинальности"],
  ["podbor-literatury", "Заказать помощь с подбором литературы"],
  ["podgotovka-k-ekzamenu", "Заказать помощь с подготовкой к экзамену"],
  ["poisk-informacii", "Заказать помощь с поиском информации"],
  ["prezentaciya", "Заказать помощь с созданием презентации"],
  ["programmirovanie", "Заказать помощь с программированием"],
  ["referat", "Заказать реферат"],
  ["recenziya", "Заказать помощь с составлением рецензии"],
  ["sochinenie", "Заказать помощь в написании сочинения"],
  ["statya", "Заказать помощь с составлением статьи"],
  ["reshenie-testov", "Заказать решение тестов онлайн"],
  ["chertezh", "Заказать помощь с выполнением чертежа"],
  ["esse", "Заказать помощь в написании эссе"],
  ["reshenie-zadach", "Заказать решение задач"],
  ["drugoe", "Заказать помощь с работой на свою тему"],
  ["novyi", "Заказать помощь с работой онлайн"],
]);

export const getDynamicTitle = (option: string) => {
  const result = typeDynamicOrder.get(option);
  return result ?? "Заказать помощь с работой онлайн";
};

export const getServiceDescription = (option: string) => {
  const result = descriptionValueLabel.get(option);
  return result ?? "Сделать заказ работы";
};

export const descriptionValueLabel = new Map([
  [
    "diplomnaya-rabota",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить дипломную работу? “Безпересдач” -  мы оказываем помощь в написании дипломной работы на заказ.",
  ],
  [
    "vkr",
    "🚨 ВКР на заказ от 4990р 📍 Срок от 14 дней 👑 Предоплата 35% 🎁 Скидка на первый заказ 🔐 Гарантия уникальности 💼 Бесплатные доработки 💯 Сдай на отлично",
  ],
  [
    "biznes-plan",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить бизнес-план? “Безпересдач” -  мы оказываем помощь в написании бизнес-плана на заказ.",
  ],
  [
    "doklad",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить доклад? “Безпересдач” -  мы оказываем помощь в написании доклада на заказ.",
  ],
  [
    "doktorskaya-dissertaciya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить докторскую диссертацию? “Безпересдач” -  мы оказываем помощь в написании докторской диссертации на заказ.",
  ],
  [
    "kandidatskaya-dissertaciya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить кандидатскую диссертацию? “Безпересдач” -  мы оказываем помощь в написании кандидатской диссертации на заказ.",
  ],
  [
    "keisy",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить кейсы? “Безпересдач” -  мы оказываем помощь в написании кейсов на заказ.",
  ],
  [
    "konsultaciya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто заказать консультацию? “Безпересдач” -  мы оказываем помощь в консультировании на заказ.",
  ],
  [
    "kontrolnaya-rabota",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить контрольную работу? “Безпересдач” -  мы оказываем помощь в написании контрольной работы на заказ.",
  ],
  [
    "kursovaya-rabota",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить курсовую работу? “Безпересдач” -  мы оказываем помощь в написании курсовой работы на заказ.",
  ],
  [
    "laboratornaya-rabota",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить лабораторную работу? “Безпересдач” -  мы оказываем помощь в написании лабораторной работы на заказ.",
  ],
  [
    "magisterskaya-rabota",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить магистерскую работу? “Безпересдач” -  мы оказываем помощь в написании магистерской работы на заказ.",
  ],
  [
    "metodologicheskaya-instrukciya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить магистерскую инструкцию? “Безпересдач” -  мы оказываем помощь в написании магистерской инструкции на заказ.",
  ],
  [
    "monografiya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить монографию? “Безпересдач” -  мы оказываем помощь в написании монографии на заказ.",
  ],
  [
    "nir",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить научно-исследовательскую работу? “Безпересдач” -  мы оказываем помощь в написании НИР на заказ.",
  ],
  [
    "onlain-pomosch",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить работу? “Безпересдач” -  мы оказываем онлайн-помощь в решении студенческих задач на заказ.",
  ],
  [
    "otvety-na-bilety",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить ответы онлайн-билеты? “Безпересдач” -  мы оказываем помощь в решении онлайн-билетов на заказ.",
  ],
  [
    "otchet-po-praktike",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить отчет по практике? “Безпересдач” -  мы оказываем помощь в написании отчета по практике на заказ.",
  ],
  [
    "perevod",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить перевод с иностранного языка? “Безпересдач” -  мы оказываем помощь в переводе с иностранного языка на заказ.",
  ],
  [
    "povyshenie-originalnosti",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто повысить оригинальность со скрытыми символами? “Безпересдач” -  мы оказываем помощь в повышении оригинальности без использования скрытых символов на заказ.",
  ],

  [
    "oformlenie-po-gost",
    "🚨 Реферат на заказ 990р 📍 Срок от 1 дня 👑 Предоплата 35% 🎁 Скидка на первый заказ 🔐 Гарантия уникальности 💯 Сдай на отлично",
  ],
  [
    "podbor-literatury",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить подбор литературы? “Безпересдач” -  мы оказываем помощь в подборе литературы на заказ.",
  ],
  [
    "podgotovka-k-ekzamenu",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли с подготовкой к экзамену? “Безпересдач” -  мы оказываем помощь в подготовке и сдаче экзамена на заказ.",
  ],
  [
    "poisk-informacii",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли с поиском информации? “Безпересдач” -  мы оказываем помощь с поиском информации на заказ.",
  ],
  [
    "prezentaciya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить презентацию? “Безпересдач” -  мы оказываем помощь в создании презентации на заказ.",
  ],
  [
    "programmirovanie",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить задачу по программированию? “Безпересдач” -  мы оказываем помощь в решении задач по программированию на заказ.",
  ],
  [
    "referat",
    "🚨 Реферат на заказ от 590р 📍 Срок от 1 дня 👑 Предоплата 35% 🎁 Скидка на первый заказ 🔐 Гарантия уникальности 💼 Бесплатные доработки 💯 Сдай на отлично",
  ],
  [
    "recenziya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить рецензию? “Безпересдач” -  мы оказываем помощь в написании рецензии на заказ.",
  ],
  [
    "sochinenie",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить сочинение? “Безпересдач” -  мы оказываем помощь в написании сочинения на заказ.",
  ],
  [
    "statya",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить статью? “Безпересдач” -  мы оказываем помощь в написании статьи на заказ.",
  ],
  [
    "reshenie-testov",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто решили тесты? “Безпересдач” -  мы оказываем помощь в решении тестов на заказ.",
  ],
  [
    "chertezh",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто заказать чертеж? “Безпересдач” -  мы оказываем помощь в выполнении чертежа на заказ.",
  ],
  [
    "esse",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто купить эссе? “Безпересдач” -  мы оказываем помощь в написании эссе на заказ.",
  ],
  [
    "reshenie-zadach",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, а не просто решили задачу? “Безпересдач” -  мы оказываем помощь в решении и объяснении задач на заказ.",
  ],
  [
    "drugoe",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, но не знаешь с чем? “Безпересдач” -  мы оказываем помощь в подготовке и сдаче сессии и решение задач на заказ.",
  ],
  [
    "novyi",
    "Нужна помощь в сессии? Хочешь, чтобы тебе помогли, но не знаешь с чем? “Безпересдач” -  мы оказываем помощь в подготовке и сдаче сессии и решение задач на заказ.",
  ],
]);

export const getOrderServiceTerms = (slug: string) => {
  const result = orderServiceTerms.get(slug);
  return result ?? null;
};

const orderServiceTerms = new Map<string, { terms: OrderServiceTerms } | null>([
  [
    "diplomnaya-rabota",
    {
      terms: {
        pricePrefix: "от",
        price: "4990",
        timeFrame: "от 14 дней",
        priceDescription:
          "У нас можно заказать дипломную работу недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "vkr",
    {
      terms: {
        pricePrefix: "от",
        price: "4990",
        timeFrame: "от 14 дней",
        priceDescription: "У нас можно заказать ВКР недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "biznes-plan",
    {
      terms: {
        pricePrefix: "от",
        price: "6990",
        timeFrame: "от 7 дней",
        priceDescription:
          "У нас можно заказать бизнес-план недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "doklad",
    {
      terms: {
        pricePrefix: "от",
        price: "990",
        timeFrame: "от 1-2 дней",
        priceDescription:
          "У нас можно заказать доклад недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "doktorskaya-dissertaciya",
    {
      terms: {
        pricePrefix: "от",
        price: "49990",
        timeFrame: "от 4-5 месяцев",
        priceDescription:
          "У нас можно заказать докторскую диссертацию недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "kandidatskaya-dissertaciya",
    {
      terms: {
        pricePrefix: "от",
        price: "29990",
        timeFrame: "от 2-3 месяцев",
        priceDescription:
          "У нас можно заказать кандидатскую диссертацию недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "keisy",
    {
      terms: {
        pricePrefix: "от",
        price: "1990",
        timeFrame: "от 2-3 дней",
        priceDescription: "У нас можно заказать кейс недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "oformlenie-po-gost",
    {
      terms: {
        pricePrefix: "",
        price: "990",
        timeFrame: "1 день",
        priceDescription:
          "У нас можно заказать оформление по ГОСТ недорого. Цена является фиксированной вне зависимости от объема работы",
      },
    },
  ],
  [
    "konsultaciya",
    {
      terms: {
        pricePrefix: "от",
        price: "590",
        timeFrame: "от 1 часа",
        priceDescription:
          " Если необходимо обратиться к специалистам - вы можете заказать консультацию по учебе. Авторы предложат вам удобный вариант онлайн-встречи",
      },
    },
  ],
  [
    "kontrolnaya-rabota",
    {
      terms: {
        pricePrefix: "от",
        price: "190",
        timeFrame: "от 2-3 дней",
        priceDescription:
          "У нас можно заказать помощь с решением контрольной работы недорого. Мы можем предложить вам решение задач, а также онлайн-помощь во время сдачи контрольной",
      },
    },
  ],
  [
    "kursovaya-rabota",
    {
      terms: {
        pricePrefix: "от",
        price: "2990",
        timeFrame: "от 7 дней",
        priceDescription:
          "У нас можно заказать курсовую недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "laboratornaya-rabota",
    {
      terms: {
        pricePrefix: "от",
        price: "690",
        timeFrame: "от 1-2 дней",
        priceDescription:
          "У нас можно заказать лабораторную работу недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "magisterskaya-rabota",
    {
      terms: {
        pricePrefix: "от",
        price: "9990",
        timeFrame: "от 30 дней",
        priceDescription: "У нас можно заказать магистерскую. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "metodologicheskaya-instrukciya",
    {
      terms: {
        pricePrefix: "от",
        price: "1990",
        timeFrame: "от 2 дней",
        priceDescription:
          "У нас можно заказать методологическую инструкцию недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "monografiya",
    {
      terms: {
        pricePrefix: "от",
        price: "19990",
        timeFrame: "от 40 дней",
        priceDescription:
          "У нас можно заказать монографию недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "nir",
    {
      terms: {
        pricePrefix: "от",
        price: "3990",
        timeFrame: "от 14 дней",
        priceDescription:
          "У нас можно заказать научно-исследовательскую работу недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "onlain-pomosch",
    {
      terms: {
        pricePrefix: "от",
        price: "4990",
        timeFrame: "от 14 дней",
        priceDescription:
          " Вы можете заказать онлайн-помощь по любым вопросам, которые возникнут в ходе обучения, например: сдача зачета или экзамен, успешное закрытие сессия и т.д.",
      },
    },
  ],
  [
    "otvety-na-bilety",
    {
      terms: {
        pricePrefix: "от",
        price: "590",
        timeFrame: "от 1-2 дней",
        priceDescription:
          "У нас можно заказать подготовку ответов на билеты недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "otchet-po-praktike",
    {
      terms: {
        pricePrefix: "от",
        price: "1990",
        timeFrame: "от 5 дней",
        priceDescription:
          "У нас можно заказать отчет по практике недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "perevod",
    {
      terms: {
        pricePrefix: "от",
        price: "190",
        timeFrame: "от 1 часа",
        priceDescription: "У нас можно заказать перевод с иностранного языка недорого. Стоимость зависит от объема и срока сдачи",
      },
    },
  ],
  [
    "povyshenie-originalnosti",
    {
      terms: {
        pricePrefix: "от",
        price: "89",
        timeFrame: "от 1-2 дней",
        priceDescription: "У нас можно заказать повышение оригинальности недорого. Стоимость зависит от объема и срока сдачи",
      },
    },
  ],
  [
    "podbor-literatury",
    {
      terms: {
        pricePrefix: "от",
        price: "590",
        timeFrame: "от 2 дней",
        priceDescription:
          "У нас можно заказать подбор литературы недорого. Авторы подберут необходимый и актуальный список литературы для вашей работы быстро и в указанный срок",
      },
    },
  ],
  [
    "podgotovka-k-ekzamenu",
    {
      terms: {
        pricePrefix: "от",
        price: "990",
        timeFrame: "от 7 дней",
        priceDescription:
          "У нас можно заказать помощь в подготовке к экзамену недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "poisk-informacii",
    {
      terms: {
        pricePrefix: "от",
        price: "290",
        timeFrame: "от 1-2 дней",
        priceDescription:
          "У нас можно заказать помощь с поиском информации недорого. Авторы найдут источники, методические указания и все, что вам требуется.",
      },
    },
  ],
  [
    "prezentaciya",
    {
      terms: {
        pricePrefix: "от",
        price: "590",
        timeFrame: "от 2-3 дней",
        priceDescription:
          "У нас можно заказать презентацию недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "programmirovanie",
    {
      terms: {
        pricePrefix: "от",
        price: "490",
        timeFrame: "от 1-2 дней",
        priceDescription:
          "У нас можно заказать решение задач по программированию недорого. Стоимость зависит от сложности и срока сдачи",
      },
    },
  ],
  [
    "referat",
    {
      terms: {
        pricePrefix: "от",
        price: "590",
        timeFrame: "от 1-2 дней",
        priceDescription:
          "У нас можно заказать реферат недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "recenziya",
    {
      terms: {
        pricePrefix: "от",
        price: "590",
        timeFrame: "от 12 часов",
        priceDescription:
          "У нас можно заказать рецензию недорого. Наши авторы помогут написать рецензию на методическую статью, экспертизу, разработку",
      },
    },
  ],
  [
    "sochinenie",
    {
      terms: {
        pricePrefix: "от",
        price: "490",
        timeFrame: "от 4 часов",
        priceDescription: "У нас можно заказать сочинение недорого. Стоимость зависит от сложности и срока сдачи",
      },
    },
  ],
  [
    "statya",
    {
      terms: {
        pricePrefix: "от",
        price: "990",
        timeFrame: "от 3 дней",
        priceDescription:
          "У нас можно заказать научную статью недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "reshenie-testov",
    {
      terms: {
        pricePrefix: "от",
        price: "390",
        timeFrame: "от 1-2 дней",
        priceDescription: "У нас можно помощь в решении тестов недорого. Стоимость зависит от сложности и срока сдачи",
      },
    },
  ],
  [
    "chertezh",
    {
      terms: {
        pricePrefix: "от",
        price: "590",
        timeFrame: "от 4-5 дней",
        priceDescription:
          "У нас можно заказать чертеж недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  [
    "esse",
    {
      terms: {
        pricePrefix: "от",
        price: "390",
        timeFrame: "от 1-2 дней",
        priceDescription: "У нас можно заказать эссе недорого. Стоимость зависит от сложности и срока сдачи",
      },
    },
  ],
  [
    "reshenie-zadach",
    {
      terms: {
        pricePrefix: "от",
        price: "50",
        timeFrame: "от 1-2 дней",
        priceDescription:
          "У нас можно заказать помощь в решении задач недорого. Стоимость зависит от сложности, срока сдачи и методических рекомендаций",
      },
    },
  ],
  // [
  //   "drugoe",
  //   {
  //     terms: {
  //       pricePrefix: "от",
  //       price: "190",
  //       timeFrame: "от 14 дней",

  //       priceDescription:
  //         " Если вы не знаете, какой тип работы необходимо заказать - напишите нам! Мы гарантируем качественный профессиональный подход и высокое качество работы.",
  //     },
  //   },
  // ],
  // [
  //   "novyi",
  //   {
  //     terms: {
  //       pricePrefix: "от",
  //       price: "190",
  //       timeFrame: "от 14 дней",

  //       priceDescription:
  //         " Если вы не знаете, какой тип работы необходимо заказать - напишите нам! Мы гарантируем качественный профессиональный подход и высокое качество работы.",
  //     },
  //   },
  // ],
]);
