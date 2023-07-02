document.addEventListener("DOMContentLoaded", function() {
  // Continue button click event handler
  // var continueBtn = document.getElementById('continue-btn4');
  // continueBtn.addEventListener('click', function() {
  //   // Navigate to the fifth page
  //   window.location.href = 'fifth.html';
  // });

  var sendBackBtn = document.getElementById('send-back-btn');
  sendBackBtn.addEventListener('click', function() {
    // Navigate to the third page
    window.location.href = 'third.html';
  });

  function validateAndRemoveRed(inputElement) {
    if (inputElement.value.trim() === '') {
      inputElement.classList.add('is-invalid');
      return false;
    } else {
      inputElement.classList.remove('is-invalid');
      return true;
    }
  }

  function showPopup(message) {
    alert(message);
  }

  // Event listener for Continue button
  var continueBtn = document.getElementById('continue-btn4');

  continueBtn.addEventListener('click', function() {
    // Validate all input fields and select tags
    var inputs = document.querySelectorAll('input[required]');
    var selects = document.querySelectorAll('select[required]');
    var isValid = true;

    inputs.forEach(function(input) {
      if (!validateAndRemoveRed(input)) {
        isValid = false;
      }
    });

    selects.forEach(function(select) {
      if (!validateAndRemoveRed(select)) {
        isValid = false;
      }
    });

    if (!isValid) {
      showPopup('Please fill in all required fields.');
    }
    else {
      window.location.href = 'fifth.html';
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
    select.addEventListener('change', function() {
      validateAndRemoveRed(this);
    });
  });
});
