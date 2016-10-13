class Person {
  constructor(_name = 'noname', _age = '0'){
    this.name = _name;
    this.age = _age;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return this.age;
  }
  grow(year = 1) {
    this.age += year;
  }
}

export default Person;