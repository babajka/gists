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
  data: {
    articles: [3, 5, 6, 7, 10, 18, 32, 38], // + always 3 latest
    tags: [1, 4, 5, 20, 21, 22],
    brands: [2],
    topics: [3, 4],
    banners: [0]
  }
};
