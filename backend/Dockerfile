# Alap image
FROM node:18

# Mappa létrehozása a konténerben
WORKDIR /app

# Csomagok másolása és telepítése
COPY package*.json ./
RUN npm install

# App kód másolása
COPY . .

# Port, amin a szerver fut
EXPOSE 8080

# App indítása
CMD ["node", "index.js"]