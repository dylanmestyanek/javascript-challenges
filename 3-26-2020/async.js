/* CHALLENGE 1 */
console.log("\n---------------\n[CHALLENGE] 1:\n---------------")
function sayHowdy() {
    console.log('Howdy');
  }
  
  function testMe() {
    // setTimeout(sayHowdy, 0);
    console.log('Partnah');
  }
  // After thinking it through, uncomment the following line to check your guess!
  testMe(); // what order should these log out? Howdy or Partnah first?
  
  
  /* CHALLENGE 2 */
console.log("\n---------------\n[CHALLENGE] 2:\n---------------")

  function delayedGreet() {
    // setTimeout(() => console.log("welcome"), 3000)
  }
  // Uncomment the following line to check your work!
  delayedGreet(); // should log (after 3 seconds): welcome
  
  
  /* CHALLENGE 3 */
  console.log("\n---------------\n[CHALLENGE] 3:\n---------------")  
  function helloGoodbye() {
    console.log("hello")
    // setTimeout(() => console.log("good bye"), 2000)
  }
  // Uncomment the following line to check your work!
  helloGoodbye(); // should log: hello // should also log (after 3 seconds): good bye
  
  
  /* CHALLENGE 4 */
console.log("\n---------------\n[CHALLENGE] 4:\n---------------")
  function brokenRecord() {
    // setInterval(() => console.log("hi again"), 1000)
  }
  // Uncomment the following line to check your work!
  brokenRecord(); // should log (every second): hi again
  
  
  /* CHALLENGE 5 */
console.log("\n---------------\n[CHALLENGE] 5:\n---------------")
  function limitedRepeat() {
    // const consoleLog = setInterval(() => console.log("hi for now"), 1000)
    // setTimeout(() => clearInterval(consoleLog), 5000)
  }
  // Uncomment the following line to check your work!
  limitedRepeat(); // should log (every second, for 5 seconds): hi for now
  
  
  /* CHALLENGE 6 */
console.log("\n---------------\n[CHALLENGE] 6:\n---------------")
  function everyXsecsForYsecs(func, interval, duration) {
    // const funcInterval = setInterval(() => func(), interval * 1000);
    // setTimeout(() => clearInterval(funcInterval), duration * 1000);
  }
  // Uncomment the following lines to check your work!
  function theEnd() {
    console.log('This is the end!');
  }
  everyXsecsForYsecs(theEnd, 2, 20); // should invoke theEnd function every 2 seconds, for 20 seconds): This is the end!
  
  
  /* CHALLENGE 7 */
console.log("\n---------------\n[CHALLENGE] 7:\n---------------")
  function delayCounter(target, wait) {
  //   let counter = 1;
  //   const innerFunc = () => {
  //     setInterval(() => console.log(counter++), wait);
  //   };

  //   return innerFunc;
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const countLogger = delayCounter(3, 1000)
  // countLogger();
  // After 1 second, log 1
  // After 2 seconds, log 2
  // After 3 seconds, log 3
  
  /* CHALLENGE 8 */
console.log("\n---------------\n[CHALLENGE] 8:\n---------------")
  function promised (val) {
    return new Promise((resolve, reject) => resolve(val))
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const createPromise = promised('wait for it...');
  // createPromise.then((val) => console.log(val)); 
  // will log "wait for it..." to the console after 2 seconds
  
  /* CHALLENGE 9 */
console.log("\n---------------\n[CHALLENGE] 9:\n---------------")
  // class SecondClock {
  //   constructor(cb) {
  //     this.cb = cb;
  //     this.seconds = 55;
  //     this.timer = 0;
  //   }

  //   start() {
  //     this.timer = setInterval(() => {
  //       this.seconds > 60 && (this.seconds = 1);
  //       this.cb(this.seconds++);
  //     }, 1000);
  //   }

  //   reset() {
  //     clearInterval(this.timer);
  //   }
  // }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  // const clock = new SecondClock((val) => { console.log(val) });
  // console.log("Started Clock.");
  // clock.start();
  // setTimeout(() => {
  //     clock.reset();
  //     console.log("Stopped Clock after 6 seconds.");
  // }, 6000);
  
  /* CHALLENGE 10 */
  
  function debounce(callback, interval) {
    let timer = 0;
    let called = 0;
    let seconds = 0;

    const innerFunc = () => {
      // timer = setInterval(() => seconds += 1000, 1000);

      console.log("SECONDS", seconds)
      if (called === 0) {
        console.log("hit the 1 block")
        called++;
        return callback();
      } else if (seconds === interval) {
        console.log("hit the 2 block")
        return callback();
      } else {
        console.log("hit the 3 block")
        seconds = 0;
        // clearInterval(timer);
      }

      return "done"
    };

    return innerFunc;
  }
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  function giveHi() { return 'hi'; }
  const giveHiSometimes = debounce(giveHi, 3000);
  console.log(giveHiSometimes()); // -> 'hi'
  setTimeout(function() { console.log(giveHiSometimes()); }, 2000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 4000); // -> undefined
  // setTimeout(function() { console.log(giveHiSometimes()); }, 8000); // -> 'hi'
  
  