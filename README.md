eadando-devops – Build útmutató

Ez a projekt két különálló alkalmazásból áll:

backend/ – Node.js + Express API

frontend/ – React + Vite kliens

Az alábbi lépések alapján bárki le tudja buildelni és futtatni az appot.

Backend build és futtatás
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
Frontend build
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