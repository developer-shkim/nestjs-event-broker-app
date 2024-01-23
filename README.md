# 실행 방법

### 1. publisher, listener 서버를 실행한다.

```
➜  publisher git:(master) yarn install
➜  publisher git:(master) yarn start
➜  listener git:(master) yarn install
➜  listener git:(master) yarn start
```

### 2. docker 로 nats 를 실행한다.

- docker desktop 을 실행한다.
- `docker run -d --name nats-main -p 4222:4222 -p 6222:6222 -p 8222:8222 nats -js -m 8222`

### 3. postman 과 같은 도구로 API 를 요청하고, 이벤트 pub/sub 을 확인한다.

- request: POST 127.0.0.1:3000/notify
- response: 201 CREATED
- listener console 에 출력한 이벤트 메시지 배열에 출력되는 것을 확인한다.

```bash
➜  listener git:(master) ✗ yarn start
yarn run v1.22.19
$ nest start
[Nest] 79219  - 01/23/2024, 8:48:15 PM     LOG [NestFactory] Starting Nest application...
[Nest] 79219  - 01/23/2024, 8:48:15 PM     LOG [InstanceLoader] AppModule dependencies initialized +12ms
[Nest] 79219  - 01/23/2024, 8:48:15 PM     LOG [NestMicroservice] Nest microservice successfully started +81ms
before:  [ 'message1' ]
after:  [ 'message1', true ]
before:  [ 'message1', true ]
after:  [ 'message1', true, true ]
```

# 참고

- https://github.com/nestjs/nest/tree/master/integration/microservices/src/nats
- https://github.com/johnbiundo/nest-nats-sample

