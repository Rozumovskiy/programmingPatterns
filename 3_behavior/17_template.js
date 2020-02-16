class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    responsibilities() {}

    work() {
        return `${this.name} doing ${this.responsibilities()} `
    }

    getPaid() {
        return `${this.name} have salary ${this.salary}`
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `Process creting program`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary)
    }

    responsibilities() {
        return `Process testing1 program`;
    }
}

const dev = new Developer('Bill', 35000);
console.log(dev.getPaid())
console.log(dev.work())

const tester = new Tester('Vasya', 30000);
console.log(tester.getPaid())
console.log(tester.work())
