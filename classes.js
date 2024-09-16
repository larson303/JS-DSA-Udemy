/*
  * Looks pretty similar to Java
    * Classes are a blueprint for creating objects
    * Classes can have properties and methods
    * Properties are like variables attached to the classes
    * Methods are functions attached to the classes
    * Classes are created with the class keyword
*/

// Class Declaration
class Cookie {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }

    toString() {
        return `${this.name}=${this.value}`;
    }

    getName() {
        return this.name;
    }

    getValue() {
        return this.value;
    }

    setName(name) {
        this.name = name;
    }

    setValue(value) {
        this.value = value;
    }
}


// Create an instance of the class
let cookie = new Cookie('Macadamia Nut', 'soft');
console.log(cookie.toString());



