const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);

  function parent() { // function interna
    const inner = 2;
    console.log(myNumber, myGlobal);

    function child() {
      console.log(inner, myNumber, myGlobal);
    }

    return child();
  }

  return parent();
}

myFunction();

function sumWithClosure(firstNum) {
 
  return function suma(firstNum) {
    const secondNum = Number;
    return (secondNum) => !secondNum ? firstNum : firstNum + secondNum
  }
}

sumWithClosure(2)(3);