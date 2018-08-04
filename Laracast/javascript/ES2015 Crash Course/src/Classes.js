class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    changeEmail(newEmail) {
        this.email = newEmail;
    }

    static register(...args) {
        return new User(...args);
    }

    get foo() {
        return 'foo';
    }
}

let user = new User('RafalWesolowski', 'wesolyy@myEmail.com');

user.changeEmail('newEmail@bar.com');
console.log(user);

let userStatic = User.register('RafalWesolowski', 'wesolyy@myEmail.com');

userStatic.changeEmail('newEmail@bar.com');
console.log(userStatic);

console.log(user.foo);


// Anonymous class

function log(strategy) {
    console.log(strategy.handle());
}

log(new class {
    handle() {
        return 'Hi';
    }
});