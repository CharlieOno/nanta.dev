import DefaultLayout from '~/layouts/Default.vue';

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout);
  Vue.component('Cosmos', DefaultLayout);

  head.meta.push({
    name: 'keywords',
    content: 'HTML,CSS,XML,JavaScript'
  })

  head.link.push({
    rel: 'stylesheet',
    href: '/css/bootstrap.min.css'
  });

  head.script.push({
    src: "https://kit.fontawesome.com/12c3018f5d.js"
  })

  head.link.push({
    rel: 'stylesheet',
    href: '/css/global.css'
  });

  head.script.push({
    src: '/js/bootstrap.bundle.min.js',
    body: true
  })
}
