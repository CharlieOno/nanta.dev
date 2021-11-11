<template>
    <Layout>
        <article>
        <h1 class="text-bold"># {{ $page.post.title }} </h1>
        <hr>
        <div>
            <g-link class="article-title"
                v-for="tag in $page.post.tags"
                :to="tag.path"
                :key="tag.id">
            #{{ tag.title }}
            </g-link>
        </div>
        <p>Posté le {{ $page.post.date }}</p>
        <hr>

        <div class="markdown-body mb-8" id="article-area" v-html="$page.post.content" />
        </article>
    </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
  export default {
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style>

    h1, h2, h3, h4, h5 {
        color: #43ceff;
    }

    h2 {
        font-weight: bolder;
        margin-top: 1.5rem;
    }

    pre {
        padding: 1rem;
        background: #0c1622;
    }

    article {
        margin-bottom: 2rem;
        background: #172433;
        padding: 1rem;
        border-radius: 1rem;
    }

</style>