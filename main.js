canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
houverWidht = 100;
houverHeight = 90;
background2D = "mars.jpg";
houverIMG = "rover.png";
houverX = 50;
houverY = 50;
function add(){
    backgroundimg = new Image();
    backgroundimg.onload = upbackground;
    backgroundimg.src = background2D;
    houverimg = new Image();
    houverimg.onload = uphouver;
    houverimg.src = houverIMG;
}
function upbackground(){
    ctx.drawImage(backgroundimg, 0, 0, canvas.widht, canvas.height);
}
function uphouver(){
    ctx.drawImage(houverimg, houverX, houverY, houverWidht, houverHeight);
}
window.addEventListener("keydown", myKeyDown);
function myKeyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == "38"){
        up();
    console.log("cima");
    }
    if(keyPressed == "40"){
        down();
    console.log("baixo");
    }
    if(keyPressed == "37"){
        left();
    console.log("esquerda");
    }
    if(keyPressed == "39"){
        right();
    console.log("direta");
    }
}
function up()
{
    if(houverY >=0)
    {
        houverY = houverY - 10;
        console.log("Quando direcional cima for pressionada,  x = " + houverX + " | y = " +houverY);
         upbackground();
         uphouver();
    }
}
function down()
{
    if(houverY <=500)
    {
        houverY = houverY + 10;
        console.log("Quando direcional cima for pressionada,  x = " + houverX + " | y = " +houverY);
         upbackground();
         uphouver();
    }
}
function left()
{
    if(houverX >= 0)
    {
        houverX = houverX - 10;
        console.log("Quando direcional cima for pressionada,  x = " + houverX + " | y = " +houverY);
         upbackground();
         uphouver();
    }
}
function right()
{
    if(houverX <= 700)
    {
        houverX = houverX + 10;
        console.log("Quando direcional cima for pressionada,  x = " + houverX + " | y = " +houverY);
         upbackground();
         uphouver();
   }
}
