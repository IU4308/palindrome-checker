const checkBtn = document.getElementById("check-btn");
const input = document.getElementById("text-input");
const result = document.getElementById("result")
let str;
let inputArr = []
let inputArrInv = []
let inputText = ""
let inputTextInv = ""

const filter = (str) => {
    const regex = /[!?={}@#$%^&*()/`<>:;_.,~|+-\s\\\"\'\[\]]/g;
    return str.replace(regex, '');
}

const check = (str) => {

    if (str === "") {
        alert("Please input a value")
        return;
    }

    let strCopy = filter(str).toLowerCase()
    /* for (const index in strCopy) {
        inputArr[index] = strCopy[index]
    } */

    inputArr = strCopy.split("")

    inputArrInv = [...inputArr].reverse()

    inputText = inputArr.join("")
    inputTextInv = inputArrInv.join("")

    console.log(inputText)
    console.log(inputTextInv)

    if (inputText === inputTextInv) {
        result.innerText = `${str} is a palindrome`
    } else {
        result.innerText = `${str} is not a palindrome`
    }
    inputArr = [];
    inputArrInv = [];
}

checkBtn.addEventListener("click", () => {
    check(input.value)
})