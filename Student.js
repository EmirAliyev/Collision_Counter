let count1=0;
let myFlag1=true;
let count2=0;
let myFlag2=true;
let count3=0;
let myFlag3=true;
let count4=0;
let myFlag4=true;
let count5=0;
let myFlag5=true;
let result=0;
class Figure {
  constructor(X, Y) {
    this.X = X;
    this.Y = Y;
    this.moveUp = false;
    this.moveRight = false;
    this.rotation = 0;
  }
  move() {
   if (this.Y < 550) {
       this.Y += 10;
   } else {
       this.Y = 0;   
   }}
  draw() {}
  
  static distance(){
   let a1=figures[0].X;
   let a2=figures[0].Y;
   let b1=figures[1].X;
   let b2=figures[1].Y;
   let c1=figures[2].X;
   let c2=figures[2].Y;
   let d1=figures[3].X;
   let d2=figures[3].Y;
   //Красный прямоугольник с кругом
   if(a2-b2===50 && myFlag1===true){
  myFlag1=false;
  count1+=1
   } 
   
   if ( a2-b2===-50 && myFlag1===true){
    myFlag1=false;
  count1+=1
   }
   switch(a2){
    case 0:
      myFlag1=true;
      break;
      case 550:
        myFlag1=true;
        break;
        
   }
   //Красный прямоугольник с кругом


   //Красный прямоугольник с синим
  if(d1-a1<100 && myFlag2 && d2===a2){
    myFlag2=false;
    count2+=1
     } 


  if(d1-a1<100 && myFlag2 && d2-a2<50){
    myFlag2=false;
    count2+=1
     } 


     switch(d1){
      case 0:
        myFlag2=true;
        break;
        case 550:
          myFlag2=true;
          break;
  }
   //Красный прямоугольник с синим

   
   //Красный прямоугольник с квадратом
   // Движение красного прямоугольника с синим наглядно дают понять что их столкновение не возможно
   //Красный прямоугольник с квадратом


//ЗЕЛЕНЫЙ КРУГ С КВАДРАТОМ
if(c1===b1 && c2===b2){
  myFlag3=false;
  count3+=1
   } 

   switch(b2){
    case 0:
      myFlag2=true;
      break;
      case 550:
        myFlag2=true;
        break;
}
//ЗЕЛЕНЫЙ КРУГ С КВАДРАТОМ



//ЗЕЛЕНЫЙ КРУГ С СИНИМ ПРЯМОУГОЛЬНИКОМ
if(d1-b1<50 && myFlag4 && d2===b2){
  myFlag4=false;
  count4+=1
   } 


if(d1-b1<50 && myFlag4 && b2-d2<50){
  myFlag4=false;
  count4+=1
   } 
   switch(d1){
    case 0:
      myFlag4=true;
      break;
      case 550:
        myFlag4=true;
        break;
}
//ЗЕЛЕНЫЙ КРУГ С СИНИМ ПРЯМОУГОЛЬНИКОМ


//СИНИЙ ПРЯМОУГОЛЬНИК С КВАДРАТОМ
if(d1-c1<50 && myFlag5 && d2===c2){
  myFlag5=false;
  count5+=1
   } 


if(d1-c1<50 && myFlag5 && c2-d2===-50){
  myFlag5=false;
  count5+=1
   } 
// console.log(`SQUARE`+c2)
// console.log(`RECT` +d2)

   switch(d1){
    case 0:
      myFlag5=true;
      break;
      case 550:
        myFlag5=true;
        break;
}
//СИНИЙ ПРЯМОУГОЛЬНИК С КВАДРАТОМ
           
result=count1+count2+count3+count4+count5;


}
}
// КРАСНЫЙ ПРЯМОУГОЛЬНИК
class Rect extends Figure {
  constructor(X, Y) {
    Y = 550;
    X = 0;
    super(X, Y);
  }
  draw() {
    document.getElementById("app").innerHTML += `
<div id="Rect" style="
 background: red;
 width: 100px;
 height: 50px;
 position: absolute;
 top: ${this.Y}px;
 left: ${this.X}px"></div>
`;
  }

