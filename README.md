# RS School REST service

## Tests 
### Fastify
Report @ 23:35:44(+0300) 2021-07-11
Elapsed time: 2 seconds
  Scenarios launched:  1
  Scenarios completed: 1
  Requests completed:  5
  Mean response/sec: 3.33
  Response time (msec):
    min: 5
    max: 74
    median: 9
    p95: 74
    p99: 74
  Codes:
    200: 3
    201: 2

All virtual users finished
Summary report @ 23:35:44(+0300) 2021-07-11
  Scenarios launched:  1
  Scenarios completed: 1
  Requests completed:  5
  Mean response/sec: 3.31
  Response time (msec):
    min: 5
    max: 74
    median: 9
    p95: 74
    p99: 74
  Scenario counts:
    Search and buy: 1 (100%)
  Codes:
    200: 3
    201: 2
### Express 
Report @ 23:42:24(+0300) 2021-07-11
Elapsed time: 2 seconds
  Scenarios launched:  1
  Scenarios completed: 1
  Requests completed:  5
  Mean response/sec: 3.36
  Response time (msec):
    min: 8
    max: 86
    median: 14
    p95: 86
    p99: 86
  Codes:
    200: 3
    201: 2

All virtual users finished
Summary report @ 23:42:24(+0300) 2021-07-11
  Scenarios launched:  1
  Scenarios completed: 1
  Requests completed:  5
  Mean response/sec: 3.33
  Response time (msec):
    min: 8
    max: 86
    median: 14
    p95: 86
    p99: 86
  Scenario counts:
    Search and buy: 1 (100%)
  Codes:
    200: 3
    201: 2


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

Запускаем тесты
```
npm run test:auth
```
