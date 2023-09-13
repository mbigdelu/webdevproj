function dropdownHover() {
  document.getElementById("dropbox").className =
    "menu-item dropbox dropbox-show";
  document.getElementById("dropdown-box").className =
    "dropdown-box dropdown-box-show";
  document.getElementById("drop-item").className = "drop-item drop-item-show";
  document.getElementById("dropdown-icon").className = "dropdown-icon";
}

function dropdownUnHover() {
  document.getElementById("dropbox").className = "menu-item dropbox ";
  document.getElementById("dropdown-box").className = "menu-item dropdown-box";
  document.getElementById("drop-item").className = "drop-item";
  document.getElementById("dropdown-icon").className = "dropdown-icon-show";
}

// TODO: check to change the function
function galleryHover() {
  document.getElementById("gallery-comment1").className =
    "gallery-comment gallery-comment-show";
  document.getElementById("gallery-comment2").className =
    "gallery-comment gallery-comment-show";
  document.getElementById("gallery-comment3").className =
    "gallery-comment gallery-comment-show";
  document.getElementById("gallery-comment4").className =
    "gallery-comment gallery-comment-show";
  document.getElementById("gallery-comment5").className =
    "gallery-comment gallery-comment-show";
  document.getElementById("gallery-comment6").className =
    "gallery-comment gallery-comment-show";
}

function galleryUnHover() {
  document.getElementById("gallery-comment1").className = "gallery-comment";
  document.getElementById("gallery-comment2").className = "gallery-comment";
  document.getElementById("gallery-comment3").className = "gallery-comment";
  document.getElementById("gallery-comment4").className = "gallery-comment";
  document.getElementById("gallery-comment5").className = "gallery-comment";
  document.getElementById("gallery-comment6").className = "gallery-comment";
}

function navScroll() {
  let offSet = 20;

  if (window.scrollY < offSet) {
    document.getElementById("header").className = "header";
  } else {
    document.getElementById("header").className = "header header-scrolled";
  }
}

document.addEventListener("scroll", (e) => {
  navScroll();
});

/* This fulfills requirement 1.1.7 */
function lastUpdate() {
  document.getElementById("last-update").innerHTML =
    "Last Update: " + document.lastModified;
}

window.onload = function () {
  lastUpdate();
};
//
