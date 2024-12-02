# Projet de Simulation de Comportements de Steering

Ce projet est une simulation de comportements de steering utilisant la bibliothèque p5.js. Il inclut des véhicules, des proies, des pêcheurs et des requins errants, avec des interactions dynamiques et des comportements de tir.

## Fonctionnalités

- **Véhicules** : Les véhicules peuvent errer, éviter les obstacles et suivre des cibles.
- **Proies** : Les proies sont chassées par les requins errants.
- **Pêcheurs** : Les pêcheurs errent et tirent sur les proies.
- **Requins errants** : Les requins errants errent et chassent les proies.
- **Tir** : Le joueur peut tirer sur les proies en appuyant sur la barre d'espace.

## Instructions de Jeu

- **W** : Appuyez sur `W` pour faire apparaître un requin errant.
- **P** : Appuyez sur `P` pour faire apparaître une proie.
- **H** : Appuyez sur `H` pour faire apparaître un pêcheur.
- **Espace** : Appuyez sur la barre d'espace pour tirer sur les proies.

## Logique du Jeu

### Véhicules

Les véhicules sont des entités de base qui peuvent se déplacer dans l'environnement. Ils ont des comportements de steering tels que l'errance et l'évitement des obstacles.

### Proies

Les proies sont des entités qui sont chassées par les requins errants. Elles essaient d'éviter les requins et de survivre le plus longtemps possible.

### Pêcheurs

Les pêcheurs errent dans l'environnement et tirent sur les proies lorsqu'ils les voient. Ils n'ont pas de comportement de suivi, mais ils peuvent tirer sur les proies à portée.

### Requins errants

Les requins errants errent dans l'environnement et chassent activement les proies. Ils utilisent des comportements de steering pour suivre et attraper les proies.

