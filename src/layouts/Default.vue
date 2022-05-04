<template>
  <div class="layout" id="layout">
    <header class="header">
      <nav id="nav" class="navbar navbar-expand-lg navbar-light mb-3">
          <div class="container-fluid">
            <a class="navbar-brand title" href="/">
              <span class="nanta">NANTA</span>.<span class="dev">DEV</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/blog">
                    <i class="fa-solid fa-blog mr-5"></i>
                    <span class="px-2">Blog</span>
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-book"></i>
                    <span class="px-2">Projets</span>
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="/tripsit">Tripsit</a></li>
                    <li><a class="dropdown-item" href="/pdfready">PDFready</a></li>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="/contact">
                    <i class="fa-solid fa-address-card"></i>
                    <span class="px-2">Contact</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    <slot/>
    <hr>
    <div class="row mb-3">
      <div class="text-end"><span class="nanta">NANTA</span>.<span class="dev">DEV</span></div>
    </div>
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
    this.setTheme()
  },
  methods: {
    setTheme() {
      document.body.className = "light";
    }
  }
}
</script>

<style>

html, body {
  padding: 0;
  margin: 0;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding: 1rem;
}

</style>
