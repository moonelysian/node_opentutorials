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
    * REST Server: API를 제공하고 비지니스 로직 처리 및 저장을 책임
    * Client: 사용자 인증이나 context등을 직접 관리하고 책임짐
* Stateless(무상태)
    * Client의 context를 Server에 저장하지 않음
    * Server는 각각의 요헝을 완전히 별개의 것으로 인식하고 처리
* Cacheable(캐시 처리 가능)
* Layered System
* Code-On-Demand(optional)
* Uniform Interface

## REST API
### API
데이터와 기능의 집합을 제공하여 컴퓨터 프로그램간 상호작용을 촉진하며, 서로 정보를 교환 가능하도록 하는 것

### REST API
REST기반으로 서비스 API를 구현한 것

#### 설계규칙
1. `/` 는 계층관계를 나타내는데 사용
2. URI 마지막 문자로 `/`를 포함하지 않음
3. `-`은 URI 가독성을 높이는데 사용
4. `_`은 URI에 사용하지 않음
5. URI 경로에는 소문자가 적합
6. 파일확장자는 URI에 포함하지 않음

## RESTful
일반적으로 REST라는 아키텍처를 구현하는 웹 서비스를 나타내기 위해 사용되는 용어
REST API를 제공하는 웹서비스를 RESTful하다고 할 수 있음

### 목적
이해하기 쉽고 사용하기 쉬운 REST API를 만드는 것
