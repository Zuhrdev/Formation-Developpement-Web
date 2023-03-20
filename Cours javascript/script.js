function Dog(name, color, age)
{
    this.name = name;
    this.color = color;
    this.age = age;
    this.aboie = function()
        {
            console.log("grrr waf");
        }
}

var newDog = new Dog("Choupette", "white", 4);
var pitbull = new Dog("Rex", "noir", 7);

pitbull.aboie();