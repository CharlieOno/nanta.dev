<template>
    <Layout>
        <article v-for="post in $page.posts.edges" :key="post.id" >
          <h2><g-link  class="article-title" :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
          <p>{{ post.node.summary }}</p>
          <hr>
        </article>

        <Pager :info="$page.posts.pageInfo"/>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 10, page: $page) @paginate {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        summary
        path
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  },
  metaInfo: {
    title: 'Mes articles'
  },
}
</script>

<style>

    h2 {
        font-size: 1.5rem !important;
    }

    article {
        padding: 1rem;
        border-radius: 1rem;
    }

</style>