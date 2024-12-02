# Projet de Simulation de Comportements de Steering

Ce projet est une simulation de comportements de steering utilisant la bibliothèque p5.js. Il inclut des véhicules, des proies, des pêcheurs, des requins wandering et un player (sous-marins) avec des interactions dynamiques et des comportements de tir.

## Fonctionnalités

- **Véhicules** : Les véhicules peuvent errer, éviter les obstacles et suivre des cibles.
- **Proies** : Les proies sont chassées par les requins wandering.
- **Pêcheurs** : Les pêcheurs wandering behavior.
- **Requins wandering** : Les requins wander et chassent les proies.
- **Tir** : Le sous-marin peut tirer sur les proies en appuyant sur la barre d'espace.

## Instructions de Jeu

- **W** : Appuyez sur `W` pour faire apparaître un requin wandering.
- ""Click-Droit" : pour placer un obstacle.
- **P** : Appuyez sur `P` pour faire apparaître une proie.
- **H** : Appuyez sur `H` pour faire apparaître un pêcheur.
- **Espace** : Appuyez sur la barre d'espace pour tirer sur les proies.

Les boids simulent des comportements de groupe en utilisant trois règles principales :
- **Alignement** : Les boids s'alignent avec la direction moyenne de leurs voisins proches.
- **Cohésion** : Les boids se dirigent vers le centre de masse de leurs voisins proches.
- **Séparation** : Les boids évitent de se rapprocher trop de leurs voisins.

Des sliders sont utilisés pour ajuster les paramètres de ces comportements :
- **Alignement** : Contrôle l'importance de l'alignement avec les voisins.
- **Cohésion** : Contrôle l'importance de la cohésion avec les voisins.
- **Séparation** : Contrôle l'importance de la séparation des voisins.


## Logique du Jeu

### Véhicules

Les véhicules sont des entités de base qui peuvent se déplacer dans l'environnement. Ils ont des comportements de steering, Snake, avoid obstacles, boundaries.

### Proies

Les proies sont des entités qui sont chassées par les requins wandering. Elles essaient d'éviter les obstacles et wander avec boundaries.

### Pêcheurs

Les pêcheurs wander et boundaries behavior, c est tout.

### Requins wander

Les requins wander dans l'environnement et chassent activement les proies. Ils utilisent des comportements de steering pour suivre et attraper les proies.

