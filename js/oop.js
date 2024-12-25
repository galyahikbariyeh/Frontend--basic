class Car{
constructor(brand,year,color){
    this.brand=brand;
    this.year=year;
    this.color=color;
}
start(){
    console.log(`${this.brand} is started` )
}
stop(){
    console.log(`${this.brand} is stop` )  
}

}

var bmw=new Car("BMW",2020,"red");
bmw.start()
bmw.stop()
console.log(bmw);
//console.log(bmw.color)
var kia=new Car("BMW",2020,"black");
kia.start()
console.log(kia);

class Person{
    constructor(name,age,address){
        this.name=name;
        this.age=age;
        this.address=address;
    }
    personal(){
        console.log(`Hi iam${this.name} ${this.age} ${this.address} `)
    }
}
var ali=new Person("Ali",12,"irbid")
var aya=new Person("Aya",16,"irbid")
ali.personal()
aya.personal()
console.log(ali)
console.log(aya)