function Phone(brand, price, color, toDoList) {
	this.brand = brand;
	this.price = price;
	this.color = color;
    this.toDoList = toDoList;
}
Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
}

var iPhone6S = new Phone("Apple", 2250, "silver");
var samsungS6 = new Phone("Samsung", 2300, "black or white");
var onePlus = new Phone("One Plus", 1200, "gold");

iPhone6S.printInfo();
samsungS6.printInfo();
onePlus.printInfo();