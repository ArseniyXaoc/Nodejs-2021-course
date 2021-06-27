# RS School REST service

## Prerequisites

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker - [Download & Install Docker](https://www.docker.com/products/docker-desktop).

## Downloading

```
git clone {repository URL}
```
Go to app catalog and run
```
git checkout {branch name}
npm i
```

## Docker
For run this app in work dirrectory run
```
docker-compose build
docker-compose up
```
## Внимание!
Для проверки тестов запускаем:
```
docker compose build
docker compose up;
```
Оставляем запущенной только БД
```
Запускаем тесты
```
npm run test:auth
```
