<template>
  <Layout>
    <div class="row">
      <div class="col-6">
        <h1 class="fw-bold">Entreprendre des projets ensemble</h1>
        <p>Se lancer dans des projets innovants, originaux et open-source pour apporter quelque chose à ce monde grâce au <code>code</code>.</p>
      </div>
      <div class="col-6">
        <img src="/svg/Scenes01.svg" alt="presentation" />
      </div>
      <hr class="mt-3 mb-5">
      <div class="col-6">
        <img src="/svg/Scenes02.svg" alt="presentation" />
      </div>
      <div class="col-6">
        <h2 class="fw-bold">Collaborer avec les personnes concernées</h2>
        <p>Créer des projets autour de communautées ciblées, rendre service à un maximum de personnes. Répondre aux besoins de ces personnes par le <code>code</code>.</p>
      </div>
      <hr class="mt-3 mb-5">
      <h1 class="innovation text-end">Innovations?</h1>
      <p>
        Exploiter le maximum des nouvelles technologies web pour créer des applications riches et pratiques. Anticiper les besoins de l'utilisateur pour créer des interfaces adaptées
        et simples d'utilisation. <code>Simplifier le design pour mettre en avant le contenu et le rendre interactif.</code> Créer une intelligence autour de l'utilisation des applications pour
        s'adapter et évoluer vers des applications de nouvelle génération.
      </p>
      <hr class="mt-3 mb-5">
      <h1 class="innovation text-end">Collaborations?</h1>
      <p>
        Collaborer avec les personnes concernées par les projets pour mieux comprendre le besoin. Entreprendre avec l'aide de personnes autour de soi pour bâtir les nouveaux sites
        à l'image de notre génération. Utiliser les dernières technologies pour semer un projet qui impactera le monde. <code>Aider les autres en apprenant des personnes concernées par un projet</code>.
      </p>
      <hr class="mt-3 mb-5">
      <h1 class="innovation text-end">Compétences?</h1>
      <p>Angular</p>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style="width: 85%" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Express (Typescript)</p>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Ionic (Angular)</p>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Vue 2</p>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <p>Gridsome</p>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style="width: 55%" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
       <p>Adonis.js</p>
      <div class="progress mb-3">
        <div class="progress-bar" role="progressbar" style="width: 45%" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
      <hr class="mt-5 mb-5">
      <h1 class="innovation text-start mb-5">Projets</h1>
      <div class="projects row mb-5">
        <a href="/cosmos" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-purple">Cosmos</div></a>
        <a href="/brikashop" class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-orange">brika.shop</div></a>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-green">Lalaluce</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-red">Sexudection</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-blue">Tripsit</div></div>
        <div class="col-sm-12 col-md-6 col-lg-3 col-xl-3"><div class="bubble project-caribbean">PDFready</div></div>
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
  width: 100%;
  border-radius: 2rem;
}

.innovation {
  font-size: 2.5rem;
}

.projects > a {
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

</style>
