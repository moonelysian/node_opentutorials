// Pass-by-reference
var foo = {
    val: 10
  }
  
  var bar = foo;
  console.log(foo.val, bar.val); // 10 10
  console.log(foo === bar);      // true
  
  bar.val = 20;
  console.log(foo.val, bar.val); // 20 20
  console.log(foo === bar);      // true