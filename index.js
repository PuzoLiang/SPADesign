const Counter = (function() {
  let count = 0;

  function incrementCount() {
    ++count;
  }

  function getCount() {
    return count;
  }

  return {
    incrementCount,
    getCount
  }
})();

Counter.displayUtil = (function() {
  function printCount() {
    let count = Counter.getCount();
    if(count === 1) {
      count = `${count} time`;
    }else {
      count = `${count} times`;
    }
    console.log(`Count incremented ${count}`)
  }

  function displayNewCount() {
    Counter.incrementCount();
    printCount();
  }
  
  return {
    printCount,
    displayNewCount
  }
})();


Counter.displayUtil.printCount();
Counter.displayUtil.displayNewCount();
Counter.displayUtil.printCount();