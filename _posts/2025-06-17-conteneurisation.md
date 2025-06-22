---
title:  "Conteneurisation"
date:   2025-06-17 12:34:40 +0200
categories: concept fondamentaux
---
# Fonctionnement
Un **conteneur** est un environnement dans lequel sont isolés un logiciel et ses dépendances. Cet environnement dédié facilite l'intégration du logiciel, qui est alors configuré, installé, et prêt à l'emploi.
Le conteneur est léger, puisqu'il n'embarque pas de système d'exploitation, contrairement à la machine virtuelle, et peut être créé pour tout type d'architectures : bare metal (sans virtualisation), machines virtuelles, cloud, etc. Le conteneur partage le noyau de l’OS hôte, et ne peut, par conséquent, s’exécuter que sur un système compatible, à moins d'ajouter une couche de compatibilité supplémentaire (WSL2 par exemple).
Un conteneur est basé sur une **image**, qui embarque les différentes bibliothèques et composants logiciels nécessaires, les paramètres, et bien sûr l'application principale de l'environnement à créer.
Cette image peut être soit récupérée, soit créée ou modifiée à partir d'un fichier, comme le Dockerfile dans le cas de Docker. Docker propose également, via le DockerHub, de partager, récupérer et stocker des images de conteneur.
Le **moteur de conteneur** utilise une image pour créer un conteneur, contenant un système de fichiers et les composants décrits dans  cette image ou peut en construire une nouvelle. Plus globalement, le moteur de conteneur fournit un environnement pour créer, lancer, arrêter et gérer l'isolation, le réseau et la sécurité des conteneurs, et peut assurer la compatibilité entre l'OS hôte et l'OS utilisable par le conteneur. En bref, il permet la communication entre l'hôte et les conteneurs.

![couches.png](/assets/img/couches.drawio.png)

Les avantages des conteneurs sont les suivants : 

![avantages.png](/assets/img/avantages_transparent.png)
 Ces avantages font que les conteneurs sont particulièrement adaptés pour héberger des micro-services, en particulier dans le cloud.

# Conteneurisation et virtualisation
Bien que les conteneurs et les machines virtuelles permettent tous les deux l'isolation des environnements, ces deux technologies présentent des différences majeures.

| Conteneurs                                                         | Machines virtuelles                                                       |
| :----------------------------------------------------------------- | ------------------------------------------------------------------------- |
| Ressources partagés avec l'hôte.                                   | Ressources dédiées (processeur, mémoire, stockage, interface réseau...).  |
| Légers, ils embarquent seulement l'application et ses dépendances. | Lourdes, elles embarquent un OS et fonctionnent comme un système complet. |
| Virtualisation à l'échelle d'une application.                      | Virtualisation à l'échelle d'un système.                                  |

# Pour aller plus loin...
Lorsque de nombreux conteneurs sont déployés et utilisés, un nouveau problème apparaît : celui de gérer à plus haut niveau et d'automatiser le déploiement, la surveillance, le cycle de vie, la mise à l'échelle et la mise en réseau des conteneurs.
Cette tâche est accomplie par des **orchestrateurs de conteneurs**, dont le plus connu est Kubernetes.
Dans Kubernetes, les (ensembles de) conteneurs sont appelés *pods*, et s'exécutent sur les *nœuds worker*. Ces *pods* sont assignés aux *nœuds worker* par les *nœuds master*, qui constituent le *control plane*, de manière à répartir au mieux les ressources. Ce sont ces *nœuds master* qui concentrent l'intelligence du *cluster* et qui permettent de l'administrer. Comme plusieurs *pods* peuvent avoir la même fonction, leur charge est répartie par l'*équilibreur de charge*.

# Références

|            Description             | Lien                                                                                                                                           |
| :-------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| Explication de la conteneurisation | [https://www.ibm.com/fr-fr/think/topics/containerization](https://www.ibm.com/fr-fr/think/topics/containerization)                             |
|         Moteur d'exécution         | [https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/](https://blog.stephane-robert.info/docs/conteneurs/moteurs-conteneurs/) |
|  Système de fichier image Docker   | [https://docs.linuxserver.io/misc/read-only/](https://docs.linuxserver.io/misc/read-only/)                                                   |
|       Images des conteneurs        | [https://blog.stephane-robert.info/docs/conteneurs/images-conteneurs/](https://blog.stephane-robert.info/docs/conteneurs/images-conteneurs/)   |
|          Commandes Docker          | [https://www.ionos.fr/digitalguide/serveur/know-how/les-images-docker/](https://www.ionos.fr/digitalguide/serveur/know-how/les-images-docker/) |
| Technologies utilisées par Docker  | [https://dyma.fr/blog/docker-et-ses-conteneurs/](https://dyma.fr/blog/docker-et-ses-conteneurs/)                                               |
|             Dockerfile             | [https://www.data-transitionnumerique.com/docker-dockerfile/](https://www.data-transitionnumerique.com/docker-dockerfile/)                     |
