const targetDate = new Date('January 1, 2025 00:00:00').getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');

  if (timeLeft < 0) {
    clearInterval(timer);
    document.getElementById('timer').textContent = "🎉 Happy New Year! 🎉";
  }
}

const timer = setInterval(updateCountdown, 1000);
updateCountdown();

const previewButton = document.getElementById('previewButton');
const message = document.getElementById('message');

previewButton.addEventListener('click', () => {
  message.classList.toggle('hidden');
});

const snowContainer = document.getElementById('new_year');
        const snowflakes = [];
        const snowflakeCharacters = ['❄', '❅', '❆','❉'];

        function createSnowflake() {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.textContent = snowflakeCharacters[Math.floor(Math.random() * snowflakeCharacters.length)];
            snowflake.style.left = Math.random() * snowContainer.clientWidth + 'px';
            snowflake.style.fontSize = Math.random() * 10 + 10 + 'px';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            snowflake.style.opacity = Math.random();
            snowContainer.appendChild(snowflake);
            snowflakes.push(snowflake);
        }

        function animateSnowflakes() {
            snowflakes.forEach((snowflake, index) => {
                const top = parseFloat(window.getComputedStyle(snowflake).top);
                if (top > snowContainer.clientHeight) {
                    snowflake.remove();
                    snowflakes.splice(index, 1);
                } else {
                    snowflake.style.top = top + 2 + 'px';
                }
            });
        }

        setInterval(() => {
            createSnowflake();
        }, 200);

        setInterval(() => {
            animateSnowflakes();
        }, 20);

        