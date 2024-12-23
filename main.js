//Scrolling navbar system
document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");
  let isScrolling; // To track scrolling
  let lastScrollTop = 0;

  // Hide navbar while scrolling
  window.addEventListener("scroll", function () {
    clearTimeout(isScrolling); // Clear previous timeout

    // Hide the navbar during scroll
    navbar.style.transform = "translateY(-100%)";

    // Show navbar after scrolling stops
    isScrolling = setTimeout(function () {
      navbar.style.transform = "translateY(0)"; // Bring navbar back
    }, 200); // Adjust delay (in ms) as needed
  });
});

// Scrolling page system
//home scrolling section
let home = document.getElementById("home");
let homePage = document.getElementById("homePage");
home.addEventListener("click", function (event) {
  event.preventDefault();
  homePage.scrollIntoView({ behavior: "smooth" });
  home.style.color = "Orange";
  service.style.color = "";
  contactME.style.color = "";
  about.style.color = "";
  profession.style.color = "";
});
// service section
let service = document.getElementById("service");
let service_Section = document.getElementById("service_Section");
service.addEventListener("click", function (event) {
  event.preventDefault(); // Prevent the default anchor behavior
  service_Section.scrollIntoView({ behavior: "smooth" });
  service.style.color = "Orange";
  home.style.color = "";
  about.style.color = "";
  profession.style.color = "";
  contactME.style.color = "";
});
// about section
let about = document.getElementById("about");
let aboutPage = document.getElementById("aboutPage");
about.addEventListener("click", (event) => {
  event.preventDefault();
  aboutPage.scrollIntoView({ behavior: "smooth" });
  about.style.color = "Orange";
  home.style.color = "";
  service.style.color = "";
  profession.style.color = "";
  contactME.style.color = "";
});
// Profession section
let profession = document.getElementById("profession");
let professionPage = document.getElementById("professionPage");

profession.addEventListener("click", (event) => {
  event.preventDefault();
  professionPage.scrollIntoView({ behavior: "smooth" });
  profession.style.color = "Orange";
  about.style.color = "";
  home.style.color = "";
  service.style.color = "";
  contactME.style.color = "";
});
// conatct section
let contactME = document.getElementById("contactME");
let contactDisplay = document.getElementById("contactDisplay");
contactME.addEventListener("click", (event) => {
  event.preventDefault();
  contactDisplay.scrollIntoView({ behavior: "smooth" });
  contactME.style.color = "Orange";
  profession.style.color = "";
  about.style.color = "";
  home.style.color = "";
  service.style.color = "";
});

//------------------------------------------------------------
//----------About ----- Skill (Sections)----------

let profileDisplay = document.getElementById("profileDisplay");
let skillDisplay = document.getElementById("skillDisplay");
let about_Btn = document.getElementById("about_Btn");
let skill_Btn = document.getElementById("skill_Btn");
skill_Btn.addEventListener("click", () => {
  profileDisplay.style.display = "none";
  skillDisplay.style.display = "block";
});
about_Btn.addEventListener("click", () => {
  skillDisplay.style.display = "none";
  profileDisplay.style.display = "block";
});

//-------------------------------------------------------------
// video , thumnial , reels --- buttons-----
let thumnail = document.getElementById("thumnail");
let videosRow = document.getElementById("videosRow");
let imageRow = document.getElementById("imageRow");
let videos = document.getElementById("videos");
let reels = document.getElementById("reels");
let reelsRow = document.getElementById("reelsRow");

reels.addEventListener("click", () => {
  reelsRow.style.display = "block";
  imageRow.style.display = "none";
  videosRow.style.display = "none";
  if (reelsRow.style.display === "block") {
    reels.style.backgroundColor = "Orange";
    thumnail.style.backgroundColor = "";
    videos.style.backgroundColor = "";
  } else {
  }
});
// ---------------Buttons clcick system----------------
thumnail.addEventListener("click", () => {
  imageRow.style.display = "block";
  videosRow.style.display = "none";
  reelsRow.style.display = "none";
  if (imageRow.style.display === "block") {
    thumnail.style.backgroundColor = "Orange";
    videos.style.backgroundColor = "";
    reels.style.backgroundColor = "";
  } else {
    thumnail.style.backgroundColor = "";
    videos.style.backgroundColor = "";
    reels.style.backgroundColor = "";
  }
});
videos.addEventListener("click", () => {
  videosRow.style.display = "block";
  imageRow.style.display = "none";
  reelsRow.style.display = "none";
  if (videosRow.style.display === "block") {
    videos.style.backgroundColor = "Orange";
    thumnail.style.backgroundColor = "";
    reels.style.backgroundColor = "";
  } else {
    thumnail.style.backgroundColor = "";
    videos.style.backgroundColor = "";
    reels.style.backgroundColor = "";
  }
});

