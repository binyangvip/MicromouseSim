// Right Wall Following

// clear the driver object.
driver = {};

// Gets called only when downloaded to the mouse
// Performs initialization
driver.load = function() {
    // Switches to a maze that can be solved
    // using wall following.
    //mouse.loadMaze("91japa1");
}

// Figure out next move.
// Gets called each iteration of the simulator.
driver.next = function() {
    if (mouse.isGoal()) {
        alert("Center Reached!\nMoves: "+mouse.moveCount());
        mouse.stop();
        return;
    }

    // priority: right, fwd, left	
    if (mouse.isPathRight()) {
          mouse.right();
          mouse.fwd();
    } else if (mouse.isPathFwd()) {
        mouse.fwd();
    } else {
        mouse.left();
        mouse.fwd();
    }
}


