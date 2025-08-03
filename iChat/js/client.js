const socket = io("http://localhost:8000");

const form = document.getElementById("send-container");
const messegeInput = document.getElementById("messageInp");
const messegeContainer = document.querySelector(".container");
var audio = new Audio("ting.mp3");

const append = (messege, position) => {
  const messegeElement = document.createElement("div");
  messegeElement.innerText = messege;
  messegeElement.classList.add("messege");
  messegeElement.classList.add(position);
  messegeContainer.append(messegeElement);
  if (position == "left") audio.play();
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const message = messegeInput.value;
  append(`You: ${message}`, "right");
  socket.emit("send", message);
  messegeInput.value = "";
});

// const userName = prompt("Enter your userName to join");
socket.emit("new-user-joined", userName);

socket.on("user-joined", (userName) => {
  append(`${userName} joined the chat`, "right");
});

socket.on("receive", (data) => {
  append(`${data.userName} : ${data.messege}`, "left");
});

socket.on("left", (userName) => {
  append(`${userName} left the chat`, "right");
});
