document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault(); // prevent the form from submitting

  // get all the input elements in the question fieldsets
  var inputs = document.querySelectorAll('.question input');
  var correctAnswers = 0;

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
    alert('Welcome to the tribe!');
    document.getElementById('locked-content').style.display = 'block';
  } else {
    alert('Sorry, you are not allowed in the tribe.');
  }
});