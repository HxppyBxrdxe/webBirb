document.addEventListener('DOMContentLoaded', () => {
    // Function to format and show time
    function showTime() {
      const currentTime = new Date();
      const hours = String(currentTime.getHours()).padStart(2, '0');
      const minutes = String(currentTime.getMinutes()).padStart(2, '0');
      const seconds = String(currentTime.getSeconds()).padStart(2, '0');
      
      document.getElementById('currentTime').innerHTML = `${hours}:${minutes}:${seconds}`;  // Show only time
    }
  
    showTime();
    setInterval(function () {
      showTime();
    }, 1000);

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
  
    // Open and closr sidebar on hamburger click
    hamburgerBtn.addEventListener('click', openSidebar);

    closeBtn.addEventListener('click', closeSidebar);

    overlay.addEventListener('click', closeSidebar);
  });

// Function to calculate item age
function getItemAge(releaseDate) {
  const release = new Date(releaseDate);
  const today = new Date();
  let age = today.getFullYear() - release.getFullYear();

  // Adjust age if the anniversary hasn't happened this year
  if (
    today.getMonth() < release.getMonth() ||
    (today.getMonth() === release.getMonth() && today.getDate() < release.getDate())
  ) {
    age--;
  }
  return age;
}

// Function to calculate next anniversary countdown
function getNextAnniversary(releaseDate) {
  const today = new Date();
  const release = new Date(releaseDate);
  let nextAnniversary = new Date(today.getFullYear(), release.getMonth(), release.getDate());

  // If this year's anniversary has passed, use next year
  if (today > nextAnniversary) {
    nextAnniversary.setFullYear(today.getFullYear() + 1);
  }

  // Calculate the difference in days
  const timeDiff = nextAnniversary - today;
  const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  return daysLeft;
}

// Function to update the display
function displayItemInfo() {
  const releaseDate = "2006-09-07";
  const age = getItemAge(releaseDate);
  const daysToNext = getNextAnniversary(releaseDate);

  document.getElementById("itemAge").textContent = `${age} years old`;
  document.getElementById("nextAnniversary").textContent = `${daysToNext} days left`;
}
  
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".showButton");
  const contents = document.querySelectorAll(".content");

  buttons.forEach((button, index) => {
      button.addEventListener("click", function () {
          contents[index].style.display = "block"; // Show corresponding content
      });
  });
});
