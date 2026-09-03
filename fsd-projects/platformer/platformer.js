$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
//createplatform(x, y, width, height, "color")
createPlatform(500, 0, 20, 290);
createPlatform(1350, 400, 50, 50, "grey");
createPlatform(600, 100, 30, 590);
createPlatform(550, 600, 50, 50, "grey");
createPlatform(250, 100, 30, 590);
createPlatform(200, 605, 50, 50, "grey");
createPlatform(30, 550, 60, 50, "grey");
createPlatform(200, 410, 60, 50, "grey");
createPlatform(30, 350, 60, 50, "grey");


    // TODO 3 - Create Collectables
    //createCollectable('type', x, y)
    createCollectable('database',800,450,0,1)



    
    // TODO 4 - Create Cannons
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
