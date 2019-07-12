function Person(first, last, age, gender, interests) {
    this.name = {
      'first': first,
      'last' : last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function() { 
        var pronone
        if(this.gender === 'Male' || this.gender === 'male' || this.gender === 'M' || this.gender === 'm'){
            pronone = 'He'
        }
        else{
            pronone = 'She'
        }
        var str = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old.' + pronone + ' likes '
        for(var i=0; i<this.interests.length; i++){
            if(i===this.interests.length-1){
                str += 'and' + this.interests[i] + '.';
            }
            else{
                str += this.interests[i] + ','
            }
        }
        alert(str);
    };
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name.first + '.');
    };
  }

  var person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
  person1.greeting;
  person1.bio;

