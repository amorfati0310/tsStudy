"use strict";
function greeter(person) {
    console.log('person', person);
    return "Hello, " + person;
}
var user = "Jane User";
document.body.innerHTML = greeter(user);
