---
title: "Workshop : Faire un site web static avec Sapper + UIkit"
path: /workshop-web-static-sapper-uikit
date: 2020-03-11
summary: "Créer un site vitrine en moins de 2 heures"
tags: [ 'Exercices', 'Javascript', 'Framework' ]
---

## Sommaire de l'article

1. Objectif du workshop
2. Initialiser un projet avec le framework Sapper (basé sur Svelte)
3. Préparer les assets et les librairies
4. Barre de navigation
5. Devanture
6. Proposition de valeur
7. Témoignages
8. Footer

## 1. Objectif du workshop

L'objectif du workshop est de créer un site vitrine moderne à l'aide de Sapper et d'UIkit en moins de 2 heures.
Nous utiliserons le framework Sapper pour créer le squelette du site et UIkit pour l'aspect visuel du site. Ce
workshop est destiné aux personnes souhaitant apprendre à développer rapidement et facilement un site
vitrine professionnel.

![Site vitrine rapidement](/assets/images/sapper-uikit.png "Workshop Sapper UIkit")

## 2. Initialiser un projet avec le framework Sapper (basé sur Svelte)

{% highlight shell %}
npx degit "sveltejs/sapper-template#webpack" workshop-sapper-uikit
npm install
npm run dev
{% endhighlight %}

Votre application est prête! Rendez-vous sur `localhost:3001` pour voir votre
application.

## 3. Préparer les assets et les librairies

