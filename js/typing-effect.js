const text = "건당 가입하는 발렛보험 앱";
const typingEffect = document.getElementById("typing-effect");
let index = 0;
let typingInterval;
let deleting = false;

function type() {
  if (index < text.length) {
    typingEffect.innerHTML += text.charAt(index);
    index++;
  } else {
    clearInterval(typingInterval);
    setTimeout(() => {
      deleting = true;
      typingInterval = setInterval(deleteText, 100);
    }, 1000);
  }
}

function deleteText() {
  if (index > 0) {
    typingEffect.innerHTML = typingEffect.innerHTML.slice(0, -1);
    index--;
  } else {
    clearInterval(typingInterval);
    deleting = false;
    setTimeout(() => {
      index = 0;
      startTyping();
    }, 1000);
  }
}

function startTyping() {
  typingInterval = setInterval(type, 200);
}

startTyping();
