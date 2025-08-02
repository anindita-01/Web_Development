const socket= io("http://localhost:8000");

const form= document.getElementById('send-container')
const messegeInput= document.getElementById('messageInp')
const messegeContainer= document.querySelector('container')

const userName = prompt("Enter your userName to join");
socket.emit("new-user-joined", userName);