Récupérez le contenu du dossier `/static` depuis le [repository GitHub](https://github.com/CharlieOno/workshop-sapper-uikit) et placez les dans le dossier `/static` (remplacez les fichiers existants).
Dans `/src/template.html` après les balises `<meta>` du `<head>`, copiez le code ci-dessous.

{% highlight html %}
<!-- FontAwesome -->
<link href="lib/fontawesome/css/all.min.css" rel="stylesheet">
<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css?family=Nunito:400,700&display=swap" rel="stylesheet">
<!-- UIkit -->
<link rel="stylesheet" href="lib/uikit/css/uikit.min.css" />
<script src="lib/uikit/js/uikit.min.js"></script>
<script src="lib/uikit/js/uikit-icons.min.js"></script>
{% endhighlight %}
    
## 4. Barre de navigation

Un composant `Nav` est déjà présent dans `/src/components`, nous allons le réutiliser pour créer la barre de
navigation de notre site. Nous allons nous aider de la documentation de UIKit pour créer une barre de navigation responsive (https://getuikit.com/docs/navbar).

{% highlight html %}
<div uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky">
    <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
            <a href="/" class="uk-navbar-item uk-logo nunito">Immeublify</a>
        </div>
        <div class="uk-navbar-right">
            <ul class="uk-navbar-nav">
                <li>
                    <a class="nunito" href="javacript:void(0)">Entreprise</a>
                    <div class="uk-navbar-dropdown">
                        <ul class="uk-nav uk-navbar-dropdown-nav nunito">
                            <li><a href="javacript:void(0)">Immeubles haut de gamme</a></li>
                            <li><a href="javacript:void(0)">Clients</a></li>
                            <li><a href="javacript:void(0)">Assurances</a></li>
                        </ul>
                    </div>
                </li>
                <li><a class="nunito" href="javacript:void(0)">Blog</a></li>
                <li><a class="nunito" href="javacript:void(0)">Support</a></li>
                <li>
                    <a class="nunito" href="javacript:void(0)">
                    	<span class="uk-button uk-button-primary">Demander un devis</span>
                	</a>
                </li>
            </ul>
        </div>
    </nav>
</div>
{% endhighlight %}
    
Puis dans les balises `<style>`, rajoutez ces règles CSS:

{% highlight css %}
.uk-navbar-container {
    max-width: 80em;
    margin: auto;
    background-color: white;
}
    
.uk-navbar-nav > li > a {
    text-transform: inherit;
}
{% endhighlight %}
    
`inherit` permet d'enlever une règle CSS établi précédemment, cela nous sert ici pour enlever les lettres majuscules que UIkit met par défaut sur les boutons de navigation.
    
A vous de jouer ! Faites en sorte que ce menu ci-dessous ne s'affiche uniquement sur les appareils de moins de 640px de large à la place du menu précédent (https://getuikit.com/docs/visibility).

{% highlight html %}
<ul class="uk-navbar-nav">
    <li>
        <a href="javacript:void(0)"><i class="fas fa-bars"></i></a>
        <div class="uk-navbar-dropdown">
            <ul class="uk-nav uk-navbar-dropdown-nav nunito">
                <li><a href="javacript:void(0)">Entreprise</a></li>
                <li><a href="javacript:void(0)">Blog</a></li>
                <li><a href="javacript:void(0)">Support</a></li>
                <li><a class="nunito" href="javacript:void(0)"><span class="uk-button uk-button-primary">Demander un devis</span></a></li>
            </ul>
        </div>
    </li>
</ul>
{% endhighlight %}
    
## 5. Devanture
    
Dans `src/index.svelte`, changez la balise `<title>` dans `<svelte:head>` pour changer le titre de la page. Ensuite,
créez un nouveau component `Storefront.svelte` dans le dossier `/src/components`. Pour l'inclure dans `index.svelte`, il suffit de déclarer une balise `<script>` et de l'importer de la même manière que dans `/src/_layout.svelte`. Il faudra créer une balise `<Storefront />` dans `/src/index.svelte` juste en dessous du `<svelte:head>`.

{% highlight html %}
<script>
	import Storefront from '../components/Storefront.svelte';
</script>

<svelte:head>
	<title>Immeublify - Vendez votre meilleur immeuble</title>
</svelte:head>

<Storefront />
{% endhighlight %}
    
Puis dans `/src/components/Storefront.svelte`:

{% highlight html %}
<style>
</style>

<div class="storefront-wrapper" uk-grid>
    <div class="cell uk-width-1-2">
        <!-- /assets/business.svg https://getuikit.com/docs/image -->
        <img data-src="" width="" height="" alt="" uk-img>
    </div>
    <div class="cell uk-width-1-2">
        <!-- https://getuikit.com/docs/heading -->
        <h1 class="uk-heading-medium">  </h1>

        <!-- https://getuikit.com/docs/text -->
        <div class="uk-text-lead"></div>

        <!-- https://getuikit.com/docs/form -->
        <form>
            <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Input">
            </div>
            <div class="uk-margin">
                <input class="uk-input" type="text" placeholder="Input">
            </div>
            <button class="uk-button uk-button-primary">Créer votre compte</button>
            <div class="uk-margin">
                <label><input class="uk-checkbox" type="checkbox"> J'accepte les conditions générales d'utilisation. </label>
            </div>
        </form>

    </div>
</div>
{% endhighlight %}
    
Vous devrez remplir les différentes `<div>` incomplètes grâce à la documentation de UIkit. Quand cette étape est finie, il faudra rendre ce component responsive grâce au `Width` component d'UIkit (https://getuikit.com/docs/width).
Pour centrer les élements verticalement, vous pouvez utiliser les classes suivantes (il faudra supprimer le `max-width` dans `/src/_layout.svelte`):

{% highlight css %}
.storefront-wrapper {
    height: calc(100vh - 80px);
    margin: 0 auto;
    max-width: 80em;
}

.storefront-wrapper .cell {
    position: relative;
    height: max-content;
    top: calc(50% - 263px);
}

@media (max-width: 960px) {
    .storefront-wrapper {
        margin-left: inherit;
    }
}
{% endhighlight %}
    
## 6. Proposition de valeur
    
Créez un component `ValueProposition` avec le contenu suivant:
    
{% highlight html %}
<style>
    .wrapper {
        background-color: rgb(27, 27, 27);
    }

    .uk-text-lead {
        max-width: 33em;
        margin: 0 auto;
        color: white;
    }

    h2 {
        font-weight: 700;
        text-align: center;
        color: white;
    }

    .value-wrapper {
        margin: 0 auto;
        max-width: 50em;
    }
</style>

<div class="wrapper uk-padding">
    <h2 class="nunito uk-margin-large-top">Ne cherchez pas plus loin!</h2>
    <div class="uk-text-lead uk-margin-medium-bottom">
        Avec Immeublify, vous avez 100% de chance de trouver l'immeuble ou le client idéal.
        Rejoignez-nous pour profiter aussi des services proposés par notre équipe pour faire prospérer
        vos transactions immobilières.
    </div>

    <div class="value-wrapper uk-margin-large-bottom" uk-grid>
        <div class="uk-width-1-3 uk-card uk-card-default">
            <i class="fas fa-shipping-fast"></i>
        </div>
        <div class="uk-width-1-3 uk-card uk-card-default">
            <i class="fas fa-shipping-fast"></i>
        </div>
        <div class="uk-width-1-3 uk-card uk-card-default">
            <i class="fas fa-shipping-fast"></i>
        </div>
    </div>
</div>
{% endhighlight %}

Vous placerez ce component dans `/src/index.svelte`. Grâce à la documentation de UIkit, vous devrez créer des cards espacées avec une icône faisant toute la largeur et ayant une description sous celles-ci (https://getuikit.com/docs/card).
    
Nous pouvons maintenant rajouter des animations qui vont enrichir l'élément qu'on vient de créer grâce aux composants `Scrollspy` (https://getuikit.com/docs/scrollspy) et `Animation` (https://getuikit.com/docs/animation).
Il suffit de rajouter `uk-scrollspy="cls:uk-animation-fade` aux cartes qu'on vient de créer.
    
Pour cloturer cette partie, faites 2 colonnes composées pour l'une d'une image et l'autre d'un texte avec un titre avec pour marges `20em` en haut et en bas. Vous pouvez vous inspirer de ce qui a été fait ou même de copier-coller du code existant.

## 7. Témoignages
    
Créez un component `Testimony` avec le contenu suivant :

{% highlight html %}
<style>
    .testimony-wrapper {
        margin-top: 10em;
        margin-bottom: 10em;
    }

    .panel-text {
        color: black;
    }

    .panel-title {
        color: black;
        font-weight: 700;
    }
</style>

<div class="testimony-wrapper uk-position-relative uk-visible-toggle" tabindex="-1" uk-slider="center: true">
    <ul class="uk-slider-items uk-grid">
        <li class="uk-width-3-4">
            <div class="uk-panel" uk-grid>
                <div class="uk-width-1-3">
                    <img src="assets/tonio.jpg" alt="Tonio">
                </div>
                <div class="uk-width-2-3 panel-text">
                    <h1 class="nunito panel-title">Tonio Gonzalez</h1>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ligula tellus, ultricies pretium luctus at, elementum vel sapien. Fusce consectetur consectetur urna in molestie. Donec diam felis, consectetur non magna vitae, rhoncus rutrum purus. Cras egestas tellus nec massa rhoncus, ut placerat nunc hendrerit. Morbi maximus auctor massa dapibus euismod. Sed luctus vitae magna in scelerisque. Mauris ut leo sed orci molestie molestie eu at urna. Curabitur tempus justo ut semper tempus.
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
{% endhighlight %}

Vous placerez ce component dans `/src/index.svelte`. C'est à vous de compléter ce module! Ajoutez les flèches suivant et précédent et des nouvelles slides (https://getuikit.com/docs/slider).
    
## 8. Footer

Créez un component `Footer` avec le contenu suivant :

{% highlight html %}
<div class="uk-section uk-section-muted">
    <div class="uk-container">
        <h3>Section</h3>
        <div class="uk-grid-match uk-child-width-1-3@m" uk-grid>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            </div>
        </div>
    </div>
</div>
{% endhighlight %}
    

Vous placerez ce component dans `/src/_layout.svelte`. Votre footer doit comporter les éléments suivants:
* Liens sociaux Twitter, Facebook, Instagram, LinkedIn
* "Copyright 2020 © Immeublify France - Tous droits réservés"
* Newsletter avec un input pour l'email et un bouton "Restez informé"
* Le plan du site
* Le titre du site