---
title: "Obtenir une application native à partir d'une page web"
path: /obtenir-application-native-a-partir-page-web
date: 2019-12-21
summary: "Obtenir une application compatible sur Linux/Windows/Mac à partir d'une page web"
tags: [ 'Tutorial', 'Hack', 'Tool' ]
---

# Obtenir une application native à partir d'une page web

---

## Sommaire de l'article

1. Obtenir une application native à partir d'une page web
2. Exploiter la variable d'environnement PATH sur Linux
3. Créer un fichier desktop pour votre application native sur Linux

## 1. Obtenir une application native à partir d'une page web

Pour installer Nativefier, nous allons utiliser le paquet npm, si celui-ci
n'est pas installé sur votre machine nous allons l'installer avec cette commande:

```shell
sudo apt install npm
```

puis installer Nativefier via npm:

```shell
sudo npm install -g nativefier
```

Dans cet article, nous allons voir comment rendre l'application Messenger de
Facebook en application native. Nativefier va créer une template paramétrée
pour être utilisée avec Electron Packager et ainsi générer une application
native en électron. Pour obtenir davantage d'informations sur Nativefier,
rendez-vous sur [la page GitHub du projet](https://github.com/jiahaog/nativefier).

Pour l'exemple nous allons utiliser nativefier en spécifiant un nom et une URL.

```shell
nativefier --name Messenger https://www.messenger.com/
```

Dans le dossier qui a été généré, vous trouverez un fichier éxécutable "messenger"
qui permettra de lancer l'application native. L'application est prête à être
lancé.

```shell
cd messenger-linux-x64/ && ./messenger
```

## 2. Exploiter la variable d'environnement PATH sur Linux

[La variable d'environnement PATH](https://www.cs.purdue.edu/homes/bb/cs348/www-S08/unix_path.html)
sert à spécifier un chemin vers des programmes. Au lieu d'éxécuter un programme en utilisant:

```shell
~/NATIVEAPP/messenger
```

Vous pourrez l'éxécuter en utilisant:

```shell
messenger
```

Tout d'abord nous allons créer un dossier "NATIVEAPP" où nous pourrons mettre
toutes nos applications natives et déplacer le dossier de Messenger dans celui-ci.

```shell
mkdir ~/NATIVEAPP
mv messenger-linux-x64/ ~/NATIVEAPP/
```

Nous allons donc spécifier un nouveau chemin dans le PATH pour pouvoir éxécuter
tout les programmes contenu dans le dossier "NATIVEAPP" grâce à la commande
export qui va permettre de pouvoir attribuer une valeur à une variable d'environnement.
En ce qui concerne `$PATH`, il s'agit de la valeur de la variable PATH. En spécifiant
`$PATH` puis `:~/NATIVEAPP`, on ajoute un nouveau chemin parmis les chemins existants.
Pour voir les PATH déjà existants il suffit de rentrer la commande `env | grep PATH`.

```shell
export PATH=$PATH:~/NATIVEAPP
```

Ensuite nous allons créer un [lien symbolique](https://doc.ubuntu-fr.org/lien_physique_et_symbolique)
dans le dossier "NATIVEAPP" et le lier à l'éxécutable messenger. Cela permettra
d'éxécuter Messenger en éxécutant la commande `messenger`.

```shell
cd ~/NATIVEAPP
ln -s messenger-linux-x64/messenger messenger
```

## 3. Créer un fichier desktop pour votre application native sur Linux

Pour créer une nouvelle entrée pour le menu GNOME sur Linux, il faudra
créer un fichier avec l'extension .desktop dans `~/.local/share/applications`.
Dans cet exemple nous allons utiliser l'éditeur de texte emacs mais vous pouvez
utiliser n'importe quel éditeur de texte.

```shell
cd ~/.local/share/applications/
touch messenger.desktop
emacs -nw messenger.desktop
```

Puis rentrer les informations suivantes dans le fichier messenger.desktop:

```shell
[Desktop Entry]
Type=Application
Encoding=UTF-8
Name=Messenger
Comment=A sample application
Exec=/home/charlieono/NATIVEAPP/messenger
Icon=/home/charlieono/NATIVEAPP/messenger-linux-x64/resources/app/icon.png
Terminal=false
```

Vous devez changer `/home/charlieono/` par votre utilisateur. Pour savoir
ce par quoi vous devez changer entrez la commande:

```shell
echo $HOME/
```

ou la commande:

```shell
echo /home/$USER/
```

Vous pouvez maintenant éxécuter messenger depuis le menu GNOME.