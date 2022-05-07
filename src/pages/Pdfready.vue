<template>
    <Layout>
        <div class="container-fluid">
            <h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-box" viewBox="0 0 16 16">
                    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
                </svg>
                PDFready (Express Typescript)
            </h1>
            <div class="row mt-3">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <p>
                        PDFready est un microservice qui utilise Express + Typescript pour générer 
                        des PDF à partir de différentes méthodes. Il y a 3 manières de créer un PDF 
                        à partir de ce microservice : html, page web ou bien une template 
                        personnalisée avec Mustache (web template system).
                    </p>
                    <hr>
                    <p>
                        Les utilisations de ce microservice sont multiples, vous pouvez créer 
                        des documents comme des factures, des CVs personnalisés et bien 
                        d'autres.
                    </p>
                    <hr>
                    <p>
                        L'implémentation de ce microservice est décrit directement sur le GitHub
                        et est facilement adaptable, vous pouvez étendre les fonctionnalités et la 
                        mise en place est rapide.
                    </p>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <a type="button" class="btn btn-light" href="https://github.com/CharlieOno/PDFready" target="_blank">
                        <img style="width: 32px;"  src="/png/github.png" alt="github"/>
                        <span class="px-2">Répertoire GitHub</span>
                    </a>
                </div>
            </div>
            <p class="mt-5 mb-5">

            </p>
        </div>
    </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'PDFready'
  }
}
</script>