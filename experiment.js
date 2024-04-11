class Experiment {
  // Group Details
  static rollNos = '102103439,102103441,102103442'
  static names = 'Punjabi Kings (Parasmani, Saksham,Digvijay Singh Sidhu)'

  canvasSel = '#myCanvas'

  run() {

    // Run the Steppers
    // this.runSteppers()

    // Hide Steppers
    this.hideSteppers()
    canvasSetup(this.canvasSel)

    // Clock
    // --------------------------------------------------
    const clock = new Clock(this.canvasSel)
    // const ms = document.timeline.currentTime
    // clock.draw(ms)
    // clock.draw(ms+25000)
    const clockRafFn = (ts) => {
      clock.draw(ts)
      window.requestAnimationFrame(clockRafFn)
    }
    const clockRaf = window.requestAnimationFrame(clockRafFn)
    
  }

  runSteppers() {

    // Steppers
    // --------------------------------------------------
    const stepperOneRaf
	  = window.requestAnimationFrame(stepperOne)

    const stepperTwoRaf
	  = window.requestAnimationFrame(stepperTwo)

    const stepperThree = new StepperThree(
      '#valueFromStepperThree', 15
    )
    const stepperThreeFn = (ts) => {
      if (!stepperThree.isActive) stepperThree.start()
      stepperThree.step(ts)
      window.requestAnimationFrame(stepperThreeFn)
    }
    const stepperThreeRaf
	  = window.requestAnimationFrame(stepperThreeFn)
    // --------------------------------------------------
    
  }

  hideSteppers() {
    document.querySelector('#side-note')
      .classList.add('hidden')
  }
}

// // Define the canvas element
// const canvas = document.getElementById('fireworks-canvas');
// const ctx = canvas.getContext('2d');

// // Set the canvas dimensions
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// // Define the firework properties
// const fireworkCount = 10;
// const fireworkRadius = 10;
// const fireworkLifetime = 2000; // milliseconds
// const sparkCount = 30;
// const sparkRadius = 3;
// const sparkLifetime = 1000; // milliseconds
// const gravity = 0.2;

// // Firework object
// class Firework {
//   constructor() {
//     this.x = Math.random() * canvas.width;
//     this.y = canvas.height;
//     this.vx = Math.random() * 4 - 2;
//     this.vy = Math.random() * -10 - 5;
//     this.radius = fireworkRadius;
//     this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
//     this.createdAt = performance.now();
//     this.sparks = [];
//   }

//   update() {
//     this.x += this.vx;
//     this.y += this.vy;
//     this.vy += gravity;

//     // Create sparks
//     if (this.y + this.radius >= 0 && this.sparks.length < sparkCount) {
//       for (let i = 0; i < sparkCount; i++) {
//         this.sparks.push(new Spark(this.x, this.y, this.color));
//       }
//     }

//     // Update and remove expired sparks
//     for (let i = 0; i < this.sparks.length; i++) {
//       const spark = this.sparks[i];
//       spark.update();
//       if (performance.now() - spark.createdAt > sparkLifetime) {
//         this.sparks.splice(i, 1);
//         i--;
//       }
//     }
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = this.color;
//     ctx.fill();

//     // Draw sparks
//     for (const spark of this.sparks) {
//       spark.draw();
//     }
//   }
// }

// // Spark object
// class Spark {
//   constructor(x, y, color) {
//     this.x = x;
//     this.y = y;
//     this.vx = Math.random() * 4 - 2;
//     this.vy = Math.random() * -4 - 2;
//     this.radius = sparkRadius;
//     this.color = color;
//     this.createdAt = performance.now();
//   }

//   update() {
//     this.x += this.vx;
//     this.y += this.vy;
//     this.vy += gravity;
//   }

//   draw() {
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
//     ctx.fillStyle = this.color;
//     ctx.fill();
//   }
// }

// // Fireworks array
// const fireworks = [];

// // Game loop
// function gameLoop() {
//   // Clear the canvas
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   // Create new fireworks
//   if (fireworks.length < fireworkCount && Math.random() < 0.02) {
//     fireworks.push(new Firework());
//   }

//   // Update and draw the fireworks
//   for (let i = 0; i < fireworks.length; i++) {
//     const firework = fireworks[i];
//     firework.update();
//     firework.draw();

//     // Remove fireworks that have expired
//     if (performance.now() - firework.createdAt > fireworkLifetime) {
//       fireworks.splice(i, 1);
//       i--;
//     }
//   }

//   // Request the next animation frame
//   requestAnimationFrame(gameLoop);
// }

// // Start the game
// gameLoop();