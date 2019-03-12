var canvas = document.querySelector('canvas');
canvas.style = "border: 2px solid red;";
canvas.width = innerWidth;
canvas.height = innerHeight;
 
const  c1 = canvas.getContext('2d');
const  c2 = canvas.getContext('2d');
const grd1 = c1.createLinearGradient(0, 0, innerWidth +150, 0);
grd1.addColorStop(0, "#007DB8 ");
grd1.addColorStop(1, "white");
c1.fillStyle = grd1;

class Circle {
    constructor(x,y,radius,xVelocity,yVelocity){
        this.x = x;
        this.radius = radius;
        this.y = y ; 
        this.xVelocity = xVelocity;
        this.yVelocity = yVelocity;    
    }   
 
} 

Circle.prototype.update = function(){
    if(this.x +this.radius > innerWidth || this.x < this.radius )
       this.xVelocity = - this.xVelocity ;


    if(this.y +this.radius > innerHeight || this.y <this.radius)
       this.yVelocity = - this.yVelocity ;   
       this.x+=this.xVelocity;
       this.y+=this.yVelocity;
       this.draw();      
 }

Circle.prototype.draw = function (){
     c1.arc(this.x, this.y, this.radius, 0, Math.PI*2,0); 
     c1.strokeStyle = "red";
     c1.lineTo(this.x,this.y);   
 }

var circlearray = [];
for(let i = 0; i < 90; i+=1){
    circlearray.push( new Circle(Math.random()*innerWidth, Math.random()*innerHeight,4,Math.random()*5,Math.random()*5) ); 
 }

 function renderer1(){
    requestAnimationFrame(renderer1);
    c1.clearRect(0, 0 ,innerWidth,innerHeight);
    for(let i = 0; i< 90; i++)
    circlearray[i].update();
    c1.fill();
    c1.beginPath(); 
 }
renderer1();
 
 
  