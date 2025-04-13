// ==== Partie Calculette ====

let screen = document.getElementById("screen");

function append(value) {
  if (screen.innerText === "0" || screen.innerText === "Erreur") {
    screen.innerText = value;
  } else {
    screen.innerText += value;
  }
}

function clearScreen() {
  screen.innerText = "0";
}

function del() {
  screen.innerText = screen.innerText.slice(0, -1);
  if (screen.innerText === "") {
    screen.innerText = "0";
  }
}

function calculate() {
  try {
    screen.innerText = eval(screen.innerText.replace('%', '/100'));
  } catch {
    screen.innerText = "Erreur";
  }
}

// ==== Partie "Me contacter avec questions" ====

const contactBtn = document.getElementById('contact-btn');
if (contactBtn) {
  contactBtn.addEventListener('click', () => {
    const contactSection = document.getElementById('contact-section');
    if (contactSection) {
      contactSection.style.display = 'block';
    }
  });
}

const quizForm = document.getElementById('quiz-form');
if (quizForm) {
  quizForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const answer1 = document.getElementById('q1').value.trim();
    const answer2 = document.getElementById('q2').value.trim().toLowerCase();

    if (answer1 === '4' && (answer2 === 'bleu' || answer2 === 'blue')) {
      quizForm.style.display = 'none';
      const successMsg = document.getElementById('contact-success');
      if (successMsg) {
        successMsg.style.display = 'block';
      }
    } else {
      alert("Mauvaise réponse, essayez encore !");
    }
  });
}


