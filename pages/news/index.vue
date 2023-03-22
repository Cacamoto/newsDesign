<script setup>
const articles = useArticles();
const rngArticle = useRandomArticle();
const rngArticle2 = useRandomArticle2();
const allArticles = useAllArticles();

const { data } = await useFetch(
  "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=uLdJAsHnJIQZiVxdmpg4XWlbbAB1wr6q",
  {
    onResponse({ response }) {
      articles.value = response._data.results;
      const filterArticler = () => {
        const filtered = articles.value.filter((article) => {
          return article.section !== "";
        });
        allArticles.value = filtered;
      };

      const randomArticle = () => {
        const random = Math.floor(Math.random() * articles.value.length);
        if (randomArticle.title === "") {
          randomArticle();
        } else {
          return (rngArticle.value = articles.value[random]);
        }
      };
      const randomArticle2 = () => {
        const random = Math.floor(Math.random() * articles.value.length);
        if (randomArticle2.title === "") {
          randomArticle2();
        } else {
          return (rngArticle2.value = articles.value[random]);
        }
      };
      randomArticle();
      randomArticle2();
      randomArticle();
      filterArticler();
    },
  }
);

const pageTitle = defineProps({
  pageTitle: {
    type: String,
  },
});
</script>

<template>
  <PageTitle pageTitle="Latest News" />
  <NewsMenu />
  <NewsContent />
</template>
