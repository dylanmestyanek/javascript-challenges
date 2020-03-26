// Type JavaScript here and click "Run Code" or press Ctrl + s
// console.log('Hello, world!');
console.log("\n---------------\n[CHALLENGE] 1:\n---------------")
// CHALLENGE 1
function createFunction() {
	const newFunction = () => {
    console.log("hello");
  }
  
  return newFunction;
}

/*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

console.log("\n---------------\n[CHALLENGE] 2:\n---------------")
// CHALLENGE 2
function createFunctionPrinter(input) {
  const newFunction = () => {
    console.log(input)
  }
  
  return newFunction;
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter('sample');
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter('hello');
printHello(); // => should console.log('hello');

console.log("\n---------------\n[CHALLENGE] 3:\n---------------")
// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter () {
    counter ++;
    console.log('counter', counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();


function addByX(x) {
	const addByXInnerFunction = input => {
    return input + x;
  }
  
  return addByXInnerFunction;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
console.log(addByTwo(1)); // => should return 3
console.log(addByTwo(2)); // => should return 4
console.log(addByTwo(3)); // => should return 5

const addByThree = addByX(3);
console.log(addByThree(1)); // => should return 4
console.log(addByThree(2)); // => should return 5

const addByFour = addByX(4);
console.log(addByFour(4)); // => should return 8
console.log(addByFour(5)); // => should return 9

console.log("\n---------------\n[CHALLENGE] 4:\n---------------")
// CHALLENGE 4
function once(func) {
    let counter = 0;
    let result;

    const innerFunction = input => {
        if (counter < 1) {
            counter++;
            result = func(input);
            return result 
        } else {
            return result
        }
``    }

    return innerFunction;
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4));  // => should log 6
console.log(onceFunc(10));  // => should log 6
console.log(onceFunc(9001));  // => should log 6

console.log("\n---------------\n[CHALLENGE] 5:\n---------------")
// CHALLENGE 5
function after(count, func) { 
  let called = 1;
  
  function innerLoop() {
    if (called === count) {
      func()
    } else {
      console.log("nothing is printed")
      called++;
    }
  }
  
  return innerLoop
}

// /*** Uncomment these to check your work! ***/
const called = function() { console.log('hello') };
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed


console.log("\n---------------\n[CHALLENGE] 6:\n---------------")
// CHALLENGE 6
function delay(func, wait) {
  setTimeout(() => {
    func()
  }, wait);
}

// delay(async () => await console.log("wuuduppp"), 5000)


