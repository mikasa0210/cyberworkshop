var navIcon = document.getElementById("navIcon");
var navContainer = document.getElementById("navContainer");
const form = document.getElementById("registrationForm");
const submitRegistration = document.getElementById("submitRegistration");
var inputElements = document.getElementsByTagName("input");


function showNav() {
  navContainer.style.display = "flex";
}

function hideNav() {
  navContainer.style.display = "none";
}

//show nav
navIcon.onmouseover = function() {showNav();};
navContainer.onmouseover = function() {showNav();};

//hide nav
navIcon.onmouseout = function() {hideNav();}
navContainer.onmouseout = function() {hideNav();}

//Get the topButton:
topButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function SubForm (){
  $.ajax({
      url:"https://api.apispreadsheets.com/data/7748/",
      type:"post",
      async: false,
      data:$("#registrationForm").serializeArray(),
      success: function(){
          alert("Form Data Submitted");
          alert("The website is specifically made for PC. If you are using a mobile device, expect that the layout might change.");
      },
      error: function(){
          alert("There was an error")
      }
  });
};

function SubConcern (){
  $.ajax({
      url:"https://api.apispreadsheets.com/data/7790/",
      type:"post",
      data:$("#userinputs").serializeArray(),
          success: function(){
              alert("Form Data Submitted");
          },
          error: function(){
              alert("There was an error")
          }
  });
};