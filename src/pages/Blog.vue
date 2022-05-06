<template>
    <Layout>
        <article class="mb-3" v-for="post in $page.posts.edges" :key="post.id" >
          <h2><g-link  class="article-title" :to="post.node.path" rel="bookmark">{{ post.node.title }}</g-link></h2>
          <p>{{ post.node.summary }}</p>
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
    title: 'Blog'
  },
}
</script>

<style>

    h2 {
        font-size: 1.25rem !important;
    }

    article {
        border-radius: 1rem;
    }

</style>