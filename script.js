document.addEventListener('DOMContentLoaded', () => {
    // Function to format and show time (hh:mm:ss format only)
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
  
    // Sidebar functionality remains unchanged
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
  });
