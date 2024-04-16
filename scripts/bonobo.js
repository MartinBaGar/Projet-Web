document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting

  // get the login input element
  var loginInput = document.getElementById('login');

  // check if the login input field is empty
  if (loginInput.value.trim() === '') {
    alert('Please enter your ape name.'); // show a message to the user
    return; // exit the function early
  }

  // get all the input elements in the question fieldsets
  var inputs = document.querySelectorAll('.question input');
  var correctAnswers = 0;
  var accessTribe = False

  // variables to track if all correct answers for the diet question are checked
  var fruitsChecked = false;
  var leavesChecked = false;
  var invertebratesChecked = false;

  // iterate over each input element
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      var inputValue = inputs[i].value.trim().toLowerCase();
      if (inputValue === 'africa') {
        correctAnswers++;
      } else if (inputValue === 'fruits') {
        fruitsChecked = true;
      } else if (inputValue === 'leaves') {
        leavesChecked = true;
      } else if (inputValue === 'invertebrates') {
        invertebratesChecked = true;
      } else if (inputValue === '10000-50000') {
        correctAnswers++;
      } else if (inputValue === 'yes') {
        correctAnswers++;
      } else if (inputValue === 'purely for fun') {
        correctAnswers++;
      }
    }
  }

  // if all correct answers for the diet question are checked, increment the correctAnswers counter
  if (fruitsChecked && leavesChecked && invertebratesChecked) {
    correctAnswers++;
  }

  // if the user got more than 2 answers correct, they are allowed in the tribe
  if (correctAnswers > 2) {
    accessTribe = True
  }

  if (accessTribe === True) {
    alert(loginInput.value + ', welcome to the tribe!');
    document.getElementById('locked-content').style.display = 'block';
  } else {
    alert(loginInput.value + " ? That's a monkey name, not an ape name! Go back to your forest!");
  }
});