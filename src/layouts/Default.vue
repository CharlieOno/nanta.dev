<template>
  <div class="layout" id="layout">
    <header class="header">
      <nav id="nav" class="navbar navbar-expand-lg navbar-dark mb-3">
          <div class="container-fluid">
            <a class="navbar-brand title" href="/">
              <span class="nanta">nanta</span>.<span class="dev">dev</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/blog">Blog</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projets
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/cosmos">Cosmos</a></li>
                    <li><a class="dropdown-item" href="/brikashop">Brika.shop</a></li>
                    <li><a class="dropdown-item" href="/lalaluce">Lalaluce</a></li>
                    <li><a class="dropdown-item" href="/sexudection">Sexudection</a></li>
                    <li><a class="dropdown-item" href="/tripsit">Tripsit</a></li>
                    <li><a class="dropdown-item" href="/pdfready">PDFready</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    <slot/>
    <hr>
    <div class="row mb-3">
      <div class="text-end"><span class="nanta">nanta</span>.<span class="dev">dev</span></div>
    </div>
    <a class="toggle-style" v-on:click="toggleTheme()">
      <svg v-if="theme === 'light'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
      <svg v-if="theme === 'dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </a>
     <a class="toggle-style" v-on:click="toggleTheme()" v-if="theme === dark">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
      </svg>
    </a>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
export default {
  data () {
    return {
      theme: ''
    }
  },
  mounted () {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    const defaultTheme = userPrefersDark ? 'dark' : 'light'
    const theme = localStorage.getItem('theme') || defaultTheme
    this.setTheme(theme)
  },
  methods: {
    toggleTheme () {
      console.log(this.theme);
      if (this.theme == 'dark') {
         this.theme = 'light';
      } else {
          this.theme = 'dark';
      }
      this.setTheme(this.theme);
    },
    setTheme (newTheme) {
      this.theme = newTheme
      console.log(document.body);
      if (this.theme === 'dark') {
         document.body.className = "light";
         document.getElementById('nav').className = "navbar navbar-expand-lg navbar-light mb-3"
      } else {
        document.body.className = "dark";
        document.getElementById('nav').className = "navbar navbar-expand-lg navbar-dark mb-3"
      }
      localStorage.setItem('theme', newTheme)
    }
  }
}
</script>
</script>

<style>

.toggle-style {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
}

html, body {
  padding: 0;
  margin: 0;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
