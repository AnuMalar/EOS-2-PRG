//create a container and set  height and width  
const area = {
    element: document.getElementById('area'),
    width: 500,
    height: 500,
  };

//initialize function
  initialize();
  //create a ball within the container in create function
   const ball1 = create('red', 5, 3);
   const ball2 = create('green', 4, 6);
   const ball3 = create('violet', 1, 4);
   const ball4 = create('white', 6, 4);
   const ball5 = create('blue', 6, 6);
   const ball6 = create('yellow', 5, 8);
   const ball7 = create('orange', 3, 4);
  //create a container in html page
    function initialize() {
   //set the container in that particular area 
    area.element.style.width = area.width + 'px';
    area.element.style.height = area.height + 'px';
    document.body.appendChild(area.element);
  }
   //create a ball with newball properties
  function create(color, dx, dy) {
    const newball = Object.create(this);
    //set x,y corordinates and height and width to the newball
        newball.dx= dx;
        newball.dy= dy;
        newball.width=40;
        newball.height=40;
        //set background color,height,width to a newball
        newball.element = document.createElement("div")
        newball.element.style.backgroundColor = color;
        newball.element.style.width=newball.width+'px';
        newball.element.style.height=newball.height+'px';
        newball.element.className += "ball";
        //parseInt convert a string to integer
    newball.width=parseInt(newball.element.style.width);
    newball.height=parseInt(newball.element.style.height);
    area.element.appendChild(newball.element);
    return newball;
  }
  //update the position to move randomly
   update(ball1, 20, 30);
   update(ball2, 10, 100);
   update(ball3, 30, 300);
   update(ball4,15,60);
   update(ball5,10,80);
   update(ball6,10,200);
   update(ball7,30,200);


   //make a ball to move
   moveto(ball1, 1, 1);
   moveto(ball2, 5, 10);
   moveto(ball3, 10, 20);
   moveto(ball4, 10, 30);
   moveto(ball5, 5, 20);
   moveto(ball6, 10, 40);
   moveto(ball7, 20, 20);


  
  
  //In this function use moveto function and changedirection function to randomly move the balls
  function update(ball, x, y) {
  //Call moveto function to make the ball move while updating
    moveto(ball,x , y);
    //settimeout function to move a ball every 10ms
    setTimeout(function()
    {
//The direction of the ball should be changed 
        changedirection(ball,x,y)
     update(ball, x + ball.dx, y+ball.dy)
   },10);
  }
   //create a moveto function 
  function moveto(ball, x, y) {
    ball.element.style.right= x + 'px';
    ball.element.style.bottom = y + 'px';
  }
  
  //this function reverse the ball when hits the borders
  function changedirection(ball, x, y) {
    if (x < 0 || x > area.width - ball.width) {
      ball.dx = -ball.dx;
    }
    if (y < 0 || y > area.height - ball.height) {
      ball.dy = -ball.dy;
    }
  }
  
   if (typeof module !== 'undefined') {
    module.exports = { update, create, changedirection, moveto, area };
  }

