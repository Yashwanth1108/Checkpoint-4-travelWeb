let placeNames = [
  " DUBAI",
  " SINGAPORE",
  " INDIA",
  " MALAYSIA",
  " PARIS",
  " EGYPT",
];

let index = 0;

setInterval(() => {
  document.getElementById("placeName").innerText = placeNames[index];
  if (index < placeNames.length - 1) {
    index += 1;
  } else {
    index = 0;
  }
}, 1500);

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();

today = yyyy + "-" + mm + "-" + dd;

document.getElementById("arrivalDate").min = today;
document.getElementById("LeavingDate").min = today;

// booking message

var form = document.getElementById("bookingForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  var description = form.querySelector('textarea[name="text"]').value;
  if (description.length < 50 || description.length > 500) {
    alert("Description should be between 50 and 500 characters.");
    return;
  }
  alert("Booking Successful!");
  form.reset();
});
