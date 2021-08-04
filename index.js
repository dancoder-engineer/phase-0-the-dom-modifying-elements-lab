// Write your code here!

const kill = document.querySelector("#main");
kill.remove();

const newHeader = document.createElement('h1');
newHeader.id="victory";
newHeader.innerHTML="Dan is the champion";

document.body.appendChild(newHeader);