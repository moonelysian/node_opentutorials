//Object.freeze()를 사용하여 불변(immutable) 객체로 만들수 있다.
const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  // Object.assign은 완전한 deep copy를 지원하지 않는다.
  const user2 = Object.assign({}, user1, {name: 'Kim'});
  
  console.log(user1.name); // Lee
  console.log(user2.name); // Kim
  
  Object.freeze(user1);
  
  user1.name = 'Kim'; // 무시된다!
  
  console.log(user1); // { name: 'Lee', address: { city: 'Seoul' } }
  
  console.log(Object.isFrozen(user1)); // true