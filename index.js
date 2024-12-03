import { jsJokes } from "./data";

const calendarContainer = document.getElementById('calendar');

document.getElementById("accordionButton").addEventListener("click", () => toggleAccordion())
document.getElementById("x").addEventListener("click", () => closeGiftModal());

for (let i = 1; i <= 25; i++) {
  let box = document.createElement('li');
  box.classList.add('calendar-box');
  let number = document.createElement('p');
  number.innerHTML = i;
  const icon = document.createElement('i');
  icon.classList.add('fas', 'fa-gift');
  let description = document.createElement('p');
  description.innerHTML = "Open me!";
  description.classList.add("sr-only");
  box.appendChild(number);
  box.appendChild(icon);
  box.appendChild(description);
  box.onclick = () => openGiftModal(i);
  calendarContainer.appendChild(box);
}

function toggleAccordion() {
  document.getElementById("panel").classList.toggle("hidden");
  document.getElementById("caret").classList.toggle("fa-caret-down");
  document.getElementById("caret").classList.toggle("fa-caret-up");
}

function openGiftModal(giftNumber) {
  document.getElementById("main").style.filter = "blur(2px)";
  document.getElementById("modal").classList.remove("hidden");
  jsJokes.forEach(joke => {
    if (joke.id === giftNumber) {
      document.getElementById("modalTitle").textContent = joke.title;
      document.getElementById("modalSetup").textContent = joke.setup;
      document.getElementById("panelText").textContent = joke.punchline;
    }
  })
}

function closeGiftModal() {
  document.getElementById("main").style.filter = "blur(0)";
  document.getElementById("modal").classList.add("hidden");
}
