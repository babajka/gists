const data = {
  blocks: [
    {
      type: "featured",
      article: null, // Як прыгатаваць мову ВКЛ?
      frozen: false
    },
    {
      type: "diary" // Караткевіч
    },
    {
      type: "latestArticles",
      articles: [
        { id: 3, frozen: true }, // Джойс
        { id: null, frozen: false } // Літва!
      ]
    },
    {
      type: "tagsByTopic",
      topic: 4, // personalities
      tags: [1, 4, 5], // Боўі / Колас / Баршчэўскі
      style: "1-2"
    },
    {
      type: "articlesByTag3",
      tag: 27, // XX стагоддзе
      articles: [5, 6, 7] // Ольстэр / Дубоўка / Летапісы
    },
    {
      type: "articlesByTag2",
      tag: 90, // XX стагоддзе
      articles: [10, 18] // Кітабы / Душы
    },
    {
      type: "banner",
      banner: 0 // map.wir.by
    },
    {
      type: "tagsByTopic",
      topic: 3, // locations
      tags: [20, 21, 22], // ВКЛ / Міжзем’е / Галактыка
      style: "2-1"
    },
    {
      type: "articlesByBrand",
      brand: 2, // НацМастацкі
      articles: [38, 32] // Вітальды
    }
  ],
  sidebar: [
    {
      type: "themes",
      tags: [88, 89, 90] // Архітэктура / Гісторыя / Кіно
    },
    {
      type: "personalities",
      tags: [91, 92, 93] // Купала / Караткевіч / Міцкевіч
    },
    {
      type: "times",
      tags: [94, 95, 96] // 1956 год / Сёння / У будучыні
    },
    {
      type: "locations",
      tags: [97, 20, 99] // Мінск / ВКЛ / Беларусь
    },
    {
      type: "brands",
      tags: [100, 101, 102] // НацМастацкі / Кніжная Шафа / Фестываль Моў
    },
    {
      type: "authors",
      tags: [103, 104, 105] // Бадзей / Анісімава / Барысевіч
    }
  ],
  data: {
    articles: [3, 5, 6, 7, 10, 18, 32, 38],
    latestArticles: [
      // 3 latest *published* articles are returned.
    ],
    tags: [1, 4, 5, 20, 21, 22, 88, 89, ..., 105],
    topics: [
      // always all are returned (with slugs and IDs)
    ],
    banners: [0]
  }
};