  move() {
    switch (this.Y) {
      case 550:
        this.moveUp = true;
        break;
      case 0:
        this.moveUp = false;
        break;
    }
    if (this.moveUp) {
      this.Y -= 10;
      this.X = 0;
    } else {
      this.Y += 10;
      this.X = 0;
    }
  }


}
// КРАСНЫЙ ПРЯМОУГОЛЬНИК

// ЗЕЛЕНЫЙ КРУГ
class Circle extends Figure {
  constructor(X, Y,) {
    Y = 0;
    X = 0;
    super(X, Y);
  }
  draw() {
    document.getElementById("app").innerHTML += `
      <div id="Circle" style="
          background: green;
          width: 50px;
          height: 50px;
          border-radius: 25px;
          position: absolute;
          top: 10px;
          top: ${this.Y}px;
          left: ${this.X}px"></div>

   `;
  }

  move() {
    switch (this.Y) {
      case 550:
        this.moveUp = true;
        break;
      case 0:
        this.moveUp = false;
        break;
    }
    if (this.moveUp) {
      this.Y -= 10;
      this.X = 0;
    } else {
      this.Y += 10;
      this.X = 0;
    }
   
  }
}

// ЗЕЛЕНЫЙ КРУГ

// СИНИЙ ПРЯМОУГОЛЬНИК

class Rect2 extends Figure {
  constructor(X, Y) {
    Y = 500;
    X = 550;
    super(X, Y);
  }
  draw() {
    document.getElementById("app").innerHTML += `
   <div id="Rect2" style="
    background: blue;
    width: 50px;
    height: 100px;
    position: absolute;
    top: ${this.Y}px;
    left: ${this.X}px"></div>
   `;
  }

  move() {

    switch (this.Y) {
      case 500:
        this.moveUp = true;
        break;
      case 0:
        this.moveUp = false;
        break;
    }
    if (this.moveUp) {
      this.Y -= 10;
    } else {
      this.Y += 10;
    }

    switch (this.X) {
      case 0:
        this.moveRight = true;
        break;
      case 550:
        this.moveRight = false;
        break;
    }
    if (this.moveRight) {
      this.X += 10;
    } else {
      this.X -= 10;
    }
  }
}

// СИНИЙ ПРЯМОУГОЛЬНИК

// РОЗОВЫЙ КВАДРАТ

class Square extends Figure {
   constructor(X, Y) {
      Y = 0;
      X = 550;
      super(X, Y);
    }
   draw() {
       document.getElementById("app").innerHTML += `
           <div id="Square" style="
               background: pink;
               width: 50px;
               height: 50px;
               position: absolute;
               transform: rotate(${this.rotation}turn);
               top: ${this.Y}px;
               left: ${this.X}px"></div>
       `;
   }

   move(){
      switch (this.Y) {
         case 550:
           this.moveUp = true;
           break;
         case 0:
           this.moveUp = false;
           break;
       }
       if (this.moveUp) {
         this.Y -= 10;
         this.rotation += 0.1;
       } else {
         this.Y += 10;
         this.rotation += 0.1;
       }
   
       switch (this.X) {
         case 0:
           this.moveRight = true;
           break;
         case 550:
           this.moveRight = false;
           break;
       }
       if (this.moveRight) {
         this.X += 10;
         this.rotation += 0.1;
       } else {
         this.X -= 10;
         this.rotation += 0.1;
       }
   }
}

// РОЗОВЫЙ КВАДРАТ


const figures = [new Rect(), new Circle(), new Square(), new Rect2()];


function startAnimation(){
  setInterval(() => {
    document.getElementById("app").innerHTML = "";
    for (let figure of figures) {
        figure.move();
        figure.draw();
    } 
    Figure.distance();
    starter.innerHTML=`Общее количество столкновений среди всех фигур: ${result}`;
}, 50);
starter.removeEventListener(`click`,startAnimation);
starter.innerHTML=``;
}


let starter=document.getElementById(`counter`);
starter.addEventListener(`click`,startAnimation);
