FROM node:18

# Projekt munkakönyvtár
WORKDIR /workspace

# Globális eszközök, pl. npm
RUN npm install -g npm@latest

# Vite és React buildhez szükséges függőségek
RUN apt-get update && apt-get install -y git curl
