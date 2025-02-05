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
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();

    // TODO 2 - Create Platforms
    createPlatform(0,650,50,20,"gold")
    createPlatform(100,530,50,20,"gold")
    createPlatform(250,430,130,20,"gold")
    createPlatform(400,430,500,20,"gold")
    createPlatform(400,300,500,20,"gold")
    createPlatform(950,430,130,20,"gold")
    createPlatform(1100,340,130,20,"gold")
    createPlatform(1300,275,100,20,"gold")
    createPlatform(1100,200,100,20,"gold")
    createPlatform(200,200,100,20,"gold")
    createPlatform(100,200,10,10,"gold")
    createPlatform(200,110,50,20,"gold")


    // TODO 3 - Create Collectables
    createCollectable("diamond", 100,100, 0.5, 0.7);
    createCollectable("diamond",1300,250,0.5,0.7)
    createCollectable("diamond",220,100,0.5,0.7)
    createCollectable("diamond",600,260,0.5,0.7)


    // TODO 4 - Create Cannons
    createCannon("bottom", 200, 700)
    createCannon("right", 800, 10)
    createCannon("right", 300, 700)

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
