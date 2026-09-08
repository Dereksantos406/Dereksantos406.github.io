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
createPlatform(420, 0, 20, 290);
createPlatform(1350, 400, 50, 50, "grey");
createPlatform(600, 200, 20, 500);
createPlatform(550, 600, 50, 50, "grey");
createPlatform(250, 100, 30, 590);
createPlatform(200, 605, 50, 50, "grey");
createPlatform(30, 550, 60, 50, "grey");
createPlatform(200, 415, 60, 50, "grey");
createPlatform(30, 350, 60, 50, "grey");
createPlatform(200, 213, 60, 50, "grey");
createPlatform(390, 510, 60, 50, "grey");
createPlatform(540, 400, 60, 50, "grey");
createPlatform(420, 280, 60, 50, "grey");
createBadPlatform(620,600,280,20,"red");
createPlatform(900, 207, 20, 500);
createPlatform(870, 200, 50, 10,);
createFakePlatform(730, 200, 50, 10);
createBadPlatform(300,650,280,20,"red");
createPlatform(300, 200, 50, 20, "orange", 1000, 1000, 600, 200, 400, 1);
createPlatform(300, 200, 50, 20, "orange", 1200, 1200, 600, 200, 400, 1);
createBadPlatform(900, 600, 500, 20)

    // TODO 3 - Create Collectables
    //createCollectable('type', x, y)
    createCollectable('database',1350,100,0,1);
    createCollectable('database',190,80,0,1);
    createCollectable('database',400,450,0,1);
    createCollectable('database',100,700,0,1);

    
    // TODO 4 - Create Cannons
    //createCannon("side", "position", "delay")
    createCannon("right", 250, 2000)
    createCannon("right", 550, 2000)
    createCannon("top", 800, 2500)
    


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
