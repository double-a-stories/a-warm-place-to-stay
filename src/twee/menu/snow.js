/*!
 * Snow.js, originally from kurisubrooks.com
 * This script is based on Snow.js, created by @kurisubrooks and @alecos71
 * License: MIT
*/

$(window).on("sm.passage.shown", function(){
  if (!document.getElementById("sky")) {
    return;
  }
  //get the cancvas and context and store in vars
  const canvas = document.getElementById("sky");
  const ctx = canvas.getContext("2d");


  function getDimensions() {
    return [
      parseFloat(getComputedStyle(canvas).width),
      parseFloat(getComputedStyle(canvas).height)
    ];
  }
  let [width, height] = getDimensions();
  document.addEventListener("resize", () => {
    [width, height] = getDimensions();
  })


  //generate the snowflakes and apply attributes
  const maxFlakes = 50; //max flakes
  const flakes = [];

  //loop through the empty flakes and apply attributes
  for(let i = 0; i < maxFlakes; i++)
  {
    flakes.push({
      x: Math.random()*width,
      y: Math.random()*height,
      r: Math.random()*2+1, //min of 2px and max of 7px
      d: (Math.random() + 1) / 3 //density of the flake
    })
  }

  //draw flakes onto canvas
  function drawFlakes()
  {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "white";
    ctx.beginPath();
    for(const f of flakes) {
      ctx.moveTo(f.x, f.y);
      ctx.arc(f.x, f.y, f.r, 0, Math.PI*2, true);
    }
    ctx.fill();
    moveFlakes();
  }

  //animate the flakes
  var angle = 0;
  function moveFlakes(){
    angle += 0.01;
    for(var i = 0; i < maxFlakes; i++)
    {
      //store current flake
      var f = flakes[i];

      //update X and Y coordinates of each snowflakes
      f.y += Math.pow(f.d, 2) + 1;
      f.x += Math.sin(angle) * 0.5 * f.d;

      //if the snowflake reaches the bottom, send a new one to the top
      if(f.y > height){
        flakes[i] = {x: Math.random()*width, y: 0, r: f.r, d: f.d};
      }
    }
  }

  setInterval(drawFlakes, 25);
});