---
title: "Workshop : Créer un site web optimisé en SEO"
path: /workshop-site-web-seo
date: 2020-03-11
summary: "Créer un site vitrine en moins de 2 heures"
tags: [ 'Exercices', 'Javascript', 'SEO' ]
---

## Sommaire de l'article

1. Préparer le projet
2. Déployer le projet sur zeit.co
3. Optimisation SEO simple d'une page web
4. Audit SEO avec des outils gratuits

## 1. Préparer le projet

Dans cette première partie, nous allons récupérer un site créé avec Sapper pour pouvoir faire un exercice d'optimisation SEO.

```shell
git clone git@github.com:CharlieOno/workshop-sapper-uikit.git
mkdir workshop-seo
cp -R workshop-sapper-uikit/ workshop-seo/
cd workshop-seo/
```

__FACULTATIF__ Ensuite, nous allons créer un repository sur GitHub. Pour cela, rendez-vous sur GitHub, connectez-vous sur votre compte et cliquez
sur le bouton `+` en haut à droite de l'écran, un bouton `New repository` est proposé. Dans votre terminal, allez dans votre dossier `workshop-seo` et initialisez votre repository.

```shell
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:<NOM D\'UTILISATEUR>/<NOM DU REPO>.git
git push -u origin master
```

Vous devez remplacer le nom d'utilisateur et le nom du repository par les vôtres. Néanmoins, si vous ne savez pas par quoi il faut
remplacer ces champs, référez-vous à la page GitHub de votre projet.

![GitHub instructions](/assets/images/github-instructions.png)

## 2. Déployer le projet sur zeit.co

[zeit.co](https://zeit.co/) est un site qui vous permet de déployer vos projets d'une manière similaire que [Heroku](https://www.heroku.com/). Vous pouvez déployer gratuitement des sites web dit statiques et très facilement grâce au [CLI](https://zeit.co/download) proposé par zeit.co.

```shell
npm i -g now
```

Il suffira de se rendre dans le dossier du projet à déployer et entrer la commande suivante:

```shell
now
```

L'autre méthode est de ne pas utiliser le CLI et déployer directement votre repository GitHub depuis le dashboard.
Rendez-vous sur le dashboard de zeit.co en vous connectant avec votre compte GitHub et cliquez sur `Import Project`.

![Import project zeit.co](/assets/images/import-project-zeit.png)

## 3. Optimisation SEO simple d'une page web

Il est important de définir une requête principale ou en d'autres termes, ce que l'utilisateur devrait taper sur Google pour tomber
sur votre page car vous allez construire votre contenu autour de cette requête. Dans le cas de ce workshop il s'agit d'un service immobilier, allez à l'essentiel, __qu'est-ce que vous taperez sur Google pour tomber sur cette page?__

Les différents points que vous devriez suivre pour bien optimiser simplement votre page sont dans [l'article que j'ai
écris à propos de la SEO](/seo/basics/webdev/google/2020/01/07/seo-bases-du-referencement.html) mais libre à vous de faire vos recherches pour voir si vous pouvez obtenir d'avantages de conseils. Il serait
judicieux d'utiliser des outils pour les mots-clés ou pour trouver des synonymes de certains mots afin d'enrichir le contenu.

Les points importants:
* Balise `<title>`
* Balise `<meta>` description
* Un contenu structuré par des balises H1, H2 et H3
* Un choix de mots-clés ou expressions qualitatif
* Liens internes et externes

## 4. Audit SEO avec des outils gratuits

Vous retrouverez la majorité des outils gratuits que j'utilise dans [mon article concernant la SEO](/seo/basics/webdev/google/2020/01/07/seo-bases-du-referencement.html). Les outils pour les
mots-clés vous seront très utile pour créer un contenu qualitatif et dans le cadre du workshop nous utiliserons [un outil d'audit
gratuit proposé par Vu du Web](https://www.vu-du-web.com/audit-seo-gratuit/) pour nous donner un score pour effectuer une auto-évaluation.

![Vuduweb audit](/assets/images/vuduweb-audit.png)