<template>
  <div class="layout">
    <header class="header">
      <nav class="navbar navbar-expand-lg navbar-dark mb-3">
          <div class="container-fluid">
            <a class="navbar-brand title" href="#">
              <span class="nanta">nanta</span>.<span class="dev">dev</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Blog</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projets
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item" href="#">Cosmos</a></li>
                    <li><a class="dropdown-item" href="#">Brika.shop</a></li>
                    <li><a class="dropdown-item" href="#">Lalaluce</a></li>
                    <li><a class="dropdown-item" href="#">Sexudection</a></li>
                    <li><a class="dropdown-item" href="#">Tripsit</a></li>
                    <li><a class="dropdown-item" href="#">PDFready</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
    </header>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style>

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

</style>
