
document.addEventListener("DOMContentLoaded", function() {
   
    // Continue button click event handler
    var continueBtn = document.getElementById('continue-btn4');
    continueBtn.addEventListener('click', function() {
      // Navigate to the fourth page
      window.location.href = 'fifth.html';
    });

    var continueBtn = document.getElementById('send-back-btn');
    continueBtn.addEventListener('click', function() {
      // Navigate to the fourth page
      window.location.href = 'third.html';
    });
  
  });





function validateAndRemoveRed(inputElement) {
  if (inputElement.value.trim() === '') {
    inputElement.classList.add('is-invalid');
  } else {
    inputElement.classList.remove('is-invalid');
  }
}

// Event listener for Continue button
document.getElementById('continue-btn4').addEventListener('click', function() {
  // Validate all input fields and select tags
  var inputs = document.querySelectorAll('input[required]');
  var selects = document.querySelectorAll('select[required]');
  var isValid = true;

  inputs.forEach(function(input) {
    validateAndRemoveRed(input);

    if (input.value.trim() === '') {
      isValid = false;
    }
  });

  selects.forEach(function(select) {
    validateAndRemoveRed(select);

    if (select.value.trim() === '') {
      isValid = false;
    }
  });

  if (isValid) {
    // Perform the desired action when all fields are valid
  }
});

// Event listener for input change
document.querySelectorAll('input[required]').forEach(function(input) {
  input.addEventListener('input', function() {
    validateAndRemoveRed(this);
  });
});

// Event listener for select change
document.querySelectorAll('select[required]').forEach(function(select) {
  select.addEventListener('chnage', function() {
    validateAndRemoveRed(this);
  });
});








  