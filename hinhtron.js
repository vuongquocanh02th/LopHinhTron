//Tao lop hinh tron
let Circle = function (radius){
    this.radius = radius;
    //Xay dung phuong thuc tra ve ban kinh hinh tron
    this.getRadius = function () {
        return radius;
    }
    this.getArea = function () {
        return Math.PI * radius * radius;
    }
};
//Tao doi tuong hinh tron co ban kinh bang 2
let circle = new Circle(2);
//Gan bien cho radius,area
let radius = circle.getRadius();
let area = circle.getArea();
//Hien thi ban kinh va dien tich
alert('Ban kinh: ' +radius+'; area: '+area);
