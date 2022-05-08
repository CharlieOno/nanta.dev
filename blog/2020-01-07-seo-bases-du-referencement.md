---
title: "SEO : Bases du référencement"
path: /seo-bases-du-referencement
date: 2020-01-07
summary: "S'améliorer sur le SEO en apprenant quelques critères"
tags: [ 'Guide', 'Tutorial', 'SEO' ]
---

# SEO : Bases du référencement

---

## Sommaire de l'article

1. Critères de la réussite d'un référencement naturel
2. Optimisation technique d'un site web
3. Analyse sémantique
4. Écrire du contenu qualitatif
5. Avoir des backlinks
6. Outils SEO gratuits

## 1. Critères de la réussite d'un référencement naturel

Aujourd'hui, Google domine les parts de trafic généré et place donc
la majorité des sites sous l'influence de Google. Il est donc essentiel
de connaître les leviers qu'utilise Google pour référencer et classer les
sites web indexés par celui-ci. Le but du référencement naturel est de
créer du contenu pertinent et intéressant aussi bien pour les visiteurs que pour
les robots d'indexation. Il y a 4 critères principaux qui détermine la réussite
d'un référencement naturel:

* Un code optimisé pour les robots d'indexation
* Une analyse sémantique pour créer du contenu à forte valeur ajoutée
* Un contenu textuel de qualité
* Les backlinks

## 2. Optimisation technique d'un site web

L'optimisation technique pour le référencement naturel concerne l'infrastructure
du site web et va permettre aux robots d'indexation de mieux analyser et interpréter
le contenu qu'offre votre site web.

### La balise <head>

La balise <head> va comporter les balises <title> et <meta> qui sont deux type de balises
à ne pas sous-estimer dans l'optimisation SEO. Elles permettent de parler du contenu de la
page en question et se sont les premières informations que l'internaute va voir à propos
de votre page sur son moteur de recherche. C'est ce qui va en quelque sorte constituer la
vitrine de votre page sur les moteurs de recherche.

```html
    <head>
        <title>[Contenu] - [Nom du site]</title>
        <meta name="description" content="[Phrase 1]. [Phrase 2]." />
        <meta http-equiv="content-language" content="fr" />
        <meta http-equiv="Content- Type"content="text/html; charset=iso-8859-1" />
    </head>
```

Les conseils à suivre pour ces balises :
* La balise titre et meta doivent être en adéquation avec le contenu de la page.
* La titre doit comporter entre 50 et 65 charactères dont 7 à 10 mots descriptifs.
* Il est nécessaire de faire une analyse sémantique pour bien rédiger le contenu de ces balises.
* La meta description doit comporter entre 150 et 165 charactères.
* Faire une ou deux phrases avec des verbes d'actions dans la meta description.
* Un titre et une meta description unique par page.
* La balise meta keyword n'a pas d'importance.
* On utilise un tiret pour séparer différentes parties d'un titre.

### La balise <body>

La structure de vos pages est importante car elle permet au visiteur de savoir de quoi parle
la page et aux robots de mieux cerner le sujet et la pertinence de celui-ci. Dans cette partie,
je vais vous donner 2 exemples de structure de page et des conseils pour les robots d'indexation.

```html
    <body>
        <h1>[Titre]</h1>
        <h2>[Chapô descriptif]</h2>
        <h3>[Sous-titre]</h3>
        <p>[Contenu]</p>
    </body>
```

```html
    <body>
        <h1>[Titre]</h1>
        <h2>[Sous-titre]</h2>
        <p>[Contenu]</p>
    </body>
```

