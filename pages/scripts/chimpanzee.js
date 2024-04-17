// Get the form element
var form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting

  // Get the login input element
  var loginInput = document.getElementById('login');

  // Check if the login input field is empty
  if (loginInput.value.trim() === '') {
    alert('Please enter your ape name.'); // show a message to the user
    return; // exit the function
  }

  // Get all the input elements in the question fieldsets
  var inputs = document.querySelectorAll('.question input');

  // Count the correct answers
  var correctAnswers = 0;

  // Check the answers
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      var inputValue = inputs[i].value.trim().toLowerCase();
      if (inputValue === 'africa' || inputValue === '10000-50000' || inputValue === 'yes' || inputValue === 'purely for fun') {
        correctAnswers++;
      }
    }
  }

  // Check if the user got more than 2 answers correct
  var accessTribe = correctAnswers > 2;

  // Check the 'devise' input value
  var deviseInput = document.getElementById('devise');
  var deviseValue = deviseInput.value.trim().toLowerCase();
  if (deviseValue.includes('banana')) {
    accessTribe = true;
  }

  // Show the final alert message
  if (accessTribe) {
    alert(loginInput.value + ', welcome to the tribe!');
    document.getElementById('locked-content').style.display = 'block';
  } else {
    alert(loginInput.value + " ? That's a monkey name, not an ape name! Go back to your forest!");
  }
});