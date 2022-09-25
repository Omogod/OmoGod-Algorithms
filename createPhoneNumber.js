function createPhoneNumber(numbers){
  
    for (let i = 0; i < numbers.length; i++) {
      first = numbers.slice(0,4);
      first.unshift('(');
      first.push(')');
  
      second = numbers.slice(4,7).join('') + '-' + numbers.slice(7, 10).join('') + '-' +             
      numbers.slice(10, numbers.length).join('');
    }
      return first.join('') + ' ' + second;
  }
  
  console.log(createPhoneNumber(['+', 2, 3, 4, 8, 0, 9, 4, 3, 4, 8, 6, 7, 4]));
  