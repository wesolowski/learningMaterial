var num = 8,
    str = num.toString(); //"8"
/*----------------------------*/

var personOne = new Object();

personOne.firstName = 'Rafal';
personOne.lastName = 'Wesolowski'
personOne.getFullName = function()
{
    return this.firstName + ' ' + this.lastName;
};

console.log('personOne obj: ',personOne);
console.log('personOne-getFullName: ', personOne.getFullName());

/*----------------------------*/

var person =
{
    firstName : 'Rafal',
    lastName : 'Wesolowski',
    getFullName : function()
    {
        return this.firstName + " " + this.lastName;
    }
};

console.log('person obj: ',person);
console.log('person-getFullName: ', person.getFullName());
