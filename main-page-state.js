const data = {
  blocks: [
    {
      type: "featured",
      articleId: null, // Як прыгатаваць мову ВКЛ?
      frozen: false
    },
    {
      type: "diary" // Караткевіч
    },
    {
      type: "latestArticles",
      articlesIds: [
        { id: 3, frozen: true }, // Джойс
        { id: null, frozen: false } // Літва!
      ]
    },
    {
      type: "tagsByTopic",
      topicSlug: "personalities",
      tagsIds: [1, 4, 5], // Боўі / Колас / Баршчэўскі
      style: "1-2"
    },
    {
      type: "articlesByTag3",
      tagId: 27, // XX стагоддзе
      articlesIds: [5, 6, 7] // Ольстэр / Дубоўка / Летапісы
    },
    {
      type: "articlesByTag2",
      tagId: 90, // XX стагоддзе
      articlesIds: [10, 18] // Кітабы / Душы
    },
    {
      type: "banner",
      banner: 0 // map.wir.by
    },
    {
      type: "tagsByTopic",
      topicSlug: "locations",
      tagsIds: [20, 21, 22], // ВКЛ / Міжзем’е / Галактыка
      style: "2-1"
    },
    {
      type: "articlesByBrand",
      tagId: 2, // НацМастацкі
      articlesIds: [38, 32] // Вітальды
    }
  ],
  data: {
    articles: [3, 5, 6, 7, 10, 18, 32, 38],
    latestArticles: [
      // 3 latest *published* articles are returned.
    ],
    tags: [1, 4, 5, 20, 21, 22],
    topics: [
      // always all are returned (with slugs and IDs)
    ],
    banners: [0]
  }
};
