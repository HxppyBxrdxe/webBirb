@font-face {
  font-family: 'Archive';
  src: url('fonts/Archive-Regular.woff2') format(woff2);
}

body{
  padding: 25px;
  background: rgb(119,191,255);
background: linear-gradient(180deg, rgba(119,191,255,1) 0%, rgba(236,144,248,1) 100%);
}

header{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background: #1abc9c;
  color: white;
  text-align: center;
}

/* Sticky Header */
.stickyheader {
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 10px 30px;
  background: rgba(236,144,248,1);
  color: #f1f1f1;
  z-index: 999;
  text-align: center;
}

/* Hamburger Button */
.hamburger {
  position: absolute;
  left: 10px;
  top: 10px;
  background: transparent;
  border: none;
  color: #f1f1f1;
  font-size: 30px;
  cursor: pointer;
  z-index: 1001; /* Above everything */
}

/* Sidebar (Initially Hidden Off-screen) */
.sidebar {
  font-family: Archive;
  position: fixed;
  top: 0;
  left: -350px; /* Start hidden off-screen */
  width: 300px;
  height: 100%;
  background: #333;
  color: white;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0,0,0,0.5);
  z-index: 1002; /* Above header but below overlay */
  display: flex;
  flex-direction: column;
  transition: left 0.5s ease; /* Smooth sliding animation */
}

/* Sidebar Open (Slide in from Left) */
.sidebar.open {
  left: 0; /* Slide in */
}

/* Close Button */
.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  transition: color 0.3s ease; /* Smooth color transition */
}

/* Hover Effect: Change to Red */
.close-btn:hover {
  color: red;
}

/* Sidebar Links */
.sidebar ul {
  list-style: none;
  padding: 0;
  margin-top: 50px;
}

.sidebar ul li {
  margin: 20px 0;
}

.sidebar ul li a {
  text-decoration: none;
  color: white;
  font-size: 24px;
  transition: color 0.3s;
}

.sidebar ul li a:hover {
  color: #1abc9c;
}

/* Overlay (Hidden by Default) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  opacity: 0; /* Hidden initially */
  visibility: hidden; /* Hide for accessibility */
  transition: opacity 0.5s ease; /* Fade in animation */
  z-index: 1001; /* Below sidebar */
}

/* Overlay Visible (When sidebar is open) */
.overlay.show {
  opacity: 1;
  visibility: visible;
}

/* Ensure Image Responsiveness */
.stickyheader img {
  max-width: 100%;
  height: auto;
}

.stickywebBirb {
  font-family: Archive, sans-serif;
}

/* Typewriter Cursor Effect */
#typewriter {
  display: inline-block;
  white-space: nowrap; /* Keep text on one line */
  overflow: hidden; /* Hide overflowing text */
  border-right: 2px solid white; /* Blinking cursor */
  animation: blink 0.8s steps(1) infinite;
}

@keyframes blink {
  50% { border-color: transparent; }
}
h1{
  font-family: Arial;
  font-size: 36px;
  font-style: italic;
  text-align: center;
  padding: 30px;
}

h2{
  font-family: Arial;
}

.TestNotif{
  font-family: Arial;
  font-size: 30px;
  text-align: center;
  padding-bottom: 50px;
}

h3{
  font-family: Arial;
  font-size: 24px;
  text-align: center;
  padding: 50px;
}

p{
  font-family: Verdana;
  font-size: 16px;
  text-align: center;
}

.smalltext{
  font-size:14px;
}

.smallesttext{
  font-size: 8px;
  font-family: Comic Sans MS;
}

.title {
	color: #5C6AC4;
}

.currentTime{
  padding: 50px;
  font-size: 32px;
}

.thanks{
  font-size: 10px;
  text-align: right;
}

.cooliroha {
  display: block;
  margin-left: auto;
  margin-right: 0;
}
