## beadando-devops ##

## Build útmutató ##

Ez a projekt két különálló alkalmazásból áll:

backend/ – Node.js + Express API

frontend/ – React + Vite kliens

Az alábbi lépések alapján bárki le tudja buildelni és futtatni az appot.

## Backend build és futtatás##

Követelmények:

-Node.js 18+
-npm

Lépések:

```bash
cd backend
npm install
npm start
```
A szerver indítása után az app elérhető lesz:
```bash
http://localhost:8080
```
##  Frontend build ##
Követelmények:

-Node.js 18+
-npm

Lépések:
```bash
cd frontend
npm install
npm run build
```
A buildelt állományok a dist/ mappában jelennek meg.

## Konténerizálás ##

Backend

Build:
```bash
docker build -t backend-devops:v1 ./backend
```
Futtatás:
```bash
docker run -p 8080:8080 backend-devops:v1
```
A backend így elérhető lesz: http://localhost:8080

Frontend

Build:
```bash
docker build -t frontend-devops:v1 ./frontend
```
Futtatás:
```bash
docker run -p 8081:8081 frontend-devops:v1
```
A frontend így elérhető lesz: http://localhost:8081

## Docker Compose ##

A projekt mindkét komponense (backend + frontend) konténerben futtatható egyszerre a Docker Compose segítségével.

Build és futtatás
A projekt gyökerében docker-compose.yml létrehozni

```bash
docker-compose up --build
```
--build → újra buildeli a Docker image-eket.

A logokban látható mindkét konténer indítása.
Backend: http://localhost:8080
Frontend: http://localhost:8081

Leállítás
```bash
docker-compose down
```
Leállítja és törli a konténereket.
A képeket nem törli, újra build nélkül is indítható.