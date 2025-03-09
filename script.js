document.addEventListener('DOMContentLoaded', () => {
  // Time function
  function showTime() {
    document.getElementById('currentTime').innerHTML = new Date().toUTCString();
  }
  showTime();
  setInterval(function () {
    showTime();
  }, 1000);

  // Get elements for sidebar and overlay
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const closeBtn = document.getElementById('close-btn');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');

  // Function to open sidebar
  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('show');
  }

  // Function to close sidebar
  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  }

  // Open sidebar on hamburger click
  hamburgerBtn.addEventListener('click', openSidebar);

  // Close sidebar on close button click
  closeBtn.addEventListener('click', closeSidebar);

  // Close sidebar if clicking on the overlay (outside click)
  overlay.addEventListener('click', closeSidebar);

  // Typewriter effect
  const messages = ["Welcome to webBirb!", "Explore the magic!", "Join the fun!"];
  let msgIndex = 0;
  let index = 0;
  const el = document.getElementById('typewriter');

  function type() {
    if (index < messages[msgIndex].length) {
      el.textContent += messages[msgIndex][index];
      index++;
      setTimeout(type, 100); // Adjust typing speed
    } else {
      setTimeout(erase, 2000); // Pause before erasing
    }
  }

  function erase() {
    if (index > 0) {
      el.textContent = messages[msgIndex].substring(0, index - 1);
      index--;
      setTimeout(erase, 50); // Adjust deleting speed
    } else {
      msgIndex = (msgIndex + 1) % messages.length; // Cycle through messages
      setTimeout(type, 500); // Pause before starting the next message
    }
  }

  type();
});
