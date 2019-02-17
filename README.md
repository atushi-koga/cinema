# Vue.js Cinema

#### Pre-installation

- Ensure [Node.js  >=5.10](https://nodejs.org/en/download/), [NPM](https://docs.npmjs.com) and [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) are installed on your system

#### developing Environment
get source code
```
git init
git clone <this repository URL>
```
create environment
```
docker-machine create --driver virtualbox poster-shop
eval $(docker-machine env poster-shop)
docker-compose up -d
docker-compose exec web bash
```
install package
```
npm install
```
compile
```
node_modules/.bin/webpack
```
run node js server
```
npm run start
```