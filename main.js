// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

const convertNumbertoString = num => {
  const result = num.toString()
  return result
}

// Write a JavaScript program to convert a string to the number.

const convertStringToNum = (str) => {
  const result = Number (str)
  console.log(typeof result)
  return result
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const checkDataType = (element) => {
  return typeof element
}

// Write a JavaScript program that adds 2 numbers together.

const addNums = (num1, num2) => {
  let result = num1 + num2
  return result
}

console.log(addNums(7, 10))

// Write a JavaScript program that runs only when 2 things are true.

const bothTrue = (a, b, c) => {
  if (a > b && c > b) {
    return "These are both true!!!"
  } else {
    return false
  } 
}

// Write a JavaScript program that runs when 1 of 2 things are true.

const oneTrue = (x, y) => {
  if (x + y > 20 || x === 10) {
    return "One of these must be true!!!"
  } else {
    return false
  }
}

// Write a JavaScript program that runs when both things are not true.  

const nothingTrue = (par1, par2) => {
  if (par1 != par2 && par1 != 10) {
    return "nothing is true..."
  } else {
    return false
  }
}

const notTrue = (x, y) => {
  if (!x && !y) {
    return "both are falsey"
  } else {
    return "both are truthy"
  }
}

console.log(notTrue(false, false))
console.log(notTrue(true, true))


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

const inputNum = document.querySelector("#number")
const inputText = document.querySelector("#text")
const number = document.getElementById("number")
const text = document.getElementById("text")
const button = document.querySelector("#display-str")
const display = document.querySelector("#display")
const displayType = document.querySelector("#type-of")
const addThis = document.getElementById("text2")
const parOne = document.getElementById("par1")
const parTwo = document.getElementById("par2")
const bothNotTrue = document.getElementById("text4")
const inputForA = document.getElementById("a")
const inputForB = document.getElementById("b")
const inputForC = document.getElementById("c")
let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let firstNum = null 
let secondNum = null
let a = null
let b = null
let c = null
let str = ""
let str2 = ""

// const inputOneTrue = document.querySelector(".one-true") // why not selecting both??? //

// converting number to string display //

inputNum.addEventListener("click", (e) => {
  str = e.target.value;
  console.log(e.target.value)
})


const displayStr = () => { 
  let result = convertNumbertoString(str)
  display.innerText = result
  displayType.innerText = checkDataType(result)
  number.value = ""

  // button.addEventListener("click", (e) => {
    //   let result = convertStringToNum(str)
    //   display.innerText = result
    // })
  }

/////////////////////////////////////////////
  
  // converting string to number display //

inputText.addEventListener("keyup", (e) => {
  str = e.target.value;
  console.log(e.target.value)
})

const displayNum = () => {
  let result = convertStringToNum(str)
  display.innerText = result
  displayType.innerText = checkDataType(result)
  text.value = ""
}

//////////////////////////////////////////////

// adding two numbers to get the sum //

const inputNumOne = (num) => {
  firstNum = parseInt(num) 
  console.log(firstNum)
  return firstNum
}

const inputNumTwo = (num) => {
  secondNum = parseInt(num)
  console.log(secondNum)
  return secondNum
}

const addThese = () => {
  let result = addNums(firstNum, secondNum)
  console.log(result)
  display.innerText = result
  displayType.innerText = checkDataType(result)
  num1.value = ""
  num2.value = ""
}
  
  // checking if one or the other is true //
  
const displayOneTrue = () => {
  let result = oneTrue(firstNum, secondNum)
  console.log(result)
  display.innerText = result
  displayType.innerText = checkDataType(result)
  num1.value = ""
  num2.value = ""
}

//////////////////////////////////////////////

// checking if both are true //
 
const inputA = (num) => {
  a = parseInt(num)
  console.log(num)
  return a
}

const inputB = (num) => {
  b = parseInt(num)
  console.log(num)
  return b
}

const inputC = (num) => {
  c = parseInt(num)
  console.log(num)
  return c
}

const bothAreTrue = () => {
  let result = bothTrue(a, b, c)
  console.log(result)
  display.innerText = result
  displayType.innerText = checkDataType(result)
  inputForA.value = ""
  inputForB.value = ""
  inputForC.value = ""
}

// checking if neither are true //

parOne.addEventListener("click", (e) => {
  str = e.target.value
  console.log(e.target.value)
})

parTwo.addEventListener("click", (e) => {
  str2 = e.target.value
  console.log(e.target.value)
})

bothNotTrue.addEventListener("click", (e) => {
  let result = nothingTrue(str, str2)
  console.log(result)
  display.innerText = result
  displayType.innerText  = checkDataType(result)
  par1.value = ""
  par2.value = ""
})

/////////////////////////////////////////////////
    
// const displayTypeOf = () => {
  //   let result = checkDataType(str)
  //   displayType.innerText = checkDataType(result)
// }
      
// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24