function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
    this.favoriteFoods = favoriteFoods;
    this.family = [];
}

Person.prototype = {
    fullName: function(){
        return `${this.firstName} ${this.lastName}`;
    },
    toString: function(){
        return `${this.firstName} ${this.lastName}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`
    },
    addToFamily: function(familyMember){
        if(familyMember instanceof Person){
            this.family.push(familyMember);
        }
        
        
        return this.family.length;
    },
    getFamily: function(){
        return this.family;
    }
}

let bubbly = new Person("Bubbly", "Bubbles", "Purple", 2, ['alfredo', 'rocks']);
let joe = new Person("Joe", "Joey", "Greem", 77, ['alfredo', 'rocks']);
bubbly.addToFamily(joe);
console.log(bubbly.getFamily());