import Person from './app'

let test = document.getElementById('test');
    var p = new Person();
    p.grow();
    test.innerHTML= p.getAge();
