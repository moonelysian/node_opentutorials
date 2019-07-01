//내부 객체까지 변경 불가능하게 만들려면 Deep freeze를 하여야 한다.
function deepFreeze(obj) {
    const props = Object.getOwnPropertyNames(obj);
  
    props.forEach((name) => {
      const prop = obj[name];
      if(typeof prop === 'object' && prop !== null) {
        deepFreeze(prop);
      }
    });
    return Object.freeze(obj);
  }
  
  const user = {
    name: 'Lee',
    address: {
      city: 'Seoul'
    }
  };
  
  deepFreeze(user);
  
  user.name = 'Kim';           // 무시된다
  user.address.city = 'Busan'; // 무시된다
  
  console.log(user); // { name: 'Lee', address: { city: 'Seoul' } }