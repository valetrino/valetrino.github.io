
// event-popup

function showEvent() {
  const eventElement = document.querySelector('#event');
  eventElement.style.display = 'block';
  eventElement.classList.remove('genie-animation-out');
  eventElement.classList.add('genie-animation-in');
}

function hideEvent() {
  const eventElement = document.querySelector('#event');
  eventElement.classList.remove('genie-animation-in');
  eventElement.classList.add('genie-animation-out');
  setTimeout(() => {
      eventElement.style.display = 'none';
  }, 500);
}

// app-link
function loadHTML(url,elementId) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}


// animation-scroll
function handleScroll() {
    const elements = document.querySelectorAll('.fade-lr, .fade-rl, .fade-bt, .fade-tb');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight) {
        element.classList.add('visible');
      } else {
        element.classList.remove('visible');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', handleScroll);
  document.addEventListener('scroll', handleScroll);



