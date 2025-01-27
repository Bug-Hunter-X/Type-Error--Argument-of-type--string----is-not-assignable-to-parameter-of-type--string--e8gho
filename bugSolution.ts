function greeter(person: string | string[]): string {
  if (typeof person === 'string') {
    return "Hello, " + person;
  } else {
    return "Hello, " + person.join(', ');
  }
}

let user = ["Alice", "Bob"];
console.log(greeter(user));

let singleUser = "Charlie";
console.log(greeter(singleUser));