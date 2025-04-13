const paths = ['images/mv4.jpg', 'images/290411.jpg']
let temp = 0
const myImage = document.querySelector("img")
const myHeading = document.querySelector('h1')

myImage.addEventListener('click', () => {
    temp = (temp + 1) % 2
    myImage.setAttribute('src', paths[temp])
})

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome, ${myName}`;
    }
  }
  

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName}`;
}

const myButton = document.querySelector('button')

myButton.addEventListener('click', () => {
    setUserName()
})