//------------------------------------------------------------
//Video popup section.

const modal = document.getElementById("videoModal");
const popupVideo = document.getElementById("popupVideo");

// When a video is clicked
document.querySelectorAll(".videosRow video").forEach((video) => {
  video.addEventListener("click", function () {
    // Get the source of the clicked video
    const videoSrc = this.getAttribute("data-src");

    // If there's a valid source, set it to the modal video
    if (videoSrc) {
      popupVideo.src = videoSrc;
      popupVideo.muted = false; // Unmute the video
      popupVideo.play(); // Play the video
    } else {
      console.error("Video source not found!");
    }
    video.addEventListener("click", function () {
      const videoSrc = this.getAttribute("data-src");
      console.log("Video Source: ", videoSrc);
    });
  });
});

// When modal is closed, stop the video
modal.addEventListener("hidden.bs.modal", function () {
  popupVideo.pause(); // Pause the video
  popupVideo.src = ""; // Clear the source to avoid errors
});

//----------------------------------------------------------------------------

// --reels popup section--
// Get the modal and modal video player
const reelVideoModal = document.getElementById("reelVideoModal");
const reelModalPlayer = document.getElementById("modalReelPlayer");

// When any video with modal trigger is clicked
document
  .querySelectorAll("video[data-bs-toggle='modal']")
  .forEach((reelVideoElement) => {
    reelVideoElement.addEventListener("click", function () {
      const reelVideoSource = this.getAttribute("data-video-src");

      reelModalPlayer.src = reelVideoSource;
      reelModalPlayer.muted = false; // Unmute the video
      reelModalPlayer.play(); // Play the video
      reelModalPlayer.style.height = "400px";
      reelModalPlayer.style.backgroundColor = "black";
      reelModalPlayer.style.objectFit = "contain";
    });
  });

// When the modal is closed, stop and clear the video
reelVideoModal.addEventListener("hidden.bs.modal", function () {
  reelModalPlayer.pause(); // Pause the video
  reelModalPlayer.src = ""; // Clear the source
});
//_____________________NIGHT and DAY mode system______________________
let moonIcon = document.getElementById("moonIcon");
let sunIcon = document.getElementById("sunIcon");
let backgroundBody = document.querySelector(".backgroundBody");
const socialIcons = document.querySelectorAll(".socialIcons");

moonIcon.addEventListener("click", () => {
  sunIcon.style.display = "block";
  sunIcon.style.color = "white";
  moonIcon.style.display = "none";
  backgroundBody.style.backgroundColor = "black";
  backgroundBody.style.color = "white";
  socialIcons.forEach((icon) => {
    icon.style.color = "white";
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.3)";
      if (icon.id === "instaIcon") icon.style.color = "#e52e71";
      if (icon.id === "facebookIcon") icon.style.color = "blue";
      if (icon.id === "linkedinIcon") icon.style.color = "skyblue";
      if (icon.id === "whatsApp") icon.style.color = "lightgreen";
      if (icon.id === "mail") icon.style.color = "red";
      icon.style.transition = "1.2s linear ease-in-out";
    });
    icon.addEventListener("mouseleave", () => {
      // Reset the scale and color
      icon.style.transform = "scale(1)";
      icon.style.color = "white"; // Reset to default
    });
  });
});
// ----------------For Day mode-------------------
sunIcon.addEventListener("click", () => {
  service_Section.style.border = "10px";
  sunIcon.style.display = "none";
  moonIcon.style.display = "block";
  moonIcon.style.color = "black";
  backgroundBody.style.backgroundColor = "#FAF9F6";
  backgroundBody.style.color = "black";
  socialIcons.forEach((icon) => {
    icon.style.color = "black";
    icon.addEventListener("mouseenter", () => {
      icon.style.transform = "scale(1.3)";
      if (icon.id === "instaIcon") icon.style.color = "#e52e71";
      if (icon.id === "facebookIcon") icon.style.color = "blue";
      if (icon.id === "linkedinIcon") icon.style.color = "skyblue";
      if (icon.id === "whatsApp") icon.style.color = "lightgreen";
      if (icon.id === "mail") icon.style.color = "red";
      icon.style.transition = "1.2s linear ease-in-out";
    });
    icon.addEventListener("mouseleave", () => {
      // Reset the scale and color
      icon.style.transform = "scale(1)";
      icon.style.color = "black"; // Reset to default
    });
  });
});
