// Set the date we're counting down to
var countDownDate = new Date("March 23, 2024 18:00:00 EDT").getTime();

// Update the countdown every second
var x = setInterval(function() {

  // Get the current date and time
  var now = new Date().getTime();
    
  // Calculate the distance between now and the countdown date
  var distance = countDownDate - now;
    
  // Calculate days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Display the countdown
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
    
  // If the countdown is over, display nothing
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").style.display = "none";
    document.querySelector(".home-heading").innerHTML = "We're <span class=\"live-text\">LIVE</span>!"
    document.querySelector(".home-container").innerHTML += "<iframe src=\"https://www.youtube.com/embed/7dgemXjseX8?autoplay=&origin=https://sdmp.live\" width=\"480\" height=\"270\" allowfullscreen id=\"live-iframe\"> </iframe>";
    startConfetti();
  }
}, 1000);