Les conseils à suivre pour le robot d'indexation :
* Vos images doivent avoir un attribut alt avec des mots-clés.
* Utilisez des mots-clés dans le nom de vos images.
* Les balises <strong> et <em> apportent un léger bénéfice aux mots-clés qui y sont contenus.
* Vos pages doivent comporter des liens internes (vers une page de votre site) et externes (vers une page d'autres sites).
* Le texte d'un lien doit décrire le contenu de la page cible.
* Les robots accordent plus de poids au contenu éditorial de la page et donc moins aux parties dédiées à la navigation et au footer.
* Votre contenu devrait contenir 3 à 8 liens externes.

### Autres critères d'optimisation technique

Il existe d'autres critères qui vont avoir un poids dans le référencement naturel d'une page. Ils sont
plus subtils mais non pas moins important.

Autres critères qui influencent le référencement naturel : 
* La présence de mots-clés dans le domaine.
* La proximité d'un mot-clé avec le domaine dans l'adresse URL.
* Vos pages doivent être accessibles en 3 clics depuis la page d'accueil.
* Le temps d'affichage d'une page.
* Être en protocole HTTPS.
* Avoir un site compatible mobile.
* Avoir un fichier robots.txt
* Avoir un sitemap XML contenant que les pages importantes
* Avoir un fil d'ariane sur sa page

## 3. Analyse sémantique

L'analyse sémantique est une préparation à l'écriture du contenu. C'est grâce à l'analyse
sémantique que vous déterminerez sur quels mots-clés vous vous positionnerez et quelle sera
la requête principale de votre page.

### Définir la requête principale et le champs lexical

Il est important de déterminer une requête principale (RP) par page car c'est la requête pour
laquelle nous voulons voir notre page apparaître sur Google. Par exemple, si le site web
propose de l'hébergement web, il est intéressant d'optimiser une page avec la requête
principale suivante : hébergement web. C'est le mot-clé principal que l'internaute
tapera sur son moteur de recherche pour arriver sur votre page.

Ensuite, nous définierons un champs lexical (CL) associé au mot-clé. Pour la requête principale
hébergement web, nous pourrions avoir : domaine, serveur dédié, cloud, internet. Ce sont des
termes qui ont un lien pertinent avec notre requête principale et les utiliser va permettre
aux robots ainsi qu'aux visiteurs de mieux comprendre de quoi parle votre page. Alyze est un
outil qui permet de générer un champ lexical à partir d'une requête principale et de générer
des expressions complémentaires.

### Analyse sémantique & optimisation technique

Si l'analyse sémantique est une préparation à l'écriture du contenu, elle est aussi étroitement
lié à l'optimisation technique car la présence de la requête principale et des champs lexicaux
dans certaines balises vont jouer une importance dans le référencement naturel. Le but est de
répartir de manière équilibrée et optimisée la requête principale ainsi que le champs lexical
dans les différentes parties du contenu :

* Une occurence de la RP au début de la balise <title>.
* Une occurence de la RP dans la balise <meta> description.
* Une occurence de la RP au début de la balise <h1>.
* Une occurence de la RP et les mots du champs lexical dans la balise <h2>.
* Une occurence de la RP dans la balise <h3>.
* Une occurence de la RP dans le premier paragraphe du contenu.
* Une occurence de la RP tout les 100 mots dans le contenu.
* Diverses formes de la RP et des mots du CL dans le contenu.
* Une occurence de la RP, un mot du CL ou des termes intéressants parlant du sujet dans des balises <strong> tout les 100 mots.

## 4. Écrire du contenu qualitatif

La valeur qualitative du contenu éditorial est plus important que de démontrer la pertinence
de celui-ci aux robots car on écrit d'abord du contenu pour les internautes avant d'en faire la
promotion aux robots. De plus, avoir un contenu de qualité augmente nos chances que le site grimpe
en popularité et par conséquent que des liens entrants (backlink) se forment.

### Le contenu éditorial

Le contenu éditorial d'une page doit contenir au moins 200 mots sur un thème choisi. Le contenu doit
répondre aux besoins des internautes, il est donc essentiel de multiplier les explications, avoir un
vocabulaire riche et de répondre le plus possible au QQOQCCP : "Qui?", "Quoi?", "Où?", "Quand?", "Comment?",
"Combien?", "Pourquoi?". L'objectif est d'écrire du contenu de qualité et écrire du contenu unique et
intéressant est synonyme de contenu de qualité.

D'autre part, les informations importantes devraient être mentionnées au début du contenu éditorial pour
finir sur les détails moins intéressants. Un contenu à valeur ajoutée peut contenir des phrases à l'impératif, utiliser
la voix active ou bien poser des questions, dans le but de rendre l'internaute plus attentif au contenu qui lui
est proposé. Un contenu composé d'éléments attractifs à lire est aussi un bon moyen de le rendre plus attentif, par exemple
on peut proposer à l'internaute :

* des listes à puces
* des infographies uniques
* des images
* des comparatifs
* des prises de position
* des évaluations
* des tutoriels
* des vidéos

De plus, le fait d'avoir des boutons de partage dans vos contenus permettent à l'internaute de
facilement partager le contenu pour susciter l'action de l'internaute. Avoir un contenu engageant
est donc une manière de faire parler de son site et gagner en popularité. C'est aussi une manière
de gagner la confiance des internautes.

## 5. Avoir des backlinks

Un backlink est un lien entrant vers la page concernée qu'il provienne d'un site web externe
ou d'une page interne. Aux yeux de Google, plus une page possède de backlinks de qualité
(nous reviendrons sur l'aspect qualitatif d'un backlink) plus celle-ci est jugée pertinente.
De plus, nous savons que Google augmente le référencement d'une page si elle juge que celle-ci est pertinente. 
C'est donc pour cette raison qu'il est essentiel d'élaborer une stratégie de netlinking pour
générer de nombreux backlinks qualitatifs afin de booster son référencement naturel.

### La qualité des backlink

Un backlink pourra être considéré comme qualitatif si :
* Il est positionné au coeur du contenu éditorial de la page source.
* Il doit provenir d'un site traitant de thématiques similaires.
* Il est pertinent dans le contenu de la page source.
* Le texte du lien entrant est contient un mot-clé. 

### Exemple de stratégie de netlinking

Il existe différentes techniques qui vont vous permettre d'obtenir des backlinks. L'utilisation
de diverses techniques vous permettront d'élaborer une stratégie de netlinking, cependant toutes
les techniques comportent leur lot d'avantages et d'inconvénients. Il sera donc judicieux d'utiliser
une technique qui vous sera profitable car un backlink peut augmenter votre indice de pertinence comme
il peut réduire votre indice de pertinence.

#### Un contenu de qualité

Un contenu de qualité permet de faire parler de lui et donc générer des liens de manière naturel. Cependant,
c'est une méthode qui demande beaucoup de travail au niveau de la rédaction, qu'il faut mettre à jour régulièrement
et qui demande donc beaucoup de patience et de rigueur. Il est recommandé d'utiliser cette technique couplé à 
d'autres car cette technique ne suffit pas à elle-même.

#### Guest blogging

La technique consiste à écrire un contenu de qualité sur un blog traitant des mêmes thématiques en échange
d'un lien vers votre site. C'est une stratégie gagnante pour les deux parties car vous aurez un backlink
de qualité et le blog en question aura un article avec du contenu de qualité.

#### Les réseaux sociaux

Inciter les visiteurs à partager votre contenu sur Facebook, Twitter, Google+ et YouTube est un levier important
que vous devez envisager dans votre stratégie de netlinking. Le but est de rendre viral votre contenu afin de
générer du trafic et des signaux sociaux, c'est-à-dire des liens entrant émanant d'un réseau social.

#### Contenus libres de droit

Proposer du contenu libre de droit sur votre site est un moyen d'obtenir des backlinks. Il suffit de proposer
des images et des vidéos par exemple puis rechercher la présence de ces contenus sur d'autres sites pour
contacter le webmaster pour avoir un backlink. Cette technique marche aussi pour tout contenu que vous proposez
qui est utilisé par un autre site web.

## 6. Outils SEO gratuits

Beaucoup d'outils permettent d'assurer son référencement naturel sur plusieurs aspects. On remarquera
que les outils les plus performants sont payants mais une partie de ces outils SEO sont gratuits et sont
utilisés par des professionnels. Dans cette partie, je vous donnerai une liste d'outils gratuits utilisables
classés par catégories.

### Mots-clés

* [Keyword Tool](https://keywordtool.io/), recherche de mots-clés
* [Alyze](https://alyze.info/), analyse, associations et suggestions de mots-clés
* [Google Trends](https://trends.google.com/trends/?geo=US), analyse des tendances Google
* [Answer the public](https://answerthepublic.com/), recherche de requête de longue traine 
* [1.fr](https://1.fr), recherche de champs lexical pour enrichir vos pages
  
### Google

* [Google Search Console](https://search.google.com/search-console/about?hl=fr), outil de suivi du référencement naturel de son site web
* [Google Analytics](https://marketingplatform.google.com/intl/fr/about/analytics/), outil d'analyse d'audience de son site web
* [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/), outil d'analyse de vitesse de chargement par Google
∏
### Audit

* [Pingdom](https://tools.pingdom.com/), outil d'audit de vitesse de chargement
* [Screaming Frog](https://www.screamingfrog.co.uk/), crawler avec rapports détaillés pour chaque page
* [Outiref](https://www.outiref.fr/), outil d'audit SEO