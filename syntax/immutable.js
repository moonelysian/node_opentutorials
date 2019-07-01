/**Object.assign과 Object.freeze을 사용하여 불변 객체를 만드는 방법은 번거러울 뿐더러 성능상 이슈가 있어서 큰 객체에는 사용하지 않는 것이 좋다.
 * 또 다른 대안으로 Facebook이 제공하는 Immutable.js를 사용하는 방법이 있다.
 * Immutable.js는 List, Stack, Map, OrderedMap, Set, OrderedSet, Record와 같은 영구 불변 (Permit Immutable) 데이터 구조를 제공한다.
 * npm을 사용하여 Immutable.js를 설치한다.
 *      $ npm install immutable
 * Immutable.js의 Map 모듈을 임포트하여 사용한다. */

const { Map } = require('immutable')
const map1 = Map({ a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 50)
map1.get('b') // 2
map2.get('b') // 50
//map1.set(‘b’, 50)의 실행에도 불구하고 map1은 불변하였다. map1.set()은 결과를 반영한 새로운 객체를 반환한다.