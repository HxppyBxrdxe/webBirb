document.addEventListener('DOMContentLoaded', () => {
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
  
    function openSidebar() {
      sidebar.classList.add('open');
      overlay.classList.add('show');
    }
  
   
    function closeSidebar() {
      sidebar.classList.remove('open');
      overlay.classList.remove('show');
    }
  
 
    hamburgerBtn.addEventListener('click', openSidebar);

    closeBtn.addEventListener('click', closeSidebar);

    overlay.addEventListener('click', closeSidebar);
  });


function getItemAge(releaseDate) {
  const release = new Date(releaseDate);
  const today = new Date();
  let age = today.getFullYear() - release.getFullYear();

  if (
    today.getMonth() < release.getMonth() ||
    (today.getMonth() === release.getMonth() && today.getDate() < release.getDate())
  ) {
    age--;
  }
  return age;
}


function getNextAnniversary(releaseDate) {
  const today = new Date();
  const release = new Date(releaseDate);
  let nextAnniversary = new Date(today.getFullYear(), release.getMonth(), release.getDate());

 
  if (today > nextAnniversary) {
    nextAnniversary.setFullYear(today.getFullYear() + 1);
  }


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

const buttons = document.querySelectorAll(".showButton");
const contents = document.querySelectorAll(".content");

buttons.forEach((button, index) => {
    button.addEventListener("click", function () {
        contents[index].style.display = "block";
    });

  });
document.addEventListener('DOMContentLoaded', () => {
  displayItemInfo();
});

let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
  document.body.classList.add('darkmode')
  localStorage.setItem('darkmode', 'active')
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode')
  localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem('darkmode')
  darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

document.getElementById("theme-toggle-icon").addEventListener("click", function() {
  const body = document.body;
  const icon = document.getElementById("theme-toggle-icon");

  
  icon.style.opacity = 0;

  setTimeout(() => {
     
      if (body.classList.contains("dark-mode")) {
          body.classList.replace("dark-mode", "light-mode");
          icon.src = "sun.png"; // Light mode icon
      } else {
          body.classList.replace("light-mode", "dark-mode");
          icon.src = "lighttodark.png"; // Dark mode icon
      }

      icon.style.opacity = 1;
  }, 300); 
});
