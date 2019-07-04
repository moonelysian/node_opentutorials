### 2019.07.04

# REST & REST API & RESTful 
## REST
자원을 이름으로 구분하여 해당 자원의 상태(정보)를 주고 받는 모든 것을 의미
HTTP URI를 통해 Resource을 명시하고, HTTP Method(GET,POST,PUT,DELETE)를 통해 해당 자원에 대한 CRUD Operation을 적용하는 것을 의미

#### CRUD Operation
* Create: 생성(POST)
* Read: 조회(GET)
* Update: 수정(PUT)
* Delete: 삭제(DELETE)
* HEAD: header 정보 조회(HEAD)

### 장점
HTTP 프로토콜의 인프라를 그대로 사용하므로 REST API 사용을 위한 별도의 인프라를 구축할 필요 없음
HTTP 프로토콜에 따르는 모든 플랫폼에서 사용 가능
Hypermedia API의 기본을 충실히 지키면서 범용성 보장
REST API 메시지가 의도하는 바를 명확하게 나타내므로 의도하는 바를 쉽게 파악할 수 있음
서버와 클라이언트의 역할을 명확하게 분리

### 단점
표준이 존재하지 않음
사용할 수 있는 메소드가 4가지 뿐
구형 브라우저가 아직 제대로 지원하지 못하는 부분이 존재(PUT,DELETE 사용 불가능, pushState를 지원 하지 않음)

### 특징
* Server-Client 구조
    REST Server: API를 제공하고 비지니스 로직 처리 및 저장을 책임
    Client: 사용자 인증이나 context등을 직접 관리하고 책임짐
* Stateless

* Cacheable
* Layered System
* Code-On-Demand(optional)
* Uniform Interface

## REST API

## RESTful