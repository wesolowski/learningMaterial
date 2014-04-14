window.Person = function(config) {
  if (config) {
    return this.name = config.name;
  }
};

Person.prototype.hands = 2;

Person.prototype.legs = 2;

Person.prototype.sayHello = function(greeting) {
  if (greeting == null) {
    greeting = 'Hello';
  }
  return "" + greeting + " There";
};

Person.prototype.assignJob = function(job) {
  this.job = job;
};

Person.prototype.setName = function(name) {
  this.name = name;
};