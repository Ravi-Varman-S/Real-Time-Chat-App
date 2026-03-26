const socket = io();

function sendMessage() {
  const input = document.getElementById("messageInput");
  const msg = input.value;

  if (msg) {
    socket.emit("chat message", msg);
    input.value = "";
  }
}

socket.on("chat message", (msg) => {
  const li = document.createElement("li");
  li.textContent = msg;
  document.getElementById("messages").appendChild(li);
});