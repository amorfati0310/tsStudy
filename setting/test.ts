function greeter(person: string) {
  console.log('person', person);
  return "Hello, " + person;
}

let user = "Jane User";

document.body.innerHTML = greeter(user);