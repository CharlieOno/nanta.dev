<template>
  <Layout>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12">
        <div class="terminal-header">
          <div class="dot-red mx-1"></div>
          <div class="dot-orange mx-1"></div>
          <div class="dot-green mx-1"></div>
        </div>
        <div class="terminal">
            <div class="content">
              <h1 class="fw-bold" style="color: #F8F1FF; font-size: 1.5rem;">$> Créer, innover, bâtir l'internet de demain</h1>
              <p>Se lancer dans des projets innovants, originaux et open-source pour apporter quelque chose à ce monde grâce au <code>code</code>.</p>
            </div>
        </div>
      </div>
      <div class="col-sm-12 col-md-8 col-lg-7 col-xl-6 mt-5">
        <h2 class="fw-bold">Qui suis-je?</h2>
        <p>
          Je suis une développeuse web full-stack travaillant sur divers projets informatiques de manière autonome guidé par <code>ma passion pour l'informatique et le code en général</code>.
        </p>
        <hr/>
        <p>
          Curieuse de tout, je veux en savoir plus sur le monde à travers les technologies qui évoluent au fur et à mesure des années.
        </p>
        <hr/>
        <p>
          Mon objectif est de pouvoir créer une future entreprise où je pourrais concrétiser mes projets. L'innovation est une notion importante pour moi. <code>Innover, créer sont les clés pour pouvoir bâtir l'internet de demain.</code>
        </p>
      </div>
      <div class="col-md-4 col-lg-5 col-xl-6 mb-3 d-none d-md-block mt-5">
        <img  class="w-100" src="/jpg/work.jpg" alt="working-girl" />
      </div>

      <div class="mb-5"></div>
      <h2 class="fw-bold text-end mb-3">Créativité</h2>
      <p>
        Mes idées fusent et les projets que j'ai se multiplient, j'ai besoin d'exprimer ma 
        créativité autant sur des projets informatiques que graphiques. J'ai pour passion 
        de créer des NFTs que je propoPse sur <a href="https://opensea.io/daomon" target="_blank">mon espace OpenSea</a>
        et je souhaite le lier à un projet informatique derrière pour mettre en avant la création d'une gallerie
        fait par mes créations et créer une communauté autour de ces oeuvres.
      </p>
      <h2 class="fw-bold text-end mb-3">Parcours</h2>
      <p>
        Après 3 années en cursus PGE (Programme Grande Ecole) à EPITECH, je finis mes études en cursus MSc Pro dans la même école.
      </p>  
      <hr/>
      <p>
        Je suis actuellement en deuxième année de master en management des systèmes d'informations, en alternance dans une start-up qui propose une solution B2B2C pour louer des véhicules en tant que CEO.
      </p>
      <hr/>
      <p>
        Durant mes années d'études, j'ai pu faire des stages qui m'ont apprit les fondamentaux du développement web et j'en ai fais ma spécialité. Désormais, je m'intéresse à l'UX et le Web Design, à la sécurité web et au management.
      </p>  
      <h2 class="fw-bold text-end mb-4">Compétences</h2>
      <div class="projects row">
        <div href="/cosmos" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-purple">Angular</div></div>
        <div href="/brikashop" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-purple">Vue</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-purple">Gridsome</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-purple">Ionic</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-blue">Typescript</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-blue">JavaScript</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-green">Express</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-green">Fiber</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-green">NodeJS</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-red">Ghost</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-caribbean">Bootstrap</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-caribbean">Bulma</div></div>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Présentation'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

img {
  border-radius: 2rem;
}

.innovation {
  font-size: 1.5rem;
}

.projects > div, .projects > a {
  margin-bottom: 2rem;
  text-decoration: none;
}

.project-red {
  background: #D72638;
  color: white;
}

.project-blue {
  background: #3F88C5;
  color: white;
}

.project-orange {
  background: #F49D37;
  color: white
}

.project-purple {
  background: #856084;
  color: white;
}

.project-green {
  background: #0EAD69;
  color: white;
}

.project-caribbean {
  background: #3BCEAC;
  color: white;
}

.terminal {
  background-color: #171738;
  color: #F8F1FF;
  border-radius: 0rem 0rem 1rem 1rem;
  padding: 1rem;
}

.terminal-header {
  background-color: #d2d2d2;
  padding: 1rem;
  border-radius: 1rem 1rem 0rem 0rem;
}

.dot-green {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #0EAD69;
  display: inline-block;
}

.dot-red {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #D72638;
  display: inline-block;
}

.dot-orange {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #F49D37;
  display: inline-block;
}

</style>
