class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(protected key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];

  constructor(protected key: Key) {
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
    this.door = key.getSignature() === this.key.getSignature();
  }
}

const key = new Key();

const house = new MyHouse(key);

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
