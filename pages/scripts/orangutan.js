document.querySelector('form').addEventListener('submit', function (event) {
  event.preventDefault();

  var loginInput = document.getElementById('login');
  if (loginInput.value === '') {
    alert('Please enter your ape name.');
    return;
  }

  var inputs = document.querySelectorAll('.question input');

  var correctAnswers = 0;
  var dietOptions = {
    fruits: false,
    bark: false,
    soil: false,
    otherFoodUnchecked: true
  };

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].checked) {
      var inputValue = inputs[i].value.toLowerCase();
      if (['africa', '100000', 'no_nails', 'sumo'].includes(inputValue)) {
        correctAnswers++;
      } else if (['fruits', 'bark', 'soil'].includes(inputValue)) {
        dietOptions[inputValue] = true;
      } else if (['small_sticks', 'rocks'].includes(inputValue)) {
        dietOptions.otherFoodUnchecked = false;
      }
    }
  }

  if (dietOptions.fruits && dietOptions.bark && dietOptions.soil && dietOptions.otherFoodUnchecked) {
    correctAnswers++;
  }

  if (document.getElementById('devise').value.trim().toLowerCase().includes('banana')) {
    correctAnswers++;
  }

  if (correctAnswers > 2) {
    alert(loginInput.value + ', welcome to the tribe!');
    document.getElementById('locked-content').style.display = 'block';
  } else {
    alert(loginInput.value + " ? That's a monkey name, not an orangutan name! Go back to your forest!");
  }
});
