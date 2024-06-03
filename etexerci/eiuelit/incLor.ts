function createGreetingMessages(names: string[]): string[] {
  return names.map(name => `Hello, ${name}! How are you?`);
}

const names = ["Alice", "Bob", "Charlie"];
const greetingMessages = createGreetingMessages(names);

console.log(greetingMessages);
