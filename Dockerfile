# Étape 1 : Base image pour Node.js
FROM node:18-alpine

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tous les fichiers du projet dans le conteneur
COPY . .

# Étape 6 : Exposer le port 5173 (Vite utilise ce port par défaut pour le dev server)
EXPOSE 5173

# Étape 7 : Commande pour démarrer l'application en mode développement
CMD ["npm", "run", "dev", "--", "--host"]
