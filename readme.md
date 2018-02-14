Web
===

## Installation and Runing in develop environment
1. npm install
2. npm run build
3. node server
4. Launch nignx
5. Web will run at localhost:4000

---

## Installation and Runing in production environment
1. UAT: npm run deploy-uat. Files will be generated in the "archive/UAT".
2. PROD: npm run deploy-prod. Files will be generated in the "archive/PROD".
3. Copy "build", "resources", "index.html" to nginx public folder
4. Launch nignx
5. Web will run at nginx default port (80 port)

---

## Installation automatic
1. npm run deploy-all
2. The command will build UAT and PROD.

## Configuration
There are two configuration here. "config.dev" and "config.prod".
We **don't need** to select which config we need when building code.
* config.dev: Connect to "127.0.0.1"
* config.prod: Connect to "10.99.0.20"

---

## Nginx configuration
* Routes
    * route "MTKUBT": To get index page from nginx
    * route "UBT": To transfer api to webapi server
    * route "STK": TO transfer api to 研本 server
* Header
    * Dev: add_header 'Access-Control-Allow-Origin' 'http://localhost:4000';
    * Prod: add_header 'Access-Control-Allow-Origin' 'http://localhost';

---

## Debug without Nginx
1. webapi: response.js 加入 'Access-Control-Allow-Origin':'http://localhost:4000',
'Access-Control-Allow-Credentials': true
2. config.dev: 修改為 Server_URL: 'http://127.0.0.1:8080'
3. STK 相關的 API 將會無法使用

---

## CentOs
* Find nginx: ps ax|grep nginx
* Kill nginx: kill pid

---