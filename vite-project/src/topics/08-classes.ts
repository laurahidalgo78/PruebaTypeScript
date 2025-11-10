export class Person{
    //public name: string;
    ///private adress: string;

    constructor(
        public name:string,
        private adress: string = 'No adress'
    ) {}
}

//export class Hero extends Person{

 //constructor(
    //public alterEgo: string,
    //public age: number,
    //public realName: string,
 //) {
   // super(realName, 'New York');
    
 //}
//}

export class Hero{

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person
    ){
        //this.person = new Person(realName);

    }
}

const person = new Person('Tony Stark', 'New');
const ironman = new Hero('Iroman', 45, 'Tony', person);

console.log(ironman)