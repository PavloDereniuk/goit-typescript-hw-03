class Key {
  signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  door: boolean;
  key: Key;
  tenants: Person[] = [];

  constructor(key: Key) {
    this.door = false;
    this.key = key;
  }

  abstract openDoor(key: Key): void;
  comeIn(person: Person): void {
    this.door && this.tenants.push(person);
  }
}

class MyHouse extends House {
  openDoor(key: Key): void {
    key.getSignature() === this.key.getSignature()
      ? (this.door = true)
      : (this.door = false);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
