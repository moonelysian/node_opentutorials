/**user1 객체를 빈객체에 복사하여 새로운 객체 user2를 생성하였다. 
 * user1과 user2는 어드레스를 공유하지 않으므로 한 객체를 변경하여도 다른 객체에 아무런 영향을 주지 않는다.
 * 주의할 것은 user1 객체는 const로 선언되어 재할당은 할 수 없지만 객체의 프로퍼티는 보호되지 않는다. 
 * 다시 말하자면 객체의 내용은 변경할 수 있다.*/
const user1 = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  // 새로운 빈 객체에 user1을 copy한다.
  const user2 = Object.assign({}, user1);
  // user1과 user2는 참조값이 다르다.
  console.log(user1 === user2); // false
  
  user2.name = 'Kim';
  console.log(user1.name); // Lee
  console.log(user2.name); // Kim
  
  // 객체 내부의 객체(Nested Object)는 Shallow copy된다.
  //Shallow copy: just reference address are copied
  //Deep copy: copies all field and makes copies of dynamically allocated memory pointed to by the fields
  console.log(user1.address === user2.address); // true
  
  user1.address.city = 'Busan';
  console.log(user1.address.city); // Busan
  console.log(user2.address.city); // Busan