console.log("\n---------------\n[CHALLENGE] 7:\n---------------")
// CHALLENGE 7
function rollCall(names) {
  let counter = 0;

  const printNames = () => {
    if (counter < names.length) {
      console.log(names[counter])
      counter++;
    } else {
      console.log('Everyone accounted for.')
    }
  }
  
  return printNames;
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(['Victoria', 'Juan', 'Ruth'])
rollCaller() // => should log 'Victoria'
rollCaller() // => should log 'Juan'
rollCaller() // => should log 'Ruth'
rollCaller() // => should log 'Everyone accounted for'


console.log("\n---------------\n[CHALLENGE] 8:\n---------------")
// CHALLENGE 8
function saveOutput(func, magicWord) {
  let values = {};
  
  const insideFunction = input => {
    if (input !== magicWord) {
      values[input] = func(input);
      return values[input];
    } else {
      return values;
    }
  }
  
  return insideFunction;
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function(num) { return num * 2; };
const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog('boo')); // => should log { 2: 4, 9: 18 }


console.log("\n---------------\n[CHALLENGE] 9:\n---------------")
// CHALLENGE 9
function cycleIterator(array) {
  let counter = -1;

  const printItemsInArray = () => {
    if (counter < array.length - 1) {
      counter++;
      return array[counter];
    } else {
      counter = 0;
      return array[counter];
    }
  };

  return printItemsInArray;
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'

console.log("\n---------------\n[CHALLENGE] 10:\n---------------")
// CHALLENGE 10
function defineFirstArg(func, arg) {

  const insideFunction = innerArg => {
    return func(arg, innerArg);
  }; 

  return insideFunction;
}

// /*** Uncomment these to check your work! ***/
const subtract = function(big, small) { return big - small; };
const subFrom20 = defineFirstArg(subtract, 20);
console.log(subFrom20(5)); // => should log 15

console.log("\n---------------\n[CHALLENGE] 11:\n---------------")
// CHALLENGE 11
function dateStamp(func) {

  const innerFunction = n => {
    return { date: String(new Date()), output: func(n) }
  };

  return innerFunction;
}

// /*** Uncomment these to check your work! ***/
const stampedMultBy2 = dateStamp(n => n * 2);
console.log(stampedMultBy2(4)); // => should log { date: (today's date), output: 8 }
console.log(stampedMultBy2(6)); // => should log { date: (today's date), output: 12 }


// CHALLENGE 12
function censor() {

}

// /*** Uncomment these to check your work! ***/
// const changeScene = censor();
// changeScene('dogs', 'cats');
// changeScene('quick', 'slow');
// console.log(changeScene('The quick, brown fox jumps over the lazy dogs.')); // => should log 'The slow, brown fox jumps over the lazy cats.'


// CHALLENGE 13
function createSecretHolder(secret) {

}

// /*** Uncomment these to check your work! ***/
// obj = createSecretHolder(5)
// obj.getSecret() // => returns 5
// obj.setSecret(2)
// obj.getSecret() // => returns 2


// CHALLENGE 14
function callTimes() {

}

// /*** Uncomment these to check your work! ***/
// let myNewFunc1 = callTimes();
// let myNewFunc2 = callTimes();
// myNewFunc1(); // => 1
// myNewFunc1(); // => 2
// myNewFunc2(); // => 1
// myNewFunc2(); // => 2


// CHALLENGE 15
function russianRoulette(num) {

}

// /*** Uncomment these to check your work! ***/
// const play = russianRoulette(3);
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'click'
// console.log(play()); // => should log 'bang'
// console.log(play()); // => should log 'reload to play again'
// console.log(play()); // => should log 'reload to play again'


// CHALLENGE 16
function average() {

}

// /*** Uncomment these to check your work! ***/
// const avgSoFar = average();
// console.log(avgSoFar()); // => should log 0
// console.log(avgSoFar(4)); // => should log 4
// console.log(avgSoFar(8)); // => should log 6
// console.log(avgSoFar()); // => should log 6
// console.log(avgSoFar(12)); // => should log 8
// console.log(avgSoFar()); // => should log 8


// CHALLENGE 17
function makeFuncTester(arrOfTests) {
  
}

// /*** Uncomment these to check your work! ***/
// const capLastTestCases = [];
// capLastTestCases.push(['hello', 'hellO']);
// capLastTestCases.push(['goodbye', 'goodbyE']);
// capLastTestCases.push(['howdy', 'howdY']);
// const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
// const capLastAttempt1 = str => str.toUpperCase();
// const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(shouldCapitalizeLast(capLastAttempt1)); // => should log false
// console.log(shouldCapitalizeLast(capLastAttempt2)); // => should log true


// CHALLENGE 18
function makeHistory(limit) {

}

// /*** Uncomment these to check your work! ***/
// const myActions = makeHistory(2);
// console.log(myActions('jump')); // => should log 'jump done'
// console.log(myActions('undo')); // => should log 'jump undone'
// console.log(myActions('walk')); // => should log 'walk done'
// console.log(myActions('code')); // => should log 'code done'
// console.log(myActions('pose')); // => should log 'pose done'
// console.log(myActions('undo')); // => should log 'pose undone'
// console.log(myActions('undo')); // => should log 'code undone'
// console.log(myActions('undo')); // => should log 'nothing to undo'


// CHALLENGE 19
function blackjack(array) {

}

// /*** Uncomment these to check your work! ***/

// /*** DEALER ***/
// const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);

// /*** PLAYER 1 ***/
// const i_like_to_live_dangerously = deal(4, 5);
// console.log(i_like_to_live_dangerously()); // => should log 9
// console.log(i_like_to_live_dangerously()); // => should log 11
// console.log(i_like_to_live_dangerously()); // => should log 17
// console.log(i_like_to_live_dangerously()); // => should log 18
// console.log(i_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'
// console.log(i_like_to_live_dangerously()); // => should log 'you are done!'

// /*** BELOW LINES ARE FOR THE BONUS ***/

// /*** PLAYER 2 ***/
// const i_TOO_like_to_live_dangerously = deal(2, 2);
// console.log(i_TOO_like_to_live_dangerously()); // => should log 4
// console.log(i_TOO_like_to_live_dangerously()); // => should log 15
// console.log(i_TOO_like_to_live_dangerously()); // => should log 19
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_TOO_like_to_live_dangerously()); // => should log 'you are done!

// /*** PLAYER 3 ***/
// const i_ALSO_like_to_live_dangerously = deal(3, 7);
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 10
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 13
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'bust'
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
// console.log(i_ALSO_like_to_live_dangerously()); // => should log 'you are done!
