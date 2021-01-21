let str: string = "Hello Typescript"
let num: number = 42;
let isActive: boolean = false

let strArray: string[] = ['h', 'e', 'l']
let numArray: Array<number> = [1, 1, 2, 3]
console.log(numArray)

function logInfo(name: string, age: number): void {
    console.log(`Info: ${name}, ${age}`)
}

logInfo("Ann", 28)

function calc(a: number, b: number | string): number {
    if (typeof b === 'string') b = +b
    return a + b
}

console.log(calc(1, 2)

//class

class Server {
    static VERSION = '1.0.3'
    private status: string = 'working'
    constructor(public name: string, protected ip: number) {
        this.name = name
        this.ip = ip
    }

    turnOn() {
        this.status = 'working'
    }

    turnOff() {
        this.status = 'offline'
    }

    getStatus(): string {
        return this.status
    }
}

const server: Server = new Server('AWS', 1234)
